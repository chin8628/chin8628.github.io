---
title: 'Note: เปลี่ยนฟ้อนต์ระบบภาษาไทยใน Linux (Kubuntu)'
date: '2021-03-10 17:31:15'
draft: false
slug: config-thai-system-font-for-linux
cover:
  image: natalia-y-Oxl_KBNqxGA-unsplash-min.jpg
  relative: true
aliases:
  - /2021/03/10/config-thai-system-font-for-linux/
---

จดไว้กันลืม ตอนนี้ใช้ Kubuntu 20.04 อยู่ครับ ต้องการเปลี่ยน Default Thai font ที่โดนเอาไปใช้ในเว็บและโปรแกรมต่าง ๆ (System font)

วิธีคือให้ไปแก้ไขไฟล์ `fonts.conf` ที่ `~.config/fontconfig/fonts.conf`

จากนั้นให้เพิ่ม matcher ของภาษาไทยตามตัวอย่างด้านล่างครับ เพิ่มลงไปใน `<fontconfig></fontconfig>`

```xml
<match>
  <test compare="contains" name="lang">
  	<string>th</string>
  </test>
  <test name="family">
  	<string>sans-serif</string>
  </test>
  <edit mode="prepend" name="family">
  	<string>Noto Sans Thai UI</string>
  </edit>
</match>
 
<match>
  <test compare="contains" name="lang">
  	<string>th</string>
  </test>
  <test name="family">
  	<string>serif</string>
  </test>
  <edit mode="prepend" name="family">
  	<string>Waree</string>
  </edit>
</match>
```

อธิบายสองส่วนใหญ่ ๆ ได้ดังนี้ครับ

```xml
<match>
  <test compare="contains" name="lang">
  	<string>th</string>
  </test>
  <test name="family">
  	<string>sans-serif</string>
  </test>
  <edit mode="prepend" name="family">
  	<string>Noto Sans Thai UI</string>
  </edit>
</match>
```

โค้ดดังกล่าวหมายถึง หากระบบต้องการใช้ฟ้อนต์สำหรับภาษาไทยที่เป็น sans-serif ให้หยิบ Noto Sans Thai UI ไปใช้ครับ

ส่วนอันนี้ก็คล้าย ๆ กันครับ

```xml
<match>
  <test compare="contains" name="lang">
  	<string>th</string>
  </test>
  <test name="family">
  	<string>serif</string>
  </test>
  <edit mode="prepend" name="family">
  	<string>Waree</string>
  </edit>
</match>
```

อันนี้คือ หากระบบต้องการฟ้อนต์ภาษาไทยสำหรับรูปแบบ serif ให้เอาฟ้อนต์ Waree ไปใช้แทนครับ

ข้อมูลเพิ่มเติมดูรายละเอียดที่ [https://www.freedesktop.org/software/fontconfig/fontconfig-user.html](https://www.freedesktop.org/software/fontconfig/fontconfig-user.html)
