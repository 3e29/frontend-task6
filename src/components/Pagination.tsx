import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import PageNumberBox from './PageNumberBox';
import { nextPage, prevPage } from '../features/posts/postsSlice';
import { useAppDispatch } from '../app/hooks';

interface Props {
  totalPages: number,
  currentPage: number
}

const Pagination = ({totalPages, currentPage}:Props): React.ReactNode => {
  const dispatch = useAppDispatch()

  return (
    <div className="border-t border-solid border-[#EAECF057] pt-2 mt-[32px] sm:flex sm:items-center sm:justify-between">
      <button
        onClick={() => dispatch(prevPage())}
        className='text-[#667085] text-[14px] flex items-center mx-auto font-medium cursor-pointer'>
        <IoIosArrowRoundBack size={24} />
        Previous
      </button>

      <p className='flex items-center justify-center flex-1 flex-wrap'>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <PageNumberBox number={pageNumber} currentPage={currentPage} key={pageNumber} />
        ))}
      </p>

      <button
        onClick={() => dispatch(nextPage())}
        className='text-[#667085] text-[14px] flex items-center mx-auto font-medium text-center cursor-pointer'>
        Next
        <IoIosArrowRoundForward size={24} />
      </button>
    </div>
  )
}

export default Pagination
