import styles from './FirstWidge.module.css'
import {getHeader} from "../Header/Header";
import Button from "../Button/Button";
import {Feedback} from "../Popouts/Feedback";

export default function (props) {

  return (
    <div className={styles.parent} id={props.name}>
      <div>
        <h1>Адаптируем сайты для людей, с особенностью зрения</h1>
        <Button onClick={()=>{
         Feedback()
        }}>Связаться</Button>
      </div>
      <img src={"/static/images/blind.png"}/>
    </div>
  )
}

