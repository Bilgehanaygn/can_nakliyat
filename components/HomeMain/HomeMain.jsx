import Banner from '../../assets/Banner3.png';
import React, {useEffect} from 'react';
import homeMainStyles from './homemain.module.css';

const HomeMain = () => {


    return (
        <div className={homeMainStyles['homemain-container']} >
            <div className={homeMainStyles['homemain-outerblock']} >
                <div className={homeMainStyles['homemain-innerblock']}  >
                    <h5 style={{fontWeight:600, fontSize:30, textAlign:"left"}}>
                        EVDEN EVE TAŞIMACILIK HİZMETİ
                    </h5>
                    <p>
                        Evden Eve Nakliyat Sektöründe 20+  yılı aşan Tecrübe ve 10.000 den fazla başarılı taşıma işi ile
                    </p>
                </div>
                <div className={homeMainStyles['homemain-innerblock']} >
                    <h1>
                        EVDEN EVE TAŞIMACILIK HİZMETİ
                    </h1>
                    <p>
                        Evden Eve Nakliyat Sektöründe 20+  yılı aşan Tecrübe ve 10.000 den fazla başarılı taşıma işi ile
                    </p>
                </div>
            </div>

        </div>
    )
}
export default HomeMain;