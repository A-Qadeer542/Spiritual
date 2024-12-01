import { React, useId, useState } from "react";
import { Accordion } from "flowbite-react";
import heartWhite from "../../../assets/fifth-section/Heart-white.svg";
import heartRed from "../../../assets/fifth-section/Heart-red.svg";
import ArrowRed from "../../../assets/fifth-section/ArrowRed.svg";
import ArrowWhite from "../../../assets/fifth-section/ArrowWhite.svg";

const QuestionAccordion = ({ setAccordion, accordion, details, title }) => {
  let id = useId();
  return (
    <>
      <Accordion flush={true} className="border-b-0 ">
        <Accordion.Panel className="pannel border-b-0">
          <div
            onClick={() => setAccordion(id)}
            className={`${
              accordion === id
                ? "!border mb-[15px] !divide-y-none !rounded-md !question_shadow faq-cards"
                : "!border mb-[15px] !divide-y-none !rounded-md"
            }`}
          >
            <div
              onClick={() => setAccordion(id)}
              className={`${
                accordion === id
                  ? "!bg-white !text-black "
                  : "!bg-transparent !text-white !border-none !rounded-t-md border-3 "
              }  accordion-titlep-1 cursor-pointer text-[15px] !py-4 px-5  accordion-title`}
            >
              <div className="gap-2 flex justify-between font-bold">
                <div className="flex gap-2">
                  {accordion === id ? (
                    <img src={heartRed} alt="heartRed" className="w-[%]" />
                  ) : (
                    <img src={heartWhite} alt="heartWhite" className="w-[%]" />
                  )}{" "}
                  {title}
                </div>
                {accordion === id ? (
                  <img
                    src={ArrowRed}
                    alt="ArrowRed"
                    className="w-[6%] sm:w-[3%]"
                  />
                ) : (
                  <img
                    src={ArrowWhite}
                    alt="ArrowWhite"
                    className="w-[6%] sm:w-[3%]"
                  />
                )}
              </div>
            </div>
            <div
              className={`${
                accordion === id ? "" : "hidden"
              } bg-white p-2 !rounded-b-md !py-1 px-5 accordion-content `}
            >
              <p className="text-[#474A57] text-[14px] px-[21px] pb-4">
                {details}
              </p>
            </div>
          </div>
        </Accordion.Panel>
      </Accordion>
    </>
  );
};

export default QuestionAccordion;
