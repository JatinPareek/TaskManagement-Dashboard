import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Container = ({ className = "" }) => {
  return (
    <div
      className={`w-[952px] rounded-3xs bg-white overflow-hidden flex flex-row items-start justify-between pt-[11px] px-6 pb-0 box-border gap-[20px] max-w-full text-left text-base text-royalblue font-mulish mq750:flex-wrap ${className}`}
    >
      <div className="w-[243px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-start justify-start gap-[32px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[18px]">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px] primary"
                loading="lazy"
                alt=""
                src="/icon-8.svg"
              />
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative leading-[100%] font-semibold inline-block min-w-[86px] primary">
                  Board view
                </div>
              </div>
            </div>
            <div className="primary self-stretch h-[3px] relative rounded-t-sm rounded-b-none bg-royalblue" />
          </div>
          <button className="cursor-pointer [border:none] pt-px px-0 pb-0 bg-[transparent] flex flex-col items-start justify-start">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[8px]">
              <img
                className="h-5 w-5 relative min-h-[20px]"
                loading="lazy"
                alt=""
                src="/icon-9.svg"
              />
              <div className="relative text-base font-medium font-mulish text-darkgray text-left inline-block min-w-[71px]">
                Add view
              </div>
            </button>
          </button>
        </div>
      </div>
      <div className="w-[320px] flex flex-row items-start justify-start gap-[16px]">
        <Button
          className="h-[38px] flex-1"
          startIcon={
            <img width="18px" height="18px" src="/vuesaxlinearcandle2.svg" />
          }
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#686c71",
            fontSize: "14",
            background: "#fff",
            border: "#ebebeb solid 1px",
            borderRadius: "10px",
            "&:hover": { background: "#fff" },
            height: 38,
          }}
        >{`Filter & Sort`}</Button>
        <Button
          className="h-[38px] flex-1 primary"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "14",
            background: "#1e62d7",
            borderRadius: "10px",
            "&:hover": { background: "#1e62d7" },
            height: 38,
          }}
        >
          New Template
        </Button>
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
