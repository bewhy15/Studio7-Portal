const inventoryFallback = [
  { sku: '01 019 0031', name: 'ถุงพลาสติกใส่สินค้า สีขาว Studio7 Size S', qty: 131, category: 'Accessory', subCategory: 'Bag' },
  { sku: '01 019 0032', name: 'ถุงพลาสติกใส่สินค้า สีขาว Studio7 Size M', qty: 370, category: 'Accessory', subCategory: 'Bag' },
  { sku: '01 019 0033', name: 'ถุงพลาสติกใส่สินค้า สีขาว Studio7 Size L', qty: 63, category: 'Accessory', subCategory: 'Bag' },
  { sku: 'IP15-128-BLK', name: 'iPhone 15 128GB Black', qty: 8, category: 'iPhone', subCategory: 'iPhone 15' }
];

const cardPromotionFallback = {
  period: '1 - 31 October 2026',
  title: 'Card Promotion',
  subtitle: 'Apple Product แบ่งจ่ายสบาย ๆ',
  notice: 'สินค้า iPhone 18 Pro และ iPhone 18 Pro Max ไม่ร่วมรายการส่งเสริมการขายนี้',
  items: [
    { bank: 'SCB', headline: 'ผ่อน 0% สูงสุด 36 เดือน', details: ['เครดิตเงินคืนสูงสุด 24,000 บาท', 'สินค้าโซลาร์ไม่ร่วมโปรโมชั่น', 'แลกคะแนนรับเครดิตเงินคืนสูงสุด 60%', 'เมื่อผ่อนชำระ + แลกคะแนน ณ จุดขาย'] },
    { bank: 'KBANK', headline: 'ผ่อน 0% สูงสุด 36 เดือน', details: ['แลกคะแนนรับเครดิตเงินคืน 12%', 'เมื่อผ่อนชำระหรือชำระเต็มจำนวน + ใช้คะแนนเท่ายอดใช้จ่าย'] },
    { bank: 'Krungsri', headline: 'ผ่อน 0% สูงสุด 10 เดือน', details: [] },
    { bank: 'First Choice', headline: 'ผ่อน 0% สูงสุด 10 เดือน', details: ['หรือดอกเบี้ยพิเศษ 0.69% สูงสุด 36 เดือน', 'เครดิตเงินคืนสูงสุด 14,000 บาท', 'แลกคะแนนรับเครดิตเงินคืน 15%', 'เมื่อผ่อนชำระ + ใช้คะแนนเท่ายอดใช้จ่าย'] },
    { bank: 'First Choice Pay Later', headline: '0% Pay Later ซื้อวันนี้ เริ่มผ่อน 2 เดือนข้างหน้า', details: ['บริการผ่อนชำระสินค้าผ่านบัตรกรุงศรีเฟิร์สช้อยส์', 'เพิ่มความสะดวกในการบริหารการใช้จ่าย', 'ปลอดชำระ 2 รอบบิลแรก'] },
    { bank: 'KTC', headline: 'ผ่อน 0% 6 เดือน', details: ['หรือดอกเบี้ยพิเศษ 0.59% สูงสุด 20 เดือน', 'แลกคะแนนรับเครดิตเงินคืนสูงสุด 15%', 'เมื่อผ่อนชำระ + ใช้คะแนนเท่ายอดใช้จ่าย'] },
    { bank: 'UOB', headline: 'ผ่อน 0% สูงสุด 36 เดือน', details: ['สินค้า Apple & สินค้าไอที เครดิตเงินคืนสูงสุด 15,000 บาท', 'รับ GrabFood e-coupon สูงสุด 7,500 บาท รวมสูงสุด 22,500 บาท', 'สินค้าโซลาร์ รับเครดิตเงินคืนสูงสุด 20,400 บาท', 'แลกคะแนนรับส่วนลด 12%'] },
    { bank: 'BBL', headline: 'ผ่อน 0% สูงสุด 10 เดือน', details: [] },
    { bank: 'AEON', headline: 'ผ่อน 0% สูงสุด 6 เดือน', details: ['หรือดอกเบี้ยพิเศษ 0.59% สูงสุด 10 เดือน'] },
    { bank: 'AEON iPhone', headline: 'ผ่อน 0% 18, 24 เดือน', details: ['เฉพาะสินค้า iPhone ทุกรุ่น', 'ยกเว้น iPhone 17 Pro และ iPhone 17 Pro Max'] },
    { bank: 'AEON Long Pay', headline: 'ผ่อนนาน 48 เดือน ดอกเบี้ย 0.99%', details: ['ร่วมทุกสินค้า 14,500 บาทขึ้นไป'] },
    { bank: 'POINTX', headline: 'รับพอยท์พิเศษคืนสูงสุด 50%', details: ['เมื่อสแกนจ่ายด้วยคะแนน POINTX ผ่าน QR พร้อมเพย์ที่ร้าน', 'ชำระผ่านเครื่องรูดบัตร'] }
  ]
};

