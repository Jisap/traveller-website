import React from 'react'
import CommonBanner from '../../Components/CommonBanner/CommonBanner'
import sectionbanner from "../../assets/section-banner.jpg"
import blogData from "../../Data/Blog.json"
import { useParams } from 'react-router-dom'

const BlogDetails = () => {

  const { id } = useParams();
  const blog = blogData.find(d => d.id === parseInt(id));

  if (!blog) {
    return (
      <div className="py-20 text-center bg-[#f4fbfc] min-h-screen">
        <h2 className="text-3xl font-bold text-secondary font-afacad">Blog Not Found</h2>
        <Mainbtn text="Back to Destinations" className="mt-6" onClick={() => window.history.back()} />
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Blogs", url: "/blogs" },
    { label: blog ? blog.title : "Blog Details", url: `/blogs/${id}` },
  ];

  return (
    <>
      <CommonBanner
        title="Blog Details"
        breadcrumbs={breadcrumbs}
        bgImage={sectionbanner}
      />
    </>
  )
}

export default BlogDetails