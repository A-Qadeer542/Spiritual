import Girl from "../../../assets/third-section/Girl.svg";

import Arrow from "../../../assets/third-section/Arrow.svg";
import Num1 from "../../../assets/third-section/Num1.svg";
import Num2 from "../../../assets/third-section/Num2.svg";
import Num3 from "../../../assets/third-section/Num3.svg";
import Num4 from "../../../assets/third-section/Num4.svg";
import handWithMob from "../../../assets/third-section/handmob.png";
import handMob from "../../../assets/third-section/handWithMob.svg";

const SectionThree = () => {
  return (
    <div className="relative w-full top-0  md:px-8 px-3 section3-bg ">
      <div className="flex flex-col md:flex-row px-3">
        <div className="flex items-end w-0 md:w-1/5">
          <div className="hidden sm:block">
            <img src={Girl} alt="Girl" width={500} height={500} />
          </div>
        </div>
        <div className="flex flex-col w-full md:w-3/6 pb-[120px]">
          <div className="text-[30px] font-bold text-center sm:text-left pb-10">
            <div>
              How does <span className="curveLineSection">Presence work?</span>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="text-[18px] leading-[30px] w-full sm:w-9/12 text-center sm:text-left">
              Presence - Spiritual Dating an app to connect souls, not just
              people. Where you can meet your twin flame and zodiac match.
            </div>
            <div className="w-3/12 hidden sm:block">
              <img src={Arrow} alt="arrow" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div
              className="bg-[#FFF5BE] border border-[#0C1011] rounded w-full sm:w-1/2 p-3 min-h-[200px]"
              style={{ boxShadow: "10px 10px 0 0 black" }}
            >
              <img src={Num1} alt="Num1" width={40} height={40} />
              <div className="text-[22px] font-bold">Download App</div>
              <div className="text-[16px]">
                Thousands of singles find deeper love through our app each
                month.
              </div>
            </div>
            <div
              className="bg-[#D5F5EA] border border-[#0C1011] rounded w-full sm:w-1/2 p-3 min-h-[200px]"
              style={{ boxShadow: "10px 10px 0 0 black" }}
            >
              <img src={Num2} alt="Num2" width={40} height={40} />
              <div className="text-[22px] font-bold">Login</div>
              <div className="text-[16px]">
                Use our never before seen no sign-up login for a hassle free
                start.
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 pt-10 w-full">
            <div
              className="bg-[#D1FAFF] border border-[#0C1011] rounded w-full sm:w-1/2 p-3 min-h-[200px]"
              style={{ boxShadow: "10px 10px 0 0 black" }}
            >
              <img src={Num3} alt="Num3" width={40} height={40} />
              <div className="text-[22px] font-bold">Profile Setup</div>
              <div className="text-[16px]">
                Enjoy setting up a profile that truly represents your spiritual
                journey.
              </div>
            </div>
            <div
              className="bg-[#FFDEE7] border border-[#0C1011] rounded w-full sm:w-1/2 p-3 min-h-[200px]"
              style={{ boxShadow: "10px 10px 0 0 black" }}
            >
              <img src={Num4} alt="Num4" width={40} height={40} />
              <div className="text-[22px] font-bold">You're in!</div>
              <div className="text-[16px]">
                Create meaningful connections with like-minded individuals and
                like-hearted souls.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end w-full md:w-2/5 ">
          <div className="hidden sm:block">
            <img src={handMob} alt="handWithMob" className=" sm:mb-[-80px]" />
          </div>

          <div className="flex flex-row items-end relative sm:hidden">
            <div className="w-[30%] mb-0  flex justify-end items-end">
              <img src={Girl} alt="Girl absolute" />
            </div>

            <div
              className="
            w-[400px] sm:mr-[-300px] sm:mb-[-25px] h:auto sm:h-[600px]"
            >
              <img src={handWithMob} alt="handWithMob" className="mb-[-40px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