const trueCatalog = {
  iPhone: {
    'iPhone 18 Pro': [{ storage: '256GB', price: 48900 }, { storage: '512GB', price: 56900 }, { storage: '1TB', price: 72900 }, { storage: '2TB', price: 96900 }],
    'iPhone 18 Pro Max': [{ storage: '256GB', price: 52900 }, { storage: '512GB', price: 60900 }, { storage: '1TB', price: 76900 }, { storage: '2TB', price: 100900 }],
    'iPhone DUO': [{ storage: '256GB', price: 79900 }, { storage: '512GB', price: 87900 }, { storage: '1TB', price: 103900 }, { storage: '2TB', price: 127900 }],
    'iPhone 17': [{ storage: '256GB', price: 29900 }, { storage: '512GB', price: 37900 }],
    'iPhone 17e': [{ storage: '256GB', price: 22900 }, { storage: '512GB', price: 30900 }],
    'iPhone 17 Pro': [{ storage: '256GB', price: 43900 }, { storage: '512GB', price: 51900 }, { storage: '1TB', price: 59900 }],
    'iPhone 17 Pro Max': [{ storage: '256GB', price: 48900 }, { storage: '512GB', price: 56900 }, { storage: '1TB', price: 64900 }, { storage: '2TB', price: 80900 }],
    'iPhone 15': [{ storage: '128GB', price: 23900 }, { storage: '256GB', price: 27500 }],
    'iPhone 16': [{ storage: '128GB', price: 26900 }, { storage: '256GB', price: 30500 }],
    'iPhone Air': [{ storage: '256GB', price: 29900 }, { storage: '512GB', price: 38500 }, { storage: '1TB', price: 46500 }]
  },
  iPad: {
    'iPad mini': [{ storage: '128GB', price: 27900 }],
    'iPad A16': [{ storage: '128GB', price: 22900 }, { storage: '256GB', price: 26900 }, { storage: '512GB', price: 33900 }],
    'iPad Air 11': [{ storage: '128GB', price: 33900 }, { storage: '256GB', price: 37900 }, { storage: '512GB', price: 44900 }, { storage: '1TB', price: 55900 }],
    'iPad Air 13': [{ storage: '128GB', price: 40900 }, { storage: '256GB', price: 44900 }, { storage: '512GB', price: 51900 }, { storage: '1TB', price: 62900 }],
    'iPad Pro 11': [{ storage: '256GB', price: 42900 }, { storage: '512GB', price: 49900 }, { storage: '1TB', price: 64900 }, { storage: '2TB', price: 83900 }],
    'iPad Pro 13': [{ storage: '256GB', price: 56900 }, { storage: '512GB', price: 63900 }, { storage: '1TB', price: 78900 }, { storage: '2TB', price: 93900 }]
  }
};

