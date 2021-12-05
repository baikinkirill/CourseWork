import styles from './index.module.css'
import AdminMenu from "../../components/AdminMenu/AdminMenu";
import AdminCardParent from "../../components/AdminCardParent/AdminCardParent";
import {useEffect, useState} from "react";
import lottie from "lottie-web";
import toggleAnimation from "../../components/AEAnimations/src/burgerMenu.json";
import Projects from "../../components/AdminPageComponents/Projects";
import About from "../../components/AdminPageComponents/About";
import CreateArticle from "../../components/AdminPageComponents/CreateArticle";

export default function Index() {
  const [activeTab, setActiveTab] = useState("00")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById("burgerMenu"),
      name: "menu",
      animationData: toggleAnimation,
      autoplay: false,
      loop: false,
    });
  }, [])
  useEffect(() => {
    if (!open) {
      lottie.setDirection(-1, "menu")
      lottie.play("menu")
      document.body.style.overflowY = "auto"

    } else {
      lottie.setDirection(1, "menu")
      lottie.play("menu")
      document.body.style.overflowY = "hidden"

    }
  }, [open])

  return (
    <div className={styles.parent}>
      <div className={styles.menu} show={open.toString()}><AdminMenu state={{activeTab, setActiveTab}}/></div>
      <div style={{width: "100%"}} className={styles.content}>
        <div className={styles.header}>
          <div onClick={() => {
            setOpen(!open)
          }} id={"burgerMenu"}
               className={styles.mobileButtonMenu}
          />
        </div>
        {getContent(activeTab)}
      </div>
    </div>
  )
}

function getContent(activeTab) {
  switch (activeTab) {
    default:
      return null
      break;
    case '00':
      return <Projects/>
      break;
    case '01':
      return <About/>
      break;
    case '10':
      return <CreateArticle/>
      break;
  }
}
