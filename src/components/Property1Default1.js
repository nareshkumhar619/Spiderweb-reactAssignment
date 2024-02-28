import { useMemo } from "react";

const Property1Default1 = ({
  campaignData,
  property1DefaultPadding,
  campaignsFontSize,
  campaignsLineHeight,
  campaignsFontWeight,
  campaignsFontFamily,
  campaignsColor,
  campaignsTextTransform,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      padding: property1DefaultPadding,
    };
  }, [property1DefaultPadding]);

  const campaignsStyle = useMemo(() => {
    return {
      fontSize: campaignsFontSize,
      lineHeight: campaignsLineHeight,
      fontWeight: campaignsFontWeight,
      fontFamily: campaignsFontFamily,
      color: campaignsColor,
      textTransform: campaignsTextTransform,
    };
  }, [
    campaignsFontSize,
    campaignsLineHeight,
    campaignsFontWeight,
    campaignsFontFamily,
    campaignsColor,
    campaignsTextTransform,
  ]);

  return (
    <div
      className="rounded-md flex flex-row items-start justify-start py-2 px-3.5 box-border text-left text-xs text-gray-100 font-inter self-stretch"
      style={property1DefaultStyle}
    >
      <div
        className="relative leading-[20px] font-medium"
        style={campaignsStyle}
      >
        {campaignData}
      </div>
    </div>
  );
};

export default Property1Default1;
