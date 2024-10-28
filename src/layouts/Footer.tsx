import React from 'react'

const Footer = (): React.JSX.Element => {
  return (
    <footer className='text-center text-[20px] pb-[30px] sm:flex sm:flex-row-reverse'>
      <ul className='flex flex-col gap-[14px] sm:flex-row mr-auto'>
        <li>
          <a className='cursor-pointer'>Twitter</a>
        </li>
        <li>
          <a className='cursor-pointer'>LinkedIn</a>
        </li>
        <li>
          <a className='cursor-pointer'>Email</a>
        </li>
        <li>
          <a className='cursor-pointer'>RSS feed</a>
        </li>
        <li>
          <a className='cursor-pointer'>Add to Feedly</a>
        </li>
      </ul>

      <p className='mt-8 sm:m-0 sm:mr-[14px]'>© 2023</p>
    </footer>
  )
}

export default Footer
