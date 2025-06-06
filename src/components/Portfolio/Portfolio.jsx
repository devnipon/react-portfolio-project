import React from 'react'
import styles from './Portfolio.module.css'
import healthImg from './img/health.png'
import pinoImg from './img/pino.png'
import cerImg from './img/cer.png'
import tiktokImg from './img/tiktok.png'
import portfolioImg from './img/portfolio.png'
import Tilt from 'react-parallax-tilt';
import { FaTiktok } from "react-icons/fa";


function Portfolio() {
    return (
        <div className={styles.port_con}>
            <h3 className={styles.port_title}>Portfolio</h3>
            <div className={styles.port_list}>
                
                <a href="https://react-portfolio-project-six-rouge.vercel.app/#" className={styles.port_items} target="_blank">
                    <img src={portfolioImg} />
                    <h3>Portfolio</h3>
                    <p>This is my portfolio. It reflects my skills and showcases real projects I’ve developed to highlight my web development capabilities.</p>
                    <ul className={styles.skill_con}>
                        <li>
                            React
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            Vercel
                        </li>
                    </ul>
                </a>

                <a href="https://oak-spicydev.github.io/spicyDev/certification.html" className={styles.port_items} target="_blank">
                    <img src={cerImg} />
                    <h3>Certificates</h3>
                    <p>A curated collection of certificates earned from programming courses, bootcamps, and self-learning initiatives.</p>
                    <ul className={styles.skill_con}>
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                    </ul>
                </a>

                <a href="https://oak-spicydev.github.io/spicyDev/health-tools.html" className={styles.port_items} target="_blank">
                    <img src={healthImg} />
                    <h3>Health Calculator</h3>
                    <p> Health calculation tools such as BMI, BMR, TDEE calorie estimation, and other health tracking features.</p>
                    <ul className={styles.skill_con}>
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            JavaScript
                        </li>
                    </ul>
                </a>

                <a href="https://oak-spicydev.github.io/Scores/" className={styles.port_items} target="_blank">
                    <img src={tiktokImg} />
                    <h3>TikTok Clip Voting</h3>
                    <p> A voting platform for TikTok clips with an admin backend and automatic score summary. <br /> (Password: Admin-01) </p>
                    <ul className={styles.skill_con}>
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            JavaScript
                        </li>
                    </ul>
                </a>

                <a href="https://github.com/devnipon/hotel-kiosk-client" className={styles.port_items} target="_blank">
                    <img src={pinoImg} className={styles.pino_img} />
                    <h3>TikTok Clip Voting</h3>
                    <p> Built a hotel self check-in kiosk with hardware integration using Python and FastAPI. Deployed at Pino Latte Hotel, Khao Kho.</p>
                    <ul className={styles.skill_con}>
                        <li>
                            Python
                        </li>
                        <li>
                            fastAPI
                        </li>
                        <li>
                            SQL
                        </li>
                    </ul>
                </a>

                <a href="#t" className={styles.port_items} >
                    <p className={styles.port_last}>A new project is currently under development and will be available soon.</p>
                </a>
                
            </div>
        </div>
    )
}

export default Portfolio
