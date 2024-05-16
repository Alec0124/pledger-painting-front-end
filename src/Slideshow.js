import { useState, useEffect } from 'react';
import nextPage from './images/nextPage.png';
import previousPage from './images/previousPage.png';

const Slideshow = ({ imageList }) => {

    const SLIDE_DURATION = 6000;

    const numOfImages = imageList.length;
    const [selectedImage, setSelectedImage] = useState(imageList[0]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [durationAccumulator, setDurationAccumulator] = useState(0);

    const onClickNextPage = () => {
        // console.log("before index: ", selectedIndex);
        setDurationAccumulator(0);
        if (selectedIndex + 1 < numOfImages) {
            setSelectedImage(imageList[selectedIndex + 1]);
            setSelectedIndex(selectedIndex + 1);
        } else {
            setSelectedImage(imageList[0]);
            setSelectedIndex(0);
        }
        // console.log("after index: ", selectedIndex);
    }
    const onClickPreviousPage = () => {
        // console.log("before index: ", selectedIndex);
        setDurationAccumulator(0);
        if (selectedIndex - 1 >= 0) {
            setSelectedImage(imageList[selectedIndex - 1]);
            setSelectedIndex(selectedIndex - 1);
        } else {
            setSelectedImage(imageList[numOfImages - 1]);
            setSelectedIndex(numOfImages - 1);
        }
        // console.log("after index: ", selectedIndex);
    }
    const asyncInterval = async () => {
        setDurationAccumulator(durationAccumulator + 1000);
        if (durationAccumulator >= SLIDE_DURATION) {
            //tick image
            //set acc to 0
            onClickNextPage();
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {

            asyncInterval();
            
        }, 1000);
        return () => clearInterval(interval);
    }, [durationAccumulator]);

    return <div id="slideshow">
        <img alt="previous image" src={previousPage} className="slideshow-button-previous" onClick={onClickPreviousPage} />
        <img alt="slideshow" src={selectedImage} className="banner" />
        <img alt="next image" src={nextPage} className="slideshow-button-next" onClick={onClickNextPage} />
    </div>
};

export default Slideshow