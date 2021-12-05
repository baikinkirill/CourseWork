import styles from './TextArea.module.css'

export default function (props){

  return(
    <div className={styles.parent} >
      <textarea
        placeholder={props.placeholder}
        onChange={(e)=>{
          if(props.onChange)
            props.onChange(e.target.value)
        }}
        defaultValue={props.defaultValue}
        style={props.style}
      />
    </div>
  )
}
