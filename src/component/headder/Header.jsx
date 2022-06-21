import React, { useState } from "react";
import style from "./header.module.css";
import logo from "../../accses/MainHeader/logo.png";
import { Drawer } from "antd";
import i18n from './../../i18';
import { useTranslation } from "react-i18next";
import { AlignLeftOutlined } from "@ant-design/icons";

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
      <Drawer placement="right" onClose={onClose} visible={visible}>
        <div className={style.Drow_Menu}>
          <a onClick={onClose} href="#aksiya">{t("navbar1")}</a>
          <a onClick={onClose} href="#service">{t("navbar2")}</a>
          <a onClick={onClose} href="#dostavka">{t("navbar3")}</a>
          <a onClick={onClose} href="#magazin">{t("navbar4")}</a>
          <a onClick={onClose} href="#blog">{t("navbar5")}</a>
          <button>Sign up</button>
        </div>
      </Drawer>
      <div className={style.Header}>
        <img src={logo} alt="" />

        <div className={style.block}>
          {/* <img
          onClick={showDrawer}
          src={drow2}
          alt=""
          className={style.drowimgr}
        /> */}

          <a href="#aksiya">{t("navbar1")}</a>
          <a href="#service">{t("navbar2")}</a>
          <a href="#dostavka">{t("navbar3")}</a>
          <a href="#magazin">{t("navbar4")}</a>
          <a href="#blog">{t("navbar5")}</a>
        </div>
        <div className={style.Login}>
          <select name="lang" value={lang} onChange={handleChange}>
            <option value="uz">UZ</option>
            <option value="eng">ENG</option>
          </select>
          <button className={style.Block__2}>Sign up</button>
        </div>
        <p className={style.dropclose} onClick={showDrawer}><AlignLeftOutlined /></p>
      </div>
    </>
  );
};
