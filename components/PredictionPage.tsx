import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import PredictionList from '../components/PredictionList';
import { PredictionPageProps } from "../constants/types";

const PredictionPage = ({ onclick, currentPrice, nextContextTime }:PredictionPageProps) => {
  const [price, setprice] = useState('')
  const [token, settoken] = useState('')
  const getTime = () =>{
    
    var countDownDate = new Date(nextContextTime).getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ")
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);
  }

  useEffect(() => {
    
  getTime();
  }, [])
  

  return (
    <div className="absolute w-screen h-screen flex flex-col items-center justify-center bg-image">
      <Head>
        <title>Prediction Game</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div onClick={onclick} className=" absolute top-[20px] left-[20px] flex items-center justify-center sm:w-[100px] sm:h-[35px] bg-[#099E71] text-white text-[1.2rem] rounded-[10px] cursor-pointer">
        Back
      </div>
      <div className="w-[90%] h-[85%] sm:w-[80%] sm:h-[75%] flex flex-col items-center justify-start bg-white border-[5px] border-black shadow-prediction rounded-[20px] box-border pt-2">
        <span className="text-black text-[1rem] text-center sm:text-[1.2rem] mt-2 sm:mt-0">
          Predict ETH/USD price on 12:00, May 10
        </span>
        <div className="w-[100%] h-[100%] flex flex-col sm:flex-row items-center justify-start sm:justify-evenly">
          <div className="w-[100%] h-[45%] sm:w-[45%] sm:h-[90%] flex flex-col items-center sm:items-start justify-center sm:justify-between box-border sm:pl-[5%]">
            <span className="text-black font-bold text-[1.4rem] sm:text-[2rem] my-4 sm:my-0">YOUR PREDICTION</span>
            <input type="text" className="w-[75%] h-[15%] bg-[#e3e3e3] rounded-[15px] pl-[5%] text-[1.5rem] focus:outline-none" placeholder="0.00000" />
            <div className=" w-[100%] flex flex-col items-center my-3 sm:my-0 sm:items-start">
              <span className="text-black text-[1.3rem]">Participation fee : 1 Token</span>
              <span className="text-black text-[1.3rem]">Current price : {currentPrice}</span>
            </div>
            <button className="self-end -mt-[2px] sm:mt-0 w-[30%] min-h-[30px] max-h-[40px] rounded-[10px] bg-[#099E71] m-9 text-black text-[1.3rem]">Predict</button>
          </div>
          <div className="sm:w-[5px] bg-black -mt-4 mb-3 sm:h-[75%] w-[70%] h-[4px] rounded-[100%]"></div>
          <div className="w-[100%] h-[45%]  sm:w-[45%] sm:h-[90%] flex flex-col items-center justify-between pb-[5%]">
            <span className="text-black font-bold text-[1.4rem] my-3 sm:my-0 sm:text-[2rem]">LAST PREDICTION</span>
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
