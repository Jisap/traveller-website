import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  containerVariants, 
  fadeInUp, 
  floatingAnimation, 
  scaleIn 
} from "../../Animations/variants";
import Mainbtn from "../../Components/Buttons/Mainbtn";
import errorBg from "../../assets/ErrorPage/error-bg.png";
import errorCloud from "../../assets/ErrorPage/error-bg-cloud.png";
import hotBalloon from "../../assets/ErrorPage/hotballon-error.png";

const Page404 = () => {
  return (
    <div className="min-h-screen bg-[#e6f1f3] flex items-center justify-center relative overflow-hidden py-20 px-4">
      {/* Background Decor */}
      <motion.img 
        src={errorCloud} 
        alt="cloud" 
        className="absolute top-10 left-10 w-40 opacity-50"
        animate={{ x: [0, 50, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img 
        src={errorCloud} 
        alt="cloud" 
        className="absolute bottom-20 right-10 w-60 opacity-40 hidden md:block"
        animate={{ x: [0, -70, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div 
        className="container max-w-4xl mx-auto text-center z-10"
        variants={containerVariants(0.3, 0.2)}
        initial="hidden"
        animate="visible"
      >
        <div className="relative inline-block mb-10">
          {/* Balloon Animation */}
          <motion.img 
            src={hotBalloon} 
            alt="Hot Balloon" 
            className="absolute -top-20 -right-20 w-32 md:w-48 z-20"
            variants={floatingAnimation}
            initial="animate"
            animate="animate"
          />

          {/* 404 Image/Text Section */}
          <motion.div variants={scaleIn} className="relative">
            <h1 className="text-[120px] md:text-[200px] font-extrabold text-secondary leading-none select-none tracking-tighter">
              4<span className="text-yellow">0</span>4
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 flex items-center justify-center">
              <img src={errorBg} alt="404 layout" className="w-full max-w-md opacity-20" />
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            The destination you're looking for seems to have drifted off the map. 
            Don't worry, even the best travelers get lost sometimes!
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <Mainbtn text="Back to Home Container" />
            </Link>
            <Link to="/contact" className="text-secondary font-bold hover:text-yellow transition-colors underline underline-offset-4 decoration-yellow/30 px-6 py-3">
              Contact Support
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Ground aesthetic */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-linear-to-t from-white/30 to-transparent"></div>
    </div>
  );
};

export default Page404;