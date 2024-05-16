import { useEffect, useState } from 'react';
import Slideshow from './Slideshow.js'
import photo_01 from './images/photo_01.jpeg';
import photo_02 from './images/photo_02.jpeg';
import photo_03 from './images/photo_03.jpeg';
import photo_04 from './images/photo_04.jpeg';
import photo_05 from "./images/photo_05.webp";
import photo_08 from './images/photo_08.webp';

const Home = ({ setWindowLocation }) => {

    const PHOTO_LIST = [photo_01, photo_02, photo_03, photo_04];

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const onClickSendEmail = async (e) => {
        e.preventDefault();
        //validate data, then send email.

        //validate data
        console.log("name: ", name);
        console.log("email: ", email);
        console.log("phone: ", phone);
        console.log("message: ", message);
        try {
            if(name.trim().length < 3) {
                throw "Name is missing or too short."
            }
            if(email.trim().length < 3) {
                throw "Email is missing or too short."
            }
            if(phone.trim().length < 3) {
                throw "Phone is missing or too short."
            }
            if(message.trim().length < 3) {
                throw "Message is missing or too short."
            }
        //prepare email
            let emailMessage = encodeURI(message);
            emailMessage = emailMessage + '%0D%0A%0D%0AName%3A ' + encodeURI(name) + '%0D%0APhone%3A ' + encodeURI(phone);

        //send email

        window.open(`mailto:kelly@philpledgerpainting.com?subject=Quote Request&body=${emailMessage}`);

        } catch (error) {
            console.error(error);
        }

    };

    //onChange

    const onChangeInput = (setInputFunction) => {
        return (e) => {
            setInputFunction(e.target.value);
        };
    };
    const onChangeName = onChangeInput(setName);
    const onChangeEmail = onChangeInput(setEmail);
    const onChangeMessage = onChangeInput(setMessage);
    const onChangePhone = onChangeInput(setPhone);

    useEffect(() => {
        setWindowLocation("home");
    }, []);

    return <div id="home">
        {/* slide show component */}
        <Slideshow imageList={PHOTO_LIST} />
        {/* welcome page */}
        {/* Make below an id and target it in the CSS; use vw and vl */}
        <div id="welcome" >
            <div>
                <img alt="serving since" src={photo_01} style={{ height: "400px", width: "400px", objectFit: "none", objectPosition: "25% 25%", marginTop: "15px" }} />
            </div>
            <div>
                <h2>Welcome to</h2>
                <h1>Phil Pledger Painting</h1>
                <p>From a small family enterprise in 1982 to a reliable service provider in the community, our journey has been driven by your trust and satisfaction. We mainly focus on drywall repairs and replacements, pressure. Together, let's create houses full of colors and happy faces.</p>
                <button>Read More</button>
            </div>
            <div id="contact-email">
                <h2>Contact Us</h2>
                <form className="contact-form">
                    <input type="text" placeholder="Name *" value={name} onChange={onChangeName} />
                    <input type="text" placeholder="Email *" value={email} onChange={onChangeEmail} />
                    <input type="text" placeholder="Phone *" value={phone} onChange={onChangePhone} />
                    <textarea style={{ height: "12em", margin: "10px 0px" }} placeholder="Message *" value={message} onChange={onChangeMessage} />
                    <button id="contact-form-button" onClick={onClickSendEmail} >Send Message</button>
                </form>
            </div>

        </div>
        <div id="testimonials">
            <h1>Testimonials</h1>
            <div className="testimonial">
                <h2 className="testimonial-subject">
                    Services: Power/pressure washing, Door painting, Exterior painting
                </h2>
                <div className="testimonial-rating">
                    5/5 &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <div className="testimonial-date">

                </div>
                <div className="testimonial-author">
                    Dean Buzzell
                </div>
                <div className="testiminoial-content">
                    A Pledger crew just finished repainting my residence. I found their proposal to be detailed, comprehensive, and a fair price. Their reviews are outstanding as well, so felt confident we'd have a good experience hiring this firm.<br />

                    I did have some issues at the initial walk-through, but the foreman (Mike) stepped up and knocked it out of the park with his customer service. I'd happily engage Phil Pledger Painting again for future jobs, and would gladly recommend them to friends and neighbors.
                </div>
                <div className="testimonial-published">

                </div>
            </div>
            <div className="testimonial">
                <h2 className="testimonial-subject">
                    Service: Exterior painting
                </h2>
                <div className="testimonial-rating">
                    5/5 &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <div className="testimonial-date">

                </div>
                <div className="testimonial-author">
                    Sherry Martello
                </div>
                <div className="testiminoial-content">
                    Phil Pledger Painting just completed painting the exterior of our home, which included a very challenging outdoor cabana with a high, stained ceiling.  We selected them primarily because they were a family owned business.  Kelly came out to give us a quote.  He was very knowledgeable  and a pleasure to work with throughout the process.  Their painters are employees (including family members), not subcontractors.  They weren't the least expensive, but quoted a very fair price.   The crew was pleasant, hard working and did a great job.  Good people!   The supervisor, Dylan, went out of his way to make certain everything was completed to our total satisfaction.  He is very thorough and detail oriented.  We highly recommend Phil Pledger Painting!
                </div>
                <div className="testimonial-published">

                </div>
            </div>
            <div className="testimonial">
                <h2 className="testimonial-subject">
                    Service: Exterior painting
                </h2>
                <div className="testimonial-rating">
                    5/5 &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <div className="testimonial-date">

                </div>
                <div className="testimonial-author">
                    Susan Hayman
                </div>
                <div className="testiminoial-content">
                    Pledger Painting did the most amazing job on our house! It looks brand new and perfect, and they did a thorough job. All of the workmen were professional,  neat, personable and clean. When they were done, everything was put back and put away. No clean up after these guys! The price was reasonable and exactly what we expected.  I HIGHLY recommend Pledger Painting! Wish they had a 10 star rating!
                </div>
                <div className="testimonial-published">

                </div>
            </div>
            <div className="testimonial">
                <h2 className="testimonial-subject">
                    Services: Water damage repair, Door painting, Exterior painting
                </h2>
                <div className="testimonial-rating">
                    5/5 &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <div className="testimonial-date">

                </div>
                <div className="testimonial-author">
                    Margie Marshall
                </div>
                <div className="testiminoial-content">
                    Positive: <b>Professionalism, Punctuality, Quality, Responsiveness, Value</b><br />
                    We hired Pledger Painting to paint the exterior of our house, and it was a great experience from start to finish. We have had both good and bad experiences with hiring contractors, and I have to say we don't have a single complaint about this company. They were on time with the estimate, and every day they worked on the house.  A couple of the workers actually arrived early several days.  Their foreman, Kelly, is top notch.  And one of the most impressive things was how detailed they were.  We noticed them sanding, caulking, and filling areas that we did not even seem to need any attention.  Our house is stucco on 3 sides and T-111 on the back and they covered every crack and hole.  The workers talked to us several times making sure everything looked good as the process went along, as if they themselves were the owners of the company.  We even had a couple small changes during the process and they gladly obliged. Now that it's finished, it's nice to have so many neighbors compliment us on how the house looks. In our experience it's unusual to have a contractor provide such a great experience.  I will be hiring them again!

                </div>
                <div className="testimonial-published">

                </div>
            </div>
            <div className="testimonial">
                <h2 className="testimonial-subject">
                    Service: Door painting
                </h2>
                <div className="testimonial-rating">
                    5/5 &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <div className="testimonial-date">

                </div>
                <div className="testimonial-author">
                    Joe Bernotas
                </div>
                <div className="testiminoial-content">
                    Positive: <b>Professionalism, Punctuality, Quality, Responsiveness, Value</b><br />
                    We are a general contractor located in Virginia.  We had a commercial job in Jacksonville that we needed a painter for.  The Phil Pledger team was so great!  They were patient, responsive and very professional.  They had absolutely no issue working with us despite the fact we were located out of state.  They provided us with a few estimates and completed work at one of our commercial sites.  I would highly recommend giving them a call if you have upcoming painting projects.  Not only were they great to work with but they are also fully insured (which makes a huge difference for us a contractor!).   We look forward to working with the Phil Pledger team again in the future.<br />
                    -Delran Building Services
                </div>
                <div className="testimonial-published">

                </div>
            </div>
        </div>
        <div id="services">
            <h1>Services</h1>
            <div className="service">
                <h2>
                    Cabinet Painting, Color Matching, Interior/Exterior Painting, Pressure Washing
                </h2>
                <img alt="service" className="service-photo" src={photo_01} />
                <div>
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
                </div>
            </div>
            <div className="service">
                <h2>
                    Ceiling & Wall Painting, Caulking, Priming, Sealing, Trim & Baseboard Painting, Garage Floor Painting
                </h2>
                <img alt="service" className="service-photo" src={photo_02} />
                <div>
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
                </div>
            </div>
            <div className="service">
                <h2>
                    Abrasive Blasting, Acid Etching, Degreasing, Surface Preparation
                </h2>
                <img alt="service" className="service-photo" src={photo_05} />
                <div>
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
                </div>
            </div>
        </div>
    </div>
};

export default Home;