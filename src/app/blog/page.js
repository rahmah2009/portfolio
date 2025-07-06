import BlogPost from '@/components/Blog/BlogPost'
import React from 'react'

const Blog = () => {
  return (
    <main className="max-w-2xl sm:w-[339px]  mx-auto py-10 px-4">
       <div>
          <h1 className="text-3xl text-[#21243D] font-bold mb-10">Blog</h1>
         <BlogPost
          title="UI Interactions of the week"
          date="12 Feb 2019"
          tags="Express, Handlebars"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
         /> <hr className='text-[#E0E0E0] p-[10px]'/>
       </div>
       <div>
         <BlogPost
          title="UI Interactions of the week"
          date="12 Feb 2019"
          tags="Express, Handlebars"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
         /> <hr className='text-[#E0E0E0] p-[10px]'/>
       </div>
       <div>
         <BlogPost
          title="UI Interactions of the week"
          date="12 Feb 2019"
          tags="Express, Handlebars"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
         /> <hr className='text-[#E0E0E0] p-[10px]'/>
       </div>
       <div>
         <BlogPost
          title="UI Interactions of the week"
          date="12 Feb 2019"
          tags="Express, Handlebars"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
         /> <hr className='text-[#E0E0E0] p-[10px]'/>
       </div>
    </main>
  )
}

export default Blog