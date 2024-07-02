import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  designSystemUpdate,
  oreoWebsiteProject,
  prop,
  propWidth,
  propRight,
}) => {
  const fillStyle = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[10px] text-left text-base text-gray-100 font-exo-2 ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
        <div className="flex flex-col items-start justify-start gap-[22px]">
          <div className="flex flex-col items-start justify-start gap-[6px]">
            <b className="relative leading-[100%] z-[1]">
              {designSystemUpdate}
            </b>
            <div className="relative text-sm leading-[100%] font-medium text-gray-500 z-[1]">
              {oreoWebsiteProject}
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[4px] text-sm text-gray-500">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[1]"
              alt=""
              src="/icon-11.svg"
            />
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="relative leading-[100%] font-semibold inline-block min-w-[59px] z-[1]">
                Progress
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start gap-[33px] text-right text-sm">
          <img
            className="w-[26px] h-[26px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/more.svg"
          />
          <div className="relative leading-[100%] font-semibold inline-block min-w-[30px] z-[1]">
            {prop}
          </div>
        </div>
      </div>
      <div className="self-stretch h-1 relative rounded-sm bg-gray-600 z-[1]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-gray-600 hidden" />
        <div
          className="absolute h-full w-[30%] top-[0%] right-[70%] bottom-[0%] left-[0%] rounded-sm bg-orange z-[1]"
          style={fillStyle}
        />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  designSystemUpdate: PropTypes.string,
  oreoWebsiteProject: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propRight: PropTypes.any,
};

export default FrameComponent;
