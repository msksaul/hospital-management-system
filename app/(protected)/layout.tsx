import React from 'react'

const PretectedLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full h-screen bg-gray-200'>
      <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]'>
        sidebar
      </div>
      <div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] flex flex-col'>
        navbar
      <div className='h-full w-full p-2 overflow-y-scroll'>{children}</div>
      </div>
    </div>
  )
}

export default PretectedLayout