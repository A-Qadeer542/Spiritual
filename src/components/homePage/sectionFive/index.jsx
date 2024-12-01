import { useState } from "react";
import Img from "../../../assets/fifth-section/Img.svg";
import QuestionAccordion from "./Accordion";

const SectionFive = () => {
  const title1 = `What makes a dating app "spiritual"?`;
  const title2 = "How does the app match users?";
  const title3 =
    "Is the app open to people of all faiths and spiritual beliefs?";
  const title4 = " How can I increase my chances of success on the app?";
  const title5 = "How do I know if someone is genuine on the app?";

  const details1 =
    "A spiritual dating app is designed for people who prioritize spiritual values and beliefs in their relationships. This can include beliefs related to mindfulness, personal growth, meditation, or any other spiritual practice or belief system.";
  const details2 =
    "The app uses a variety of factors such as shared spiritual beliefs, interests, and other preferences that are important to users in finding a compatible partner.";
  const details3 =
    "Yes, the app is open to anyone who values spirituality in their relationships, regardless of their specific faith or spiritual practice.";
  const details4 =
    "To increase your chances of success on a dating app, it's important to have a complete and accurate profile, including photos and information about yourself. It's also important to be proactive in reaching out to potential matches and to be patient in the process.";
  const details5 =
    "While dating apps can be a great way to meet new people, it's important to be cautious and to trust your instincts. Look for signs that someone is genuine, such as taking the time to fill out a complete profile and engaging in meaningful conversations. If something seems too good to be true, it probably is. ";

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const [accordionState, setAccordionState] = useState();
  return (
    <div className="relative w-full top-0  sm:px-8 px-3 section5-bg text-white">
      <div className="flex flex-col md:flex-row w-full md:w-10/12 m-auto p-4 sm:p-[4rem] gap-10">
        <div className="w-full md:w-1/2">
          <img src={Img} alt="Img" />
        </div>
        <div className="w-full md:w-1/2">
          <div className="text-[18px] sm:text-[30px] font-bold text-center sm:text-left">
            Frequently Asked{" "}
            <span className="curveLineSection">Questions?</span>
          </div>

          <div className="mt-10">
            <QuestionAccordion
              accordion={accordionState}
              setAccordion={setAccordionState}
              title={title1}
              details={details1}
              className="!border-none"
            />
            <QuestionAccordion
              accordion={accordionState}
              setAccordion={setAccordionState}
              title={title2}
              details={details2}
            />
            <QuestionAccordion
              accordion={accordionState}
              setAccordion={setAccordionState}
              title={title3}
              details={details3}
            />
            <QuestionAccordion
              accordion={accordionState}
              setAccordion={setAccordionState}
              title={title4}
              details={details4}
            />
            <QuestionAccordion
              accordion={accordionState}
              setAccordion={setAccordionState}
              title={title5}
              details={details5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionFive;
