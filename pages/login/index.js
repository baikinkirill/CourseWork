import styles from './index.module.css'
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

export default function LoginPage() {
  return (
    <div className={styles.parent}>
      <div className={styles.loginCard}>
        <h2>Авторизация</h2>
        <Input placeholder={"Логин"}/>
        <Input placeholder={"Пароль"} type={"password"}/>
        <div style={{display:"flex",justifyContent:"center",width:"100%"}}>
          <Button>Войти</Button>
        </div>
      </div>
    </div>
  )
}
