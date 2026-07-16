const DEFAULT_SHEET_ID = '1sUqJjoZVNmCbEwfDMu2HXP-fZOJ2NBH_eus01grTY2Q';

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = '';
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (quoted) {
      if (char === '"' && next === '"') {
        cell += '"';
        i += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        cell += char;
      }
      continue;
    }

    if (char === '"') quoted = true;
    else if (char === ',') {
      row.push(cell);
      cell = '';
    } else if (char === '\n') {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = '';
    } else if (char !== '\r') {
      cell += char;
    }
  }

  row.push(cell);
  rows.push(row);
  return rows.filter(items => items.some(value => String(value).trim()));
}

function isHeader(row) {
  const first = String(row[0] || '').toLowerCase();
  const second = String(row[1] || '').toLowerCase();
  return first.includes('sku') || second.includes('product') || second.includes('name');
}

function toNumber(value) {
  const number = Number(String(value || '').replace(/,/g, '').trim());
  return Number.isFinite(number) ? number : 0;
}

function mapRows(rows) {
  return rows
    .slice(isHeader(rows[0] || []) ? 1 : 0)
    .map(row => ({
      sku: String(row[0] || '').trim(),
      name: String(row[1] || '').trim(),
      qty: toNumber(row[2]),
      category: String(row[21] || '').trim(),
      subCategory: String(row[22] || '').trim()
    }))
    .filter(item => item.sku || item.name);
}

module.exports = async function handler(req, res) {
  const sheetId = process.env.STOCK_SHEET_ID || DEFAULT_SHEET_ID;
  const gid = process.env.STOCK_SHEET_GID || '0';
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Google Sheet returned ${response.status}`);

    const csv = await response.text();
    const items = mapRows(parseCsv(csv));

    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    res.status(200).json({
      source: 'google_sheet',
      sheetId,
      updatedAt: new Date().toISOString(),
      items
    });
  } catch (error) {
    res.status(500).json({
      source: 'error',
      message: error.message,
      items: []
    });
  }
};
