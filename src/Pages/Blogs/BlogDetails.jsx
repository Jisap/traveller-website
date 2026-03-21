import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import CommonBanner from '../../Components/CommonBanner/CommonBanner'
import sectionbanner from "../../assets/section-banner.jpg"
import blogData from "../../Data/Blog.json"
import Mainbtn from '../../Components/Buttons/Mainbtn'
import { containerVariants, fadeInUp, scaleIn } from "../../Animations/variants"

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find(d => d.id === parseInt(id));

  if (!blog) {
    return (
      <div className="py-20 text-center bg-[#f4fbfc] min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-secondary font-afacad mb-6">Blog Not Found</h2>
        <Mainbtn text="Back to Blogs" link="/blogs" />
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Blogs", url: "/blogs" },
    { label: blog.title, url: `/blogs/${id}` },
  ];

  const relatedBlogs = blogData.filter(b => b.id !== blog.id).slice(0, 3);

  return (
    <>
      <CommonBanner
        title="Blog Details"
        breadcrumbs={breadcrumbs}
        bgImage={sectionbanner}
      />

      <section className="blog-details-area px-[2%] sm:px-[8%] lg:px-[12%] py-[6%] md:py-[8%] bg-[#f8fbff]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* --- Main Content --- */}
            <motion.div 
              className="lg:w-2/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants(0.1)}
            >
              {/* Blog Header Image */}
              <motion.div className="rounded-3xl overflow-hidden shadow-2xl mb-8 relative h-[350px] md:h-[500px]" variants={scaleIn}>
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
              </motion.div>

              {/* Meta Info */}
              <motion.div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b border-secondary/10" variants={fadeInUp}>
                <div className="flex items-center gap-2 text-secondary">
                  <Icon icon="ri:user-line" className="text-yellow text-xl" />
                  <span className="font-bold">By {blog.author}</span>
                </div>
                <div className="flex items-center gap-2 text-secondary">
                  <Icon icon="ri:calendar-line" className="text-yellow text-xl" />
                  <span className="font-bold">Mar {blog.date}, 2026</span>
                </div>
                {blog.category && (
                  <div className="flex items-center gap-2 text-secondary">
                    <Icon icon="ri:price-tag-3-line" className="text-yellow text-xl" />
                    <span className="font-bold uppercase text-xs tracking-widest">{blog.category}</span>
                  </div>
                )}
                {blog.readTime && (
                  <div className="md:flex items-center gap-2 text-secondary ml-auto hidden">
                    <Icon icon="ri:time-line" className="text-yellow text-xl" />
                    <span className="font-medium text-sm">{blog.readTime} reading time</span>
                  </div>
                )}
              </motion.div>

              {/* Title & Content */}
              <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary mb-10 leading-tight" variants={fadeInUp}>
                {blog.title}
              </motion.h1>

              <motion.div className="details-main-content prose-lg text-secondary/70" variants={fadeInUp}>
                <p className="text-xl mb-6 font-medium text-secondary">
                  {blog.excerpt || "Descubre más detalles sobre este fascinante destino y mejora tu experiencia de viaje con nuestros consejos expertos."}
                </p>
                <div className="text-lg leading-relaxed space-y-4">
                  {blog.content ? (
                    blog.content.split('\n').map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))
                  ) : (
                    <p>Contenido detallado próximamente...</p>
                  )}
                </div>
              </motion.div>

              {/* Tags */}
              {blog.tags && (
                <motion.div className="mt-12 flex flex-wrap gap-3 items-center" variants={fadeInUp}>
                  <span className="font-bold text-secondary mr-2 font-afacad text-xl">Tags:</span>
                  <div className="tag-cloud">
                    {blog.tags.map((tag, idx) => (
                      <span key={idx} className="bg-white! shadow-sm! hover:bg-yellow! hover:text-white! cursor-pointer px-4 py-2 rounded-full border border-secondary/5">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* --- Sidebar --- */}
            <motion.aside 
              className="lg:w-1/3 space-y-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants(0.2)}
            >
              {/* Search Widget */}
              <motion.div className="bg-white p-8 rounded-3xl shadow-lg border border-secondary/5" variants={fadeInUp}>
                <h3 className="widget-title mb-6">Search</h3>
                <div className="relative mt-4">
                  <input 
                    type="text" 
                    placeholder="Search keywords..." 
                    className="w-full px-5 py-3 rounded-full border-2 border-secondary/10 focus:border-yellow outline-none transition-all pr-12"
                  />
                  <Icon icon="ri:search-line" className="absolute right-5 top-1/2 -translate-y-1/2 text-secondary text-xl" />
                </div>
              </motion.div>

              {/* Related Posts Widget */}
              <motion.div className="bg-white p-8 rounded-3xl shadow-lg border border-secondary/5" variants={fadeInUp}>
                <h3 className="widget-title mb-6">Latest Posts</h3>
                <div className="space-y-6 mt-4">
                  {relatedBlogs.map((rBlog) => (
                    <Link to={`/blogs/${rBlog.id}`} key={rBlog.id} className="flex gap-4 group">
                      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                        <img src={rBlog.image} alt={rBlog.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300" />
                      </div>
                      <div>
                        <span className="text-yellow text-sm font-medium">March {rBlog.date}, 2026</span>
                        <h4 className="text-secondary font-bold group-hover:text-yellow transition-colors line-clamp-2">
                          {rBlog.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter Widget */}
              <motion.div className="bg-secondary p-8 rounded-3xl shadow-2xl relative overflow-hidden" variants={fadeInUp}>
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Never Miss a Story</h3>
                  <p className="text-white/70 mb-6 font-figtree">Subscribe to receive our latest updates and travel guides.</p>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="Email Address" className="w-full px-5 py-3 rounded-full outline-none focus:ring-2 focus:ring-yellow shadow-inner" />
                    <button className="w-full bg-yellow text-white font-bold py-3 rounded-full hover:bg-white hover:text-yellow transition-all duration-300">
                      Subscribe Now
                    </button>
                  </form>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
              </motion.div>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogDetails