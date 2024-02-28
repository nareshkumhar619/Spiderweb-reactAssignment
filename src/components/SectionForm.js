const SectionForm = () => {
  return (
    <div className="absolute top-[0rem] left-[0rem] w-[108rem] h-[7.5rem] overflow-hidden flex flex-row items-center justify-between py-[1.25rem] px-[40rem] box-border text-left text-[1rem] text-white font-kanit">
      <div className="flex flex-row items-center justify-start gap-[0rem_1.5rem]">
        <img
          className="w-[2rem] relative h-[2rem]"
          alt=""
          src="/info-circle.svg"
        />
        <img
          className="w-[2rem] relative h-[2rem]"
          alt=""
          src="/notification.svg"
        />
        <div className="flex flex-row items-center justify-start gap-[0rem_0.5rem]">
          <div className="flex flex-col items-start justify-start">
            <div className="relative [filter:drop-shadow(0px_0px_40px_rgba(255,_255,_255,_0.3))]">
              <span>{`Hi, `}</span>
              <span className="text-aquamarine">Naresh Kumhar</span>
            </div>
            <div className="relative font-light [text-shadow:0px_0px_40px_rgba(255,_255,_255,_0.3)]">
              welcome back!
            </div>
          </div>
          <img
            className="w-[4rem] relative h-[4rem] object-cover"
            alt=""
            src="/ellipse-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionForm;
