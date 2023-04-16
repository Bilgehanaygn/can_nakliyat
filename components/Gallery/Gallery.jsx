import React, {useState} from 'react';
import galleryStyles from './gallery.module.css';
import Image from 'next/future/image';
import allGalleryImages from '../../assets/gallery/index';

const GalleryMember = ({galleryImage}) => {

    const [isHover, setIsHover] = useState(false);
    console.log(isHover)

    return (
        <div className={galleryStyles['teammember-wrapper']}
        onMouseOver={()=>{setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}} >
            <Image src={galleryImage} alt="img" className={galleryStyles['teammember-image']} />
        </div>
    )
}

const Team = () => {

    return (
        <div className={galleryStyles['teammain-container']} >
            <div style={{fontWeight:700, fontSize:60, textAlign:"center", marginBottom:30}} >
                Foto Galeri
            </div>
            <div className={galleryStyles['teammembers-container']} >
            {
                allGalleryImages.slice(0,5).map((element,index)=>
                    <GalleryMember galleryImage={element} key={index}/> 
                )
            }
            </div>
            <div className={galleryStyles['teammembers-container']} >
                {
                    allGalleryImages.slice(5,10).map((element,index)=>
                        <GalleryMember galleryImage={element} key={index}/> 
                    )
                }
            </div>
            <div className={galleryStyles['teammembers-container']} >
                {
                    allGalleryImages.slice(10,15).map((element,index)=>
                        <GalleryMember galleryImage={element} key={index}/> 
                    )
                }
            </div>

         </div>
    )
}

export default Team;