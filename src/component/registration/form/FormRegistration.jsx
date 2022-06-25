import React, {useState } from "react";
import styles from "./FormRegistration.module.css";
// import { useState } from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from "axios";

function FormRegistration(props) {
  const { t } = useTranslation()
  const [name, setName] = useState("");
  const [firstName, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [diplomid, setDiplomId] = useState("");
  const navigate = useNavigate();
 const user={name,firstName,email,password,diplomid}
 

  const click = () => { 
    axios.post("https://medicalapp-api-uz.herokuapp.com/api/user/create", user)
      .then((res) => {
      console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    // var formdata = new FormData();
    navigate("/diagnosis")
    // formdata.append("name", name);
    // formdata.append("firstName", firstName);
    // formdata.append("password", password);
    // formdata.append("diplomid", diplomid);
    // formdata.append("email", email);
    // var requestOptions = {
    //   method: "POST",
    //   body: formdata,
    //   redirect: "follow",
    // };
    // // console.log(formdata);
    // fetch("http://localhost:5001/api/user/create", requestOptions)
    // .then((response) => response.text())
    // .then((result) => {
    //     console.log(result);
   
    // })
    // .catch((error) => console.log("error", error));
    // // props.SignApp()
  }
  const map = [
    {
      id: 1,
      message: t("please"),
      name: "name",
      label: t("name"),
      value: name,
      setname1: setName,
      type: "text",
      placeholder: t("enterName"),
    },
    {
      id: 2,
      message: t("please"),
      name: "firstname",
      label: t("firstname"),
      value: firstName,
      setname1: setFirstname,
      type: "text",
      placeholder: t("enterFirstName"),
    },
    {
      id: 3,
      message: t("please"),
      name: "username",
      label: "Diplom Id",
      value: diplomid,
      setname1: setDiplomId,
      type: "text",
      placeholder: t("enterDiplom"),
    },
    {
      id: 4,
      message: t("please"),
      name: "password",
      label: t("password"),
      value: password,
      setname1: setPassword,
      type: "password",
      placeholder: t("enterPassword"),
    },
    {
      id: 5,
      message: t("please"),
      name: "email",
      label: "Email",
      value: email,
      setname1: setEmail,
      type: "password",
      placeholder: t("enterPassword"),
    },
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

  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form_content}>
        <h3>{t("transbank_r")}</h3>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          className="login-form"
          layout="vertical"
        >
          {map2}
          <Button type="primary" htmlType="submit" onClick={click}>
            Continue
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default FormRegistration;
