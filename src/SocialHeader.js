import facebook from "./images/facebook_icon.png";
import twitter from "./images/twitter_icon.png";
import instagram from "./images/instagram_icon.png";
import googlePlus from "./images/googlePlus_icon.png";

const SocialHeader = () => {


    return <div id="social-header">
        <div id="social-header-left">

        </div>
        <div id="social-header-right">
            <a target="_blank" href="https://www.facebook.com/PhilPledgerPainting" >
                <img className="social-icon" alt="facebook" src={facebook} />
            </a>
            {/* <img className="social-icon" alt="twitter" src={twitter} />
            <img className="social-icon" alt="instagram" src={instagram} />
            <img className="social-icon" alt="googlePlus" src={googlePlus} /> */}
        </div>
    </div>
};

export default SocialHeader;