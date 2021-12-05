import AdminCardParent from "../AdminCardParent/AdminCardParent";
import styles from './Projects.module.css'
import {useState} from "react";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";


export default function Projects() {
  const projectsData = [
    {
      title: "Сайт-витрина для транспортных инноваций Москвы",
      desc: "Витрина проектов для акселератора московского транспорта. Присутствует панель администратора, сотрудника, а так же профиль учатника.\n" +
        "На сайте располагаются стартапы, которые проходят акселерацию в московском транспорте. К сожалению этот сайт так и не вышел в свет по ряду\n" +
        "неудачных причин."
    }]

  const [projects,setProjects]=useState(projectsData)
  const [isEdit, setIsEdit] = useState(projectsData.map(()=>{return false}))

  return (
    <div>
      <div style={{display: "flex", alignItems: "center", marginBottom: "15px", cursor: "pointer"}}
        onClick={(e)=>{
          let buff=JSON.parse(JSON.stringify(projects))
          buff.push({title:"Проект",desc:"Проект"})
          setProjects(buff)
        }}
      >
        <img src="/static/images/add.svg" alt="" style={{width: "24px"}}/>
        <div className={styles.addButton}>Создать</div>
      </div>
      <div className={styles.parent}>
        {projects.map((e,i) => {

          let buffEdit=JSON.parse(JSON.stringify(isEdit))

          let data=JSON.parse(JSON.stringify(e))
          return (
            <AdminCardParent>
              {!isEdit[i] ? (<div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div className={styles.content}>
                  <h3 className={styles.title}>{e.title}</h3>
                  <hr/>
                  <div className={styles.desc}>{e.desc}</div>
                </div>
                <div>
                  <img src="/static/images/icons8-edit.svg" style={{width: "20px", height: "15x", cursor: "pointer"}} onClick={()=>{
                    buffEdit[i]=true
                    setIsEdit(buffEdit)
                  }}/>
                </div>
              </div>) : (
                <>
                  <div style={{display:"grid",justifyContent:"center"}}>
                    <div style={{maxWidth:"750px",display:"grid",rowGap:"10px",width:"50vw",minWidth:"270px"}}>
                      <Input defaultValue={e.title} onChange={(e)=>{
                        data.title=e
                      }} placeholder={"Название проекта"}/>
                      <TextArea style={{minHeight:"250px"}} defaultValue={e.desc} onChange={(e)=>{
                        data.desc=e
                      }}
                                placeholder={"Описание проекта"}/>
                      <Button onClick={()=>{
                        let buff=JSON.parse(JSON.stringify(projects))
                        buff[i]=data
                        setProjects(buff)
                        buffEdit[i]=false
                        setIsEdit(buffEdit)
                      }}>Сохранить</Button>
                    </div>
                  </div>
                </>
              )}
            </AdminCardParent>
          )
        })}
      </div>
    </div>
  )
}
