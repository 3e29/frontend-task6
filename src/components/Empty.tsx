import React from 'react'

interface Props {
  msg: string
}

const Empty = ({ msg }: Props): React.ReactNode => {
  return (
    <div className='text-[25px] font-semibold text-red-700 text-center my-8'>
      {msg}
    </div>
  )
}

export default Empty
