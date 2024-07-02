import PropTypes from "prop-types";

const BoardHeaderContent = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start pt-0 pb-[19px] pl-0 box-border gap-[8px] w-full text-left text-sm text-darkgray font-mulish ${className}`}
    >
      <div className=" w-[960px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
        <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[47px]">
          Boards
        </a>
        <div className="flex flex-row items-start justify-start gap-[120px]">
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[55px]">
            Visibility
          </a>
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[43px]">
            Teams
          </a>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-9xl pr-8 text-gray-100 mq750:flex-wrap">
        <h1 className="m-0 w-[325px] relative text-inherit leading-[100%] font-bold font-inherit inline-block mq450:text-3xl mq450:leading-[22px]">
          Design Project Deal 🚀
        </h1>
        <div className="flex flex-row items-start justify-start gap-[48px] text-base mq450:gap-[24px]">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/outline--security--lock.svg"
              />
            </div>
            <div className="relative font-semibold inline-block min-w-[103px]">
              Private Board
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[12px] text-sm text-dimgray">
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <div className="h-6 flex flex-row items-start justify-start">
                <img
                  className="h-6 w-6 relative min-h-[24px] shrink-0"
                  loading="lazy"
                  alt=""
                  src="/image.svg"
                />
                <div className="h-[26px] w-[26px] relative rounded-[50%] bg-gainsboro-200 box-border shrink-0 z-[1] ml-[-6px] border-[0px] border-solid border-whitesmoke" />
                <div className="h-[26px] w-[26px] relative rounded-[50%] bg-gainsboro-200 box-border shrink-0 z-[2] ml-[-6px] border-[0px] border-solid border-whitesmoke" />
                <div className="h-[26px] w-[26px] relative rounded-[50%] bg-gainsboro-200 box-border shrink-0 z-[3] ml-[-6px] border-[0px] border-solid border-whitesmoke" />
              </div>
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="relative font-semibold inline-block min-w-[17px]">
                  +4
                </div>
              </div>
            </div>
            <div className="h-6 w-6 relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-full h-full border-[1px] border-dashed border-gray-100" />
              <img
                className="absolute top-[4px] left-[4px] w-4 h-4 z-[1]"
                loading="lazy"
                alt=""
                src="/add-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BoardHeaderContent.propTypes = {
  className: PropTypes.string,
};

export default BoardHeaderContent;
