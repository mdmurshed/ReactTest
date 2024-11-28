import { Image, Progress } from "@nextui-org/react";
import React, { useState } from "react";
import * as animation_reward_progress_pointer from "assets/lottiefiles/animation_reward_progress_pointer.json";
import LottieComponent from "../lottie/LottieComponent";
import { useNavigate } from "react-router-dom";

export default function RewardProgress({ giftCardRewardProgressData }) {
  console.log("giftCardRewardProgressData:", giftCardRewardProgressData);
  const [progressBarData] = useState(["50$", "100$"]);

  const navigate = useNavigate();
  return (
    <div className='flex'>
      <div
        className='p-2 w-20'
        onClick={() => {
          navigate("/profile/preferences");
        }}
      >
        <Image
          src={giftCardRewardProgressData.icon_url}
          className='w-12 h-12'
        />
      </div>
      <div className='relative w-full'>
        {/* Redeem level */}
        <div className='flex w-full'>
          {Array.from(
            { length: progressBarData.length + 1 },
            (_, index) => index + 1,
          ).map((item, index) =>
            item === 1 ? (
              <div
                key={index}
                style={{
                  width: (1 / (progressBarData.length + 1)) * 100 + "%",
                }}
              ></div>
            ) : item === progressBarData.length + 1 ? (
              <div
                key={index}
                className={
                  "text-lg flex justify-end items-center text-primary-600 z-10"
                }
                style={{
                  width: (1 / (progressBarData.length + 1)) * 100 + "%",
                }}
              >
                <div className='flex justify-end items-center text-sm flex-none'>
                  {progressBarData[index - 1]} Redeem
                </div>
              </div>
            ) : (
              <div
                key={index}
                className={
                  "text-lg flex justify-center items-center text-primary-600 z-10"
                }
                style={{
                  width: (2 / (progressBarData.length + 1)) * 100 + "%",
                }}
              >
                <div className='flex justify-center items-center text-sm flex-none pr-6'>
                  {progressBarData[index - 1]} Redeem
                </div>
              </div>
            ),
          )}
        </div>
        {/* Pointed Dots */}
        <div className='flex w-full'>
          {progressBarData.map((_, index) => (
            <div
              key={index}
              className='w-full text-lg flex justify-end items-center text-primary-600 z-10'
            >
              <div className='flex justify-center items-center'>
                <div className='p-3 bg-white rounded-full'> </div>
                <div className='absolute p-2 bg-primary-500 rounded-full'>
                  {" "}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Progress bar */}
        <div className='w-full mt-[-17.5px]'>
          <Progress
            aria-label='Reward Progress'
            value={giftCardRewardProgressData.progress_bar_scale_val * 100}
            className='w-full'
          />
        </div>
        {/* Animation and pointed points */}
        <div className='flex w-full'>
          {Array.from(
            { length: progressBarData.length + 1 },
            (_, index) => index + 1,
          ).map((item, index) =>
            item === 1 ? (
              <div
                key={index}
                className={"text-lg flex items-center z-10"}
                style={{
                  width: (1 / (progressBarData.length + 1)) * 100 + "%",
                }}
              >
                <div className='flex items-center text-sm flex-none'>
                  {giftCardRewardProgressData.progress_bar_scale_val * 100} %
                </div>
              </div>
            ) : item === progressBarData.length + 1 ? (
              <div
                key={index}
                className={
                  "text-lg flex justify-end items-center text-primary-600 z-10"
                }
                style={{
                  width: (1 / (progressBarData.length + 1)) * 100 + "%",
                }}
              >
                <div className='flex justify-end items-center text-sm flex-none'>
                  {/* <LottieComponent
                  animationData={animation_reward_progress_pointer}
                  width={30}
                  height={30}
                /> */}
                  4650 pts
                </div>
              </div>
            ) : (
              <div
                key={index}
                className={
                  "text-lg flex justify-center items-center text-primary-600 z-10"
                }
                style={{
                  width: (2 / (progressBarData.length + 1)) * 100 + "%",
                }}
              >
                <div className='flex justify-center items-center text-sm flex-none pr-6'>
                  <LottieComponent
                    animationData={animation_reward_progress_pointer}
                    width={30}
                    height={30}
                  />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
