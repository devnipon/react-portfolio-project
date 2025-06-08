import React from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa6'

function Contact() {
    return (
        <div className={styles.contact_wrapper}>
            <div className={styles.contact_con}>
                <div className={styles.contact_info}>
                    <h3>Get in touch</h3>
                    <p className={styles.contact_desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eius eligendi in laboriosam delectus ipsum inventore alias dolorem ducimus aliquid.</p>
                    <p className={styles.contact_address}>123 Main Street
                        Bangkok, Thailand</p>
                    <p className={styles.contact_phone}><FaPhone />(+66) 86 936 9963 </p>
                    <p className={styles.contact_email}><FaEnvelope /> nipon.aemioo@gmail.com </p>
                </div>
                <div className={styles.contact_from}>
                    <form action="">
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
