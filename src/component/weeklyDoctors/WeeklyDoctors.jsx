import React from "react";

import styles from "./WeeklyDoctors.module.css";
import { NavLink } from 'react-router-dom';

const WeeklyDoctors = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Available to weekly Doctors</h1>
      <p className={styles.text}>
        Semper integer est quis leo, nunc. Quis lectus amet aenean massa turpis
        senectus pulvinar. Pharetra gravida volutpat faucibus faucibus.
      </p>
      <div className={styles.tabs}>
        <p className={styles.tabs__title}>Categories:</p>
        <div>
          <NavLink to='/all'>All</NavLink>
          <NavLink to='/pulmonary'>Pulmonary</NavLink>
          <NavLink to='/urology'>Urology</NavLink>
          <NavLink to='/cardiology'>Cardiology</NavLink>
          <NavLink to='/neurology'>Neurology</NavLink>
          <NavLink to='/surgery'>Surgery</NavLink>
          <NavLink to='/orthopedic'>Orthopedic</NavLink>
        </div>
      </div>
    </div>
  );
};

export default WeeklyDoctors;
