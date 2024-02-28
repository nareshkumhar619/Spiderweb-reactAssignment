import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Default from "../components/Property1Default";
import SectionForm from "../components/SectionForm";
import EventsContainer from "../components/EventsContainer";
import data from "./Data";

const MacBookPro16 = () => {

  const datafill = [
    { top: '3.125rem' },
    { top: '6.25rem' },
    { top: '9.375rem' },
    { top: '12.5rem' },
    { top: '15.625rem' },
    { top: '18.75rem' },
    { top: '21.875rem' },
    { top: '25rem' },
    { top: '28.125rem' },
    { top: '31.25rem' },
    { top: '34.375rem' },
    { top: '37.5rem' },
    { top: '40.625rem' },
    { top: '43.75rem' },
    // Add more data objects as needed
  ];

 const navigate = useNavigate();

  const onMacBookPro1626Click = useCallback(() => {
    navigate("/macbook-pro-16-28");
  }, [navigate]);

  return (
    <div
      className="w-full relative bg-black h-[69.813rem] overflow-hidden cursor-pointer text-left text-[2.5rem] text-white font-kanit"
      onClick={onMacBookPro1626Click}
    >
      <Property1Default
        property1DefaultIconWidth="89.625rem"
        property1DefaultIconOverflow="unset"
        property1DefaultIconHeight="92.875rem"
        property1DefaultIconPosition="absolute"
        property1DefaultIconTop="-10.187rem"
        property1DefaultIconLeft="12.688rem"
      />
      <div className="absolute top-[0rem] left-[0rem] w-[108rem] h-[69.813rem] overflow-hidden">
        <SectionForm />
        <div className="absolute top-[7.5rem] left-[-0.125rem] w-[108.125rem] h-[62.313rem] overflow-hidden flex flex-row items-center justify-center p-[2.5rem] box-border gap-[0rem_1rem]">
          <EventsContainer />
          <div className="self-stretch flex-1 rounded-2xl bg-gray-700 shadow-[0px_0px_30px_rgba(209,_117,_182,_0.2)] overflow-hidden flex flex-col items-start justify-start border-[2px] border-solid border-pink">
            <div className="self-stretch flex flex-row items-center justify-end py-[1.25rem] px-[2.5rem] gap-[0rem_0.625rem]">
              <div className="flex-1 relative leading-[100%]">
                Event Requests
              </div>
              <div className="w-[18.75rem] rounded-lg bg-gray-500 shadow-[0px_0px_30px_rgba(209,_117,_182,_0.2)] box-border h-[2.75rem] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[0rem] pr-[1.5rem] pl-[1rem] gap-[0rem_0.625rem] text-[1rem] border-[1px] border-solid border-white">
                <img
                  className="w-[1.5rem] relative h-[1.5rem]"
                  alt=""
                  src="/search01.svg"
                />
                <div className="relative font-light opacity-[0.8]">
                  Search here
                </div>
              </div>
              <div className="rounded [background:linear-gradient(99.12deg,_#ff00ff,_#8f00ff_83.85%)] shadow-[0px_0px_20px_rgba(209,_117,_182,_0.4)] flex flex-row items-center justify-start p-[0.313rem] border-[1px] border-solid border-white">
                <img
                  className="w-[1.5rem] relative h-[1.5rem]"
                  alt=""
                  src="/add01.svg"
                />
              </div>
            </div>
            <div className="w-[83.375rem] flex-1 relative box-border overflow-x-auto text-[1rem] border-[3px] border-solid border-pink">
              <div className="absolute top-[0rem] left-[0rem] bg-pink overflow-hidden flex flex-row items-start justify-start py-[0.625rem] pr-[0.625rem] pl-[21.5rem] gap-[0rem_0.625rem] text-[1.25rem]">
                <div className="w-[9.375rem] relative capitalize inline-block shrink-0">
                  Event Start
                </div>
                <div className="w-[9.375rem] flex flex-row items-center justify-start gap-[0rem_0.625rem]">
                  <div className="relative capitalize">Event End</div>
                  <img
                    className="w-[1.5rem] relative rounded-3xl h-[1.5rem]"
                    alt=""
                    src="/arrow2.svg"
                  />
                </div>
                <div className="w-[12.5rem] flex flex-row items-center justify-start gap-[0rem_0.625rem]">
                  <div className="relative capitalize">Client Name</div>
                  <img
                    className="w-[1.5rem] relative rounded-3xl h-[1.5rem] object-contain"
                    alt=""
                    src="/arrow3.svg"
                  />
                </div>
                <div className="w-[9.375rem] relative capitalize inline-block shrink-0">
                  Contact Info
                </div>
                <div className="w-[18.75rem] flex flex-row items-start justify-start">
                  <div className="relative capitalize">Venue</div>
                </div>
                <div className="w-[12.5rem] relative capitalize inline-block shrink-0">
                  City
                </div>
                <div className="w-[12.5rem] relative capitalize inline-block shrink-0">
                  State
                </div>
                <div className="w-[12.5rem] relative capitalize inline-block shrink-0">
                  Zip Code
                </div>
              </div>
              {data.map((item, index) => (
        <div
          key={index}
          className={`absolute top-[${3.125 + index * 3.125}rem] left-[0rem] box-border h-[3.125rem] overflow-hidden flex flex-row items-center justify-start py-[0.625rem] pr-[0.625rem] pl-[21.5rem] gap-[0rem_0.625rem] border-b-[2px] border-solid border-pink`}
        >
          <div className="w-[9.375rem] relative capitalize inline-block shrink-0">
            {item.date1}
          </div>
          <div className="w-[9.375rem] relative capitalize inline-block shrink-0">
            {item.date2}
          </div>
          <div className="w-[12.5rem] relative capitalize inline-block shrink-0">
            {item.name}
          </div>
          <div className="w-[9.375rem] relative capitalize inline-block shrink-0">
            {item.phone}
          </div>
          <div className="w-[18.75rem] relative capitalize inline-block shrink-0">
            {item.description}
          </div>
          <div className="w-[12.5rem] relative capitalize inline-block shrink-0">
            -
          </div>
          <div className="w-[12.5rem] relative capitalize inline-block shrink-0">
            -
          </div>
          <div className="w-[12.5rem] relative capitalize inline-block shrink-0">
            -
          </div>
        </div>
      ))}
              <div className="absolute bottom-[0rem] left-[0rem] rounded-t-none rounded-b-lg bg-black box-border w-[83.313rem] flex flex-col items-center justify-center p-[0.75rem] border-t-[2px] border-solid border-pink">
                <div className="flex flex-row items-center justify-center gap-[0rem_1.25rem]">
                  <img
                    className="w-[1.5rem] relative h-[1.5rem]"
                    alt=""
                    src="/arrowleft02.svg"
                  />
                  <div className="relative capitalize">1</div>
                  <div className="relative capitalize">2</div>
                  <div className="relative capitalize">3</div>
                  <div className="relative text-[1.25rem] capitalize text-pink">
                    4
                  </div>
                  <img
                    className="w-[1.5rem] relative h-[1.5rem] opacity-[0.2]"
                    alt=""
                    src="/arrowright02.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[47.5rem] left-[0rem] w-[83.313rem] flex flex-col items-start justify-start py-[0.5rem] px-[0.625rem] box-border">
                <div className="self-stretch relative h-[0.563rem]">
                  <div className="absolute top-[0rem] left-[0rem] rounded-8xs bg-gray-600 w-[82.063rem] h-[0.563rem]" />
                  <div className="absolute top-[calc(50%_-_4.5px)] left-[0rem] rounded-8xs bg-pink shadow-[0px_0px_30px_rgba(209,_117,_182,_0.4)] box-border w-[17.65rem] h-[0.563rem] border-[3px] border-solid border-white" />
                </div>
              </div>
              {datafill.map((item, index) => (
        <div key={index} className={`absolute top-[${item.top}] left-[0rem] bg-gray-700 [backdrop-filter:blur(40px)] box-border w-[20.875rem] h-[3.125rem] flex flex-row items-center justify-start py-[0rem] px-[1.25rem] gap-[0rem_1.25rem] border-b-[2px] border-solid border-pink`}>
          <img
            className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/show.svg"
          />
          <div className="w-[18.75rem] relative capitalize inline-block shrink-0">
            Filled Name
          </div>
        </div>
      ))}
              <div className="absolute top-[calc(50%_-_418.5px)] left-[0rem] bg-pink w-[20.875rem] h-[3.125rem] flex flex-row items-center justify-start py-[0rem] px-[1.25rem] box-border gap-[0rem_0.625rem] text-[1.25rem]">
                <div className="relative capitalize">Event Name</div>
                <img
                  className="w-[1.5rem] relative rounded-3xl h-[1.5rem] object-contain"
                  alt=""
                  src="/arrow3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookPro16;
