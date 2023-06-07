import style from "./style.module.css"

export function Hero() {
  return (
    <div className={style.hero}>
      <h1 className={style.h1}>Play Online Quiz & Win Cash Daily!</h1>
      <p className={style.p}>Test your knowledge by passing Quiz</p>
      <div className={style.con}>
        <button className={style.herobtn}>
          <h1 className={style.herobtnbody}>start quiz</h1>
        </button>
        <button className={style.herobtn}>
          <h1 className={style.herobtnbody}>Register</h1>
        </button>
      </div>
    </div>
  );
}
