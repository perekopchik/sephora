import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ImageSlider = ({ images }) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slideCount = images.length;

    const prevSlide = () =>
        setCurrentSlide((prev) => (prev === 0 ? slideCount - 1 : prev - 1));

    const nextSlide = () =>
        setCurrentSlide((prev) => (prev === slideCount - 1 ? 0 : prev + 1));

    return (
        <div className=" flex flex-row">
            <div className="flex flex-row">
                <div className="slider-thumbnails flex flex-col mt-10">
                    {images.slice(0,5).map((image, i) => (
                        <img
                            key={i}
                            alt={`variant-${i}`}
                            className={`slider-thumbnail ${
                                currentSlide === i ? 'active' : ''
                            }`}
                            src={image}
                            onClick={() => setCurrentSlide(i)}
                        />
                    ))}
                </div>
                <div className="slider">
                    <img
                        alt={`product`}
                        className="slider-image"
                        src={images[currentSlide]}
                    />
                    <ArrowBackIosNewIcon className="slider-prev" onClick={prevSlide}/>
                    <ArrowForwardIosIcon className="slider-next" onClick={nextSlide}/>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;