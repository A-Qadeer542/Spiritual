import shape1 from "../../../assets/first-section/shape2.svg";
import shape2 from "../../../assets/first-section/Shape1.png";
import Logo from "../../../assets/first-section/Logo.svg";

import bannerBg from "../../../assets/first-section/bannerBg.svg";
import GooglePlay from "../../../assets/first-section/GooglePlay.svg";
import AppStore from "../../../assets/first-section/AppStore.svg";
import HeroSection from "../../../assets/first-section/hero-section-girl.svg";

const SectionOne = () => {
  return (
    <div className="section1-bg">
      <div className="section1-main">
        <div className="section1-shapes">
          <div className="section1-shape-1">
            <img src={shape2} alt="shape1" width={50} height={50} />
          </div>
          <div className="section1-shape-2">
            <img src={shape1} alt="shape1" width={100} height={33} />
          </div>
        </div>
        <div className="section1-col-2">
          <div className="section1-logo">
            <img src={Logo} alt="Logo" width={200} height={200} />
          </div>
          <div className="section1-banner">
            <img src={bannerBg} alt="Logo" />
          </div>
          <div className="section1-heading ">Find your Love</div>
          <div className="section1-subHeading">
            Love Is Only A Few Present{" "}
            <span className="curveLineSection"> Moments Away!</span>
          </div>
          <div className="section1-para">
            Explore your spirituality! Gain a deeper understanding of yourself &
            meet unique partners that share your spiritual beliefs and values!
          </div>
          <div className="section1-siteslogo ">
            <div className="google-logo">
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noreferrer"
              >
                <img src={GooglePlay} alt="GooglePlay" />
              </a>
            </div>
            <div className="app-store">
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={AppStore} alt="AppStore" />
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-4/5 hidden lg:block">
          <img src={HeroSection} alt="HeroSection" />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
