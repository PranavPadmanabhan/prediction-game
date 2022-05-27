import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import PredictionList from "../components/PredictionList";
import { PredictionPageProps } from "../constants/types";

const PredictionPage = ({
  currentArray,
  predictButtonStatus,
  onclick,
  predictPrice,
  currentPrice,
  nextContextTime,
  time,
}: PredictionPageProps) => {
  const [amount, setAmount] = useState("");
 

  return (
    <div className="absolute w-screen h-screen flex flex-col items-center justify-center bg-image">
      <Head>
        <title>Prediction Game</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        onClick={onclick}
        className=" absolute top-[20px] left-[20px] flex items-center justify-center w-[80px] h-[35px] sm:w-[100px] sm:h-[35px] bg-[#099E71] text-white text-[1.2rem] rounded-[10px] cursor-pointer"
      >
        Back
      </div>
      <div className="w-[90%] h-[85%] sm:w-[80%] sm:h-[75%] flex flex-col items-center justify-start bg-white border-[5px] border-black shadow-prediction rounded-[20px] box-border pt-2">
        <span className="text-black text-[1rem] text-center sm:text-[1.2rem] mt-2 sm:mt-0">
          Predict ETH/USD price on{" "}
          {time.getHours() > 12
            ? (time.getHours() - 12).toString()
            : (time.getHours()<10?`0${time.getHours()}`: time.getHours().toString())}
          :{time.getMinutes()<10?`0${time.getMinutes()}`: time.getMinutes().toString()}{time.getHours()>=12?'PM':'AM'} {time.toLocaleDateString("en-US")}
        </span>
        <div className="w-[100%] h-[100%] flex flex-col sm:flex-row items-center justify-start sm:justify-evenly">
          <div className="w-[100%] h-[45%] sm:w-[45%] sm:h-[90%] flex flex-col items-center sm:items-start justify-center sm:justify-between box-border sm:pl-[5%]">
            <span className="text-black font-bold text-[1.4rem] sm:text-[2rem] my-4 sm:my-0">
              YOUR PREDICTION
            </span>
            <input
              type="text"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              className="w-[75%] h-[15%] bg-[#e3e3e3] rounded-[15px] pl-[5%] text-[1.5rem] focus:outline-none"
              placeholder="0000.000000"
            />
            <div className=" w-[100%] flex flex-col items-center my-3 sm:my-0 sm:items-start">
              <span className="text-black text-[1.3rem]">
                Participation fee : 1 Token
              </span>
              <span className="text-black text-[1.3rem]">
                Current price : {currentPrice}
              </span>
            </div>
            <button
              onClick={() =>
                predictButtonStatus == "Predict" && predictPrice(amount)
              }
              className={`${predictButtonStatus != "Predict" &&
                "cursor-not-allowed"} self-end -mt-[2px] sm:mt-0 w-[30%] min-h-[30px] max-h-[40px] rounded-[10px] bg-[#099E71] m-9 text-black text-[1.3rem]`}
            >
              {predictButtonStatus}
            </button>
          </div>
          <div className="sm:w-[5px] bg-black -mt-4 mb-3 sm:h-[75%] w-[70%] h-[4px] rounded-[100%]"></div>
          <div className="w-[100%] h-[45%]  sm:w-[45%] sm:h-[90%] flex flex-col items-center justify-between pb-[5%]">
            <span className="text-black font-bold text-[1.4rem] my-3 sm:my-0 sm:text-[2rem]">
              LAST PREDICTION
            </span>
            <div className="flex flex-col w-[100%] h-[100%] sm:h-[80%] justify-start overflow-y-scroll items-center sm:items-start box-border sm:pl-[25%] scrollbar-hide">
              {currentArray &&
                currentArray.map(
                  (data: { value: string; owner: boolean }, index: number) => (
                    <PredictionList
                      key={index}
                      index={index + 1}
                      price={data.value}
                      owner={data.owner}
                    />
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionPage;
