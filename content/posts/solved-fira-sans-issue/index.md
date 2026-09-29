---
title: วิธีแก้ปัญหา Xelatex หา Fira Sans ไม่เจอ
date: '2018-11-11 10:37:19'
draft: false
slug: solved-fira-sans-issue
cover:
  image: 1280px-LaTeX_logo.svg.png
  relative: true
aliases:
  - /2018/11/11/solved-fira-sans-issue/
---

จดกันลืมเพราะหาวิธีแก้นานมาก

มีปัญหาว่า Fira Sans ไม่สามารถใช้งานบน Xelatex ได้เนื่องจาก build ไม่ผ่านทั้ง ๆ ที่ฟ้อนต์อื่น ๆ บนเครื่องทำงานได้ปกติ หาวิธีแก้หลากหลายทางจาม stackoverflow บอกก็แก้ไม่ได้

ประเด็นที่ต้องใช้ Fira Sans และ Fira Mono คือ ใช้ beamer ทำสไลด์คู่กับธีมของ **metropolis** ซึ่งเรียกใช้ฟ้อนต์เหล่านั้น

## ปัญหาเกิดจากอะไร?

ไม่รู้ครับ

<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/ZTfTSegFNMnC0" width="100%" height="100%" style="position:absolute" frameborder="0" class="giphy-embed" allowfullscreen=""></iframe></div>

[via GIPHY](https://giphy.com/gifs/illuminati-ZTfTSegFNMnC0)

## วิธีแก้

`\usepackage[sfdefault]{FiraSans}`

เรียกใช้แพ็กเกจนี้ **จบ**

ข้อมูลเพิ่มเติมหาได้จาก [ลิงค์นี้ครับ](http://www.tug.dk/FontCatalogue/firasans/)