const packageGroups = {
  iphone18: [
    { name: 'TRUE-iPhone 18 Series New 399 ไม่มีจ่ายล่วงหน้า - ลด 1000', discount: 1000, advance: 0, detail: 'รายละเอียดตามเงื่อนไขแพ็กเกจ True' },
    { name: 'TRUE-iPhone 18 Series New 699 ไม่มีจ่ายล่วงหน้า - ลด 2000', discount: 2000, advance: 0, detail: 'รายละเอียดตามเงื่อนไขแพ็กเกจ True' },
    { name: 'TRUE-iPhone 18 Series New 899 ไม่มีจ่ายล่วงหน้า - ลด 3000', discount: 3000, advance: 0, detail: 'รายละเอียดตามเงื่อนไขแพ็กเกจ True' },
    { name: 'TRUE-iPhone 18 Series New 499 ไม่มีจ่ายล่วงหน้า - ลด 1500', discount: 1500, advance: 0, detail: 'รายละเอียดตามเงื่อนไขแพ็กเกจ True' },
    { name: 'TRUE-iPhone 18 Series New 599 ไม่มีจ่ายล่วงหน้า - ลด 2200', discount: 2200, advance: 0, detail: 'รายละเอียดตามเงื่อนไขแพ็กเกจ True' },
    { name: 'TRUE-iPhone 18 Series New 699 จ่ายล่วงหน้า 749 - ลด 3700', discount: 3700, advance: 749, detail: 'รายละเอียดตามเงื่อนไขแพ็กเกจ True' },
    { name: 'TRUE-iPhone 18 Series EXT SharePlan / EXT Renew 799 จ่ายล่วงหน้า 1605 - ลด 3500', discount: 3500, advance: 1605, detail: 'รายละเอียดตามเงื่อนไขแพ็กเกจ True' },
    { name: 'TRUE-iPhone 18 Series EXT SharePlan / EXT Renew 1199 จ่ายล่วงหน้า 1605 - ลด 5500', discount: 5500, advance: 1605, detail: 'รายละเอียดตามเงื่อนไขแพ็กเกจ True' },
    { name: 'TRUE-iPhone 18 Series EXT SharePlan / EXT Renew 1399 ไม่มีจ่ายล่วงหน้า - ลด 6000', discount: 6000, advance: 0, detail: 'รายละเอียดตามเงื่อนไขแพ็กเกจ True' },
    { name: 'TRUE-iPhone 18 Series MNPSharePlan 699 ไม่มีจ่ายล่วงหน้า - ลด 2000', discount: 2000, advance: 0, detail: 'รายละเอียดตามเงื่อนไขแพ็กเกจ True' },
    { name: 'TRUE-iPhone 18 Series MNPSharePlan 799 ไม่มีจ่ายล่วงหน้า - ลด 3500', discount: 3500, advance: 0, detail: 'รายละเอียดตามเงื่อนไขแพ็กเกจ True' },
    { name: 'TRUE-iPhone 18 Series ย้ายค่าย AIS MNPSharePlan 999 ไม่มีจ่ายล่วงหน้า - ลด 5500', discount: 5500, advance: 0, detail: 'รายละเอียดตามเงื่อนไขแพ็กเกจ True' },
    { name: 'TRUE-iPhone 18 Series MNPSharePlan 1399 ไม่มีจ่ายล่วงหน้า - ลด 7000', discount: 7000, advance: 0, detail: 'รายละเอียดตามเงื่อนไขแพ็กเกจ True' },
    { name: 'TRUE MNP Change MSISDN 5GX 999 ไม่มีจ่ายล่วงหน้า - ลด 5500', discount: 5500, advance: 0, detail: 'รายละเอียดตามเงื่อนไขแพ็กเกจ True' },
    { name: 'TRUE MNP Change MSISDN 5GX 1399 ไม่มีจ่ายล่วงหน้า - ลด 7000', discount: 7000, advance: 0, detail: 'รายละเอียดตามเงื่อนไขแพ็กเกจ True' },
    { name: 'TRUE-iPhone 18 Series Renew 599 ไม่มีจ่ายล่วงหน้า - ลด 3100', discount: 3100, advance: 0, detail: 'รายละเอียดตามเงื่อนไขแพ็กเกจ True' },
    { name: 'TRUE-iPhone 18 Series Renew 699 ไม่มีจ่ายล่วงหน้า - ลด 3600', discount: 3600, advance: 0, detail: 'รายละเอียดตามเงื่อนไขแพ็กเกจ True' },
    { name: 'TRUE-iPhone 18 Series Renew 899 ไม่มีจ่ายล่วงหน้า - ลด 4700', discount: 4700, advance: 0, detail: 'รายละเอียดตามเงื่อนไขแพ็กเกจ True' },
    { name: 'TRUE-iPhone 18 Series Renew 5GX 999 ไม่มีจ่ายล่วงหน้า - ลด 5200', discount: 5200, advance: 0, detail: 'รายละเอียดตามเงื่อนไขแพ็กเกจ True' },
    { name: 'TRUE-iPhone 18 Series Renew 5GX 1199 ไม่มีจ่ายล่วงหน้า - ลด 6200', discount: 6200, advance: 0, detail: 'รายละเอียดตามเงื่อนไขแพ็กเกจ True' },
    { name: 'TRUE-iPhone 18 Series Renew 5GX 1299 ไม่มีจ่ายล่วงหน้า - ลด 6700', discount: 6700, advance: 0, detail: 'รายละเอียดตามเงื่อนไขแพ็กเกจ True' },
    { name: 'TRUE-iPhone 18 Series Renew 5GX 1499 ไม่มีจ่ายล่วงหน้า - ลด 7700', discount: 7700, advance: 0, detail: 'รายละเอียดตามเงื่อนไขแพ็กเกจ True' }
  ],
  iphone15: [
    { name: 'TRUE-iPhone 15 128GB New599 จ่าย 107 - ลด 3300 Mass', discount: 3300, advance: 107, detail: 'Net 25 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 200 นาที' },
    { name: 'TRUE-iPhone 15 128GB New699 จ่าย 107 - ลด 4000 Mass', discount: 4000, advance: 107, detail: 'Net 40 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 200 นาที' },
    { name: 'TRUE-iPhone 15 128GB New899 จ่าย 963 - ลด 5100 Mass', discount: 5100, advance: 963, detail: 'Net 60 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 280 นาที' },
    { name: 'TRUE-iPhone 15 128GB New1199 จ่าย 1284 - ลด 6600 Mass', discount: 6600, advance: 1284, detail: 'Net 100 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 350 นาที' }
  ],
  iphone16: [
    { name: 'TRUE-iPhone 16 ทุกรุ่น MNP Shareplan999 ไม่มีจ่ายล่วงหน้า - ลด 5500', discount: 5500, advance: 0, detail: 'Net 70 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 320 นาที' },
    { name: 'TRUE-iPhone 16 ทุกรุ่น Existing Shareplan799 ล่วงหน้า 1605 - ลด 3500', discount: 3500, advance: 1605, detail: 'Net 50 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 240 นาที' },
    { name: 'TRUE-iPhone 16 ทุกรุ่น Existing Shareplan899 ล่วงหน้า 2675 - ลด 5000', discount: 5000, advance: 2675, detail: 'Net 60 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 280 นาที' },
    { name: 'TRUE-iPhone 16 ทุกรุ่น Existing Shareplan1199 ล่วงหน้า 1605 - ลด 5500', discount: 5500, advance: 1605, detail: 'Net 100 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 350 นาที' },
    { name: 'TRUE-iPhone 16 ทุกรุ่น Existing Shareplan1399 ไม่มีล่วงหน้า - ลด 6000', discount: 6000, advance: 0, detail: 'Net Unlimited โทรทุกเครือข่าย 500 นาที' },
    { name: 'TRUE-iPhone 16 ทุกรุ่น New 699 ล่วงหน้า 749 - ลด 3700', discount: 3700, advance: 749, detail: 'Net 40 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 200 นาที' }
  ],
  iphone17: [
    { name: 'TRUE-iPhone 17 Series MNPSharePlan 699 ไม่มีจ่ายล่วงหน้า - ลด 2000 OpenMKT', discount: 2000, advance: 0, detail: 'Net 40 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 200 นาที' },
    { name: 'TRUE-iPhone 17 Series MNPSharePlan 799 ไม่มีจ่ายล่วงหน้า - ลด 3500 OpenMKT', discount: 3500, advance: 0, detail: 'Net 50 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 240 นาที' },
    { name: 'TRUE-iPhone 17 Series MNPSharePlan 799 จ่ายล่วงหน้า 1605 - ลด 2000 OpenMKT', discount: 2000, advance: 1605, detail: 'Net 50 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 200 นาที' },
    { name: 'TRUE-iPhone 17 Series MNPSharePlan 1399 ไม่มีจ่ายล่วงหน้า - ลด 7000 OpenMKT', discount: 7000, advance: 0, detail: 'Net Unlimited โทรทุกเครือข่าย 500 นาที' },
    { name: 'TRUE-iPhone 17 Series Existing SharePlan/Renew 1399 ไม่มีจ่ายล่วงหน้า - ลด 7000 OpenMKT', discount: 7000, advance: 0, detail: 'Net Unlimited โทรทุกเครือข่าย 500 นาที' },
    { name: 'TRUE-iPhone 17 Series New 699 จ่ายล่วงหน้า 107 - ลด 3600 MASS', discount: 3600, advance: 107, detail: 'Net 40 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 200 นาที' },
    { name: 'TRUE-iPhone 17 Series New 899 จ่ายล่วงหน้า 535 - ลด 4700 MASS', discount: 4700, advance: 535, detail: 'Net 60 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 280 นาที' },
    { name: 'TRUE-iPhone 17 Series New 1199 จ่ายล่วงหน้า 1070 - ลด 5500 MASS', discount: 5500, advance: 1070, detail: 'Net 100 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 350 นาที' },
    { name: 'TRUE-iPhone 17 Series New 1299 จ่ายล่วงหน้า 1605 - ลด 6700 MASS', discount: 6700, advance: 1605, detail: 'Net Unlimited โทรทุกเครือข่าย 400 นาที' },
    { name: 'TRUE-iPhone 17 Series New 1499 จ่ายล่วงหน้า 2247 - ลด 7700 MASS', discount: 7700, advance: 2247, detail: 'Net Unlimited โทรทุกเครือข่าย 650 นาที' }
  ],
  ipadAir: [
    { name: 'TRUE iPad Air 11/13 M4 Wi-Fi NEW 599 จ่ายล่วงหน้า 107 - ลด 2200 MASS', discount: 2200, advance: 107, detail: 'Net 25 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 200 นาที' },
    { name: 'TRUE iPad Air 11/13 M4 Wi-Fi NEW 699 จ่ายล่วงหน้า 107 - ลด 2500 MASS', discount: 2500, advance: 107, detail: 'Net 40 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 200 นาที' },
    { name: 'TRUE iPad Air 11/13 M4 Wi-Fi NEW 899 จ่ายล่วงหน้า 963 - ลด 3200 MASS', discount: 3200, advance: 963, detail: 'Net 60 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 280 นาที' },
    { name: 'TRUE iPad Air 11/13 M4 Wi-Fi NEW 1199 จ่ายล่วงหน้า 1284 - ลด 4300 MASS', discount: 4300, advance: 1284, detail: 'Net 100 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 350 นาที' },
    { name: 'TRUE iPad Air 11/13 M4 Wi-Fi NEW 1299 จ่ายล่วงหน้า 1498 - ลด 4700 MASS', discount: 4700, advance: 1498, detail: 'Net Unlimited โทรทุกเครือข่าย 400 นาที' }
  ],
  ipadPro: [
    { name: 'TRUE iPad Pro 11/13 M5 NEW 599 จ่ายล่วงหน้า 642 - ลด 2200 MASS', discount: 2200, advance: 642, detail: 'Net 25 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 200 นาที' },
    { name: 'TRUE iPad Pro 11/13 M5 NEW 699 จ่ายล่วงหน้า 749 - ลด 2500 MASS', discount: 2500, advance: 749, detail: 'Net 40 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 200 นาที' },
    { name: 'TRUE iPad Pro 11/13 M5 NEW 899 จ่ายล่วงหน้า 963 - ลด 3200 MASS', discount: 3200, advance: 963, detail: 'Net 60 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 200 นาที' },
    { name: 'TRUE iPad Pro 11/13 M5 NEW 1199 จ่ายล่วงหน้า 1284 - ลด 4300 MASS', discount: 4300, advance: 1284, detail: 'Net 100 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 200 นาที' },
    { name: 'TRUE iPad Pro 11/13 M5 NEW 1299 จ่ายล่วงหน้า 1498 - ลด 4700 MASS', discount: 4700, advance: 1498, detail: 'Net Unlimited โทรทุกเครือข่าย 400 นาที' }
  ],
  all: [
    { name: 'TRUE New 499 ไม่มีจ่ายล่วงหน้า - ลด 1500 บาท', discount: 1500, advance: 0, detail: 'Net 20 GB หลังหมด Data เหลือ Speed 1MB. โทรทุกเครือข่าย 200 นาที' },
    { name: 'TRUE New 399 เน็ต 50 GB ไม่มีจ่ายล่วงหน้า - ลด 1000 บาท OpenMKT', discount: 1000, advance: 0, detail: 'Net 50 GB หลังหมด Data เหลือ Speed 1MB. โทรทุกเครือข่าย 200 นาที' },
    { name: 'TRUE New 699 ไม่มีจ่ายล่วงหน้า - ลด 2000 บาท', discount: 2000, advance: 0, detail: 'Net 100 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 200 นาที' },
    { name: 'TRUE New 599 ไม่มีจ่ายล่วงหน้า - ลด 2200 บาท', discount: 2200, advance: 0, detail: 'Net 25 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 200 นาที' },
    { name: 'TRUE New 899 ไม่มีจ่ายล่วงหน้า - ลด 3000 บาท', discount: 3000, advance: 0, detail: 'Net 60 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 280 นาที' },
    { name: 'TRUE New 699 จ่ายล่วงหน้า 749 - ลด 3700 บาท', discount: 3700, advance: 749, detail: 'Net 40 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 200 นาที' },
    { name: 'TRUE New 499 จ่ายล่วงหน้า 321 - ลด 1500 บาท สัญญา 6 เดือน', discount: 1500, advance: 321, detail: 'Net 20 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 200 นาที' },
    { name: 'TRUE New 599 จ่ายล่วงหน้า 535 - ลด 1800 บาท สัญญา 6 เดือน', discount: 1800, advance: 535, detail: 'Net 25 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 200 นาที' },
    { name: 'TRUE New 899 จ่ายล่วงหน้า 749 - ลด 2300 บาท สัญญา 6 เดือน', discount: 2300, advance: 749, detail: 'Net 25 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 280 นาที' },
    { name: 'TRUE ExistingRenew799 จ่าย 1605 - ลด 3500 บาท', discount: 3500, advance: 1605, detail: 'Net 50 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 350 นาที' },
    { name: 'TRUE ExistingRenew899 จ่าย 2675 - ลด 5000 บาท', discount: 5000, advance: 2675, detail: 'Net 100 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 280 นาที' },
    { name: 'TRUE MNPShare Plan 699 จ่ายล่วงหน้า 1284 - ลด 2000 บาท', discount: 2000, advance: 1284, detail: 'Net 100 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 200 นาที' },
    { name: 'TRUE MNPShare Plan 799 ไม่มีจ่ายล่วงหน้า - ลด 3500 บาท', discount: 3500, advance: 0, detail: 'Net 50 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 240 นาที' },
    { name: 'TRUE MNPShare Plan 799 จ่ายล่วงหน้า 1605 - ลด 3500 บาท', discount: 3500, advance: 1605, detail: 'Net 50 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 240 นาที' },
    { name: 'TRUE MNPShare Plan 799 จ่ายล่วงหน้า 3210 - ลด 4500 บาท', discount: 4500, advance: 3210, detail: 'Net 100 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 240 นาที' },
    { name: 'TRUE MNPShare Plan 999 จ่ายล่วงหน้า 3210 - ลด 4300 บาท', discount: 4300, advance: 3210, detail: 'Net 70 GB หลังหมด Data เหลือ Speed 2MB. โทรทุกเครือข่าย 350 นาที' }
  ]
};

