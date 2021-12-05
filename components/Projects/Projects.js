import styles from './Projects.module.css'
import HorizontalImagesBlock from "../HorizontalImagesBlock/HorizontalImagesBlock";

export default function (props){

  const element=()=>{

    return(
      <>
        <HorizontalImagesBlock images={["https://images7.alphacoders.com/587/thumb-1920-587675.jpg","https://images6.alphacoders.com/113/thumbbig-1135429.webp","https://images.alphacoders.com/113/thumb-1920-1135430.jpg"]}/>
        <div className={styles.textParent}>
          <h2>Название проекта</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ea, facilis! Alias aliquid, aspernatur culpa deleniti inventore iste odio optio repellat sit voluptate. Consectetur dolor doloribus eos fugiat libero modi molestiae nemo obcaecati odio quam, quisquam quos vel veritatis vitae.
          </div>
          <hr/>
        </div>
      </>
    )
  }

  return(
    <div className={styles.parent} id={props.name}>
      <h1>Проекты</h1>
      {element()}
      {element()}
    </div>
  )
}
