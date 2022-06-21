import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Carousel from "react-elastic-carousel";
import carousel1 from "../../assets/carousel1.png";
import carousel2 from "../../assets/carousel2.jpg";
import carousel3 from "../../assets/carousel3.jpg";
import carousel4 from "../../assets/carousel4.png";
import carousel5 from "../../assets/carousel5.png";
import carousel6 from "../../assets/carousel6.png";

import end from "../../assets/end.png";

import style from "./ThirdBlock.module.css";
import { useTranslation } from 'react-i18next';

const Block = ({ text, img, name, end }) => {
  return (
    <div className={style.carouselBlock}>
      <p>{text}</p>
      <div className={style.carouselBlock_img}>
        <img src={img} alt="" />
        <div className={style.carouselBlock_text}>
          <h1>{name}</h1>
          <h2>{end}</h2>
        </div>
      </div>
    </div>
  );
};

function CountBox({ end, text }) {
  return (
    <div className={style.count__box}>
      <CountUp start={1} end={end} duration={0.8}>
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
            <span ref={countUpRef} />
          </VisibilitySensor>
        )}
      </CountUp>
      <h1>{text}</h1>
    </div>
  );
}

const ThirdBlock = () => {
  const {t}=useTranslation()
  return (
    <div>
      <div className={style.carousel}>
        <h1 className={style.carousel__title}>{t("carousel")}</h1>
        <Carousel>
          <div className={style.carouselBlock_body}>
            <Block
              text={
               t("karona")
              }
              name="Corona Virus"
              end="2019"
              img={carousel1}
            />
            <Block
              text={
                t("maymuncha")
              }
              name={t("Maymun")}
              end="2003"
              img={carousel2}
            />
            <Block
              text={
                t("Akterial")
              }
              name="Sil"
              end="2019"
              img={carousel3}
            />
          </div>
          <div className={style.carouselBlock_body}>
            <Block
              text={
                t("teri")
              }
              name="Gipatet"
              end="----"
              img={carousel4}
            />
            <Block
              text={
                t("grip")
              }
              name="Grip"
              end="----"
              img={carousel5}
            />
            <Block
              text={
               t("ochoq")
              }
              name={t("Tulyaremiya")}
              end="----"
              img={carousel6}
            />
          </div>
        </Carousel>
      </div>
      <div className={style.count}>
        <CountBox end={500} text={t("bemor")} />
        <CountBox end={1500} text={t("sigim")} />
        <CountBox end={200} text={t("doctors")} />
        <CountBox end={15} text={t("olim")} />
      </div>
      <div className={style.endBLock}>
        <img className={style.endBLock_img__big} src={end} alt="" />
        <h1 className={style.endBLock__title}>
          Dieting Falling? Here’s When to Consider Bariatric Surgery to Protect
          Your Heart.
        </h1>
        <div className={style.endBLock__box}>
          <div>
            <img className={style.endBLock_img} src={carousel1} alt="" />
            <h1>
              by <strong>Xitoy</strong>
            </h1>
          </div>
          <h1>
            Date <strong>2019</strong>
          </h1>
        </div>
        <h1 className={style.endBLock__endText}>
          <strong>Corona virus</strong> Semper integer est quis leo, nunc. Quis
          lectus amet aenean massa turpis senectus pulvinar...
          <br />
          <br />
          <code>Pharetra gravida volutpat faucibus:</code>
          Faucibus sapien faucibus nisl amet, tristique. Mi duis in msed.Semper
          integerSemper integer est quis leo, nunc. Quis lec.
        </h1>
      </div>
    </div>
  );
};

export default ThirdBlock;
