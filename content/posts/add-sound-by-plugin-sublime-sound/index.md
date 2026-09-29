---
title: แต่งเติมเสียงให้ Sublime Text ด้วย Sublime-Sound | มีคลิปตัวอย่าง
date: '2015-07-10 15:41:58'
draft: false
slug: add-sound-by-plugin-sublime-sound
cover:
  image: https://i.imgur.com/pYCro2d.png
  relative: false
aliases:
  - /2015/07/10/add-sound-by-plugin-sublime-sound/
---

{{< figure src="https://i.imgur.com/pYCro2d.png" >}}

เกริ่นกันนิดนึง ก่อนหน้านี้ได้เห็นท่าน @dtinth โพสต์วิดีโอเกี่ยวกับปลั๊กอินของ Atom ซึ่งเป็นปลั๊กอินที่เพิ่มเสียงให้คีย์บอร์ดเรา ดูได้ตามวิดีโอนี้เลย [https://www.facebook.com/dtinth/videos/10203609511112531/](https://www.facebook.com/dtinth/videos/10203609511112531/)

ซึ่งบอกเลยว่าเห็นแล้วชอบมาก อยากได้บ้าง แต่ตัวผมนั้นทำงานบน Windows เป็นหลัก (อยากได้ Mac นะแต่แพง...) และตัว Atom เนี่ย มันคุยไม่ค่อยรู้เรื่องบน Windows มันจะไปใช้งานได้ดีบน Mac มากกว่า ผมเลยยังไม่หยุดใช้ Sublime Text ก็เลยเป็นปัญหาว่าอยากได้ปลั๊กอินแบบ Atom มาใช้ใน Sublime บ้าง

หลังจากลองค้นหาใน Google อยู่ไม่กี่นาทีก็เจอว่าทาง Sublime Text ก็มีคนทำปลั๊กอินแบบนี้เช่นกัน ชื่อว่า Sublime-Sound และสามารถลงได้ผ่าน Package Control ได้เลย

โดยเสียง Default ของปลั๊กอินคือเสียงเอฟเฟ็คของ Minecraft เช่น ถ้าคุณกำลังพิมพ์ มันจะเป็นเสียงเหมือนเวลาคุณขุดดิน ถ้าคุณเปิดปิดไฟล์ มันจะเสียงเหมือนเวลาคุณเปิดปิดประตูใน minecraft ซึ่งแน่นอน ไม่ใช่ทุกคนที่จะชอบเสียงพวกนี้ แต่ไม่เป็นไร เพราะมันก็ยังมีเสียงแบบอื่นๆให้เลือก (ลิงค์ท้ายบทความ) โดยฝั่ง Mac ปลั๊กอินจะมีคำสั่งให้สามารถลงไฟล์เสียงเพิ่มได้ทันที ส่วนทางฝั่ง Windows จะมีคำสั่ง Replace sounds ให้ ซึ่งจะเป็นโฟลเดอร์ให้เราเอาโหลดไฟล์เสียงจากแหล่งมาใส่เอง (กันดารยังไงไม่รู้)

กรณีที่เสียงทั้งหมดทั้งมวลที่ปลั๊กอินให้คุณใช้มันไม่ถูกใจ คุณก็สามารถหาเสียงที่คุณต้องการมาใช้แทนได้เลย โดยการเปิดโฟล์เดอร์ของปลั๊กอิน (ฝั่ง Mac ผมไม่รู้ว่าโฟลเดอร์อยู่ไหน แต่ฝั่ง Windows Preference > Package Settings > Sound > Replace Sounds ได้เลย มันจะเปิดโฟลเดอร์ให้) จากนั้นก็ยัดเสียงที่คุณต้องการลงโฟลเดอร์ตาม Event เลย โดยชื่อโฟลเดอร์จะตั้งตามเหตุการ์ที่มันทำงานเช่น On\_Load, On\_New อะไรงี้เป็นต้น **แต่ระวัง เสียงที่คุณจะเอามาใช้ไม่ควรใหญ่เกินไป**

ก็ใครเบื่อๆอยากหาอะไรแปลกๆก็ลองเล่นดูได้ครับ //มีวิดีโอให้ดูหากยังอยากเห็นตัวอย่างเพิ่มเติม

<iframe width="560" height="315" src="https://www.youtube.com/embed/3KSnHH-VMLs?rel=0" frameborder="0" allowfullscreen=""></iframe>

Link: [https://github.com/airtoxin/Sublime-Sound](https://github.com/airtoxin/Sublime-Sound)

ปล. ใครใช้ Sublime-sounds แล้วใช้เสียง Default ที่เป็น Minecraft ผมก็แนะนำให้เปิดคลิปนี้คู่กันไปด้วย ฟิลลิ่งมามากครับ [https://www.youtube.com/watch?v=bIOiV4d1SVI](https://www.youtube.com/watch?v=bIOiV4d1SVI)
