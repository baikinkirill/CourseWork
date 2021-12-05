import styles from './CreateArticle.module.css'


import dynamic from 'next/dynamic'
import Input from "../Input/Input";
import Button from "../Button/Button";

const DynamicComponentWithNoSSR = dynamic(
  () => import('../Editor/Editor'),
  { ssr: false }
)

export default function CreateArticle(){

  return(
    <div>
      <div style={{display:"flex",justifyContent:"center",marginBottom:"70px"}}>
        <div style={{width:"100%", maxWidth:"750px"}}>
          <Input placeholder={"Название статьи"}/>
        </div>
      </div>
      <DynamicComponentWithNoSSR/>
      <Button>Опубликовать</Button>
    </div>
  )
}
