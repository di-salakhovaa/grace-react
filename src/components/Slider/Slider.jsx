import SlideItem from "../SlideItem/SlideItem.jsx";
import prevIcon from "../../assets/prev.svg";
import nextIcon from "../../assets/next.svg";
import {useState} from "react";
import {SLIDES} from "../../data/slides.jsx";

const Slider = () => {
    const [items, setItems] = useState(SLIDES);
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = setCurrentIndex.bind(this, currentIndex >= items.length - 1 ? 0 : currentIndex + 1);
    const prev = setCurrentIndex.bind(this, currentIndex <= 0 ? items.length - 1 : currentIndex - 1);

    return (
        <div className="slider">
            <SlideItem item={items[currentIndex]}/>

            <div className="container">
                <div className="arrows">
                    {
                        currentIndex <= 0 || (
                            <button onClick={prev} className="prev_button">
                                <img src={prevIcon} alt=""/>
                            </button>
                        )
                    }

                    {
                        currentIndex >= items.length - 1 || (
                            <button onClick={next} className="next_button">
                                <img src={nextIcon} alt=""/>
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Slider;