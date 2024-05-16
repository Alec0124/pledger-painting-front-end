import { useEffect } from 'react';
import aboutUsBanner from './images/aboutUsBanner.webp';

const About = ({ setWindowLocation }) => {

    useEffect(() => {
        setWindowLocation("about");
    }, []);

    return <div id="about" >
        <img className="banner" alt="about us banner" src={aboutUsBanner} />
        <h1>About Us</h1>
        <p>For nearly 40 years, our family at Phil Pledger Painting has been helping our customers transform their homes and businesses by bringing their visions to life. And as a family-owned business, we know the importance of not only providing you with a finished product that will take your breath away but customer service that will leave you feeling like the newest member of our family. So, whether we're doing stucco repair or drywall repair and replacement to prep for painting the interior or exterior of your home, or pressure washing your siding, we won’t leave until you’re completely satisfied. There’s no wonder we’ve earned the trust of Jacksonville and the surrounding areas.</p>
        <h1></h1>
        <p></p>
        <h2>Location & Hours</h2>
        <h1>Phil Pledger Painting</h1>
        <p>Jacksonville, FL</p>
        <p><b>(904) 743-5706</b></p>
        <h2>Hours</h2>
        <p>Mon

            08:00 am – 04:00 pm <br />


            Tue

            08:00 am – 04:00 pm <br />

            Wed

            08:00 am – 04:00 pm <br />

            Thu

            08:00 am – 04:00 pm <br />

            Fri

            08:00 am – 04:00 pm <br />

            Sat

            By Appointment <br />

            Sun

            Closed
        </p>
        <h1>Get in Touch</h1>
        <form className="contact-form">
            <input type="text" placeholder="Name *" />
            <input type="text" placeholder="Email *" />
            <input type="text" placeholder="Phone *" />
            <textarea style={{ height: "12em", margin: "10px 0px" }} placeholder="Message *" />
            <button id="contact-form-button">Send Message</button>
        </form>


    </div>
};

export default About;