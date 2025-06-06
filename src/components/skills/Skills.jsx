import React from 'react'
import styles from './Skills.module.css'
import { FaSquareJs, FaReact, FaSass, FaGitAlt, FaNode, FaPython, FaGithub   } from 'react-icons/fa6'
import { TiHtml5 } from "react-icons/ti";
import { DiCss3 } from "react-icons/di";
import { SiFastapi, SiSqlite } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";

function Skills() {
  return (
    <div className={styles.skills_con}>
        <h3 className={styles.skills_title}>My Skill Set</h3>
        <ul className={styles.skills_list}>
            <li>
                <TiHtml5 />
            </li>
            <li>
                <DiCss3 />
            </li>
            <li>
                <FaSquareJs />
            </li>
            <li>
                <FaReact />
            </li>
            <li>
                <FaNode />
            </li>
            <li>
                <FaGithub />
            </li>
            <li>
                <FaPython />
            </li>
            <li>
                <SiFastapi />
            </li>
            <li>
                <SiSqlite />
            </li>
            <li>
                <BsFiletypeSql />
            </li>
        </ul>
    </div>
  )
}

export default Skills
