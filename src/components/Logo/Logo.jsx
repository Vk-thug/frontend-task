import React from 'react'

const Logo = (props) => {
  return (
    <div id="hexagon" className='flex justify-center items-center w-[40px] h-[40px] bg-[#64ffda] text-[#0a192f] font-bold text-[20px] relative before:content-[""] before:w-[40px] before:h-0 before:absolute before:top-0 before:left-0 before:border-b-[13px] before:border-b-[#64ffda] before:border-l-[13px] before:border-l-[#0a192f] before:border-r-[13px] before:border-r-[#0a192f] after:content-[""] after:w-[40px] after:h-0 after:absolute after:bottom-0 after:left-0 after:border-t-[13px] after:border-t-[#64ffda] after:border-l-[13px] after:border-l-[#0a192f] after:border-r-[13px] after:border-r-[#0a192f]'>{props.logoname}</div>
  )
}

export default Logo