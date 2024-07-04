import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

const ContentPane = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-row items-start justify-end py-0 pr-[5px] pl-0 box-border max-w-full ${className}`}
    >
      <div className=" bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start py-5 px-10 box-border gap-[351px] w-full z-[2] lg:flex-wrap lg:gap-[175px] mq450:gap-[44px] mq750:gap-[88px]">
        <TextField
          className="[border:none] bg-[transparent] h-14 w-[282px] font-plus-jakarta-sans text-base text-darkgray shrink-0"
          placeholder="Search products..."
          variant="outlined"
          InputProps={{
            startAdornment: (
              <img
                width="24px"
                height="24px"
                src="/vuesaxlinearsearchnormal.svg"
              />
            ),
          }}
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "56px",
              backgroundColor: "#f7f7f7",
              paddingLeft: "24px",
              borderRadius: "10px",
            },
            "& .MuiInputBase-input": { paddingLeft: "16px", color: "#adafba" },
            width: "282px",
          }}
        />
        <div className="w-[427px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-full shrink-0">
          <div className="self-stretch flex flex-row items-start justify-end pr-8 shrink-0 gap-[20px]">
            <div className="h-12 w-[314px] flex flex-row items-start justify-start gap-[24px]">
              <Button
                className="self-stretch flex-1 primary"
                startIcon={<img width="20px" height="20px" src="/add.svg" />}
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "14",
                  background: "#1e62d7",
                  borderRadius: "10px",
                  "&:hover": { background: "#1e62d7" },
                }}
              >{`Create New `}</Button>
              <div className="flex flex-col items-start justify-start py-0 pr-4 pl-0">
                <div className="w-12 h-12 relative rounded-3xs bg-whitesmoke">
                  <div className="absolute top-[0px] left-[0px] rounded-3xs bg-whitesmoke w-full h-full hidden" />
                  <img
                    className="absolute top-[12px] left-[12px] w-6 h-6 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/group-3.svg"
                  />
                </div>
              </div>
              <div className="h-[50px] w-[50px] relative rounded-[50%] bg-gainsboro-200 box-border border-[0px] border-solid border-whitesmoke" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ContentPane.propTypes = {
  className: PropTypes.string,
};

export default ContentPane;
