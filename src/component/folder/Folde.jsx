import React, { useState } from 'react'
import style from "./Folder.module.css"
import Modal from 'antd/lib/modal/Modal';
import { useNavigate } from 'react-router-dom';
export const Folde = () => {
    const [message, setMessage] = useState("")
    const [messag2, setMessag2] = useState("")
    const [messag3, setMessag3] = useState("")
    const navitae = useNavigate()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleOk = () => {
        setIsModalVisible(false);
        navitae("/")
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const data = {
        message: message,
        messag2: messag2,
        messag3: messag3
    }
    const arr = []
    const click = () => {
        arr.push(data)
        if (message !== "" || messag2 !== "" || messag3 !== "") {
            setIsModalVisible(true);
        }

    }
    return (
        <div className={style.Folder}>
            <Modal title="Bemor tashxisi" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <h2 > <b style={{ color: "#0A4FB6" }}> Kasallik Turi:</b> {message}</h2>
                <h2  > <b style={{ color: "#0A4FB6" }}>Kelgan vaqti:</b>  {messag2} </h2>
                <h2><b style={{ color: "#0A4FB6" }}> Tugash  vaqti:</b>  {messag3} </h2>
            </Modal>
            <div className={style.button}>
                <h1>Bemor tashxisi</h1>
                <label htmlFor="">Kasallik Turi</label> <br />
                <input type="text" value={message}
                    onChange={(e) => setMessage(e.target.value)} name="" id="" /> <br />
                <label htmlFor="">Kelgan vaqti: </label> <br />
                <input type="date" value={messag2}
                    onChange={(e) => setMessag2(e.target.value)} name="" id="" /> <br />
                <label htmlFor="">Tugash  vaqti:</label> <br />
                <input type="date" value={messag3}
                    onChange={(e) => setMessag3(e.target.value)} name="" id="" /> <br />
                <button onClick={click}>Yuborish</button>

            </div>

        </div>
    )
}