# วิธีติดตั้งและดูผลลัพธ์. 
### ปล.
เมนูโปรไฟล์ผู้ใช้งานที่แสดงผลลัพธ์ไม่ตรงกัน ให้ล็อกอิน Google เพื่อดูผลลัพธ์ที่ตรงกับ Design หรือหากไม่ได้ตั้งค่า Environment ให้ตรวจสอบผลลัพธ์ที่ [Deployment](https://ics-interviews-9g6m.vercel.app) (เป็นเว็บแอพที่ Deploy จาก git repo เดียวกัน)

### ปล.2
เวิร์คช็อปชิ้นนี้จัดทำขึ้นตาม Design ที่ทาง [iCreativeSystems Co.,Ltd.](https://icsco.ai/) ออกแบบมาให้สำหรับทดสอบความสามารถทางด้าน Frontend เพียงอย่างเดียวเท่านั้น ข้าพเจ้ามิได้ออกแบบเองแต่อย่างใด

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



## เครื่องมือที่สำคัญ

| ประเภท | เครื่องมือ | เวอร์ชัน |
| --- | --- | --- | 
| Framework | [React](https://reactjs.org) | 18.2.0  |
| Programming Language | [TypeScript](https://www.typescriptlang.org) | 4.4.2 |
| UI | [Material UI](https://mui.com) | 5.10.7 |
| Icons | [MUI Icons Material](https://mui.com/material-ui/material-icons) | 5.10.6 |
| Version Control | [Github](https://github.com) | 2.36.1 |
| Package Mangement | [Yarn](https://yarnpkg.com) | 1.22.19 |
