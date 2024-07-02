import { useState, useMemo } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import PropTypes from "prop-types";

const Task = ({
  className = "",
  addProductToTheMarket,
  ui8Marketplace,
  marketIconOneName,
  marketIconTwoName,
  propAlignSelf,
  propFlex,
  propDisplay,
  propMinWidth,
  propMinWidth1,
}) => {
  const [dateDateTimePickerValue, setDateDateTimePickerValue] = useState(
    new Date("2022-01-06")
  );
  const taskStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  const ui8MarketplaceStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const marketIconOneStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div
        className={`self-stretch rounded-xl bg-white flex flex-col items-start justify-start py-[17px] px-[18px] gap-[20px] z-[1] text-left text-base text-gray-100 font-exo-2 border-[2px] border-solid border-gray-400 ${className}`}
        style={taskStyle}
      >
        <div className="w-80 h-[178px] relative rounded-xl bg-white box-border hidden border-[2px] border-solid border-gray-400" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="flex flex-col items-start justify-start gap-[6px]">
                <b className="relative leading-[100%] z-[1]">
                  {addProductToTheMarket}
                </b>
                <div
                  className="relative text-sm leading-[100%] font-medium text-gray-500 inline-block min-w-[105px] z-[1]"
                  style={ui8MarketplaceStyle}
                >
                  {ui8Marketplace}
                </div>
              </div>
              <img
                className="h-[26px] w-[26px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/more.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[4px] text-sm text-gray-500">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[1]"
                loading="lazy"
                alt=""
                src="/icon-11.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-px pb-0 pr-5 pl-0">
                <div className="relative leading-[100%] font-semibold inline-block min-w-[59px] z-[1]">
                  Progress
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-right text-gray-100">
                <div className="relative leading-[100%] font-semibold inline-block min-w-[37px] z-[1]">
                  10/10
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-1 relative rounded-sm bg-royalblue z-[1]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-gray-600 hidden" />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-royalblue hidden" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-sm text-gray-500">
          <div className="rounded-mid bg-lightslategray-200 overflow-hidden flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap z-[1]">
            <div className="relative leading-[100%] font-semibold inline-block min-w-[69px]">
              8 Jan 2022
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[12px]">
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/icon-12.svg"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div
                    className="relative leading-[100%] inline-block min-w-[6px] z-[1]"
                    style={marketIconOneStyle}
                  >
                    {marketIconOneName}
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/icon-13.svg"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative leading-[100%] inline-block min-w-[8px] z-[1]">
                    {marketIconTwoName}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

Task.propTypes = {
  className: PropTypes.string,
  addProductToTheMarket: PropTypes.string,
  ui8Marketplace: PropTypes.string,
  marketIconOneName: PropTypes.string,
  marketIconTwoName: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default Task;
