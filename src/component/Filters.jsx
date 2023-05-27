import React from 'react'
import styles from './Filter.module.css'
import Filter from './Filter'

function Filters(props) {
    const majors = ['미디어디자인공학전공', '산업디자인공학전공'];
    const years = ['2018', '2019', '2021', '2022'];
    const schoolYear = ['1학년', '2학년', '3학년', '4학년'];

    return (
        <div className={styles.Filters}>
                <Filter title="학과" chips ={majors} />
                <Filter title="연도" chips ={years} />
                <Filter title="이수 학년" chips ={schoolYear} />
        </div>
    )



}

export default Filters