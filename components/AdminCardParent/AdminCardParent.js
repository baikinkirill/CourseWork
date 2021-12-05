import styles from './AdminCardParent.module.css'

export default function AdminCardParent(props){

  return(
    <div className={styles.parent}>
      {props.children}
    </div>
  )
}
