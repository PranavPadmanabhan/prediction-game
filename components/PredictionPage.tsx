import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import PredictionList from '../components/PredictionList';

const PredictionPage = () => {
  const [price, setprice] = useState('')
  const [token, settoken] = useState('')
  return (
    <div className="absolute z-[1000] w-screen h-screen flex flex-col items-center justify-center bg-black">
      <Head>
        <title>Prediction Game</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed top-[20px] left-[20px] w-[100px] h-[35px] rounded-[10px] bg-[#099E71] flex items-center justify-center text-white text-[1.2rem]">
          Back
      </div>
      <div className="w-[90%] h-[85%] sm:w-[80%] sm:h-[75%] flex flex-col items-center justify-start bg-gradient-to-r from-[#1D3736]  to-[#07580A] shadow-prediction rounded-[20px] box-border pt-2">
        <span className="text-white text-[1rem] text-center sm:text-[1.2rem] mt-2 sm:mt-0">
          Predict the price of Matic on 12:00, May 10
        </span>
        <div className="w-[100%] h-[100%] flex flex-col sm:flex-row items-center justify-start sm:justify-evenly">
          <div className="w-[100%] h-[45%] sm:w-[45%] sm:h-[90%] flex flex-col items-center sm:items-start justify-center sm:justify-between box-border sm:pl-[5%]">
            <span className="text-white font-bold text-[1.4rem] sm:text-[2rem] my-4 sm:my-0">YOUR PREDICTION</span>
            <input type="text" className="w-[75%] h-[15%] bg-white rounded-[15px] pl-[5%] text-[1.5rem] focus:outline-none" placeholder="0.00000" />
            <div className=" w-[100%] flex flex-col items-center my-3 sm:my-0 sm:items-start">
              <span className="text-white text-[1rem]">Participation fee : {price ?? 0} {token ?? 'Matic'}</span>
              <span className="text-white text-[1rem]">current price : #####</span>
            </div>
            <button className="self-end -mt-[2px] sm:mt-0 w-[30%] min-h-[35px] max-h-[40px] rounded-[10px] bg-[#099E71] m-9 text-white text-[1.3rem]">Predict</button>
          </div>
          <div className="sm:w-[5px] bg-white -mt-4 mb-3 sm:h-[75%] w-[70%] h-[4px] rounded-[100%]"></div>
          <div className="w-[100%] h-[45%]  sm:w-[45%] sm:h-[90%] flex flex-col items-center justify-between pb-[5%]">
            <span className="text-white font-bold text-[1.4rem] my-3 sm:my-0 sm:text-[2rem]">YOUR PREDICTION</span>
            <div className="flex flex-col w-[100%] h-[100%] sm:h-[80%] justify-start overflow-y-scroll items-center sm:items-start box-border sm:pl-[25%] scrollbar-hide">
              <PredictionList index={1} price={'0.000000'} owner={false} />
              <PredictionList index={2} price={0} owner={false} />
              <PredictionList index={3} price={'0.000000'} owner={false} />
              <PredictionList index={4} price={'0.000000'} owner={false} />
              <PredictionList index={5} price={1} owner={true} />
              <PredictionList index={6} price={'0.000000'} owner={false} />
              <PredictionList index={7} price={1.2} owner={false} />
              <PredictionList index={8} price={'0.000000'} owner={false} />
              <PredictionList index={9} price={'0.000000'} owner={false} />
              <PredictionList index={5} price={1} owner={false} />
              <PredictionList index={6} price={'0.000000'} owner={false} />
              <PredictionList index={7} price={1.2} owner={false} />
              <PredictionList index={8} price={'0.000000'} owner={false} />
              <PredictionList index={9} price={'0.000000'} owner={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionPage;
