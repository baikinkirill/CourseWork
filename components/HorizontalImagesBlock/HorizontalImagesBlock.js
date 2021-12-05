import styles from "./HorizontalImagesBlock.module.css";

export default function (props) {

  return (
    <div className={styles.parent}>
      <div className={styles.img}
           style={{background: `url(${props.images[0]})`, backgroundPosition: "center", backgroundSize: "cover"}}/>
      <div className={styles.img}
           style={{background: `url(${props.images[1]})`, backgroundPosition: "center", backgroundSize: "cover"}}/>
      <div className={styles.img}
           style={{background: `url(${props.images[2]})`, backgroundPosition: "center", backgroundSize: "cover"}}/>
    </div>
  )

}
