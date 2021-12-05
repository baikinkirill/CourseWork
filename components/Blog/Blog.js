import styles from './Blog.module.css'
import Input from "../Input/Input";
import {useState} from "react";

export default function (props) {

  const allArticles = [
    {
      title: "А",
      desc: "fds",
      cover: "https://res.allmacwallpaper.com/get/Retina-MacBook-Pro-13-inch-wallpapers/Snow-mountain-2560x1600/4266-11.jpg",
      publishDate: "24.11.2003",
      tags: ["Tech"]
    },
    {
      title: "А",
      desc: "fds",
      cover: "https://res.allmacwallpaper.com/get/Retina-MacBook-Pro-13-inch-wallpapers/Snow-mountain-2560x1600/4266-11.jpg",
      publishDate: "24.11.2003",
      tags: ["Tech"]
    },
    {
      title: "А",
      desc: "fds",
      cover: "https://res.allmacwallpaper.com/get/Retina-MacBook-Pro-13-inch-wallpapers/Snow-mountain-2560x1600/4266-11.jpg",
      publishDate: "24.11.2003",
      tags: ["Tech"]
    },
  ]

  const [articles, setArticles] = useState(allArticles)

  return (
    <div id={props.name} className={styles.parent}>
      <h1>Новости</h1>
      <div className={styles.blogParent}>
        <div className={styles.content}>
          {articles.map((e) => {
            return <>
              <BlogElement data={e}/>
            </>
          })}
        </div>
        <div className={styles.paramsParent}>
          <div className={styles.stickyContainter}>
            <Input placeholder={"Поиск по статьям"}/>
            <h1>Тэги</h1>
            <div className={styles.tags}>

            </div>
            <hr/>
            <h1>Ссылки</h1>
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const BlogElement = (props) => {
  console.log(props)
  return (
    <div className={styles.blogElement}>
      <div style={{backgroundImage:"url(\""+props.data.cover+"\")"}} className={styles.img}/>
      {props.data.tags ? (
        <>
          <div className={styles.tags}>
            {props.data.tags.map((e) => {
              return <Tag title={e}/>
            })}
          </div>
        </>
      ) : null}
      <h1>{props.data.title}</h1>
      <div className={styles.date}>{props.data.publishDate}</div>
      <div className={styles.desc}>{props.data.desc}</div>
    </div>
  )
}

const Tag = (props) => {

  return (
    <div className={styles.tag}>
      {props.title}
    </div>
  )
}
