import { motion } from "framer-motion"
import { containerVariants, fadeInUp, scaleIn } from "../../Animations/variants"
import sectionbanner from "../../assets/section-banner.jpg"
import titleShape from "../../assets/Index/BookingSteps/Title-Shape.png"
import BlogCard from "../../Components/BlogCard/BlogCard";
import CommonBanner from '../../Components/CommonBanner/CommonBanner';
import blogData from '../../Data/Blog.json'
import { Icon } from "@iconify/react"

const breadcrumbs = [
  { label: "Home", url: "/" },
  { label: "Blogs", url: "/blogs" },
];

const categories = ["All", "Adventure", "Culture", "Tips", "Nature", "Gastronomy"];

const Blogs = () => {
  const featuredBlog = blogData[0];
  const listBlogs = blogData.slice(1);

  return (
    <>
      <CommonBanner
        bgImage={sectionbanner}
        title="Blogs"
        breadcrumbs={breadcrumbs}
      />

      {/* --- Filter & Search Bar --- */}
      <motion.div
        className="filters-wrap flex flex-wrap justify-between items-center gap-6 px-[2%] sm:px-[8%] lg:px-[12%] py-8 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants(0.1)}
      >
        <div className="category-filters">
          <div className="tag-cloud">
            {categories.map((cat, idx) => (
              <motion.span
                key={idx}
                className="cursor-pointer"
                variants={scaleIn}
              >
                {cat}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          className="search-box relative w-full md:w-80"
          variants={fadeInUp}
        >
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full px-5 py-3 rounded-full border-2 border-secondary/20 focus:border-yellow outline-none transition-all duration-300 pr-12 text-secondary"
          />
          <Icon
            icon="ri:search-line"
            className="absolute right-5 top-1/2 -translate-y-1/2 text-secondary text-xl pointer-events-none"
          />
        </motion.div>
      </motion.div>

      {/* --- Featured Blog Section --- */}
      <section className="featured-blog px-[2%] sm:px-[8%] lg:px-[12%] pb-10">
        <motion.div
          className="flex flex-col items-center mb-10 text-center relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-secondary text-4xl font-bold">Featured <span className="text-yellow">Update</span></h2>
          <img src={titleShape} alt="shape" className="w-[120px] object-contain mt-2" />
        </motion.div>

        {featuredBlog && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="relative group overflow-hidden rounded-3xl shadow-xl h-[500px] w-full cursor-pointer">
              <img
                src={featuredBlog.image}
                alt={featuredBlog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-secondary/90 via-secondary/20 to-transparent" />

              <div className="absolute bottom-10 left-10 right-10 z-10">
                <span className="bg-yellow text-white px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block tracking-wider">
                  BY {featuredBlog.author.toUpperCase()}
                </span>
                <h3 className="text-white text-3xl md:text-5xl font-bold max-w-3xl leading-tight group-hover:text-yellow transition-colors duration-300">
                  {featuredBlog.title}
                </h3>
              </div>

              <div className='blog-date text-secondary bg-[#DBEEEE] absolute top-8 right-8 flex flex-col text-center px-6 py-4 leading-tight shadow-xl rounded-2xl'>
                <span className='text-4xl font-bold'>{featuredBlog.date}</span>
                <span className='font-medium'>Mar</span>
              </div>
            </div>
          </motion.div>
        )}
      </section>

      {/* --- Main Blogs Grid --- */}
      <motion.div
        className="blog-wrap grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-[2%] sm:px-[8%] lg:px-[12%] py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants(0.15)}
      >
        {listBlogs.map((blog) => (
          <motion.div key={blog.id} variants={fadeInUp}>
            <BlogCard blog={blog} />
          </motion.div>
        ))}
      </motion.div>

      {/* --- Newsletter Section --- */}
      <section className="newsletter px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[8%]">
        <motion.div
          className="bg-secondary p-10 md:p-16 rounded-[40px] relative overflow-hidden flex flex-col items-center text-center shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
        >
          {/* Decorative shapes copied pattern from TourGuide style */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow/10 rounded-full blur-3xl -ml-20 -mb-20" />

          <motion.h2 className="text-white text-3xl md:text-5xl font-bold relative z-10" variants={fadeInUp}>
            Join Our <span className="text-yellow">Newsletter</span>
          </motion.h2>

          <motion.p className="text-gray-200/80 text-lg my-6 max-w-xl relative z-10" variants={fadeInUp}>
            Subscribe for the latest travel stories, exclusive tour offers, and guides directly to your inbox.
          </motion.p>

          <motion.form
            className="flex flex-col md:flex-row gap-4 w-full max-w-lg relative z-10"
            variants={fadeInUp}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-6 py-4 rounded-full bg-white outline-none focus:ring-2 focus:ring-yellow transition-all grow shadow-lg"
              required
            />
            <button
              type="submit"
              className="bg-yellow hover:bg-yellow/90 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </motion.form>
        </motion.div>
      </section>
    </>
  )
}

export default Blogs