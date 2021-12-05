import styles from './Header.module.css'
import {useEffect, useRef, useState} from "react";


let lastI = 0
export default function (props) {
  const tabManager = useRef(0)
  const [lastI, setLastI] = useState(0)
  const blockScrollChangeRef = useRef(false)

  const [underlineParams, editUnderlineParams] = useState({width: "0px", marginLeft: "-2px"})
  const tabs = props.tabs

  useEffect(() => {
    let elem = document.getElementById("menuItemId" + tabManager.current.toString())
    let elemMenu = document.getElementById("menu")
    editUnderlineParams({
      width: (elem.offsetWidth).toString() + "px",
      marginLeft: (elem.offsetLeft - elemMenu.offsetLeft - 2).toString() + "px",
    })
    window.onresize = () => {
      let elem = document.getElementById("menuItemId" + tabManager.current.toString())
      let elemMenu = document.getElementById("menu")
      editUnderlineParams({
        width: (elem.offsetWidth).toString() + "px",
        marginLeft: (elem.offsetLeft - elemMenu.offsetLeft - 2).toString() + "px",
      })
    }
  }, [tabManager.current])
  useEffect(() => {
    editUnderlineParams({
      width: document.getElementById("menuItemId" + tabManager.current.toString()).offsetWidth.toString() + "px",
      marginLeft: "0",
    })

    let elems = []
    for (var i = 0; i < tabs.length; i++) {
      elems.push(document.getElementById("widget" + i.toString()))
    }

    window.addEventListener("scroll", () => {
      let elem = document.getElementById("header")
      if (window.scrollY >= 20) {
        elem.setAttribute("onScroll", "true")
      } else
        elem.setAttribute("onScroll", "false")

      let lastActiveI = tabManager.current
      for (var i = 0; i < tabs.length; i++) {
        if (window.scrollY >= elems[i]?.offsetTop - 300)
          lastActiveI = i
      }

      if(!blockScrollChangeRef.current){
        tabManager.current=(lastActiveI)
        setLastI(lastActiveI)
      }else{
        if(lastActiveI==tabManager.current)
          blockScrollChangeRef.current=false
      }
    })
  }, [])

  return (
    <div
      id={"menuParent"}

      // @ts-ignore
      name={props.open}

      className={styles.menuParent}>
      <div id={"menu"} className={styles.menu}
           onMouseLeave={() => {
             tabManager.current=(lastI)
             let las = lastI
             setLastI(-1)
             setTimeout(()=>setLastI(las))
           }}
      >
        {tabs.map((e, i) => {
          return (
            // @ts-ignore
            <div active={(i === tabManager.current).toString()} id={"menuItemId" + i.toString()}
                 onMouseEnter={() => {
                   // lastI=JSON.parse(JSON.stringify(activeTab))
                   tabManager.current=i
                   let las = lastI
                   setLastI(-1)
                   setTimeout(()=>setLastI(las))


                 }}
                 onClick={() => {
                   blockScrollChangeRef.current=true
                   tabManager.current=(i)
                   setLastI(i)
                   let elem=document.getElementById("widget"+i.toString())
                   props.setOpenMenu(false)
                   elem.scrollIntoView({behavior:"smooth"})


                 }}>
              {e}
            </div>
          )
        })}
      </div>
      <div className={styles.underline}
           style={{width: underlineParams['width'], marginLeft: underlineParams['marginLeft']}}/>

      <div className={styles.touchCloseHiddenPanel} style={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
        marginLeft:"-10px",
      }} onClick={() => {
        if(props.open)
          props.setOpenMenu(false)
      }}/>


    </div>
  )
}
