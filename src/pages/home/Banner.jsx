import React from 'react';
import { motion } from "motion/react"
import { delay, easeOut } from 'motion';
import team1 from "../../assets/team/team1.jpg"
import team2 from "../../assets/team/team2.jpg"

const Banner = () => {
    return (
        <div className="hero bg-blue-100 px-6  md:px-10 mb-20 min-h-[500px]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex-1'>
    <motion.img
    animate={{y: [50, 100, 50]}}
    transition={{duration: 10, repeat: Infinity}}
      src={team1}
      className="w-64 rounded-t-3xl rounded-br-3xl border-l-[6px] border-b-[6px] border-blue-500 shadow-2xl" />
       <motion.img
    animate={{x: [100, 150, 100]}}
    transition={{duration: 10, delay: 5, repeat: Infinity}}
      src={team2}
      className="w-64 rounded-t-3xl rounded-br-3xl border-l-[6px] border-b-[6px] border-blue-500 shadow-2xl" />
    </div>
    <div className='flex-1'>
      <motion.h1
      animate={{x: [0, 50, 0]}}
      transition={{duration: 5, delay: 1, ease: easeOut, repeat: Infinity}}
       className="text-5xl font-bold"
       
       >Latest <motion.span
       animate={{color: ['#ffc933', '#a0ff33', '#ff5133']}}
       transition={{duration: 1.5, repeat: Infinity}}
       >Jobs</motion.span> For You!</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;