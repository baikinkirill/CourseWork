import styles from './Header.module.css'
import Menu from './Menu'
import lottie from "lottie-web";
import toggleAnimation from '../AEAnimations/src/burgerMenu.json'
import {useEffect, useState} from "react";

export const getHeader = () => {
  let elem = document.getElementById("header")
  let data = {
    height: elem.offsetHeight,
    width: elem.offsetWidth,
    elem
  }
  return data
}

export default function (props) {
  const [open, setOpen] = useState(false)

  const tabs = ["Главная", "О нас", "Проекты", "Блог"]

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

  useEffect(() => {


    lottie.loadAnimation({
      container: document.getElementById("burgerMenu"),
      name: "menu",
      animationData: toggleAnimation,
      autoplay: false,
      loop: false,
    });

  }, [])


  return (
    <div className={styles.parent} id={"header"}>
      <div onClick={() => {

        setOpen(!open)
      }} id={"burgerMenu"}
           className={styles.mobileButtonMenu}
      />
      <Menu
            tabs={tabs} setOpenMenu={(e) => setOpen(e)}
            open={open.toString()}/>

    </div>
  )
}



