import React, { useState } from "react";
import style from "./header.module.css";

import logo from "../../accses/MainHeader/logo.png";
// import drow2 from "../../accses/MainHeader/drow.svg";
import { Drawer } from "antd";
import i18n from './../../i18';
import { useTranslation } from "react-i18next";
export const Header = () => {
  const [visible, setVisible] = useState(false);
  const defaultLang = localStorage.getItem("lang") || "uz";
  const [lang, setLang] = useState(defaultLang);
  const showDrawer = () => {
    setVisible(true);
  };
  const { t } = useTranslation();

  const handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    i18n.changeLanguage(event.target.value);
    console.log(event.target.value);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <div className={style.Header}>
        <Drawer placement="right" onClose={onClose} visible={visible}>
          <div className={style.Drow_Menu}>
            <a onClick={onClose} href="#aksiya">Акции</a>
            <a onClick={onClose} href="#katalog">Каталлог</a>
            <a onClick={onClose} href="#dostavka">Доставка</a>
            <a onClick={onClose} href="#magazin">О магазине</a>
            <a onClick={onClose} href="#blog">Блог</a>
          </div>
        </Drawer>
        <div className={style.block}>
          <img src={logo} alt="" />
          {/* <img
          onClick={showDrawer}
          src={drow2}
          alt=""
          className={style.drowimgr}
        /> */}
          <a href="#aksiya">{t("navbar1")}</a>
          <a href="#katalog">{t("navbar2")}</a>
          <a href="#dostavka">{t("navbar3")}</a>
          <a href="#magazin">{t("navbar4")}</a>
          <a href="#blog">{t("navbar5")}</a>
          <a href="#magazin">{t("navbar6")}</a>
        </div>
        <div className={style.Login}>
          <select name="lang" value={lang} onChange={handleChange}>
            <option value="uz">UZ</option>
            <option value="eng">ENG</option>
          </select>
          <a href="#blog">Sign in</a>
          <button>Sign up</button>
        </div>
      </div>
    </>
  );
};
