import React from 'react'

const CustomHeading = ({title}: {title: string}) => {
  return (
    <div className="font-bold text-3xl md:text-4xl text-black font-montserrat  py-10 pt-20 text-center">
        {title}
    </div>
  )
}

export default CustomHeading