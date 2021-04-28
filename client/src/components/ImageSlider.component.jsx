import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    vertical: false,
    verticalSwiping: false,
    arrows: true,
  };

  const imagesFive = images.slice(0, 6);

  return (
    <Slider {...settings}>
      {imagesFive &&
        imagesFive.map((imageItem, idx) => (
          <>
            {imageItem && idx < 5 && (
              <div key={imageItem._id}>
                <img src={imageItem.picture} alt="No slider" />
              </div>
            )}
          </>
        ))}
    </Slider>
  );
};

export default ImageSlider;

ImageSlider.defaultProps = {
  images: [],
};

/*
 {imagesFive &&
        imagesFive.map((imageItem, idx) => (
          <>
            {imageItem && idx < 5 && (
              <div key={imageItem._id}>
                <img src={imageItem.picture} alt="No slider" />
              </div>
            )}
          </>
        ))}
*/
