# วิธีติดตั้งและดูผลลัพธ์. 
### ปล.
เมนูโปรไฟล์ผู้ใช้งานที่แสดงผลลัพธ์ไม่ตรงกัน ให้ล็อกอิน Google เพื่อดูผลลัพธ์ที่ตรงกับ Design หรือหากไม่ได้ตั้งค่า Environment ให้ตรวจสอบผลลัพธ์ที่ https://ics-interviews-9g6m.vercel.app (เป็นเว็บแอพที่ Deploy จาก git repo เดียวกัน)


## การติดตั้ง
เปิด Terminal/Command Prompt/Power Shell แล้วพิมพ์คำสั่งต่อไปนี้

```
git clone https://github.com/phongsakk/ics-interviews.git

cd ics-interviews

yarn

yarn start
```

React จะเปิดเว็บเบราเซอร์ขึ้นมาที่ localhost:3000 พร้อมแสดงผลหน้าเว็บแอพ

## การตั้งค่า Environment
ใน directory ของโปรเจค รันคำสั่ง
```
echo '\nREACT_APP_GOOGLE_CLIENT_ID=' >> .env
```
ตั้งค่า clientID ตามที่ได้รับจาก Google Cloud API 