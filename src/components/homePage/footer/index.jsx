import Logo from "../../../assets/Footer/Logo.svg";
import Location from "../../../assets/Footer/map-pin.svg";
import Calling from "../../../assets/Footer/call-calling.svg";
import Facebook from "../../../assets/Footer/facebook.svg";
import linkdin from "../../../assets/Footer/linkdin.svg";
import Instagram from "../../../assets/Footer/Instagram.svg";
import twitter from "../../../assets/Footer/twiiter.svg";
import AppStore from "../../../assets/Footer/appstore.svg";
import GooglePlay from "../../../assets/Footer/GooglePlay.svg";

const Footer = () => {
  return (
    <div className="w-full top-0  md:px-8 px-3 footer text-white text-center sm:text-left">
      <div className="flex flex-col md:flex-row items-center w-full sm:w-[80%] m-auto py-3 sm:py-10 gap-10 sm:gap-[10rem] ">
        <div className="flex flex-col items-center sm:items-start gap-3">
          <img src={Logo} alt="Logo" width={90} height={90} />
          <div className="text-[24px] leading-[34px]">
            Be More Present Than Ever!
          </div>
          <div className="text-[16px] leading-[28px]">
            Stay up-to-date with Presence - Spiritual Dating Enter your email to
            stay updated with new app features and your favorite person.
          </div>
          <div className="flex gap-3">
            <div className="flex gap-3">
              <img src={Location} alt="Location" />
              <div className="">Blue Area USA</div>
            </div>
            <div className="flex gap-3">
              <img src={Calling} alt="Calling" />
              <div className="">+1 3214 456 123</div>
            </div>
          </div>
          <div className="flex gap-5">
            <img src={Facebook} alt="Facebook" />
            <img src={linkdin} alt="linkdin" />
            <img src={Instagram} alt="Instagram" />
            <img src={twitter} alt="twitter" />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-[18px] sm:text-[24px] font-bold ">
            Subscribe Our News Letter
            <div className="border-b-[5px] border-t-[1px]   border-l-[0.5px] border-r-[5px] rounded-md border-white flex justify-between !text-white mb-2 sm:mb-[35px] mx-0">
              <input
                type="text"
                className="placeholder-white text-white border-none outline-none bg-transparent text-[12px] m-0 sm:m-[10px] pl-1 sm:pl-[5px]"
                placeholder="E.g. ziggy@space.com"
              />
              <button className="text-white bg-[#FD5530] py-[1px] px-3 sm:px-[14px] text-[13px] rounded-md m-0 sm:m-[5px]">
                Subscribe
              </button>
            </div>
          </div>

          <div className="text-[20px] sm:text-[25px] font-bold">
            Download and Signup Now!
          </div>
          <div className="text-sm sm:text-[18px] break-words">
            Book time with your favorite person and schedule performances of
            your most desired person with just a few clicks.
          </div>
          <div className="flex flex-row justify-center sm:justify-start gap-2">
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={GooglePlay}
                alt="GooglePlay"
                className="w-[100px] sm:w-[145px] h-[48px]"
              />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={AppStore}
                alt="AppStore"
                className="w-[100px] sm:w-[145px] h-[48px]"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between text-sm sm:text-[1.1rem] sm:w-[80%] m-auto py-5 sm:py-10 border-t border-white border-opacity-20	">
        <div>© Copyright 2023 Presence - Spiritual Dating</div>
        <div className="flex sm:flex-row text-sm sm:text-[1.1rem] gap-2">
          <div>Privacy Policy</div>
          <div className="">|</div>
          <div className="">Terms and Conditions</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
