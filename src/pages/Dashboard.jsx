import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import Projects from "../components/Projects";
import ContentPane from "../components/ContentPane";
import BoardHeaderContent from "../components/BoardHeaderContent";
import Container from "../components/Container";
import Task from "../components/Task";
import FrameComponent from "../components/FrameComponent";

const Dashboard = () => {
  return (
    <div className="h-[900px] relative bg-whitesmoke w-full overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] lg:h-auto mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
      <img
        className="h-[988px] w-[90px] relative mq1050:hidden"
        loading="lazy"
        alt=""
        src="/sidebar.svg"
      />
      <Projects />
      <div className="h-[178px] w-80 relative rounded-xl bg-white box-border hidden border-[2px] border-dashed border-gray-600" />
      <main className="h-[900px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[804px] box-border gap-[40px] max-w-[calc(100%_-_408px)] lg:h-auto lg:pb-[523px] lg:box-border mq1050:pb-[340px] mq1050:box-border mq1050:max-w-full mq450:pb-[221px] mq450:box-border mq750:gap-[20px]">
        <ContentPane />
        <section className=" flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[24px] shrink-0 w-full text-left text-sm text-gray-500 font-exo-2">
          <BoardHeaderContent />
          <Container />
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full mq1050:flex-wrap">
            <div className="flex-1 rounded-xl bg-white flex flex-col items-start justify-start pt-[22px] pb-4 pr-[15px] pl-4 box-border gap-[14.5px] min-w-[229px] max-w-full mq1050:flex-1">
              <div className="w-[352px] h-[826px] relative rounded-xl bg-white hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] font-mulish">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative leading-[100%] font-semibold inline-block min-w-[54px] z-[1]">
                    Todo (3)
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[6px]">
                  <img
                    className="h-[18px] w-[18px] relative min-h-[18px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/icon-10.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <div className="relative text-sm leading-[100%] font-semibold font-exo-2 text-gray-100 text-left inline-block min-w-[88px] z-[1]">
                      Add new task
                    </div>
                  </div>
                </button>
              </div>
              <Task
                addProductToTheMarket="Add product to the market"
                ui8Marketplace="Ui8 marketplace"
                marketIconOneName="1"
                marketIconTwoName="5"
              />
              <div className="self-stretch rounded-xl bg-white flex flex-row items-start justify-start z-[1] border-[2px] border-dashed border-gray-600">
                <div className="self-stretch w-80 relative rounded-xl bg-white box-border hidden border-[2px] border-dashed border-gray-600" />
                <Task
                  addProductToTheMarket="Launch product promotion"
                  ui8Marketplace="Kickstarter campaign"
                  marketIconOneName="17"
                  marketIconTwoName="3"
                  propAlignSelf="unset"
                  propFlex="1"
                  propDisplay="unset"
                  propMinWidth="unset"
                  propMinWidth1="13px"
                />
              </div>
              <div className="self-stretch h-[178px] relative rounded-xl bg-white box-border z-[1] text-lightslategray-100 border-[2px] border-solid border-gray-400">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-white box-border w-full h-full hidden border-[2px] border-solid border-gray-400" />
                <img
                  className="absolute top-[128px] left-[252px] w-[30px] h-[30px] object-contain z-[2]"
                  loading="lazy"
                  alt=""
                  src="/item@2x.png"
                />
                <div className="absolute top-[128px] left-[20px] w-[280px] flex flex-row items-start justify-between gap-[20px]">
                  <div className="rounded-mid bg-lightslategray-200 overflow-hidden flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap z-[1]">
                    <div className="relative leading-[100%] font-semibold inline-block min-w-[69px]">
                      8 Jan 2022
                    </div>
                  </div>
                  <div className="w-[66px] flex flex-row items-start justify-start gap-[6px] text-xs text-gray-100">
                    <img
                      className="h-[30px] w-[30px] relative object-cover z-[1]"
                      alt=""
                      src="/item@2x.png"
                    />
                    <div className="h-[15px] flex-1 relative">
                      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white box-border w-[30px] h-[30px] z-[3] border-[0px] border-solid border-gray-300" />
                      <b className="absolute top-[9px] left-[8px] leading-[100%] inline-block min-w-[14px] z-[4]">
                        +2
                      </b>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[20px] left-[20px] w-[280px] flex flex-col items-start justify-start gap-[10px] text-base text-gray-100">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                    <div className="flex flex-col items-start justify-start gap-[22px]">
                      <div className="flex flex-col items-start justify-start gap-[6px]">
                        <b className="relative leading-[100%] z-[1]">
                          Make twitter banner
                        </b>
                        <div className="relative text-sm leading-[100%] font-medium text-gray-500 inline-block min-w-[115px] z-[1]">
                          Twitter marketing
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[4px] text-sm text-gray-500">
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
                      <div className="relative leading-[100%] font-semibold inline-block min-w-[37px] z-[1]">
                        10/10
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-1 relative rounded-sm bg-royalblue z-[1]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-gray-600 hidden" />
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-royalblue hidden" />
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[178px] rounded-xl bg-white box-border flex flex-row items-start justify-center py-[81px] px-5 whitespace-nowrap text-base border-[2px] border-dashed border-gray-600">
                <div className="h-[178px] w-80 relative rounded-xl bg-white box-border hidden border-[2px] border-dashed border-gray-600" />
                <div className="self-stretch w-[157px] relative leading-[100%] font-semibold inline-block z-[1]">
                  Drag your task here...
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-white flex flex-col items-start justify-start pt-[22px] pb-4 pr-[15px] pl-4 box-border gap-[14.5px] min-w-[229px] max-w-full mq1050:flex-1">
              <div className="w-[352px] h-[826px] relative rounded-xl bg-white hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative leading-[100%] font-semibold inline-block min-w-[96px] z-[1]">
                    In progress (4)
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[6px]">
                  <img
                    className="h-[18px] w-[18px] relative min-h-[18px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/icon-10.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <div className="relative text-sm leading-[100%] font-semibold font-exo-2 text-gray-100 text-left inline-block min-w-[88px] z-[1]">
                      Add new task
                    </div>
                  </div>
                </button>
              </div>
              <div className="self-stretch h-[178px] relative rounded-xl bg-white box-border z-[1] text-salmon-100 border-[2px] border-solid border-gray-400">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-white box-border w-full h-full hidden border-[2px] border-solid border-gray-400" />
                <img
                  className="absolute top-[128px] left-[252px] w-[30px] h-[30px] object-contain z-[2]"
                  loading="lazy"
                  alt=""
                  src="/item@2x.png"
                />
                <div className="absolute top-[128px] left-[20px] w-[280px] flex flex-row items-start justify-between gap-[20px]">
                  <div className="rounded-mid bg-salmon-200 overflow-hidden flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap z-[1]">
                    <div className="relative leading-[100%] font-semibold inline-block min-w-[79px]">
                      12 Nov 2022
                    </div>
                  </div>
                  <div className="w-[66px] flex flex-row items-start justify-start gap-[6px] text-xs text-gray-100">
                    <img
                      className="h-[30px] w-[30px] relative object-cover z-[1]"
                      alt=""
                      src="/item@2x.png"
                    />
                    <div className="h-[15px] flex-1 relative">
                      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white box-border w-[30px] h-[30px] z-[3] border-[0px] border-solid border-gray-300" />
                      <b className="absolute top-[9px] left-[8px] leading-[100%] inline-block min-w-[14px] z-[4]">
                        +2
                      </b>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[20px] left-[20px] w-[280px] flex flex-col items-start justify-start gap-[10px] text-base text-gray-100">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[38px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                        <b className="relative leading-[100%] z-[1]">
                          Design system update
                        </b>
                        <div className="relative text-sm leading-[100%] font-medium text-gray-500 inline-block min-w-[128px] z-[1]">
                          Oreo website project
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
                        alt=""
                        src="/icon-11.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start pt-px pb-0 pr-5 pl-0">
                        <div className="relative leading-[100%] font-semibold inline-block min-w-[59px] z-[1]">
                          Progress
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-right text-gray-100">
                        <div className="relative leading-[100%] font-semibold inline-block min-w-[31px] z-[1]">
                          3/10
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-1 relative rounded-sm bg-gray-600 z-[1]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-gray-600 hidden" />
                    <div className="absolute h-full w-2/5 top-[0%] right-[60%] bottom-[0%] left-[0%] rounded-sm bg-salmon-100 z-[1]" />
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-xl bg-white flex flex-col items-start justify-start py-[17px] pr-[17px] pl-[18px] gap-[20px] z-[1] border-[2px] border-solid border-gray-400">
                <div className="w-80 h-[178px] relative rounded-xl bg-white box-border hidden border-[2px] border-solid border-gray-400" />
                <FrameComponent
                  designSystemUpdate="Create brand guideline"
                  oreoWebsiteProject="Oreo branding project"
                  prop="7/10"
                  propWidth="70%"
                  propRight="30%"
                />
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
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
                          alt=""
                          src="/icon-12.svg"
                        />
                        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                          <div className="relative leading-[100%] inline-block min-w-[8px] z-[1]">
                            2
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[4px]">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px] z-[1]"
                          alt=""
                          src="/icon-13.svg"
                        />
                        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                          <div className="relative leading-[100%] inline-block min-w-[14px] z-[1]">
                            13
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[178px] relative rounded-xl bg-white box-border z-[1] text-salmon-100 border-[2px] border-solid border-gray-400">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-white box-border w-full h-full hidden border-[2px] border-solid border-gray-400" />
                <img
                  className="absolute top-[128px] left-[252px] w-[30px] h-[30px] object-contain z-[2]"
                  loading="lazy"
                  alt=""
                  src="/item@2x.png"
                />
                <div className="absolute top-[128px] left-[20px] w-[280px] flex flex-row items-start justify-between gap-[20px]">
                  <div className="rounded-mid bg-salmon-200 overflow-hidden flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap z-[1]">
                    <div className="relative leading-[100%] font-semibold inline-block min-w-[79px]">
                      14 Nov 2022
                    </div>
                  </div>
                  <div className="w-[66px] flex flex-row items-start justify-start gap-[6px] text-xs text-gray-100">
                    <img
                      className="h-[30px] w-[30px] relative object-cover z-[1]"
                      alt=""
                      src="/item@2x.png"
                    />
                    <div className="h-[15px] flex-1 relative">
                      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white box-border w-[30px] h-[30px] z-[3] border-[0px] border-solid border-gray-300" />
                      <b className="absolute top-[9px] left-[8px] leading-[100%] inline-block min-w-[14px] z-[4]">
                        +2
                      </b>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[20px] left-[20px] w-[280px] flex flex-col items-start justify-start gap-[10px] text-base text-gray-100">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[22px]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[38px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                        <b className="relative leading-[100%] z-[1]">
                          Create wireframe for ios app
                        </b>
                        <div className="relative text-sm leading-[100%] font-medium text-gray-500 inline-block min-w-[128px] z-[1]">
                          Oreo ios app project
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
                        alt=""
                        src="/icon-11.svg"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start pt-px pb-0 pr-5 pl-0">
                        <div className="relative leading-[100%] font-semibold inline-block min-w-[59px] z-[1]">
                          Progress
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-right text-gray-100">
                        <div className="relative leading-[100%] font-semibold inline-block min-w-[31px] z-[1]">
                          4/10
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-1 relative rounded-sm bg-gray-600 z-[1]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-gray-600 hidden" />
                    <div className="absolute h-full w-2/5 top-[0%] right-[60%] bottom-[0%] left-[0%] rounded-sm bg-salmon-100 z-[1]" />
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-xl bg-white flex flex-col items-start justify-start py-[17px] pr-[17px] pl-[18px] gap-[21px] text-gray-100 border-[2px] border-solid border-gray-400">
                <div className="w-80 h-[178px] relative rounded-xl bg-white box-border hidden border-[2px] border-solid border-gray-400" />
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base">
                  <div className="w-[169px] flex flex-col items-start justify-start gap-[6px]">
                    <b className="self-stretch h-4 relative leading-[100%] inline-block z-[1]">
                      Create ui kit for layout
                    </b>
                    <div className="w-[117px] h-3.5 relative text-sm leading-[100%] font-medium text-gray-500 inline-block z-[1]">{`Crypto mobile app `}</div>
                  </div>
                  <img
                    className="h-[26px] w-[26px] relative z-[1]"
                    alt=""
                    src="/more.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-gray-500">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[1]"
                      alt=""
                      src="/icon-11.svg"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-px pb-0 pr-5 pl-0">
                      <div className="w-[59px] h-3.5 relative leading-[100%] font-semibold inline-block z-[1]">
                        Progress
                      </div>
                    </div>
                    <div className="w-[30px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-right text-gray-100">
                      <div className="self-stretch h-3.5 relative leading-[100%] font-semibold inline-block z-[1]">
                        3/10
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-1 relative rounded-sm bg-gray-600 z-[1]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-gray-600 hidden" />
                    <div className="absolute h-full w-[30%] top-[0%] right-[70%] bottom-[0%] left-[0%] rounded-sm bg-salmon-100 z-[1]" />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-sandybrown-100">
                  <div className="h-[30px] w-[110px] rounded-mid bg-sandybrown-200 overflow-hidden shrink-0 flex flex-row items-start justify-start py-2 px-4 box-border whitespace-nowrap z-[1]">
                    <div className="self-stretch flex-1 relative leading-[100%] font-semibold">
                      15 Nov 2022
                    </div>
                  </div>
                  <div className="w-[85px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border text-gray-500">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[11px]">
                      <div className="flex-1 flex flex-row items-start justify-start gap-[4px]">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px] z-[1]"
                          alt=""
                          src="/icon-12.svg"
                        />
                        <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                          <div className="self-stretch h-3.5 relative leading-[100%] inline-block z-[1]">
                            23
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-start gap-[4px]">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px] z-[1]"
                          alt=""
                          src="/icon-13.svg"
                        />
                        <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                          <div className="self-stretch h-3.5 relative leading-[100%] inline-block z-[1]">
                            12
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[583px] w-60 flex flex-col items-start justify-start pt-[22px] pb-[157px] pr-0 pl-4 box-border relative gap-[14.5px] mq1050:pt-5 mq1050:pb-[102px] mq1050:box-border mq450:pb-[66px] mq450:box-border">
              <div className="w-[352px] h-[826px] absolute !m-[0] right-[-112px] bottom-[-243px] rounded-xl bg-white" />
              <div className="w-80 flex flex-row items-start justify-between shrink-0 gap-[20px]">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative leading-[100%] font-semibold inline-block min-w-[55px] z-[1]">
                    Done (3)
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[111px] flex flex-row items-start justify-start gap-[6px] z-[1]">
                  <img
                    className="h-[18px] w-[18px] relative min-h-[18px] shrink-0"
                    loading="lazy"
                    alt=""
                    src="/icon-10.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <div className="self-stretch relative text-sm leading-[100%] font-semibold font-exo-2 text-gray-100 text-left shrink-0">
                      Add new task
                    </div>
                  </div>
                </button>
              </div>
              <div className="w-80 rounded-xl bg-white box-border flex flex-col items-start justify-start py-[17px] px-[18px] gap-[21px] shrink-0 z-[1] border-[2px] border-solid border-gray-400">
                <div className="w-80 h-[178px] relative rounded-xl bg-white box-border hidden border-[2px] border-solid border-gray-400" />
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base text-gray-100">
                  <div className="flex flex-col items-start justify-start gap-[6px]">
                    <b className="relative leading-[100%] z-[2]">
                      Add product to the market
                    </b>
                    <div className="relative text-sm leading-[100%] font-medium text-gray-500 inline-block min-w-[105px] z-[2]">
                      Ui8 marketplace
                    </div>
                  </div>
                  <img
                    className="h-[26px] w-[26px] relative z-[2]"
                    loading="lazy"
                    alt=""
                    src="/more.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                    <div className="flex flex-row items-start justify-start gap-[4px]">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[2]"
                        alt=""
                        src="/icon-11.svg"
                      />
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="relative leading-[100%] font-semibold inline-block min-w-[59px] z-[2]">
                          Progress
                        </div>
                      </div>
                    </div>
                    <div className="w-[37px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-right text-gray-100">
                      <div className="self-stretch h-3.5 relative leading-[100%] font-semibold inline-block z-[2]">
                        10/10
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-1 relative rounded-sm bg-mediumseagreen z-[1]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-gray-600 hidden" />
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-mediumseagreen hidden" />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <div className="rounded-mid bg-lightslategray-200 overflow-hidden flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap z-[1]">
                    <div className="relative leading-[100%] font-semibold inline-block min-w-[69px]">
                      8 Jan 2022
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                    <div className="flex flex-row items-start justify-start gap-[12px]">
                      <div className="flex flex-row items-start justify-start gap-[4px]">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px] z-[2]"
                          loading="lazy"
                          alt=""
                          src="/icon-12.svg"
                        />
                        <div className="w-1.5 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                          <div className="self-stretch h-3.5 relative leading-[100%] inline-block z-[2]">
                            1
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[4px]">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px] z-[2]"
                          loading="lazy"
                          alt=""
                          src="/icon-13.svg"
                        />
                        <div className="w-2 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                          <div className="self-stretch h-3.5 relative leading-[100%] inline-block z-[2]">
                            5
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-80 rounded-xl bg-white box-border flex flex-col items-start justify-start py-[17px] px-[18px] gap-[21px] shrink-0 z-[2] border-[2px] border-solid border-gray-400">
                <div className="w-80 h-[178px] relative rounded-xl bg-white box-border hidden border-[2px] border-solid border-gray-400" />
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base text-gray-100">
                  <div className="flex flex-col items-start justify-start gap-[6px]">
                    <b className="relative leading-[100%] z-[3]">
                      Launch product promotion
                    </b>
                    <div className="relative text-sm leading-[100%] font-medium text-gray-500 z-[3]">
                      Kickstarter campaign
                    </div>
                  </div>
                  <img
                    className="h-[26px] w-[26px] relative z-[3]"
                    loading="lazy"
                    alt=""
                    src="/more.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                    <div className="flex flex-row items-start justify-start gap-[4px]">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[3]"
                        alt=""
                        src="/icon-11.svg"
                      />
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="relative leading-[100%] font-semibold inline-block min-w-[59px] z-[3]">
                          Progress
                        </div>
                      </div>
                    </div>
                    <div className="w-[37px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-right text-gray-100">
                      <div className="self-stretch h-3.5 relative leading-[100%] font-semibold inline-block z-[3]">
                        10/10
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-1 relative rounded-sm bg-mediumseagreen z-[1]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-gray-600 hidden" />
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-mediumseagreen hidden" />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <div className="rounded-mid bg-lightslategray-200 overflow-hidden flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap z-[1]">
                    <div className="relative leading-[100%] font-semibold inline-block min-w-[69px]">
                      8 Jan 2022
                    </div>
                  </div>
                  <div className="w-[76px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                      <img
                        className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px] z-[3]"
                        alt=""
                        src="/icon-12.svg"
                      />
                      <div className="flex-1 flex flex-row items-start justify-start gap-[4px]">
                        <div className="flex-1 flex flex-col items-start justify-start pt-0.5 pb-0 pr-[7px] pl-0">
                          <div className="self-stretch h-3.5 relative leading-[100%] inline-block z-[3]">
                            17
                          </div>
                        </div>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px] z-[3]"
                          alt=""
                          src="/icon-13.svg"
                        />
                        <div className="w-2 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                          <div className="self-stretch h-3.5 relative leading-[100%] inline-block z-[3]">
                            3
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-80 rounded-xl bg-white box-border flex flex-col items-start justify-start py-[17px] px-[18px] gap-[21px] shrink-0 z-[1] text-gray-100 border-[2px] border-solid border-gray-400">
                <div className="w-80 h-[178px] relative rounded-xl bg-white box-border hidden border-[2px] border-solid border-gray-400" />
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base">
                  <div className="flex flex-col items-start justify-start gap-[6px]">
                    <b className="relative leading-[100%] z-[2]">
                      Make twitter banner
                    </b>
                    <div className="relative text-sm leading-[100%] font-medium text-gray-500 inline-block min-w-[115px] z-[2]">
                      Twitter marketing
                    </div>
                  </div>
                  <img
                    className="h-[26px] w-[26px] relative z-[2]"
                    loading="lazy"
                    alt=""
                    src="/more.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-gray-500">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                    <div className="flex flex-row items-start justify-start gap-[4px]">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[2]"
                        alt=""
                        src="/icon-11.svg"
                      />
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="relative leading-[100%] font-semibold inline-block min-w-[59px] z-[2]">
                          Progress
                        </div>
                      </div>
                    </div>
                    <div className="w-[37px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-right text-gray-100">
                      <div className="self-stretch h-3.5 relative leading-[100%] font-semibold inline-block z-[2]">
                        10/10
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-1 relative rounded-sm bg-mediumseagreen z-[1]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-gray-600 hidden" />
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-mediumseagreen hidden" />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between py-0 pr-[18px] pl-0 gap-[20px] text-lightslategray-100">
                  <div className="rounded-mid bg-lightslategray-200 overflow-hidden flex flex-row items-start justify-start py-2 px-4 whitespace-nowrap z-[2]">
                    <div className="relative leading-[100%] font-semibold inline-block min-w-[69px]">
                      8 Jan 2022
                    </div>
                  </div>
                  <div className="h-[30px] w-12 relative text-xs text-gray-100">
                    <img
                      className="absolute top-[0px] left-[0px] w-[30px] h-[30px] object-cover z-[2]"
                      alt=""
                      src="/item-6@2x.png"
                    />
                    <div className="absolute top-[0px] left-[18px] flex flex-row items-start justify-start">
                      <img
                        className="h-[30px] w-[30px] relative object-cover z-[3]"
                        loading="lazy"
                        alt=""
                        src="/item-7@2x.png"
                      />
                      <div className="h-full w-full !m-[0] absolute top-[0px] right-[-18px] bottom-[0px] flex flex-row items-start justify-start py-[9px] px-2 box-border">
                        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50%] bg-white box-border z-[4] border-[0px] border-solid border-gray-300" />
                        <b className="self-stretch flex-1 relative leading-[100%] z-[5]">
                          +2
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-80 h-[178px] rounded-xl bg-white box-border flex flex-row items-start justify-center py-[81px] px-5 shrink-0 whitespace-nowrap z-[1] text-base border-[2px] border-dashed border-gray-600">
                <div className="h-[178px] w-80 relative rounded-xl bg-white box-border hidden border-[2px] border-dashed border-gray-600" />
                <div className="self-stretch w-[157px] relative leading-[100%] font-semibold inline-block z-[2]">
                  Drag your task here...
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
