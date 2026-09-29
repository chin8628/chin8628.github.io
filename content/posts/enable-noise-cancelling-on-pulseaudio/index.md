---
title: 'Note: Enable Echo/Noise-Cancelation on PulseAudio (LINUX)'
date: '2021-05-14 18:47:01'
draft: false
slug: enable-noise-cancelling-on-pulseaudio
cover:
  image: pawel-czerwinski-eybM9n4yrpE-unsplash.jpg
  relative: true
aliases:
  - /2021/05/14/enable-noise-cancelling-on-pulseaudio/
---

เนื่องจากด้วยเหตุผลสักอย่างในโลกใบนี้ Kubuntu 20.04 + PulseAudio ไม่เปิด noise cancelling มาให้ ทำให้เวลาคุย Discord กับเพื่อน เพื่อนด่าทุกทีว่าเสียงน่ารำคาญ ฟังยาก เลยไปหาข้อมูลมาเจอว่าเราสามารถเปิด noise cancelling เองได้ตามนี้

เพิ่มคาถาเวทย์มนต์ไม่กี่บรรทัดนี้เข้าไปที่ `/etc/pulse/default.pa`

```
.ifexists module-echo-cancel.so
load-module module-echo-cancel aec_method=webrtc source_name=echocancel sink_name=echocancel1
set-default-source echocancel
set-default-sink echocancel1
.endif
```

## จบจ่ะ สวัสดี
