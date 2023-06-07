import style from "./style.module.css";

export function AnswerCom() {
  return (
    <section className={style.section}>
      <aside className={style.aside}>
        <ul className={style.list}>
          <li className={style.item}>
            <button className={style.btn}>Category</button>
          </li>
          <li className={style.item}>
            <button className={style.btn1}>Math</button>
          </li>
          <li className={style.item}>
            <button className={style.btn2}>Gaming</button>
          </li>
        </ul>
        <button className={style.logout}>Log Out</button>
      </aside>
      <div className={style.con}></div>
    </section>
  );
}
