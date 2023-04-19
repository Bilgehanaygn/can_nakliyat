import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ImageSlideStyles from './ImageSlide.module.css';

const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
  },
];

const ImageSlide = () => {
    return (
      <div className="slide-container" style={{position:"relative"}} >
        <div className={ImageSlideStyles["text-wrapper"]} >
            <div className={ImageSlideStyles["upper-text-wrapper"]} >
                {"Can Naklİyat".toUpperCase()}
            </div>
            {"Güvenli - Hızlı - Hesaplı".toUpperCase()}
            <br/>
            
        </div>
        <Slide arrows={true} >
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className={ImageSlideStyles['div-style']} style={{'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default ImageSlide;