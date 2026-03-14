import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVariants, fadeInUp } from "../../Animations/variants";

/**
 * CommonBanner Component
 * A reusable banner for different sections/pages of the website.
 * 
 * @param {string} title - The main heading title.
 * @param {string} bgImage - The background image URL.
 * @param {Array} breadcrumbs - An array of objects { label: string, path: string }.
 */
const CommonBanner = ({ title, bgImage, breadcrumbs = [] }) => {
  return (
    <div
      className='section-banner h-90 lg:h-150 bg-center bg-cover flex justify-center items-center text-white bg-no-repeat relative'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <motion.div 
        className="section-content z-10 text-center px-4"
        variants={containerVariants(0.2, 0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h4 
          className="text-3xl lg:text-5xl xl:text-7xl font-extrabold text-secondary mb-6"
          variants={fadeInUp}
        >
          {title}
        </motion.h4>
        
        <motion.nav 
          aria-label="Breadcrumb"
          variants={containerVariants(0.1, 0.2)}
        >
          <ul className="flex items-center flex-wrap justify-center gap-3">
            {breadcrumbs.map((crumb, index) => (
              <motion.li 
                key={index} 
                className="flex items-center gap-3"
                variants={fadeInUp}
              >
                <Link 
                  to={crumb.path} 
                  className="cursor-pointer text-sm lg:text-lg font-semibold text-secondary/80 hover:text-yellow transition-all duration-300 ease-in-out"
                >
                  {crumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && (
                  <span className="text-secondary/50 font-bold">/</span>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </motion.div>
    </div>
  );
};

export default CommonBanner;
