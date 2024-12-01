import ExperienceLove from "../../../assets/second-section/experienceLove.svg";
import SpiritualDatings from "../../../assets/second-section/spiritualDating.svg";
import customizeProfile from "../../../assets/second-section/customizeProfile.svg";
import spiritualDating from "../../../assets/second-section/spiritualDating.svg";
import curveLine from "../../../assets/second-section/curveLine.svg";

const SectionTwo = () => {
  return (
    <div className="relative w-full top-0  md:px-8 px-3 bg-[blue] text-white text-center sm:text-left section2-bg">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-row md:flex-col w-full md:w-1/2">
          <div className="hidden sm:block ">
            <img src={ExperienceLove} alt="ExperienceLove" />
          </div>
        </div>
        <div className="flex flex-col justify-center w-full md:w-2/5">
          <div className="text-[42px] font-medium leading-[52px]">
            Experience Love and Connection on a{" "}
            <span className="curveLineSection"> Deeper Level</span>
          </div>
          <div className="sm:text-[18px] sm:font-[400] sm:leading-[30px] mt-[1rem]">
            Our goal with Presence is to help the world create meaningful,
            authentic connections with others who share your spiritual values
            and beliefs
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-5 mt-[1rem]">
            <div className="flex items-center sm:flex-col flex-row">
              <img src={SpiritualDatings} alt="SpiritualDatings" />
              <div className="flex gap-1">
                Spiritual <span className="text-[#00E093]">Dating</span>
              </div>
            </div>
            <div className="flex items-center sm:flex-col flex-row">
              <img src={customizeProfile} alt="customizeProfile" />
              <div className="flex gap-1">
                Customize <span className="text-[#FFA823]">Profile</span>
              </div>
            </div>

            <div className="flex items-center sm:flex-col flex-row">
              <img src={spiritualDating} alt="SpiritualDatings" />
              <div className="flex gap-1">
                Discover<span className="text-[#FF6240]">People</span>
              </div>
            </div>
          </div>
          <div className="block sm:hidden">
            <img src={ExperienceLove} alt="ExperienceLove" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
