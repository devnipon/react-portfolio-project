import React from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa6'

function Contact() {
        const handleSubmit = (e) => {
        e.preventDefault(); // ป้องกันการ submit form จริง
        alert('ระบบกำลังปรับปรุง รอติดตามเร็วๆนี้');
    }

    return (
        <div className={styles.contact_wrapper}>
            <div className={styles.contact_con}>
                <div className={styles.contact_info}>
                    <h3>Get in touch</h3>
                    <p className={styles.contact_desc}>Looking for someone curious, committed, and eager to grow? <br />I’d love to hear about any opportunities or projects where I can contribute and grow with the team.</p>
                    <p className={styles.contact_address}>Ramintra Bangkhen Bangkok, Thailand</p>
                    <p className={styles.contact_phone}><FaPhone />(+66) 86 936 9963 </p>
                    <p className={styles.contact_email}><FaEnvelope /> nipon.aemioo@gmail.com </p>
                </div>
                <div className={styles.contact_from}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.input_group}>
                            <div>
                                <label htmlFor="first name">First Name</label>
                                <input type="text" placeholder="eg.Nipon" />
                            </div>
                            <div>
                                <label htmlFor="last name">Last Name</label>
                                <input type="text" placeholder="eg.Aemioo" />
                            </div>
                        </div>
                        <label htmlFor="email address">Email Address</label>
                        <input type='email' placeholder='eg.nipon.aemioo@gmail.com' />
                        <label htmlFor='message'>Your message</label>
                        <textarea name="" id='' cols="30" rows="10" placeholder='Type here'></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact
