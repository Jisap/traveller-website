import patern from "../../../assets/Index/Blogs/patern.png"
import Mainbtn from "../../Buttons/Mainbtn"
import blogData from "../../../Data/Blog.json"
import BlogCard from "../../BlogCard/BlogCard"




const Blogs = () => {
  return (
    <>
      <div
        className='blog px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[10%] bg-secondary bg-repeat w-full'
        style={{ backgroundImage: `url(${patern})` }}
      >
        <div className="blog-title flex justify-between items-end flex-wrap pb-10 gap-5">
          <div className="title lg:max-w-2xl">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              Explore
              <span className="text-yellow"> Latest News </span>
            </h1>

            <p className="text-gray-200/80 my-2 text-lg">
              Maybe for a travel blog, wildlife site, or webdevelopment project here are a few sample templates you can use to simulate real-time news updates
            </p>
          </div>

          <Mainbtn
            text="See More Articles"
            link="/blogs"
          />
        </div>

        <div className="blog-wrap grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {blogData.slice(0, 3).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Blogs