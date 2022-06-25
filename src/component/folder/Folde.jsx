import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select } from "antd";
import axios from "axios";

import style from "./Folder.module.css";

const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
export const Folde = () => {
  const [message, setMessage] = useState("");
  const [messag2, setMessag2] = useState("");
  const [messag3, setMessag3] = useState("");
  const [messag4, setMessag4] = useState("");
  const [messag5, setMessag5] = useState("");
  const [messag6, setMessag6] = useState("");
  const navigate = useNavigate();
  const data = {
    title: messag5,
    description: message,
    bemorId: messag4,
  };
  const arr = [];

  const click = () => {
    axios
      .post(
        "https://medicalapp-api-uz.herokuapp.com/api/user/history/create",
        data
      )
      .then((res) => console.log(res.data));
    arr.push(data);
    navigate('/')
  };
  return (
    <div className={style.Folder}>
      <h1>Bemor Tashxisi</h1>
      {/* <h2>Shifokor : Qodirov</h2> */}
      <div className={style.card}>
        <div>
          <label htmlFor="">Bemorning ismi</label> <br />
          <input
            type="text"
            value={messag5}
            onChange={(e) => setMessag5(e.target.value)}
            name=""
            id=""
          />{" "}
          <br />
        </div>
        <div>
          <label htmlFor="">Bemorning Familyasi</label> <br />
          <input
            type="text"
            value={messag6}
            onChange={(e) => setMessag6(e.target.value)}
            name=""
            id=""
          />{" "}
          <br />
        </div>
      </div>
      <div className={style.card}>
        <div>
          <label htmlFor="">Kasallik Turi</label> <br />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name=""
            id=""
          />{" "}
          <br />
        </div>
        <div>
          <label htmlFor="">Shifohona nomi</label> <br />
          <input type="text" name="" id="" /> <br />
        </div>
      </div>
      <div className={style.card}>
        <div>
          <label htmlFor="">Kelgan vaqti: </label> <br />
          <input
            type="date"
            value={messag2}
            onChange={(e) => setMessag2(e.target.value)}
            name=""
            id=""
          />{" "}
          <br />
        </div>
        <div>
          <label htmlFor="">Tugash vaqti:</label> <br />
          <input
            type="date"
            value={messag3}
            onChange={(e) => setMessag3(e.target.value)}
            name=""
            id=""
          />{" "}
          <br />
        </div>
      </div>
      <div className={style.card}>
        <div>
          <label htmlFor="">Bemor Id raqami</label> <br />
          <input
            type="text"
            value={messag4}
            onChange={(e) => setMessag4(e.target.value)}
            name=""
            id=""
          />
          <br />
        </div>
        <div>
          <label htmlFor="">Hududni tanlang</label>
          <br />
          <Select
            defaultValue="lucy"
            className={style.Input34}
            onChange={handleChange}
          >
            <Option value="jack">Andijon </Option>
            <Option value="lucy">Buxoro </Option>
            <Option value="Yiminghe">Fargʻona </Option>
            <Option value="Yiminghe">Namangan </Option>
            <Option value="Yiminghe">Jizzax </Option>
            <Option value="Yiminghe">Xorazm </Option>
            <Option value="Yiminghe">Navoiy </Option>
            <Option value="Yiminghe">Qashqadaryo </Option>
            <Option value="Yiminghe">Qoraqalpogʻiston </Option>
            <Option value="Yiminghe">Samarqand </Option>
            <Option value="Yiminghe">Sirdaryo </Option>
            <Option value="Yiminghe">Surxondaryo </Option>
            <Option value="Yiminghe">Toshkent</Option>
          </Select>
          <br />
        </div>
      </div>

      <button onClick={click}>Yuborish</button>
    </div>
  );
};
