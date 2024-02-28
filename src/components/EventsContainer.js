import { useMemo } from "react";
import Property1Default1 from "./Property1Default1";

const EventsContainer = ({ campaignsWidth, campaignsAlignSelf }) => {
  const dropDownItemStyle = useMemo(() => {
    return {
      width: campaignsWidth,
      alignSelf: campaignsAlignSelf,
    };
  }, [campaignsWidth, campaignsAlignSelf]);

  return (
    <div className="self-stretch w-[18.75rem] rounded-2xl bg-gray-400 shadow-[0px_0px_30px_rgba(209,_117,_182,_0.2)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-between p-[1.25rem] text-left text-[1.25rem] text-white font-kanit border-[2px] border-solid border-pink">
      <div
        className="w-[16.25rem] flex flex-col items-center justify-start gap-[0.25rem_0rem]"
        style={dropDownItemStyle}
      >
        <div className="self-stretch rounded-lg bg-gray-700 shadow-[0px_0px_30px_rgba(209,_117,_182,_0.4)] overflow-hidden flex flex-row items-center justify-start py-[1rem] px-[1.25rem] gap-[0rem_1rem] text-pink border-[2px] border-solid border-pink">
          <div className="flex-1 relative leading-[1.25rem] [text-shadow:0px_0px_10px_#d175b6] z-[1]">
            Events
          </div>
          <img
            className="w-[1.5rem] relative rounded-3xl h-[1.5rem] object-contain z-[0]"
            alt=""
            src="/arrow.svg"
          />
        </div>
        <div className="self-stretch relative h-[10.75rem] overflow-hidden shrink-0 text-[0.875rem] text-pink">
          <img
            className="absolute top-[0.875rem] left-[1.813rem] w-[0.75rem] h-[3.375rem]"
            alt=""
            src="/vector1.svg"
          />
          <img
            className="absolute top-[3.625rem] left-[1.813rem] w-[0.75rem] h-[3.375rem]"
            alt=""
            src="/vector1.svg"
          />
          <img
            className="absolute top-[6.25rem] left-[1.813rem] w-[0.75rem] h-[3.375rem]"
            alt=""
            src="/vector1.svg"
          />
          <img
            className="absolute top-[0.188rem] left-[1.813rem] w-[0.75rem] h-[1.313rem]"
            alt=""
            src="/vector.svg"
          />
          <div className="absolute bottom-[0rem] left-[2.875rem] w-[13.375rem] flex flex-col items-start justify-start gap-[0.5rem_0rem]">
            <div className="self-stretch rounded bg-black shadow-[0px_0px_30px_rgba(209,_117,_182,_0.2)] flex flex-row items-start justify-start py-[0.5rem] px-[0.875rem] border-[1px] border-solid border-pink">
              <div className="flex-1 relative leading-[1.25rem] font-light [text-shadow:0px_0px_10px_#d175b6]">
                New Requests
              </div>
            </div>
            <Property1Default1
              campaignData="estimate "
              property1DefaultPadding="0.5rem 0.875rem"
              campaignsFontSize="0.875rem"
              campaignsLineHeight="1.25rem"
              campaignsFontWeight="300"
              campaignsFontFamily="Kanit"
              campaignsColor="#fff"
              campaignsTextTransform="capitalize"
            />
            <Property1Default1
              campaignData="Events"
              property1DefaultPadding="0.5rem 0.875rem"
              campaignsFontSize="0.875rem"
              campaignsLineHeight="1.25rem"
              campaignsFontWeight="300"
              campaignsFontFamily="Kanit"
              campaignsColor="#fff"
              campaignsTextTransform="capitalize"
            />
            <Property1Default1
              campaignData="Partial Requests"
              property1DefaultPadding="0.5rem 0.875rem"
              campaignsFontSize="0.875rem"
              campaignsLineHeight="1.25rem"
              campaignsFontWeight="300"
              campaignsFontFamily="Kanit"
              campaignsColor="#fff"
              campaignsTextTransform="capitalize"
            />
          </div>
          <div className="absolute top-[3.5rem] left-[14.188rem] rounded-9xl bg-white shadow-[0px_0px_30px_rgba(209,_117,_182,_0.2)] w-[1.5rem] h-[1.5rem] flex flex-col items-center justify-center p-[0.625rem] box-border">
            <div className="relative leading-[1.25rem] font-light [text-shadow:0px_0px_10px_#d175b6]">
              9
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-lg overflow-hidden flex flex-row items-center justify-start py-[1rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.25rem] capitalize z-[0]">
            Positions
          </div>
        </div>
        <div className="self-stretch rounded-lg overflow-hidden flex flex-row items-center justify-start py-[1rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.25rem] capitalize z-[0]">
            Contractors
          </div>
        </div>
        <div className="self-stretch rounded-lg overflow-hidden flex flex-row items-center justify-start py-[1rem] px-[1.25rem] gap-[0rem_1rem]">
          <div className="flex-1 relative leading-[1.25rem] capitalize z-[1]">
            Users
          </div>
          <img
            className="w-[1.5rem] relative rounded-3xl h-[1.5rem] object-contain z-[0]"
            alt=""
            src="/arrow1.svg"
          />
        </div>
        <div className="self-stretch relative h-[8.125rem] overflow-hidden shrink-0">
          <img
            className="absolute top-[0.875rem] left-[1.813rem] w-[0.75rem] h-[3.375rem]"
            alt=""
            src="/vector1.svg"
          />
          <img
            className="absolute top-[3.625rem] left-[1.813rem] w-[0.75rem] h-[3.375rem]"
            alt=""
            src="/vector1.svg"
          />
          <img
            className="absolute top-[0.188rem] left-[1.813rem] w-[0.75rem] h-[1.313rem]"
            alt=""
            src="/vector2.svg"
          />
          <div className="absolute bottom-[0rem] left-[2.875rem] w-[13.375rem] flex flex-col items-start justify-start gap-[0.5rem_0rem]">
            <Property1Default1
              campaignData="admins"
              property1DefaultPadding="0.5rem 0.875rem"
              campaignsFontSize="0.875rem"
              campaignsLineHeight="1.25rem"
              campaignsFontWeight="300"
              campaignsFontFamily="Kanit"
              campaignsColor="#fff"
              campaignsTextTransform="capitalize"
            />
            <Property1Default1
              campaignData="clients"
              property1DefaultPadding="0.5rem 0.875rem"
              campaignsFontSize="0.875rem"
              campaignsLineHeight="1.25rem"
              campaignsFontWeight="300"
              campaignsFontFamily="Kanit"
              campaignsColor="#fff"
              campaignsTextTransform="capitalize"
            />
            <Property1Default1
              campaignData="Coordinators"
              property1DefaultPadding="0.5rem 0.875rem"
              campaignsFontSize="0.875rem"
              campaignsLineHeight="1.25rem"
              campaignsFontWeight="300"
              campaignsFontFamily="Kanit"
              campaignsColor="#fff"
              campaignsTextTransform="capitalize"
            />
          </div>
        </div>
        <div className="self-stretch rounded-lg overflow-hidden flex flex-row items-center justify-start py-[1rem] px-[1.25rem]">
          <div className="flex-1 relative leading-[1.25rem] capitalize z-[0]">
            Profile
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-lg bg-black shadow-[0px_0px_30px_rgba(209,_117,_182,_0.2)] overflow-hidden flex flex-row items-center justify-center py-[1rem] px-[1.25rem] gap-[0rem_1rem] text-[1rem]">
        <img
          className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 object-contain z-[1]"
          alt=""
          src="/upload@2x.png"
        />
        <div className="relative capitalize z-[0]">Logout</div>
      </div>
    </div>
  );
};

export default EventsContainer;
