import React from "react";

import styles from "./WeeklyDoctors.module.css";
import { NavLink } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import img1 from '../../assets/corona1.jpg'
import img2 from '../../assets/corona1.webp'
import img3 from '../../assets/carousel4.png'
import img4 from '../../assets/carousel3.jpg'
import img5 from '../../assets/carousel2.jpg'
import img6 from '../../assets/carousel5.png'
import img7 from '../../assets/carousel6.png'

function TabsImg({ come, fix, dead, img, name }) {
  return (
    <div className={styles.tabs__img} style={{backgroundImage: `url(${img})`}}>
      <div>
        <p> {come}-yil krib keldi</p>
        <h1>{name}</h1>
        <h2>
          <strong>Tuzalganlar:</strong>
          {fix}
        </h2>
        <h2>
          <strong>O'lim holati bo'yicha Dunyoda:</strong> {dead}
        </h2>
      </div>
    </div>
  );
}

function TabsImgBody1() {
  return (
    <div className={styles.tabs__img__body}>
      <TabsImg come={2019} name={'Corona Virus'} fix={" 96,19%"} dead={107} img={img2}/>
      <TabsImg come={'---- '} name={'Mayun chechak'} fix={" 96,19%"} dead={107} img={img5}/>
      <TabsImg come={'---- '} name={'Sariq kasal'} fix={" 96,19%"} dead={107} img={img3}/>
      <TabsImg come={'---- '} name={'Sil kasal'}  fix={" 96,19%"} dead={107} img={img4}/>
      <TabsImg come={'----'} name={'Grip kasal'} fix={"96,19%"} dead={107} img={img6}/>
      <TabsImg come={'---- '} name={'Tulyaremiya '} fix={"96,19%"} dead={107} img={img7}/>
    </div>
  );
}
function TabsImgBody2() {
  return (
    <div className={styles.tabs__img__body}>
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={img2}/>
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={img1}/>
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={img2}/>
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={img1}/>
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={img2}/>
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={img1}/>
    </div>
  );
}
function TabsImgBody3() {
  return (
    <div className={styles.tabs__img__body}>
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={img2}/>
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={img2}/>
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={img1}/>
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={img1}/>
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={img2}/>
      <TabsImg come={2020} fix={"96,19%"} dead={107} img={img2}/>
    </div>
  );
}

const WeeklyDoctors = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Available to weekly Doctors</h1>
      <p className={styles.text}>
        Semper integer est quis leo, nunc. Quis lectus amet aenean massa turpis
        senectus pulvinar. Pharetra gravida volutpat faucibus faucibus.
      </p>
      <div className={styles.tabs}>
        <div className={styles.tabs__navbar}>
          <NavLink to={"/"}>All</NavLink>
          <NavLink to={"/corona"}>Corona</NavLink>
          <NavLink to={"/maymun"}>Maymun Chechak</NavLink>
          <NavLink to={"/sil"}>Sil Kasali</NavLink>
        </div>
        <Routes>
          <Route index exact element={<TabsImgBody1/>}/>
          <Route path="corona" element={<TabsImgBody2/>}/>
          <Route path="maymun" element={<TabsImgBody3/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default WeeklyDoctors;
