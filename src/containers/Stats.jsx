import React from 'react';
import { stats } from '../constants';
import CountUpOnScroll from "../utils/countUpOnScroll"

const Stats = () => (
  <div className={`flex flex-wrap mx-[-15px] text-center`}>
    {stats.map((stat) => (
      <div key={stat.id}
        className={`w-[50%] md:w-[25%] px-[15px] mt-4 md:mt-0`}>
        <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] bg-gradient-to-r from-red-500 via-red-300 to-gray-300 bg-clip-text text-transparent'>
          <CountUpOnScroll base={0} target={stat.value} duration={3} />+
        </h4>
        <p className='font-poppins font-normal xs:text-[20px] text-[12px] text-gradient uppercase'>
          {stat.title}
        </p>
      </div>
    ))}
  </div>
);

export default Stats;