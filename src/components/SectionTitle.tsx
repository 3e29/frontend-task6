import React from 'react'

interface Props {
  title: string,
  style?: string
}

const SectionTitle = ({ title, style }: Props): React.JSX.Element => {
  return (
    <h1 className={`text-[24px] font-semibold ${style}`}>{title}</h1>
  )
}

export default SectionTitle
