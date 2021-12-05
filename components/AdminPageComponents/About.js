import styles from './About.module.css'
import AdminCardParent from "../AdminCardParent/AdminCardParent";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
import {useEffect, useState} from "react";
import Input from "../Input/Input";

export default function About() {
  const [users, setUsers] = useState([
    {
      fio:"Константинопольский Константин Константинович", desc: "Описание"
    },

  ])
  const [isEdit, setIsEdit] = useState(users.map(() => {
    return false
  }))



  return (
    <div className={styles.parent}>

      <AdminCardParent>
        <div style={{display: "grid", justifyContent: "center", rowGap: "10px"}}>
          <TextArea style={{minHeight: "150px", maxWidth: "750px", width: "50vw"}} placeholder={"О нас"}/>
          <Button>Сохранить</Button>
        </div>
      </AdminCardParent>
      <div>
        <div style={{display: "flex", alignItems: "center", marginBottom: "10px", cursor: "pointer"}}
             onClick={(e) => {
               let buff = JSON.parse(JSON.stringify(users))
               buff.push({fio:"Шаблон ФИО", desc: "Шаблон описания"})
               setUsers(buff)
             }}
        >
          <img src="/static/images/add.svg" alt="" style={{width: "24px"}}/>
          <div className={styles.addButton}>Создать</div>
        </div>
        <div className={styles.gridParent}>
          {users.map((e,i) => {
            let buffEdit=JSON.parse(JSON.stringify(isEdit))
            let data=JSON.parse(JSON.stringify(e))
            return (
              <AdminCardParent>
                {!isEdit[i]?(
                <>
                  <div style={{display:"grid",rowGap:"10px"}}>
                    <div className={styles.firstContent}>
                      <div className={styles.avatar}></div>
                      <div>
                        {e.fio}
                      </div>
                      <div>
                        <img src="/static/images/icons8-edit.svg" style={{width: "20px", height: "15x", cursor: "pointer"}} onClick={()=>{
                          buffEdit[i]=true
                          setIsEdit(buffEdit)
                        }}/>
                      </div>
                    </div>
                    <div className={styles.desc} style={{maxWidth:"100%"}}>
                      {e.desc}
                    </div>
                  </div>
                </>
                  ):(
                  <>
                    <div style={{display:"grid",rowGap:"10px"}}>
                      <div className={styles.firstContent}>
                        <div className={styles.avatar}></div>
                        <Input defaultValue={e.fio} onChange={(e)=>{
                          data.fio=e
                        }}/>
                        <div>
                          <img src="/static/images/icons8-save-90.png" style={{width: "20px", height: "15x", cursor: "pointer"}} onClick={()=>{
                            buffEdit[i]=false
                            setIsEdit(buffEdit)
                            let buffData=JSON.parse(JSON.stringify(users))
                            buffData[i]=data
                            setUsers(buffData)
                          }}/>
                        </div>
                      </div>
                      <div className={styles.desc} style={{maxWidth:"100%"}}>
                        <TextArea defaultValue={e.desc} onChange={(e)=>{
                          data.desc=e
                        }}/>
                      </div>
                    </div>
                  </>
                )}

              </AdminCardParent>
            )
          })}
        </div>
      </div>
    </div>
  )
}
