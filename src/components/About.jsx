import React, {useState} from 'react'

const About = () => {
    const [activeTab, setActiveTab] = useState('about');
    /**
     * A function that sets the active tab to the one passed as an argument
     * @param {string} id - The id of the tab to set as active
     * @returns {void}
     */
    const activeTabfunc = (id) => {
        /**
         * Sets the active tab to the one passed as an argument
         * @type {React.Dispatch<React.SetStateAction<string>>}
         */
        setActiveTab(id);
    };

  return (
    <div className="card about bg-[#363C43] w-[720px] h-[316px] font-['Plus_Jakarta_Sans'] text-[1rem] leading-[26px] text-left p-4 text-[#969696] cursor-pointer rounded-[20px] shadow-[11px_13px_5px_-3px_rgba(0,0,0,0.2)] mx-auto " >
       <div className='absolute'>
        <img src="/QuestionMark.png" className='mb-[100px]' alt="" />
        <img src="/FramesCubes.png" alt="" />
      </div>
      <div className="aboutNav bg-[#171717] rounded-[23px] w-[614px] h-[62px] flex list-none mx-auto">
        <li className={activeTab === 'about' ? "text-[#fff] text-center m-auto h-[49px] w-[192px] rounded-[15px] grid place-content-center bg-[#28292F] shadow-[0_20px_100px_30px_#171717]" :"text-[#a3adb2] text-center m-auto h-[49px] w-[192px] rounded-[15px] grid place-content-center hover:bg-gradient-to-r from-[#191919] to-[#1E2022] transition-all ease-out duration-300"}  onClick={() => activeTabfunc('about')}>About Me </li>
        <li className={activeTab === 'experience' ?"text-[#fff] text-center m-auto h-[49px] w-[192px] rounded-[15px] grid place-content-center bg-[#28292F] shadow-[0_20px_100px_30px_#171717]":"text-[#a3adb2] text-center m-auto h-[49px] w-[192px] rounded-[15px] grid place-content-center hover:bg-gradient-to-r from-[#191919] to-[#1E2022] transition-all ease-out duration-300"} onClick={() => activeTabfunc('experience')}>Expreriences </li>
        <li className={activeTab === 'recommend' ? "text-[#fff] text-center m-auto h-[49px] w-[192px] rounded-[15px] grid place-content-center bg-[#28292F] shadow-[0_20px_100px_30px_#171717]":"text-[#a3adb2] text-center m-auto h-[49px] w-[192px] rounded-[15px] grid place-content-center hover:bg-gradient-to-r from-[#191919] to-[#1E2022] transition-all ease-out duration-300"} onClick={() => activeTabfunc('recommend')}>Recommend</li>
      </div>

      <div className="mx-auto w-[614px] text-[1rem]">
        <p>
        Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
<br/><br/>
I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
        </p>
<div className="absolute w-[8px] h-[64px] bg-gradient-to-b from-[#888989] to-[#4a4e54] right-3 top-[150px] rounded-full"></div>
      </div>
    </div>
  )
}

export default About
