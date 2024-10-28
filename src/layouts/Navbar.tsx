import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { isActiveLink } from '../misc/helpers';
import LightButton from '../components/LightButton';
import { HiXMark } from "react-icons/hi2";
import { useAppSelector } from '../app/hooks';
import { bgDarkMode, bgLightMode } from '../misc/styles';

const Navbar = (): React.ReactNode => {
  const [navActive, setNavActive] = useState<boolean>(false)
  const theme = useAppSelector(state => state.theme.theme)

  return (
    <nav
      className={`flex items-center justify-between p-[20px] text-lg`}>
      <h1 className='font-semibold'>Alaa Fayez</h1>
      <div className='flex items-center gap-[16px]'>
        <ul className={`
        flex items-center sm:flex-row ms:justify-between sm:gap-[16px]
        flex-col justify-center gap-[20px]
        ${theme === "light" ? bgLightMode : bgDarkMode}
        sm:static
        fixed right-0 top-0 bottom-0
      ${navActive ? "left-0" : "left-[120%]"}
        `}>
          <h1 className='font-semibold sm:hidden mb-10'>Alaa Fayez</h1>
          <li>
            <Link
              className={`${isActiveLink("/") ? "font-bold border-b border-solid pb-1" : ""} ${theme === "light" ? "border-[#090D1F]" : "border-white"}`}
              to="/"
            >Blog</Link>
          </li>
          <li>
            <Link
              className={`${isActiveLink("/projects") ? "font-bold border-b border-solid pb-1" : ""} ${theme === "light" ? "border-[#090D1F]" : "border-white"}`}
              to="/projects"
            >Projects</Link>
          </li>
          <li>
            <Link
              className={`${isActiveLink("/about") ? "font-bold border-b border-solid pb-1" : ""} ${theme === "light" ? "border-[#090D1F]" : "border-white"}`}
              to="/about"
            >About</Link>
          </li>
          <li>
            <Link
              className={`${isActiveLink("/newsletter") ? "font-bold border-b border-solid pb-1" : ""} ${theme === "light" ? "border-[#090D1F]" : "border-white"}`}
              to="/newsletter"
            >Newsletter</Link>
          </li>

          <LightButton onClose={() => setNavActive(false)} theme={theme} />
          <HiXMark
            onClick={() => setNavActive(false)}
            size={32}
            className='sm:hidden absolute bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer' />
        </ul>

        <FaBars
          onClick={() => setNavActive(true)}
          className='text-xl sm:hidden block cursor-pointer' />
      </div>

    </nav>
  )
}

export default Navbar
