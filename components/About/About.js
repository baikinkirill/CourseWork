import styles from './About.module.css'
import AboutUser from "../AboutUser/AboutUser";

export default function (props) {

  const data = [
    {
      fio: "Константин Константинопольский",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias architecto, autem corporis cumque dolores ducimu",
      role: "Design"
    },
    {
      fio: "Константин Константинопольский",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias architecto, autem corporis cumque dolores ducimu",
      role: "Design"
    },
    {
      fio: "Константин Константинопольский",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias architecto, autem corporis cumque dolores ducimu",
      role: "Design"
    },
    {
      fio: "Константин Константинопольский",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias architecto, autem corporis cumque dolores ducimu",
      role: "Design"
    },
    {
      fio: "Константин Константинопольский",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias architecto, autem corporis cumque dolores ducimu",
      role: "Design"
    },
    {
      fio: "Константин Константинопольский",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias architecto, autem corporis cumque dolores ducimu",
      role: "Design"
    },
    {
      fio: "Константин Константинопольский",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias architecto, autem corporis cumque dolores ducimu",
      role: "Design"
    },
  ]

  return (
    <div id={props.name} className={styles.parent}>
      <div style={{paddingTop: "80px"}}>
        <h1>О нас</h1>
        <div className={styles.contentParent}>
          <div className={styles.about}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias architecto, autem corporis
            cumque dolores ducimus eaque eius eligendi ex id, ipsa nihil numquam odio officia praesentium tempore totam
            voluptates? Ad dolore doloremque et, ex explicabo illo porro ratione sapiente ullam voluptatem. Aut
            cupiditate deserunt distinctio dolorum fuga fugit hic iure laudantium, magnam minus modi, odit repellendus
            sunt tempore voluptas.
          </div>
          <div className={styles.content}>
            {data.map((e,i)=>{

              return(
                <AboutUser
                  index={i}
                  role={"Дизайнер"}
                  desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias architecto, autem corporis cumque dolores ducimu"}
                  fio={"Константин Константинопольский"}/>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
