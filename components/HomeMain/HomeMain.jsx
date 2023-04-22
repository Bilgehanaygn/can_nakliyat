import React, { useEffect } from "react";
import Image from "next/image";
import homeMainStyles from "./homemain.module.css";
import Asansor from "../../assets/asansor_alt.png";
import homeImage1 from "../../assets/home_image1.webp";
import Smiling from "../../assets/happy.jpg";
import NavigationButton from "../NavigationButton/NavigationButton";
import Footer from "../Footer/Footer";
import ImageSlide from "../ImageSlide/ImageSlide";
import CheckMark from "../Icons/CheckMark/ChecMark";

const Avatar = ({ imageLink, width, height }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          borderRadius: "50%",
          border: "1px dashed black",
        }}
      >
        <Image src={imageLink} width={width} height={height} />
      </div>
      <div style={{ fontSize: 25, fontWeight: 500, color: "white" }}>
        Ayca Hanim
      </div>
    </div>
  );
};

const HomeMain = () => {
  return (
    <div className={homeMainStyles["homemain-container"]}>
      <div className={homeMainStyles["imageslide-container"]}>
        <ImageSlide />
      </div>
      <div className={homeMainStyles["homemain-outerblock"]}>
        <div
          className={homeMainStyles["homemain-innerblock"]}
          style={{
            color: "white",
            fontWeight: 500,
            padding: "10px 20px",
            boxSizing: "border-box",
          }}
        >
          <Image src={Asansor} />
          <h5 style={{ fontWeight: 400, fontSize: 20 }}>
            EVDEN EVE ASANSÖRLÜ TAŞIMACILIK HİZMETİ
          </h5>
          <br />
          <p style={{ fontWeight: 600, fontSize: 22 }}>
            Evden Eve Nakliyat Sektöründe 25+ yılı aşan Tecrübe ve 15 .000 den
            fazla başarılı taşıma işi ile
          </p>
        </div>
        <div className={homeMainStyles["homemain-innerblock"]}>
          <Image src={homeImage1} width={300} height={65} />
          <div
            style={{
              fontWeight: 500,
              fontSize: 20,
              marginTop: 20,
              color: "white",
            }}
          >
            Ankara Profesyonel Evden Eve Eşya Taşımacılığı
          </div>
          <div style={{ fontWeight: 450, fontSize: 20, color: "white" }}>
            Evden Eve Nakliyat ihtiyaçlarınız için Can Nakliyat; tecrübeli ve
            özenli personel kadrosu, modern nakliye araçları ve ekipmanlari ile
            hızlı, güvenli ve ekonomik bir taşınma deneyimini sizlere sunuyor.
          </div>

          <div
            style={{
              height: 40,
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <NavigationButton
              innerText="Fiyat Teklifi Al"
              givenLink="/iletisim"
              enabled={true}
            />
            <NavigationButton
              innerText="Yol Tarifi Al"
              givenLink="/"
              enabled={true}
            />
          </div>
        </div>
      </div>
      <div
        className={homeMainStyles["homemain-outerblock"]}
        style={{ backgroundColor: "#3b3a3e" }}
      >
        <div
          className={homeMainStyles["homemain-innerblock"]}
          style={{ boxShadow: "none", height: 500 }}
        ></div>
        <div
          className={homeMainStyles["homemain-innerblock"]}
          style={{ boxShadow: "none", height: 500 }}
        ></div>
        <div
          className={homeMainStyles["homemain-innerblock"]}
          style={{ boxShadow: "none", height: 500 }}
        ></div>
      </div>

      <div className={homeMainStyles["homemain-outerblock"]}>
        <div className={homeMainStyles["homemain-innerblock"]} style={{}}>
          <Avatar imageLink={Smiling} height={100} width={100} />
          <div style={{ fontSize: 20, color: "white", padding: "5px 25px" }}>
            Ayca Hanim biiz denedi cok memnun kaldi, siz de denerseniz sizin de
            kalacaginizdan eminim. Ayca Hanim biiz denedi cok memnun kaldi, siz
            de denerseniz sizin de kalacaginizdan eminim.
          </div>
        </div>
        <div
          className={homeMainStyles["homemain-innerblock"]}
          style={{
            color: "white",
            fontWeight: 500,
          }}
        >
          <div style={{ fontSize: 27 }}>Hizmetlerimiz</div>
          <div
            style={{
              height: 300,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              fontSize: 22,
            }}
          >
            <a
              href={"/iletisim"}
              className={homeMainStyles["hizmetler-button"]}
            >
              <CheckMark />
              Şehiriçi Nakliyat
            </a>
            <a
              href={"/iletisim"}
              className={homeMainStyles["hizmetler-button"]}
            >
              <CheckMark />
              Şehirlerarası Nakliyat
            </a>
            <a
              href={"/iletisim"}
              className={homeMainStyles["hizmetler-button"]}
            >
              <CheckMark />
              Asansörlü Taşımacılık
            </a>
            <a
              href={"/iletisim"}
              className={homeMainStyles["hizmetler-button"]}
            >
              <CheckMark />
              Kurumsal Taşıma
            </a>
            <a
              href={"/iletisim"}
              className={homeMainStyles["hizmetler-button"]}
            >
              <CheckMark />
              Parça Eşya Taşıma
            </a>
            <a
              href={"/iletisim"}
              className={homeMainStyles["hizmetler-button"]}
            >
              <CheckMark />
              Eşya Depolama
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default HomeMain;
