import AboutCom from '@/components/AboutCom'
import AboutCom2 from '@/components/AboutCom2'
import Newsletter from '@/components/Newsletter'
import Sponsors from '@/components/Sponsors'
import React from 'react'

const About = () => {
  return (
    <div  className="bg-slate-900 w-full h-auto  relative overflow-hidden items-center justify-center  ">
  
     <AboutCom/>
     <AboutCom2/>
    <Sponsors/>
 <Newsletter/>
    </div>
  )
}

export default About