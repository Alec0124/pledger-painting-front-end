import { useEffect } from 'react';
import photo_01 from './images/photo_01.jpeg';
import photo_02 from "./images/photo_02.jpeg";
import photo_05 from "./images/photo_05.webp";

const Services = ({ setWindowLocation }) => {


    useEffect(() => {
        setWindowLocation("services");
    }, []);

    return <div id="services">
        <h1>Services</h1>
        <div className="service">
            <h2>
                Cabinet Painting, Color Matching, Interior/Exterior Painting, Pressure Washing
            </h2>
            <img alt="service" className="service-photo" src={photo_01} />
            <p>
                <p>
                    <b>Cabinet Painting:</b> Transform your kitchen or bathroom with our expert cabinet painting service. Say goodbye to outdated cabinets and hello to a fresh, modern look. Our meticulous process ensures a flawless finish that revitalizes your space without the hassle of a full renovation.
                </p>
                <p>
                    <b>Color Matching:</b> Don't settle for almost-right colors. Our precision color matching service guarantees a perfect match every time. Whether you're touching up walls or refreshing furniture, trust us to replicate your desired color with unmatched accuracy, ensuring seamless integration with existing décor.
                </p>
                <p>
                    <b>Interior/Exterior Painting:</b> Elevate your home's appeal inside and out with our professional painting services. From refreshing interior walls to enhancing exterior facades, we handle it all with expertise and care. Experience the transformative power of a fresh coat of paint, tailored to your style and preferences.
                </p>
                <p>
                    <b>Pressure Washing:</b> Renew and rejuvenate your property with our top-notch pressure washing service. Blast away dirt, grime, and stubborn stains from surfaces such as siding, decks, and driveways. Trust our powerful equipment and skilled team to restore the beauty and cleanliness of your home's exterior, making it look like new again.
                </p>
            </p>
        </div>
        <div className="service">
            <h2>
                Ceiling & Wall Painting, Caulking, Priming, Sealing, Trim & Baseboard Painting, Garage Floor Painting
            </h2>
            <img alt="service" className="service-photo" src={photo_02} />
            <p>
                <p>
                    <b>Ceiling & Wall Painting:</b> Revitalize your living space with our professional ceiling and wall painting services. From brightening up rooms with fresh coats of paint to expertly covering imperfections, we transform your interior with smooth, flawless finishes that reflect your style and personality.
                </p>

                <p>
                    <b>Caulking:</b> Seal the deal on your home's maintenance needs with our expert caulking services. From filling gaps and cracks to preventing moisture intrusion, our meticulous caulking techniques ensure long-lasting protection for your property, keeping it looking its best for years to come.
                </p>

                <p>
                    <b>Priming:</b> Lay the foundation for a perfect paint job with our premium priming services. Our professional priming process prepares surfaces for optimal paint adhesion, ensuring a smooth, even finish and enhanced durability. Trust us to prime your project for success, from walls and ceilings to trim and beyond.
                </p>

                <p>
                    <b>Sealing:</b> Preserve and protect your surfaces with our high-quality sealing services. Whether it's sealing porous surfaces to prevent stains or waterproofing areas prone to moisture, our expert sealing techniques provide lasting defense against the elements, keeping your property looking pristine and well-maintained.
                </p>

                <p>
                    <b>Trim & Baseboard Painting:</b> Add the finishing touch to your interior spaces with our meticulous trim and baseboard painting services. From crown molding to baseboards, we pay attention to every detail, delivering crisp, clean lines and flawless finishes that enhance the overall look and feel of your home.
                </p>

                <p>
                    <b>Garage Floor Painting:</b> Transform your garage into a clean, attractive space with our professional garage floor painting services. Our durable epoxy coatings not only enhance the appearance of your garage but also provide protection against stains, spills, and everyday wear and tear. Say goodbye to dull, stained concrete and hello to a garage floor that's as stylish as it is functional.
                </p>
            </p>
        </div>
        <div className="service">
            <h2>
                Abrasive Blasting, Acid Etching, Degreasing, Surface Preparation
            </h2>
            <img alt="service" className="service-photo" src={photo_05} />
            <p>
                <p>
                    <b>Abrasive Blasting:</b> Unleash the power of abrasive blasting to remove rust, paint, and grime from surfaces with precision and efficiency. Our advanced blasting techniques utilize abrasive materials propelled at high speeds to achieve a clean, smooth finish, perfect for preparing surfaces for painting, coating, or restoration.
                </p>

                <p>
                    <b>Acid Etching:</b> Elevate surface adhesion and durability with our professional acid etching services. By applying acidic solutions to concrete or metal surfaces, we create a textured profile that enhances paint or coating adhesion, ensuring long-lasting results that withstand the test of time.
                </p>

                <p>
                    <b>Degreasing:</b> Say goodbye to stubborn grease and oil stains with our thorough degreasing services. Using powerful cleaning agents and specialized equipment, we remove grease, oil, and other contaminants from surfaces, leaving them clean, prepped, and ready for painting, coating, or further treatment.
                </p>

                <p>
                    <b>Surface Preparation:</b> Set the stage for successful painting, coating, or restoration projects with our expert surface preparation services. From cleaning and degreasing to abrasive blasting and acid etching, we meticulously prepare surfaces to ensure optimal adhesion, durability, and performance. Trust us to deliver superior results that exceed your expectations, every time.
                </p>
            </p>
        </div>
    </div>
};

export default Services;