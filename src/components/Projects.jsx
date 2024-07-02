import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";

const Projects = ({ className = "" }) => {
  return (
    <div
      className={`w-[318px] bg-white flex flex-col items-start justify-start pt-8 px-7 pb-7 box-border gap-[158px] shrink-0 text-left text-11xl text-gray-100 font-mulish mq1050:hidden mq450:gap-[79px] mq750:pt-[21px] mq750:pb-5 mq750:box-border ${className}`}
    >
      <img
        className="w-[318px] h-[900px] relative hidden"
        alt=""
        src="/box.svg"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[38px] mq450:gap-[19px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
          <h1 className="m-0 relative text-inherit leading-[100%] font-bold font-inherit inline-block min-w-[115px] z-[1] mq1050:text-5xl mq1050:leading-[24px] mq450:text-lg mq450:leading-[18px]">
            Projects️
          </h1>
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-7 h-7 relative z-[1]"
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[28px] text-base text-darkgray">
          <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <div className="w-2 h-2 relative rounded-[50%] bg-darkgray z-[1]" />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0">
              <div className="relative leading-[100%] font-semibold inline-block min-w-[42px] z-[1]">
                Team
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-1 h-2 relative z-[1]"
                alt=""
                src="/icon-1.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <FormControl
              className="self-stretch h-4 font-mulish font-semibold text-base text-gray-100"
              variant="standard"
              sx={{
                borderTopWidth: "0px",
                borderRightWidth: "0px",
                borderBottomWidth: "0px",
                borderLeftWidth: "0px",
                borderRadius: "0px 0px 0px 0px",
                width: "100%",
                height: "16px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "16px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "16px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "16px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "16px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#1c1d22",
                  fontSize: 16,
                  fontWeight: "SemiBold",
                  fontFamily: "Mulish",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "20px",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img width="8px" height="4px" src="/icon-2.svg" style={{}} />
                )}
              >
                <MenuItem>Projects</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <div className="w-[171px] flex flex-row items-start justify-start py-0 px-px box-border">
              <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="self-stretch w-[15px] relative max-h-full min-h-[174px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/lines.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                  <div className="rounded-lg flex flex-row items-start justify-start py-2.5 px-[18px] z-[1]">
                    <div className="relative leading-[100%] font-semibold inline-block min-w-[109px]">
                      All projects (3)
                    </div>
                  </div>
                  <Button
                    className="self-stretch h-9 z-[1]"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#1c1d22",
                      fontSize: "16",
                      background: "rgba(28, 29, 34, 0.04)",
                      borderRadius: "18px",
                      "&:hover": { background: "rgba(28, 29, 34, 0.04)" },
                      height: 36,
                    }}
                  >
                    Design system
                  </Button>
                  <div className="rounded-lg flex flex-row items-start justify-start py-2.5 px-[18px] z-[1]">
                    <div className="relative leading-[100%] font-semibold inline-block min-w-[72px]">
                      User flow
                    </div>
                  </div>
                  <div className="rounded-lg flex flex-row items-start justify-start py-2.5 px-[18px] z-[1]">
                    <div className="relative leading-[100%] font-semibold inline-block min-w-[90px]">
                      Ux research
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <FormControl
              className="self-stretch h-4 font-mulish font-semibold text-base text-gray-100"
              variant="standard"
              sx={{
                borderTopWidth: "0px",
                borderRightWidth: "0px",
                borderBottomWidth: "0px",
                borderLeftWidth: "0px",
                borderRadius: "0px 0px 0px 0px",
                width: "100%",
                height: "16px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "16px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "16px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "16px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "16px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#1c1d22",
                  fontSize: 16,
                  fontWeight: "SemiBold",
                  fontFamily: "Mulish",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "20px",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img width="8px" height="4px" src="/icon-3.svg" style={{}} />
                )}
              >
                <MenuItem>Tasks</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <div className="flex flex-row items-start justify-start py-0 px-px">
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="self-stretch w-[15px] relative max-h-full min-h-[174px] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/lines.svg"
                />
                <div className="flex flex-col items-start justify-start gap-[10px]">
                  <div className="rounded-lg flex flex-row items-start justify-start py-2.5 px-[18px] z-[1]">
                    <div className="relative leading-[100%] font-semibold inline-block min-w-[99px]">
                      All tasks (11)
                    </div>
                  </div>
                  <div className="rounded-lg flex flex-row items-start justify-start py-2.5 px-[18px] z-[1]">
                    <div className="relative leading-[100%] font-semibold inline-block min-w-[66px]">
                      To do (4)
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-200 flex flex-row items-start justify-start py-2.5 px-[17px] whitespace-nowrap z-[1] text-gray-100">
                    <div className="relative leading-[100%] font-semibold inline-block min-w-[109px]">
                      In progress (4)
                    </div>
                  </div>
                  <div className="rounded-lg flex flex-row items-start justify-start py-2.5 px-[18px] z-[1]">
                    <div className="relative leading-[100%] font-semibold inline-block min-w-[65px]">
                      Done (3)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <div className="w-2 h-2 relative rounded-[50%] bg-darkgray z-[1]" />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0">
              <b className="relative leading-[100%] inline-block min-w-[81px] z-[1]">
                Reminders
              </b>
            </div>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-1 h-2 relative z-[1]"
                alt=""
                src="/icon-1.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <div className="w-2 h-2 relative rounded-[50%] bg-darkgray z-[1]" />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0">
              <b className="relative leading-[100%] inline-block min-w-[91px] z-[1]">
                Messengers
              </b>
            </div>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-1 h-2 relative z-[1]"
                alt=""
                src="/icon-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[42px] rounded-3xl bg-gray-200 flex flex-row items-start justify-start p-1 box-border z-[1] text-sm text-darkgray font-exo-2">
        <div className="h-[42px] w-[262px] relative rounded-3xl bg-gray-200 hidden" />
        <Button
          className="self-stretch flex-1 shadow-[0px_8px_6px_rgba(28,_29,_34,_0.06)] z-[1]"
          startIcon={<img width="20px" height="20px" src="/icon-6.svg" />}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#1c1d22",
            fontSize: "14",
            background: "#fff",
            borderRadius: "18px",
            "&:hover": { background: "#fff" },
          }}
        >
          Light
        </Button>
        <div className="flex flex-row items-start justify-start py-[7px] px-[35px] relative gap-[6px] z-[1]">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg" />
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
            loading="lazy"
            alt=""
            src="/icon-7.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <div className="relative leading-[100%] font-semibold inline-block min-w-[31px] z-[1]">
              Dark
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {
  className: PropTypes.string,
};

export default Projects;
