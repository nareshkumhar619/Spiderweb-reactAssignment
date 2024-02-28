import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Default from "../components/Property1Default";
import SectionForm from "../components/SectionForm";
import EventsContainer from "../components/EventsContainer";
import MeetingRoomContainer from "../components/MeetingRoomContainer";


const MacBookPro161 = () => {

  const cameraData = [
    {
      title: 'Camera 1 (Video)',
      time: '9 am - 7 pm',
      label: 'LP',
      labelValue: 'default',
      count: 20,
      contractor: 'Select Contractor',
    },
    {
      title: 'Camera 2 (Video)',
      time: '9 am - 7 pm',
      label: 'LP',
      labelValue: 'default',
      count: 20,
      contractor: 'Select Contractor',
    },
    {
      title: 'Camera 3 (Video)',
      time: '9 am - 7 pm',
      label: 'LP',
      labelValue: 'default',
      count: 20,
      contractor: 'Select Contractor',
    },
    {
      title: 'Camera 4 (Video)',
      time: '9 am - 7 pm',
      label: 'LP',
      labelValue: 'default',
      count: 20,
      contractor: 'Select Contractor',
    },
    {
      title: 'Camera 5 (Video)',
      time: '9 am - 7 pm',
      label: 'LP',
      labelValue: 'default',
      count: 20,
      contractor: 'Select Contractor',
    },
    {
      title: 'Camera 6 (Video)',
      time: '9 am - 7 pm',
      label: 'LP',
      labelValue: 'default',
      count: 20,
      contractor: 'Select Contractor',
    },
    {
      title: 'Camera 7 (Video)',
      time: '9 am - 7 pm',
      label: 'LP',
      labelValue: 'default',
      count: 20,
      contractor: 'Select Contractor',
    },
    // Add more camera data objects as needed
  ];

  const navigate = useNavigate();

  const onMacBookPro1628Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className="w-full relative bg-black h-[69.813rem] overflow-hidden cursor-pointer text-left text-[1.5rem] text-white font-kanit"
      onClick={onMacBookPro1628Click}
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
          <EventsContainer
            campaignsWidth="unset"
            campaignsAlignSelf="stretch"
          />
          <div className="self-stretch flex-1 rounded-2xl bg-gray-700 shadow-[0px_0px_30px_rgba(209,_117,_182,_0.2)] overflow-hidden flex flex-col items-start justify-start py-[1.25rem] px-[2.5rem] gap-[1.25rem] border-[2px] border-solid border-pink">
            <div className="self-stretch flex flex-row items-center justify-end text-[2.5rem]">
              <div className="flex-1 relative leading-[100%]">
                <span>{`Event Name `}</span>
                <span className="text-[1.5rem] font-light">
                  (Venue Details)
                </span>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden flex flex-row items-start justify-start text-[1rem] text-pink border-[2px] border-solid border-pink">
              <div className="box-border h-[3.125rem] flex flex-row items-center justify-center py-[0rem] px-[1.25rem] border-r-[2px] border-solid border-pink">
                <div className="relative capitalize">Event Details</div>
              </div>
              <div className="bg-pink h-[3.125rem] flex flex-row items-center justify-center py-[0rem] px-[1.25rem] box-border text-white">
                <div className="relative capitalize">
                  Assign Coordinator/Coordinator
                </div>
              </div>
              <div className="box-border h-[3.125rem] flex flex-row items-center justify-center py-[0rem] px-[1.25rem] border-r-[2px] border-solid border-pink">
                <div className="relative capitalize">Session Management</div>
              </div>
              <div className="h-[3.125rem] flex flex-row items-center justify-center py-[0rem] px-[1.25rem] box-border">
                <div className="relative capitalize">Generate SOW</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[0rem_1.25rem]">
              <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[0.75rem_0rem]">
                <div className="w-[13.5rem] relative leading-[120%] inline-block">
                  Assign Coordinator
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[0.25rem_0rem] text-[1rem]">
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="self-stretch rounded-lg box-border h-[2.75rem] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[0rem] px-[1rem] gap-[0rem_0.625rem] border-[1px] border-solid border-white">
                      <div className="flex-1 relative font-light opacity-[0.7]">
                        Search Coordinator
                      </div>
                      <div className="w-[1.5rem] h-[1.5rem] flex flex-col items-center justify-center">
                        <img
                          className="w-[0.625rem] relative h-[0.313rem] object-contain"
                          alt=""
                          src="/vector3.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative capitalize text-pink">
                    Add New Coordinator
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-center gap-[0.75rem_0rem]">
                <div className="relative leading-[120%]">
                  <span>{`Event Name `}</span>
                  <span className="text-[1.25rem] font-light">
                    (Venue Here)
                  </span>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[0.625rem_0rem] text-[1rem]">
                  <div className="self-stretch rounded-10xs bg-gray-200 flex flex-row items-center justify-start py-[0.25rem] px-[0.625rem] border-[1px] border-solid border-pink">
                    <div className="flex-1 relative">
                      <span className="font-light">Start:</span>
                      <span className="font-medium"> 12-12-2023</span>
                    </div>
                    <div className="flex-1 relative">
                      <span className="font-light">Ends:</span>
                      <span className="font-medium"> 15-12-2023</span>
                    </div>
                  </div>
                  <div className="self-stretch rounded-10xs bg-gray-200 flex flex-row items-center justify-start py-[0.25rem] px-[0.625rem] border-[1px] border-solid border-pink">
                    <div className="flex-1 relative">
                      <span className="font-light">Venue Address:</span>
                      <span className="font-medium whitespace-pre-wrap">
                        {" "}
                        Some Location 12, Name Here, City, State.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-row items-start justify-center gap-[0rem_1.25rem]">
              <div className="self-stretch flex flex-col items-start justify-center gap-[0.75rem_0rem]">
                <div className="w-[13.5rem] relative leading-[120%] inline-block">
                  Assign Contractor
                </div>
                <div className="w-[21.25rem] flex-1 rounded-xl bg-black shadow-[0px_0px_30px_rgba(255,_255,_255,_0.2)] box-border flex flex-col items-start justify-start p-[1rem] gap-[1rem_0rem] text-[1.25rem] border-[1px] border-solid border-pink">
                  <div className="self-stretch rounded-xl bg-pink shadow-[0px_0px_30px_rgba(209,_117,_182,_0.2)] overflow-hidden flex flex-col items-start justify-center p-[1rem] border-[1px] border-solid border-pink">
                    <div className="self-stretch flex flex-col items-start justify-center">
                      <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.625rem]">
                        <div className="relative font-medium">
                          Meeting Room 1
                        </div>
                        <img
                          className="w-[1rem] relative h-[1rem]"
                          alt=""
                          src="/star-2.svg"
                        />
                        <div className="relative text-[1rem] font-medium text-black">
                          12 Positions
                        </div>
                      </div>
                      <div className="self-stretch relative text-[0.75rem] font-light">
                        Start from 12 Jan, 2023 - Ends at 15 Jan, 2023
                      </div>
                    </div>
                  </div>
                  <MeetingRoomContainer roomName="Meeting Room 2" />
                  <MeetingRoomContainer roomName="Meeting Room 3" />
                  <MeetingRoomContainer roomName="Meeting Room 4" />
                  <MeetingRoomContainer roomName="Meeting Room 5" />
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[0.75rem_0rem]">
                <div className="w-[13.5rem] relative leading-[120%] inline-block opacity-[0]">
                  Assign Coordinator
                </div>
                <div className="relative text-[1.25rem] leading-[120%]">
                  Positions
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-center text-[0.813rem] font-inter">
                  <div className="self-stretch flex-1 rounded-border-border-radius-card shadow-[0px_0px_30px_rgba(209,_117,_182,_0.2),_1px_0px_0px_rgba(0,_0,_0,_0.13)_inset,_-1px_0px_0px_rgba(0,_0,_0,_0.13)_inset,_0px_-1px_0px_rgba(0,_0,_0,_0.17)_inset,_0px_1px_0px_rgba(204,_204,_204,_0.5)_inset,_0px_1px_0px_rgba(26,_26,_26,_0.07)] overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-pink">
                    <div className="self-stretch bg-black flex flex-row items-start justify-start p-[0.75rem] gap-[0rem_0.75rem] text-[0.875rem] font-kanit border-b-[1px] border-solid border-pink">
                      <div className="flex-1 relative leading-[1.25rem]">
                        Position
                      </div>
                      <div className="flex-1 relative leading-[1.25rem]">
                        Time
                      </div>
                      <div className="flex-1 relative leading-[1.25rem]">
                        Info
                      </div>
                      <div className="w-[5rem] relative leading-[1.25rem] text-center inline-block shrink-0">
                        Quantity
                      </div>
                      <div className="w-[15rem] relative leading-[1.25rem] inline-block shrink-0">{` `}</div>
                    </div>
                    {cameraData.map((camera, index) => (
        <div key={index} className="self-stretch flex-1 bg-black flex flex-row items-center justify-center py-space-200 px-space-300 gap-[0rem_0.75rem] border-b-[1px] border-solid border-pink">
          <div className="flex-1 relative leading-[1.25rem] font-kanit">
            {camera.title}
          </div>
          <div className="flex-1 relative leading-[1.25rem] font-medium">
            {camera.time}
          </div>
          <div className="flex-1 relative leading-[1.25rem]">
            <b>{camera.label}</b>
            <span className="font-medium">{camera.labelValue}</span>
          </div>
          <div className="w-[5rem] relative leading-[1.25rem] font-medium text-center inline-block shrink-0">
            {camera.count}
          </div>
          <div className="w-[15rem] rounded bg-gray-300 box-border flex flex-row items-center justify-center p-[0.5rem] gap-[0rem_0.625rem] border-[1px] border-solid border-pink">
            <div className="flex-1 relative leading-[1.25rem] font-light opacity-[0.6]">
              {camera.contractor}
            </div>
            <div className="w-[1.25rem] h-[1.25rem] flex flex-col items-center justify-center">
              <img
                className="w-[0.519rem] relative h-[0.263rem] object-contain"
                alt=""
                src="/vector4.svg"
              />
            </div>
          </div>
        </div>
      ))}
                    <div className="self-stretch rounded-t-none rounded-b-lg bg-black flex flex-col items-center justify-center py-space-200 px-space-300">
                      <div className="flex flex-row items-center justify-center gap-[0rem_1.25rem]">
                        <img
                          className="w-[1.5rem] relative h-[1.5rem]"
                          alt=""
                          src="/arrowleft02.svg"
                        />
                        <div className="w-[0.625rem] relative rounded-[50%] box-border h-[0.625rem] border-[1px] border-solid border-white" />
                        <div className="w-[1rem] relative rounded-[50%] bg-pink shadow-[0px_0px_10px_#d175b6] box-border h-[1rem] border-[1px] border-solid border-white" />
                        <img
                          className="w-[1.5rem] relative h-[1.5rem] opacity-[0.2]"
                          alt=""
                          src="/arrowright02.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center text-[1.25rem]">
              <div className="rounded-xl bg-mediumorchid shadow-[0px_0px_20px_rgba(0,_0,_0,_0.6)_inset,_0px_30px_80px_rgba(255,_0,_255,_0.3)] h-[3.75rem] flex flex-row items-center justify-center py-[1rem] px-[3.75rem] box-border">
                <div className="relative [text-shadow:0px_0px_20px_rgba(255,_255,_255,_0.5)]">
                  Save Edits
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookPro161;
