
import photo_01 from './images/photo_01.jpeg';
import photo_02 from './images/photo_02.jpeg';
import photo_03 from './images/photo_03.jpeg';
import photo_04 from './images/photo_04.jpeg';
import photo_05 from './images/photo_05.webp';
import photo_06 from './images/photo_06.webp';
import photo_07 from './images/photo_07.webp';
import photo_08 from './images/photo_08.webp';
import photo_09 from './images/photo_09.webp';
import magnify from './images/magnify.png';
import nextPage from './images/right-arrow.png';
import previousPage from './images/left-arrow.png';
import exit from './images/exit.webp';
import { useState } from 'react';


const ImageGallery = () => {

    const PHOTOS_ARRAY = [photo_01, photo_02, photo_03, photo_04, photo_05, photo_06, photo_07, photo_08, photo_09];

    const [targetIndex, setTargetIndex] = useState(0);
    const [galleryClass, setGalleryClass] = useState("");

    //click functions

    const onClickRight = (e) => {
        //change image, going back
        if (targetIndex + 1 < PHOTOS_ARRAY.length) {
            setTargetIndex(targetIndex + 1);
        } else {
            setTargetIndex(0);
        }
    };
    const onClickLeft = (e) => {
        //change image, going back
        if (targetIndex - 1 >= 0) {
            setTargetIndex(targetIndex - 1);
        } else {
            setTargetIndex(PHOTOS_ARRAY.length - 1);
        }
    };
    const onClickExit = () => {
        //would like to make it where when user clicks in any blank space it exits
        setGalleryClass("");
    };
    const onClickThumbnail = (e) => {
        setTargetIndex(Number(e.target.parentElement.getAttribute("index")));
        setGalleryClass("active");
    }
    const onClickThumbnailHover = (e) => {
        console.log("e.target: ", e.target);
    };

    const displayPhotos = (photo, i) => {

        return <div className="thumbnail-container" index={i} key={i} onClick={onClickThumbnail}>
            <img className="photo-thumbnail" alt="photo" src={photo} />
            <img className="thumbnail-hover" alt="thumbnail-hover" src={magnify} />
        </div>
    };

    return <div id="photos-body">
        {PHOTOS_ARRAY.map(displayPhotos)}
        <div id="gallery-zoom" className={galleryClass}>
            {/* Left Arrow */}
            <img alt="previous" src={previousPage} className="button-previous" onClick={onClickLeft} />
            <img alt="next" src={nextPage} className="button-next" onClick={onClickRight} />
            {/* Right Arrow */}
            {/* Page Number */}
            <div className="page-label">
                {`${targetIndex + 1} / ${PHOTOS_ARRAY.length}`}
            </div>
            {/* Selected Image */}
            <div className="canvas">
                <img src={PHOTOS_ARRAY[targetIndex]} alt="photo gallery" className="gallery-large-photo" />
            </div>
            <img alt="exit" src={exit} className="exit" onClick={onClickExit} />
            <div className="title-label">
                Sapphire Getaway - Photo Gallery
            </div>

        </div>
    </div>
};

export default ImageGallery;