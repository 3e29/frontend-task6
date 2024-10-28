import React from 'react'

interface Props {
  category: string
}

const Category = ({ category }: Props): React.ReactNode => {

  switch (category) {
    case "Design":
    case "Leadership": return <div
      className="rounded-[16px] py-[2px] px-[10px] bg-[#f9f5ff]
      text-[14px] font-medium  text-[#6941c6] text-nowrap
      ">
      {category}</div>
    case "Research":
    case "Interface": return <div
      className="rounded-[16px] py-[2px] px-[10px] bg-[#EEF4FF]
      text-[14px] font-medium  text-[#3538CD] text-nowrap
      ">
      {category}</div>
    case "Presentation":
    case "Tools": return <div
      className="rounded-[16px] py-[2px] px-[10px] bg-[#FDF2FA]
      text-[14px] font-medium  text-[#C11574] text-nowrap
      ">
      {category}</div>
    case "Management":
    case "Customer Success": return <div
      className="rounded-[16px] py-[2px] px-[10px] bg-[#F8F9FC]
      text-[14px] font-medium  text-[#363F72] text-nowrap
      ">
      {category}</div>
    case "Frameworks": return <div
      className="rounded-[16px] py-[2px] px-[10px] bg-[#FFF6ED]
      text-[14px] font-medium  text-[#C4320A] text-nowrap
      ">
      {category}</div>
    case "Software Development": return <div
      className="rounded-[16px] py-[2px] px-[10px] bg-[#ECFDF3]
      text-[14px] font-medium  text-[#027A48] text-nowrap
      ">
      {category}</div>
    case "Product": return <div
      className="rounded-[16px] py-[2px] px-[10px] bg-[#F0F9FF]
      text-[14px] font-medium  text-[#026AA2] text-nowrap
      ">
      {category}</div>
    case "SaaS": return <div
      className="rounded-[16px] py-[2px] px-[10px] bg-[#FFF1F3]
      text-[14px] font-medium  text-[#C01048] text-nowrap
      ">
      {category}</div>
  }
}

export default Category
