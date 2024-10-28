import React from 'react'

interface Props {
  img: string,
  desc: string,
  content: string[],
  id: number
}

const Blog = ({ img, desc, content, id }: Props): React.ReactNode => {
  return (
    <div className='text-[#667085] text-[16px] '>
      <img className='w-full h-[264px] lg:h-[426px] mb-[16px]' src={img} alt={`img-${id}}`} />

      <p className='text-center mb-[16px]'>{desc}</p>

      {content.map((text, index) =>
        <p className='mb-[16px]' key={`text-${id}-${index}`}>{text}</p>)}
    </div>
  )
}

export default Blog
