import Header from '../components/Header/Header'
import styles from './styles.module.css'
import FirstWidget from "../components/FirstWidget/FirstWidget";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Blog from "../components/Blog/Blog";

export default function (props  ) {

  return (
    <div className={styles.parent}>
      <Header/>
        <FirstWidget name={"widget0"}/>
        <About name={"widget1"}/>
        <Projects name={"widget2"}/>
        <Blog name={"widget3"}/>
    </div>
  )
}
