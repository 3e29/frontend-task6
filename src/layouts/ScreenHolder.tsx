import React from 'react'
import { useAppSelector } from '../app/hooks'
import { bgDarkMode, bgLightMode } from '../misc/styles'

interface Props {
  children: React.ReactNode
}

const ScreenHolder = ({ children }: Props): React.JSX.Element => {
  const theme = useAppSelector(state => state.theme.theme)

  return (
    <div
      className={`${theme === "light" ? bgLightMode : bgDarkMode} lg:px-[65px] lg:py-[20px] font-custom`}
    >
      {children}
    </div>
  )
}

export default ScreenHolder
