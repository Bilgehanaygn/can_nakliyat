import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ImageSlideStyles from "./ImageSlide.module.css";

const slideImages = [
  {
    url: "./anasayfa_image.jpg",
    caption: "Slide 1",
  },
  {
    url: "./anasayfa_image2.jpg",
    caption: "Slide 2",
  },
  {
    url: "./anasayfa_image3.jpg",
    caption: "Slide 3",
  },
];

const ImageSlide = () => {
  return (
    <div className="slide-container" style={{ position: "relative" }}>
      <div className={ImageSlideStyles["text-wrapper"]}>
        <div className={ImageSlideStyles["upper-text-wrapper"]}>
          {"Can Naklİyat".toUpperCase()}
        </div>
        {"Güvenli - Hızlı - Hesaplı".toUpperCase()}
        <br />
      </div>
      <Slide arrows={true}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className={ImageSlideStyles["div-style"]}
              style={{
                backgroundImage: `url(${slideImage.url})`,
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageSlide;
