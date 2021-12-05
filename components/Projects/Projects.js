import styles from './Projects.module.css'
import HorizontalImagesBlock from "../HorizontalImagesBlock/HorizontalImagesBlock";

export default function (props){

  const element2=()=>{
    return(
      <>
        <HorizontalImagesBlock images={["/static/images/screen1.png","/static/images/screen2.png","/static/images/screen3.png"]}/>
        <div className={styles.textParent}>
          <h2>Лендинг о проекте</h2>
          <div>Лендинг для проекта, занимающегося адаптацией сайтов для людей с особенностями зрения.
            На курсовой работе представлена отдельная версия, написанная исключительно на JS и CSS, с ограниченным функционалом
            В самом лендинге используются другие инструменты.
          </div>
          <hr/>
        </div>
      </>
    )
  }

  const element=()=>{
    return(
      <>
        <HorizontalImagesBlock images={["/static/images/screen7.png","/static/images/screen4.png","/static/images/screen6.png"]}/>
        <div className={styles.textParent}>
          <h2>Сайт-витрина для транспортных инноваций Москвы</h2>
          <div>
            Витрина проектов для акселератора московского транспорта. Присутствует панель администратора, сотрудника, а так же профиль учатника.
            На сайте располагаются стартапы, которые проходят акселерацию в московском транспорте. К сожалению этот сайт так и не вышел в свет по ряду
            неудачных причин.
          </div>
          <hr/>
        </div>
      </>
    )
  }

  return(
    <div className={styles.parent} id={props.name}>
      <h1>Проекты</h1>
      {element2()}
      {element()}
    </div>
  )
}
