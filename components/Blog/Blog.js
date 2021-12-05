import styles from './Blog.module.css'
import Input from "../Input/Input";
import {useState} from "react";

export default function (props) {

  const allArticles = [
    {
      title: "Добавлена админка",
      desc: "На сайт добавлена панель администратора, в которой можно редактировать пользователей, проекты а так же писать статьи.",
      cover: "/static/images/screen10.png",
      publishDate: "05.12.2021",
      tags: ["Tech","Интересное","Функционал"]
    },
    {
      title: "Красивая пикча для заполнения блога контентом",
      desc: "Здесь можно было бы вставить текст-рыбу, простой Lorem Ipsum, но я подумал, что сделаю это в следующей статье.",
      cover: "/static/images/Snow-mountain-2560x1600.jpg",
      publishDate: "05.12.2021",
      tags: ["Фотография"]
    },
    {
      title: "Как и обещал, здесь вставил текст-рыбу",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa, cum dolorem dolores facilis illo illum in, iusto molestiae mollitia, porro provident repellat sint unde?\n",
      cover: "/static/images/react-js-1.jpg",
      publishDate: "05.12.2021",
      tags: ["Случайный текст"]
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
              <Tag title={"Здесь"}/>
              <Tag title={"показан"}/>
              <Tag title={"пример"}/>
              <Tag title={"различных"}/>
              <Tag title={"тегов"}/>
            </div>
            <hr/>
            <h1>Ссылки</h1>
            <div className={styles.linkParent}>
              <a target={"_blank"} href={"https://github.com"}>github.com</a>
              <a target={"_blank"} href={"https://vercel.com"}>vercel.com</a>
              <a target={"_blank"} href={"https://finebot.site"}>finebot.site</a>
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
      <div style={{backgroundImage:"url(\""+props.data.cover+"\")", backgroundPosition:"center"}} className={styles.img}/>
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
