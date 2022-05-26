import React from "react";
import { PredictionDetailsProps } from "../constants/types";

const PredictedDetails = ({ Fee, date, logo, predictedValue, price, reward, token, frequency }:PredictionDetailsProps) => {
  return (
    <div className="w-[90%] h-[40%] min-w-[90%] min-h-[95%] border-[5px] border-black sm:w-[75%] sm:sm:h-[40%] sm:min-h-[300px] sm:min-w-[300px] sm:mr-8 mt-8 bg-white border-black-20 rounded-[10px] flex flex-col items-center justify-start p-[4%]">
      <div className="w-[100%] h-[40%] flex items-center justify-between sm:-mt-3">
        <div className="flex items-center justify-start w-[50%]">
         
          <span className="text-[black] text-[2.3rem] text-bold ml-3">
            {token}
          </span>
        </div>
      </div>
      <div className="w-[100%]  flex flex-col items-start justify-evenly">
        <div className="flex flex-col sm:-mt-3">
          <span className="text-black text-[1.4rem]">
            Reward : {reward} {token}
          </span>
          <span className="text-black text-[0.9rem]">Participate for 12 PM , {date}</span>
        </div>
        <div className="w-[80%] flex items-center justify-between mt-3">
          <div className="flex flex-col">
            <span className="text-black text-[0.7rem]">Frequency</span>
            <span className="text-black text-[1.2rem] ml-3">{frequency}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-black text-[0.7rem]">Total Fee</span>
            <span className="text-black text-[1.2rem]">{frequency * price} {token}</span>
          </div>
        </div>
        <div className="w-[80%] flex items-center justify-between my-2">
          <div className="flex flex-col">
            <span className="text-black text-[0.7rem]">Your Prediction</span>
            <span className="text-black text-[1.2rem]">{predictedValue}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-black text-[0.7rem]">Prediction Fee :</span>
            <span className="text-black text-[1.2rem]">{Fee} {token}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictedDetails;