const trueState = { product: 'iPad', model: 'iPad Air 11', storage: '128GB', packageIndex: 0 };
let inventoryItems = inventoryFallback;

function money(value) {
  return new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB', maximumFractionDigits: 0 }).format(Math.max(0, value || 0));
}

function switchPanel(panelId) {
  document.querySelectorAll('.panel').forEach(panel => panel.classList.toggle('active', panel.id === panelId));
  document.querySelector('.app').classList.toggle('home-mode', panelId === 'home');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderImages(targetId, images) {
  document.getElementById(targetId).innerHTML = images.map(image => `
    <article class="image-card">
      <h3>${image.title}</h3>
      <img src="${image.src}" alt="${image.alt}" loading="lazy">
    </article>
  `).join('');
}

async function loadPromotionConfig() {
  try {
    const response = await fetch('/config/promotions.json', { cache: 'no-store' });
    const config = await response.json();
    renderImages('saleViewer', config.salePromotions || []);
    renderImages('guildViewer', config.guildLine || []);
  } catch (error) {
    document.getElementById('saleViewer').innerHTML = '<div class="empty">โหลดไฟล์โปรโมชันไม่ได้</div>';
  }
}

function renderCards(config = cardPromotionFallback) {
  const target = document.getElementById('cardGrid');
  const items = Array.isArray(config.items) ? config.items : [];
  target.innerHTML = `
    <section class="card-promo-hero">
      <span>${config.period || ''}</span>
      <h3>${config.subtitle || config.title || 'Card Promotion'}</h3>
      ${config.notice ? `<p class="card-promo-notice">${config.notice}</p>` : ''}
    </section>
    <div class="card-promo-list">
      ${items.map(item => `
        <article class="card-promo-item">
          <div class="bank-name">${item.bank}</div>
          <div class="bank-detail">
            <h3>${item.headline}</h3>
            ${Array.isArray(item.details) && item.details.length ? `
              <ul>${item.details.map(detail => `<li>${detail}</li>`).join('')}</ul>
            ` : ''}
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

async function loadCardPromotions() {
  try {
    const response = await fetch('/config/card-promotions.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`Card promotion returned ${response.status}`);
    renderCards(await response.json());
  } catch (error) {
    renderCards(cardPromotionFallback);
  }
}

function calculateUfund() {
  const price = Number(document.getElementById('ufundPrice').value);
  const down = Number(document.getElementById('ufundDown').value);
  const months = Number(document.getElementById('ufundMonths').value);
  const rate = Number(document.getElementById('ufundRate').value) / 100;
  const finance = Math.max(0, price - down);
  const interest = finance * rate * (months / 12);
  const monthly = months > 0 ? (finance + interest) / months : 0;
  document.getElementById('ufundMonthly').textContent = money(monthly);
  document.getElementById('ufundSummary').textContent = `ยอดจัด ${money(finance)} | รวมดอกเบี้ย ${money(interest)}`;
}

function renderStockOptions() {
  const category = document.getElementById('stockCategory');
  const subCategory = document.getElementById('stockSubCategory');
  const selectedCategory = category.value;
  const selectedSub = subCategory.value;
  const categories = [...new Set(inventoryItems.map(item => item.category).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  const source = selectedCategory ? inventoryItems.filter(item => item.category === selectedCategory) : inventoryItems;
  const subs = [...new Set(source.map(item => item.subCategory).filter(Boolean))].sort((a, b) => a.localeCompare(b));

  category.innerHTML = '<option value="">All Category</option>' + categories.map(value => `<option>${value}</option>`).join('');
  category.value = categories.includes(selectedCategory) ? selectedCategory : '';
  subCategory.innerHTML = '<option value="">All Sub Category</option>' + subs.map(value => `<option>${value}</option>`).join('');
  subCategory.value = subs.includes(selectedSub) ? selectedSub : '';
}

function renderStock() {
  const query = document.getElementById('stockSearch').value.trim().toLowerCase();
  const category = document.getElementById('stockCategory').value;
  const subCategory = document.getElementById('stockSubCategory').value;
  const rows = inventoryItems.filter(item => {
    const text = `${item.sku} ${item.name} ${item.category || ''} ${item.subCategory || ''}`.toLowerCase();
    return (!query || text.includes(query)) &&
      (!category || item.category === category) &&
      (!subCategory || item.subCategory === subCategory);
  });

  document.getElementById('stockList').innerHTML = rows.map(item => `
    <article class="stock-item">
      <div>
        <small>${item.sku || '-'}</small>
        <h3>${item.name || '-'}</h3>
      </div>
      <div class="stock-qty">${Number(item.qty) || 0}<span>฿0</span></div>
    </article>
  `).join('') || '<div class="empty">ไม่พบสินค้า</div>';
}

async function loadStock() {
  try {
    const response = await fetch('/api/stock');
    const payload = await response.json();
    if (Array.isArray(payload.items) && payload.items.length) {
      inventoryItems = payload.items;
      document.getElementById('stockStatus').textContent = `Stock 242 | อัปเดต ${new Date(payload.updatedAt).toLocaleString('th-TH')}`;
    } else if (payload.message) {
      document.getElementById('stockStatus').textContent = 'Stock 242 | ใช้ข้อมูลตัวอย่าง';
    }
  } catch (error) {
    document.getElementById('stockStatus').textContent = 'Stock 242 | ใช้ข้อมูลตัวอย่าง';
  }
  renderStockOptions();
  renderStock();
}

function getStorages() {
  return trueCatalog[trueState.product][trueState.model] || [];
}

function getSelectedItem() {
  return getStorages().find(item => item.storage === trueState.storage) || getStorages()[0];
}

function getTruePackages() {
  const groups = [];
  if (trueState.product === 'iPhone') {
    if (['iPhone 18 Pro', 'iPhone 18 Pro Max', 'iPhone DUO'].includes(trueState.model)) groups.push(...packageGroups.iphone18);
    else if (trueState.model === 'iPhone 15') groups.push(...packageGroups.iphone15);
    else if (trueState.model === 'iPhone 16') groups.push(...packageGroups.iphone16);
    else if (['iPhone 17', 'iPhone 17e', 'iPhone 17 Pro', 'iPhone 17 Pro Max', 'iPhone Air'].includes(trueState.model)) groups.push(...packageGroups.iphone17);
  }
  if (['iPad Air 11', 'iPad Air 13'].includes(trueState.model)) groups.push(...packageGroups.ipadAir);
  if (['iPad Pro 11', 'iPad Pro 13'].includes(trueState.model)) groups.push(...packageGroups.ipadPro);
  groups.push(...packageGroups.all);
  return groups;
}

function renderButtons(targetId, values, current, onClick) {
  const target = document.getElementById(targetId);
  target.innerHTML = values.map(value => `<button class="true-chip ${value === current ? 'active' : ''}" type="button" data-value="${value}">${value}</button>`).join('');
  target.querySelectorAll('button').forEach(button => button.addEventListener('click', () => onClick(button.dataset.value)));
}

function renderTrue() {
  const products = Object.keys(trueCatalog);
  const models = Object.keys(trueCatalog[trueState.product]);
  if (!models.includes(trueState.model)) trueState.model = models[0];
  const storages = getStorages();
  if (!storages.some(item => item.storage === trueState.storage)) trueState.storage = storages[0].storage;

  renderButtons('trueProducts', products, trueState.product, value => {
    trueState.product = value;
    trueState.model = Object.keys(trueCatalog[value])[0];
    trueState.storage = trueCatalog[value][trueState.model][0].storage;
    trueState.packageIndex = 0;
    renderTrue();
  });
  renderButtons('trueModels', models, trueState.model, value => {
    trueState.model = value;
    trueState.storage = trueCatalog[trueState.product][value][0].storage;
    trueState.packageIndex = 0;
    renderTrue();
  });
  renderButtons('trueStorages', storages.map(item => item.storage), trueState.storage, value => {
    trueState.storage = value;
    renderTrue();
  });

  const packages = getTruePackages();
  const select = document.getElementById('truePackages');
  if (trueState.packageIndex >= packages.length) trueState.packageIndex = 0;
  select.innerHTML = packages.map((item, index) => `<option value="${index}">${item.name}</option>`).join('');
  select.value = String(trueState.packageIndex);

  const item = getSelectedItem();
  const selectedPackage = packages[trueState.packageIndex];
  const base = item.price;
  const discount = selectedPackage.discount;
  const advance = selectedPackage.advance;
  document.getElementById('trueProductText').textContent = `${trueState.product} | ${trueState.model} | ${trueState.storage}`;
  document.getElementById('truePackageText').textContent = `${selectedPackage.name} | ${selectedPackage.detail}`;
  document.getElementById('trueBase').textContent = money(base);
  document.getElementById('trueDiscount').textContent = money(discount);
  document.getElementById('trueAdvance').textContent = money(advance);
  document.getElementById('trueNet').textContent = money(base - discount + advance);
}

document.querySelectorAll('[data-panel]').forEach(button => {
  button.addEventListener('click', () => switchPanel(button.dataset.panel));
});
document.querySelectorAll('[data-back-home]').forEach(button => {
  button.addEventListener('click', () => switchPanel('home'));
});
['ufundPrice', 'ufundDown', 'ufundMonths', 'ufundRate'].forEach(id => {
  document.getElementById(id).addEventListener('input', calculateUfund);
});
document.getElementById('stockSearch').addEventListener('input', renderStock);
document.getElementById('stockCategory').addEventListener('input', () => {
  renderStockOptions();
  renderStock();
});
document.getElementById('stockSubCategory').addEventListener('input', renderStock);
document.getElementById('truePackages').addEventListener('input', event => {
  trueState.packageIndex = Number(event.target.value) || 0;
  renderTrue();
});

loadCardPromotions();
calculateUfund();
renderTrue();
loadPromotionConfig();
loadStock();
