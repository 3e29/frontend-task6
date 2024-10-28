import React from 'react'

const Subscribe = (): React.ReactNode => {
  return (
    <div className="sm:text-center">
      <p className='text-[#7F56D9] text-[16px] font-semibold mb-[12px] text-center'>Newsletter</p>
      <h1 className='leading-tight text-[48px] font-semibold mb-[12px]'>Stories and interviews</h1>
      <p className='text-[#667085] text-[20px] mb-[40px]'>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>

      <form className='text-start'>
        <div className='sm:flex sm:justify-center'>
          <div className='grid grid-rows-3 sm:grid-rows-2 gap-[16px]
          sm:justify-center w-[326px] sm:w-[494px]
          '>

            <input
              className='shadow-sm border border-solid border-[#D0D5DD]
          pr-[14px] py-[12px] pl-[16px] rounded-[8px] w-full 
          '
              placeholder='Enter your email'
              type='email' />

            <button
              className='rounded-[8px] border border-solid border-[#7F56D9]
              shadow-sm px-[20px] py-[12px] bg-[#7F56D9]
              font-medium text-white cursor-pointer sm:w-full'
              type='button'
            >Subscribe</button>

            <span className='text-[#667085] text-[14px] block text-start'>
              We care about your data in our {" "}
              <a className='underline'>privacy policy</a>
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Subscribe
