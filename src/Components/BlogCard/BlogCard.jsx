import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
  return (
    <>
      <Link to={`/blogs/${blog.id}`} className='blog-item block relative group overflow-hidden rounded-xl shadow-lg bg-white transition-all duration-300 hover:shadow-2xl'>
        <div className='blog-img w-full relative h-[300px]'>
          <img
            src={blog.image}
            alt={blog.title}
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
          />

          <div className='blog-date text-secondary bg-[#DBEEEE] absolute top-0 right-0 flex flex-col text-center m-2 px-5 py-3 leading-tight shadow-xl rounded-xl'>
            <span className='text-4xl font-bold'>{blog.date}</span>
            <span className=''>Mar</span>
          </div>

          <div className='blog-content absolute bottom-0 left-0 w-full p-6 z-10'>
            <span className='bg-yellow text-sm px-2 rounded-sm text-white inline-block mb-1'>
              By {blog.author}
            </span>

            <h3 className='text-white text-2xl md:text-3xl font-medium hover:text-yellow transition-colors duration-300'>
              {blog.title}
            </h3>
          </div>
        </div>
      </Link>
    </>
  )
}

export default BlogCard