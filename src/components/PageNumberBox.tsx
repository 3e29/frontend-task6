import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setPage } from '../features/posts/postsSlice'

interface Props {
  number: number,
  currentPage: number
}

const PageNumberBox = ({ number, currentPage }: Props): React.ReactNode => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(state => state.theme.theme)

  return (
    <button
      onClick={() => dispatch(setPage(number))}
      className={`
    rounded-[8px] w-[40px] h-[40px] text-[14px] my-4
    flex items-center justify-center font-medium
    ${number === currentPage ? (theme === "light" ? "bg-[#F9F5FF] text-[#7F56D9]" : "bg-[#F9F5FF] text-[#112211]"): (theme === "light" ? "bg-transparent text-[#7F56D9]": "text-[#667085] bg-transparent")}
    `}>
      {number}
    </button>
  )
}

export default PageNumberBox
