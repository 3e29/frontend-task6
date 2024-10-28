import React from 'react'

interface Props {
  date: string,
  title: string,
  content: string[],
  img: string,
  desc: string
}

const BlogsParent = ({ date, title, content, img, desc }: Props): React.ReactNode => {
  return (
    <div>
      <p className='text-[#6941C6] font-semibold text-[14px] mb-[32px]'>{date}</p>
      <h1 className='text-[36px] font-bold mb-[32px]'>{title}</h1>
      <img className='w-full h-[200px] lg:h-[426px] mb-[32px]' src={img} alt={title} />

      {content.map((text, index) => (
        <p className='text-[16px] text-[#667085] mb-[12px]' key={`text${index}`}>{text}</p>
      ))}

      <p className='mb-[12px] font-bold text-[16px] text-[#667085] text-center'>{desc}</p>
    </div>
  )
}

export default BlogsParent
