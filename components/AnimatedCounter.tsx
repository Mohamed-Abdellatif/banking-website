"use client";
import CountUp from "react-countup";


const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp prefix="$" end={amount} duration={2.75} decimal="." decimals={2}/>
    </div>
  );
};

export default AnimatedCounter;
