import Link from 'next/link';
import React from 'react';
import navigationButtonStyles from './navigationbutton.module.css';


const NavigationButton = ({innerText, givenLink, enabled, activeRoute}) => {

    
    return (
        <Link href={enabled ? givenLink : '/'}  >
            <a className={activeRoute === givenLink ? navigationButtonStyles.active_route : navigationButtonStyles.navigationbutton}>
                {innerText}
                {
                    !enabled ?
                    <div style={{position:"absolute", top:0, left:0, zIndex:1, backgroundColor:"rgba(250,223,191,0.8)",
                    opacity:0.5, width:"100%", height:"100%", borderRadius:"inherit", cursor:"default"}} ></div>
                    :
                    null
                }
            </a>
        </Link>
    )
}


export default NavigationButton;