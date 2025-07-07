import React from 'react'

const BlogPost = ({ title, date, tags, description }) => {
  return (
    <div>
  <div className="mb-8">
    <h2 className="text-xl font-bold text-[#21243D]">{title}</h2>
    <p className="text-sm text-[#21243D] mt-1">{date} | <span className="text-[#8695A4]">{tags}</span></p>
    <p className="text-[#21243D] mt-2">{description}</p>
  </div>
</div>
  )
}

export default BlogPost