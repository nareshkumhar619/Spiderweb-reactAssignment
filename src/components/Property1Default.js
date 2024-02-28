import { useMemo } from "react";

const Property1Default = ({
  property1DefaultIconWidth,
  property1DefaultIconOverflow,
  property1DefaultIconHeight,
  property1DefaultIconPosition,
  property1DefaultIconTop,
  property1DefaultIconLeft,
}) => {
  const property1DefaultIconStyle = useMemo(() => {
    return {
      width: property1DefaultIconWidth,
      overflow: property1DefaultIconOverflow,
      height: property1DefaultIconHeight,
      position: property1DefaultIconPosition,
      top: property1DefaultIconTop,
      left: property1DefaultIconLeft,
    };
  }, [
    property1DefaultIconWidth,
    property1DefaultIconOverflow,
    property1DefaultIconHeight,
    property1DefaultIconPosition,
    property1DefaultIconTop,
    property1DefaultIconLeft,
  ]);

  return (
    <img
      className="w-[1434px] max-w-full overflow-hidden h-[1486px]"
      alt=""
      src="/group-1.svg"
      style={property1DefaultIconStyle}
    />
  );
};

export default Property1Default;
