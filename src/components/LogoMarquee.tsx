import logo1 from "/img/apple.png";
import logo2 from "/img/facebook.png";
import logo3 from "/img/illustrator.png";
import logo4 from "/img/photoshop.png";
import logo5 from "/img/search.png";
import logo6 from "/img/tiktok.png";
import logo7 from "/img/whatsapp.png";
import logo8 from "/img/youtube.png";

const logoArr = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const LogoMarquee = () => {
    return (
        <div className="flex flex-row p-10">
            {logoArr.map((logo) => (
                <img className="ml-4 mr-4" src={logo} width={100}></img>
            ))}
        </div>
    );
};

export default LogoMarquee;
