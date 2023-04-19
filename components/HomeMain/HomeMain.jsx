import React, {useEffect} from 'react';
import Image from 'next/image';
import homeMainStyles from './homemain.module.css';
import Asansor from '../../assets/asansor_alt.png';
import homeImage1 from '../../assets/home_image1.webp';
import Smiling from '../../assets/smiling.png';
import NavigationButton from '../NavigationButton/NavigationButton';
import Footer from '../Footer/Footer';
import ImageSlide from '../ImageSlide/ImageSlide';


const HomeMain = () => {

    const Avatar = ({imageLink, width, height}) => {
        return (
            <div style={{borderRadius:"50%", border:"1px dashed black"}} >
                <Image src={imageLink} width={width} height={height} />
            </div>
        )
    }

    return (
        <div className={homeMainStyles['homemain-container']} >
            <div className={homeMainStyles['imageslide-container']} >
                <ImageSlide />
            </div>
            <div className={homeMainStyles['homemain-outerblock']}  >
                <div className={homeMainStyles['homemain-innerblock']}  >
                    <Image src={Asansor} />
                    <h5 style={{fontWeight:400, fontSize:20}}>
                        EVDEN EVE ASANSÖRLÜ TAŞIMACILIK HİZMETİ
                    </h5>
                    <br/>
                    <p style={{fontWeight: 600, fontSize: 25}} >
                        Evden Eve Nakliyat Sektöründe 25+  yılı aşan Tecrübe ve 15 .000 den fazla başarılı taşıma işi ile
                    </p>
                    
                </div>
                <div className={homeMainStyles['homemain-innerblock']} 
                style={{
                    boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.2)", transition: "0.3s", borderRadius:"5px", backgroundColor:"#3b3a3e",
                    justifyContent:"space-evenly", 
                    }} >
                    <Image src={homeImage1} width={300} height={65} />
                    <div style={{fontWeight:500, fontSize: 20, marginTop:20, color:"white"}} >
                        Ankara Profesyonel Evden Eve Eşya Taşımacılığı
                    </div>
                    <div style={{fontWeight:450, fontSize:20, color:"white"}} >
                        Evden Eve Nakliyat ihtiyaçlarınız için Can Nakliyat; tecrübeli ve özenli personel kadrosu,
                        modern nakliye araçları ve ekipmanlari ile
                        hızlı, güvenli ve ekonomik bir taşınma deneyimini sizlere sunuyor.
                    </div>

                    <div style={{height:40, width:"100%", display:"flex", justifyContent:"space-evenly", alignItems:"center"}} >
                        <NavigationButton innerText="Fiyat Teklifi Al" givenLink="/iletisim" enabled={true} />
                        <NavigationButton innerText="Yol Tarifi Al" givenLink="/" enabled={true} />
                    </div>
                </div>
            </div>

            <div className={homeMainStyles['homemain-outerblock']}>
                <div className={homeMainStyles['homemain-innerblock']} >
                    
                </div>
                <div className={homeMainStyles['homemain-innerblock']} >

                </div>
            </div>

            <Footer />
        </div>
    )
}
export default HomeMain;