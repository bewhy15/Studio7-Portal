# Studio7 Portal for Vercel

เวอร์ชันนี้แยกออกมาสำหรับใช้งานบน Vercel โดยไม่ต้องใช้ Google Apps Script

## โครงสร้างไฟล์

- `index.html` หน้าเว็บหลัก
- `styles.css` หน้าตาเว็บ
- `app.js` logic หน้า Home, Stock, Sale Promotion, Promotion True
- `api/stock.js` API สำหรับอ่าน Google Sheet
- `public/assets/` รูปโปรโมชันและ Guild line
- `public/config/promotions.json` รายการรูปที่แสดงในหน้า Sale Promotion และ Guild line

## วิธี deploy ขึ้น Vercel

1. เข้า [vercel.com](https://vercel.com)
2. กด `Add New...` > `Project`
3. เลือก import จาก GitHub หรือใช้ Vercel CLI
4. ตั้ง Root Directory เป็น `vercel-app`
5. Deploy

ถ้าใช้ Vercel CLI:

```bash
cd vercel-app
vercel
```

## วิธีตั้งค่า Stock Inventory

ระบบอ่าน Google Sheet ผ่าน API `/api/stock`

ค่า default ตอนนี้ใช้ Sheet ID:

```text
1sUqJjoZVNmCbEwfDMu2HXP-fZOJ2NBH_eus01grTY2Q
```

คอลัมน์ที่ใช้:

- A = SKU
- B = Product name
- C = จำนวน stock
- V = Category
- W = Sub category

### สำคัญ

Google Sheet ต้องเปิดสิทธิ์ให้อ่านได้ หรือ publish/export CSV ได้ ไม่อย่างนั้น Vercel API จะอ่านไม่ได้

### เปลี่ยน Sheet ID โดยไม่แก้โค้ด

ไปที่ Vercel Project > Settings > Environment Variables แล้วเพิ่ม:

```text
STOCK_SHEET_ID=ใส่ Google Sheet ID
STOCK_SHEET_GID=0
```

หลังเพิ่ม env ให้ Redeploy อีกครั้ง

## วิธีอัปเดต Stock

แก้ข้อมูลใน Google Sheet ได้เลย:

- เพิ่มสินค้าใหม่ = เพิ่มแถวใหม่
- แก้จำนวน stock = แก้คอลัมน์ C
- แก้ Category = แก้คอลัมน์ V
- แก้ Sub category = แก้คอลัมน์ W

หน้าเว็บจะอ่านใหม่ผ่าน `/api/stock` โดย cache ฝั่ง Vercel ประมาณ 1 นาที

## วิธีเปลี่ยนรูป Sale Promotion

1. เอารูปใหม่ไปวางใน:

```text
public/assets/
```

2. แก้ไฟล์:

```text
public/config/promotions.json
```

ตัวอย่าง:

```json
{
  "title": "iPhone Promotion July",
  "alt": "โปรโมชั่น iPhone เดือน July",
  "src": "/assets/iphone-promotion-july.jpg"
}
```

3. Commit/Upload แล้ว Redeploy บน Vercel

## วิธีเพิ่ม/ลบรูปในหน้า Sale Promotion

เปิด `public/config/promotions.json`

- เพิ่มรูป: เพิ่ม object ใน `salePromotions`
- ลบรูป: ลบ object ที่ไม่ใช้
- เปลี่ยนลำดับ: ย้าย object ขึ้น/ลง

## วิธีเปลี่ยนโปร Promotion True

แก้ข้อมูลใน `app.js`

จุดที่เกี่ยวข้อง:

- `trueCatalog` = รุ่น / ความจุ / ราคาสินค้า
- `packageGroups` = Package / ส่วนลด / จ่ายล่วงหน้า / รายละเอียดเน็ต

สูตรคำนวณ:

```text
ราคาสุทธิ = ราคาสินค้า - ส่วนลด + จ่ายล่วงหน้า
```

## ทดสอบในเครื่อง

ถ้ามี Vercel CLI:

```bash
cd vercel-app
vercel dev
```

หรือเปิด `index.html` เพื่อดูหน้าเว็บแบบ static ได้ แต่ Stock API จะทำงานเต็มเมื่อรันผ่าน Vercel หรือ `vercel dev`
