import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { FaBars } from 'react-icons/fa'

function Navbar() {

    const [isToggled, setToggle] = useState(false);

    function handleToggle() {
        setToggle(!isToggled)  // toggle true/false
    }

    return (
        <nav>
            <div className={styles.container}>
                <div className={styles.nav_con}>
                    <div className={styles.logo}>
                        <a href='#'>JD PORT</a>
                    </div>

                    <ul>
                        <li><a href='#'>Skill</a></li>
                        <li><a href='#'>Portfolio</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>

                    <div className={styles.button}>
                        <a href='https://line.me/ti/p/ky4dVraEos' target='blank'>Hire Me</a>
                    </div>
                </div>

                {/* Mobile Menu */}
                <FaBars className={styles.bars} onClick={handleToggle} />
                {isToggled ? (  
                    <>
                    <ul className={styles.mobile_menu}>
                        <li><a href='#'>Skill</a></li>
                        <li><a href='#'>Portfolio</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                    <div className={styles.mobile_button}>
                        <a href='#'>Hire Me</a>
                    </div>
                    </>  
                ) : null}  
                

            </div>
        </nav>
    )
}

export default Navbar
