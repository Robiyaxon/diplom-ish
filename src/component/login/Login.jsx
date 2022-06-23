import React, { useState } from "react";
import styles from "../registration/form/FormRegistration.module.css";
// import { useState } from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export default function Login(props) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [message, setMessage] = useState("")
  const [messag2, setMessag2] = useState("")
  const [messag3, setMessag3] = useState(false)

  const map = [
    {
      id: 1,
      message: "Please input your Name!",
      name: t("name"),
      label: t("name"),
      value: message,
      setname1: setMessage,
      type: "text",
      placeholder: t("enterName"),
    },
    {
      id: 4,
      message: t("please"),
      name: "password",
      label: t("password"),
      value: messag2,
      setname1: setMessag2,
      type: "password",
      placeholder: t("enterPassword"),
    }
  ];
  const map2 = map.map((a) => (
    <Form.Item
      key={a.id}
      rules={[{ required: true, message: a.message }]}
      name={a.name}
      label={a.label}
    >
      <Input
        value={a.value}
        onChange={(e) => a.setname1(e.target.value)}
        placeholder={a.placeholder}
        type={a.type}
      />
    </Form.Item>
  ));
  const click = () => {
    setMessag3(true)
    if (message === "Qodirov" && messag2 === "0871") {
      navigate("/diagnosis")
    } else {
      console.log("hato");
    }
  }
  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form_content}>
        <h3>{t("login")}</h3>
       {
        messag3===true ?<><h2> 
         { message !== "Qodirov"? <>{t("CHECK")}</> : messag2 !== "1234"? <>{t("CHECK")}</> : <></>
         }</h2></>:<></>
       }
        
        <Form
          name="basic"
          initialValues={{ remember: true }}
          className="login-form"
          layout="vertical"
        >
          {map2}
          <Button type="primary" htmlType="submit" onClick={click}>
            {t("login")}
          </Button>
        </Form>
      </div>
    </div>
  );
}
