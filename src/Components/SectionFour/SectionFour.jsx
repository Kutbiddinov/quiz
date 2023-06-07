import axios from "axios"
import { useEffect, useState } from "react"
import style from "./style.module.css"

export function SectionFour() {

    const [user, setUser] = useState()

    useEffect(() => {
        axios.get("http://azamatov.pythonanywhere.com/quiz/result/")
        .then(json => console.log(json))
      })


    return (
        <section className={style.section}>
            <div className={style.con}>
                <h2 className={style.h2}>Statistics</h2>
                <div className={style.line}></div>
            </div>
            <div className={style.con1}>
                <h2 className={style.h21}>Students</h2>
                <ul className={style.list}></ul>
                <button className={style.btn}>
                    <h2 className={style.h22}>SEE ALL</h2>
                </button>
            </div>
        </section>
    )
}