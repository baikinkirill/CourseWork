import styles from './Button.module.css'
import React from "react";

export default function (props) {

  const blackButton = (
    <div style={props.style} color={props.color} size={props.size} className={styles.blackButton} onClick={()=>{
      if(props.onClick)
        props.onClick()
    }}>
      {props.children}
    </div>
  )
  let button=blackButton



  return (
    button
  )
}
