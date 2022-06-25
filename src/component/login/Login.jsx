import React, { useEffect, useState } from "react";
import styles from "../registration/form/FormRegistration.module.css";
// import { useState } from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { login } from '../../redux/actions/authAction';
export default function Login(props) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [password, setPassword] = useState('')
  const [diplomId, setDiplomId] = useState('')

  const { isAuthenticated } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/diagnosis");
    }
  }, [isAuthenticated, navigate]);

  const onFinish = (values) => {
    dispatch(login({password: password, diplomid: diplomId}));
  };

  const map = [
    {
      id: 1,
      message: "Please input your Diplom Id!",
      name: "name",
      label: "Diplom Id",
      value: diplomId,
      setname1: setDiplomId,
      type: "text",
      placeholder: "Enter your Diplom ID",
    },
    {
      id: 4,
      message: "Please input your Password!",
      name: "password",
      label: "Password",
      value: password,
      setname1: setPassword,
      type: "password",
      placeholder: "Enter your Username",
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
  
  return (
    <div className={styles.form_wrapper}>
      <div className={styles.form_content}>
        <h3>{t("login")}</h3>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          className="login-form"
          layout="vertical"
        >
          {map2}
          <Button type="primary" htmlType="submit" onClick={onFinish}>
          {t("login")}
          </Button>
        </Form>
      </div>
    </div>
  );
}
