import { useEffect } from 'react';

const Testimonials = ({ setWindowLocation }) => {


    useEffect(() => {
        setWindowLocation("testimonials");
    }, []);

    return <div id="testimonials">
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
};

export default Testimonials;