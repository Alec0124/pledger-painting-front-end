import { useEffect } from 'react';
import ImageGallery from './ImageGallery.js';
import photo_01 from './images/photo_01.jpeg';
import photo_02 from './images/photo_02.jpeg';
import photo_03 from './images/photo_03.jpeg';
import photo_04 from './images/photo_04.jpeg';
import photo_05 from './images/photo_05.webp';
import photo_06 from './images/photo_06.webp';
import photo_07 from './images/photo_07.webp';
import photo_08 from './images/photo_08.webp';
import photo_09 from './images/photo_09.webp';

const Photos = ({ setWindowLocation }) => {


    useEffect(() => {
        setWindowLocation("photos");
    }, []);

    return <div id="photos">
        <div id="photos-header">
            Our Project Images
        </div>
        <ImageGallery />
    </div>
};

export default Photos;