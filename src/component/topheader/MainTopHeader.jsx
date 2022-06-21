import React from 'react'
import style from "./MainHeader.module.css"
import time from "../../accses/MainHeader/time.png"
import tel from "../../accses/MainHeader/tel.png"
import email from "../../accses/MainHeader/email.png"
// import { TopHeader } from '../top_header/TopHeader'
import { Header } from './../headder/Header';
export const MainTopHeader = () => {
  return (
    <div className={style.TopHeaderMain}>
      <div className={style.Network}>
        <a href="/"><img src={time} alt="rasm bor edi!" /> Sun-Fri (9am-5pm)</a>
        <a href="tel:+88(019)24-184 461"><img src={tel} alt="rasm bor edi!" /> +88(019)24-184 461</a>
        <a href="mailto: shovasatkhira@gmail.com"><img src={email} alt="rasm bor edi!" /> shovasatkhira@gmail.com</a>

      </div>
      <Header/>
      
    </div>
  )
}
