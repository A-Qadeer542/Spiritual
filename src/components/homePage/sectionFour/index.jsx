import card1 from "../../../assets/forth-section/card1.svg";
import card2 from "../../../assets/forth-section/card2.svg";
import card3 from "../../../assets/forth-section/card3.svg";
import Ai from "../../../assets/forth-section/Ai.svg";

const SectionFour = () => {
  return (
    <div className="relative w-full top-0 md:px-8 px-3 text-[#ffffff] text-center section4-bg">
      <div className="flex flex-col justify-center items-center">
        <div className="text-[30px] sm:text-[42px] leading-[52px]">
          Deepen Your Spiritual{" "}
          <span className="curveLineSection">Journey Together</span>
        </div>

        <div className="mt-10 text-[18px] w-1/2 m-auto">
          The eyes are the windows to the soul! We encourage a profile's first
          picture to be a selfie or a close up
        </div>
        <div className="flex w-full  justify-center flex-col items-center md:flex-row m-auto px-4">
          <img src={card1} alt="card1" className="card" />
          <img src={card2} alt="card2" className="card" />
          <img src={card3} alt="card3" className="card" />
        </div>
      </div>
      <div className="flex justify-end items-end relative">
        <img
          src={Ai}
          alt="Ai"
          className="h-[200px] md:h-[200px] mb-[-400px]  md:mb-[-200px] absolute"
        />
      </div>
    </div>
  );
};
export default SectionFour;
