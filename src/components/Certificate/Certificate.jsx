import React from 'react'
import styles from './Certificate.module.css'
import pythonImg from './img/python.jpg'
import htmlImg from './img/html.png'
import javaScriptImg from './img/javaScript.png'
import sqlImg from './img/sql.jpg'
import reactImg from './img/React.png'



function Certificate() {
  return (
    <div className={styles.cer_wrapper}>
      <div className={styles.cer_con}>

        <div className={styles.cer_item}>
          <div className={styles.cer_skill}>
            <ul><li>Python</li></ul>
          </div>
          <div className={styles.cer_list}>
            <img src={pythonImg} />
            <h3>Introduction to Programming with Python</h3>
            <p>หลักพื้นฐานการเขียนโปรแกรมด้วยภาษา Python ครอบคลุมแนวคิดตัวแปร เงื่อนไข ลูป ฟังก์ชัน และการคิดอย่างเป็นระบบ เหมาะสำหรับผู้เริ่มต้นที่ไม่มีพื้นฐานเขียนโปรแกรม</p>
          </div>
        </div>
        
        <div className={styles.cer_item}>
          <div className={styles.cer_skill}>
            <ul><li>HTML & CSS</li></ul>
          </div>
          <div className={styles.cer_list}>
            <img src={htmlImg} />
            <h3>Fundamental Web Dev with HTML5 & CSS3</h3>
            <p>หลักพื้นฐานการสร้างเว็บไซต์ด้วย HTML5 และ CSS3 ครอบคลุมโครงสร้างหน้าเว็บ การจัดวางรูปแบบด้วย CSS และการใช้ Bootstrap เหมาะสำหรับผู้เริ่มต้นที่ไม่มีพื้นฐานด้านเว็บเลย</p>
          </div>
        </div>
        
        <div className={styles.cer_item}>
          <div className={styles.cer_skill}>
            <ul><li>React</li></ul>
          </div>
          <div className={styles.cer_list}>
            <img src={reactImg} />
            <h3>พัฒนาเว็บ React Portfolio</h3>
            <p>หลักสูตรสอนสร้างเว็บไซต์ Portfolio ด้วย React โดยเริ่มจากติดตั้งโปรเจกต์ด้วย Vite จัดโครงสร้างเว็บ สร้างคอมโพเนนต์ เช่น Navbar, Hero, Portfolio, Testimonials และ Footer พร้อมเรียนรู้การออกแบบ Responsive และการ Deploy ผ่าน GitHub Pages</p>
          </div>
        </div>
        
        <div className={styles.cer_item}>
          <div className={styles.cer_skill}>
            <ul><li>javaScript</li></ul>
          </div>
          <div className={styles.cer_list}>
            <img src={javaScriptImg} />
            <h3>Introduction to JavaScript</h3>
            <p>หลักพื้นฐานการเขียนโปรแกรมด้วยภาษา JavaScript ครอบคลุมแนวคิดตัวแปร ฟังก์ชัน เงื่อนไข ลูป การจัดการ DOM และการเขียนโปรแกรมแบบ Event-driven เหมาะสำหรับผู้เริ่มต้นสาย Front-end โดยเฉพาะ</p>
          </div>
        </div>
        
        <div className={styles.cer_item}>
          <div className={styles.cer_skill}>
            <ul><li>SQL</li></ul>
          </div>
          <div className={styles.cer_list}>
            <img src={sqlImg} />
            <h3>Essential SQL for Everyone</h3>
            <p>หลักสูตรพื้นฐานการใช้งาน SQL สำหรับทุกคน ครอบคลุมการจัดการฐานข้อมูล การเขียนคำสั่ง SELECT, JOIN, GROUP BY และฟังก์ชันสรุปข้อมูล เหมาะสำหรับผู้เริ่มต้นที่ต้องการเข้าใจการวิเคราะห์ข้อมูลจากฐานข้อมูลโดยตรง</p>
          </div>
        </div>
        
        <div className={styles.cer_item}>
          <div className={styles.cer_skill}>
            <ul><li>AI & Chatbot</li></ul>
          </div>
          <div className={styles.cer_list}>
            <img src={sqlImg} />
            <h3>LINE Chatbot with ChatGPT and Gemini</h3>
            <p>สร้างแชทบอทบน LINE โดยใช้ ChatGPT และ Gemini API พร้อมเชื่อมต่อกับ LINE Messaging API และพัฒนาให้ตอบสนองแบบอัตโนมัติด้วยเทคนิคที่ใช้จริงในงานสาย AI และ Dev</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificate

