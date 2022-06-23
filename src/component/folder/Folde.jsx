import React, { useState } from 'react'
import style from "./Folder.module.css"
import Modal from 'antd/lib/modal/Modal';
import { useNavigate } from 'react-router-dom';
export const Folde = () => {
    const [message, setMessage] = useState("")
    const [messag2, setMessag2] = useState("")
    const [messag3, setMessag3] = useState("")
    const [messag4, setMessag4] = useState("")
    const [messag5, setMessag5] = useState("")
    const [messag6, setMessag6] = useState("")
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
        messag3: messag3,
        messag4: messag4,
        messag5: messag5,
        messag6: messag6,
    }
    const arr = []
    const click = () => {
        arr.push(data)
        if (message !== "" || messag2 !== "" || messag3 !== "" || messag4 !== "" || messag5!=="" || messag6!=="") {
            setIsModalVisible(true);
        }

    }
    return (
        <div className={style.Folder}>
            <Modal title="Bemor tashxisi" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <h2 > <b style={{ color: "#0A4FB6" }}> Bemorning ismi:</b> {messag5}</h2>
                <h2 > <b style={{ color: "#0A4FB6" }}> Bemorning Familyasi:</b> {messag6}</h2>
                <h2 > <b style={{ color: "#0A4FB6" }}> Kasallik Turi:</b> {message}</h2>
                <h2  > <b style={{ color: "#0A4FB6" }}>Kelgan vaqti:</b>  {messag2} </h2>
                <h2><b style={{ color: "#0A4FB6" }}> Tugash  vaqti:</b>  {messag3} </h2>
                <h2><b style={{ color: "#0A4FB6" }}> Bemor Id raqami:</b>  {messag4} </h2>
            </Modal>
            <div className={style.button}>
                <h1>Bemor Tashxisi</h1>
                <h2>Shifokor : Qodirov</h2>
                <label htmlFor="">Bemorning ismi</label> <br />
                <input type="text" value={messag5}
                    onChange={(e) => setMessag5(e.target.value)} name="" id="" /> <br />
                <label htmlFor="">Bemorning Familyasi</label> <br />
                <input type="text" value={messag6}
                    onChange={(e) => setMessag6(e.target.value)} name="" id="" /> <br />
                <label htmlFor="">Kasallik Turi</label> <br />
                <input type="text" value={message}
                    onChange={(e) => setMessage(e.target.value)} name="" id="" /> <br />
                <label htmlFor="">Kelgan vaqti: </label> <br />
                <input type="date" value={messag2}
                    onChange={(e) => setMessag2(e.target.value)} name="" id="" /> <br />
                <label htmlFor="">Tugash  vaqti:</label> <br />
                <input type="date" value={messag3}
                    onChange={(e) => setMessag3(e.target.value)} name="" id="" /> <br />
                <br />
                <label htmlFor="">Bemor Id raqami</label> <br />
                <input type="text" value={messag4}
                    onChange={(e) => setMessag4(e.target.value)} name="" id="" /> <br />
                <button onClick={click}>Yuborish</button>

            </div>

        </div>
    )
}