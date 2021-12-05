import styles from './AminMenu.module.css'
import {useState} from "react";

export default function AdminMenu(props) {
  const menu = [
    {title: "Разделы", content: ['Проекты', "О нас"]},
    {title: "Блог", content: ['Создать статью', "Поиск"]},
  ]

  const {activeTab, setActiveTab} = props.state

  return (
    <div className={styles.parent}>
      <div className={styles.headerParent}>
        <div className={styles.logo}></div>
        <div>Константинов Константин</div>
        <div className={styles.logout}></div>
      </div>
      <div className={styles.menuParent}>
        {menu.map((e, i) => {
          return (
            <div>
              <div className={styles.menuItem}>
                {e.title}
              </div>
              {e.content.map((e, j) => {
                return <div active={(activeTab.toString() === (i.toString()+j.toString())).toString()}
                            onClick={() => {
                              setActiveTab(i.toString()+j.toString())
                            }}
                            className={styles.menuItemButton}>{e}</div>
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
