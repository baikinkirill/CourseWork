import styles from './Input.module.css'

export default function (props){

  return(
    <div className={styles.parent}>
      <input
        onChange={(e)=>{
          if(props.onChange)
            props.onChange(e.target.value)
        }}
        type={props.type}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
      />
    </div>
  )
}
