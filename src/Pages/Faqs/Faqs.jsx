import sectionbanner from "../../assets/section-banner.jpg"
import CommonBanner from '../../Components/CommonBanner/CommonBanner';
import faqimg from "../../assets/faq-media.png"
import contactbg from "../../assets/con-sec-bg.jpg"
import Mainbtn from "../../Components/Buttons/Mainbtn";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { containerVariants, fadeInUp, fadeInRight, fadeInLeft } from "../../Animations/variants";

const breadcrumbs = [
  { label: "Home", url: "/" },
  { label: "Faqs", url: "/faqs" },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  const faqs = [
    { id: 1, question: "¿Qué incluye un tour guiado?", answer: "Nuestros tours guiados incluyen la planificación completa del recorrido, un guía profesional, información histórica y cultural del destino, y recomendaciones locales para aprovechar al máximo la experiencia." },
    { id: 2, question: "¿Cómo puedo reservar un tour?", answer: "Puedes reservar tu tour directamente desde nuestra web seleccionando el destino, la fecha y el número de participantes. Una vez completado el formulario, recibirás una confirmación por correo electrónico." },
    { id: 3, question: "¿Puedo cancelar o modificar mi reserva?", answer: "Sí, puedes cancelar o modificar tu reserva desde tu cuenta o contactando con nuestro equipo de soporte. Las condiciones de cancelación pueden variar dependiendo del tour reservado." },
    { id: 4, question: "¿Los tours se realizan en varios idiomas?", answer: "Sí, muchos de nuestros tours están disponibles en varios idiomas. Puedes consultar los idiomas disponibles en la página de cada tour antes de realizar la reserva." },
    { id: 5, question: "¿Cuánto duran normalmente los tours?", answer: "La duración de los tours depende del recorrido elegido. La mayoría tienen una duración entre 2 y 6 horas, aunque también ofrecemos tours de día completo." },
    { id: 6, question: "¿Los tours son adecuados para niños?", answer: "Sí, muchos de nuestros tours están diseñados para ser aptos para familias. En la descripción del tour indicamos si es especialmente recomendable para niños." },
    { id: 7, question: "¿Qué pasa si llego tarde al punto de encuentro?", answer: "Te recomendamos llegar al menos 10 minutos antes de la hora programada. Si llegas tarde, el tour puede haber comenzado y no siempre será posible reincorporarse al grupo." },
    { id: 8, question: "¿Qué debo llevar a un tour guiado?", answer: "Recomendamos llevar ropa y calzado cómodos, agua, protección solar y una cámara para capturar los mejores momentos del recorrido." },
    { id: 9, question: "¿Se pueden reservar tours privados?", answer: "Sí, ofrecemos tours privados para grupos que prefieren una experiencia más personalizada. Puedes solicitarlo desde la página del tour o contactando con nuestro equipo." },
    { id: 10, question: "¿Los tours se cancelan por mal tiempo?", answer: "En caso de condiciones meteorológicas extremas, el tour puede ser reprogramado o cancelado. En ese caso, te ofreceremos una nueva fecha o el reembolso correspondiente." }
  ];

  return (
    <>
      <CommonBanner
        title="Frequently Asked Questions"
        bgImage={sectionbanner}
        breadcrumbs={breadcrumbs}
      />

      <section className="px-[2%] sm:px-[8%] py-[6%] md:py-[8%] bg-[#Efffff] overflow-hidden">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col xl:flex-row justify-between items-start gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants(0.25)}
        >
          {/* Left Content */}
          <motion.div
            variants={fadeInLeft}
            className="w-full xl:w-[50%] title text-center relative"
          >
            <h1 className="text-secondary text-4xl md:text-6xl font-bold">
              Find <span className="text-yellow">Answers </span> For Questions You Have
            </h1>

            <p className="text-secondary my-6 text-lg">
              Traveller is a multi-award-winning strategy and content creation agency that specializes in travel marketing.
            </p>

            <div className="relative inline-block mt-8">
              <img
                src={faqimg}
                alt="faqimg"
                className="max-w-full h-auto rounded-3xl"
              />

              <div className="faq-element absolute -bottom-6 -right-6 lg:right-0 flex items-center gap-4 bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-yellow/20 shadow-xl">
                <Icon
                  icon="la:quote-left"
                  width="48"
                  height="48"
                  className="text-yellow shrink-0"
                />

                <h3 className="text-xl md:text-2xl font-bold text-secondary leading-tight">
                  Give us a chance <br /> to help you!
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Right FAQs */}
          <motion.div
            variants={fadeInRight}
            className="w-full xl:w-[50%]"
          >
            <div className='service-table2 bg-white rounded-3xl overflow-hidden shadow-sm border border-secondary/10'>
              {faqs.map((faq, index) => (
                <li key={faq.id} className='p-6 border-b border-gray-100 last:border-none list-none'>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className='w-full flex justify-between items-center cursor-pointer group'
                  >
                    <span className={`text-lg font-bold transition-colors duration-300 ${activeIndex === index ? 'text-yellow' : 'text-secondary group-hover:text-yellow'}`}>
                      {faq.question}
                    </span>
                    <Icon
                      icon="lsicon:right-outline"
                      width="28"
                      height="28"
                      className={`text-secondary transition-all duration-300 ${activeIndex === index ? 'rotate-90 text-yellow' : ''}`}
                    />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-60 mt-4' : 'max-h-0'}`}>
                    <p className='text-secondary/70 leading-relaxed'>{faq.answer}</p>
                  </div>
                </li>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="contact-faq px-[2%] sm:px-[8%] py-[6%] md:py-[10%] bg-no-repeat bg-cover bg-center relative min-h-[600px] flex items-center justify-center lg:justify-start"
        style={{ backgroundImage: `url(${contactbg})` }}
      >
        <div className="absolute bg-black/30 top-0 left-0 w-full h-full" ></div>

        <div className="w-full lg:w-[50%] title relative h-full p-5 sm:py-10 md:py-15 md:px-12.5 rounded-2xl border border-gray-200 backdrop-blur-[5px]">
          <h1 className="text-white text-3xl md:text-4xl xl:text-5xl font-bold pb-3">
            <span className="text-yellow italic">Reach </span> & Get in Touch<br /> With Us!
          </h1>

          <p className="text-white/80 mb-10 text-lg">
            We'd love to hear from you. Our friendly team is always here to chat.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-1">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full rounded-full px-6 py-4 text-secondary bg-white outline-none focus:ring-2 focus:ring-yellow transition-all"
                required
              />
            </div>
            <div className="md:col-span-1">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full rounded-full px-6 py-4 text-secondary bg-white outline-none focus:ring-2 focus:ring-yellow transition-all"
                required
              />
            </div>
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-full px-6 py-4 text-secondary bg-white outline-none focus:ring-2 focus:ring-yellow transition-all"
                required
              />
            </div>
            <div className="md:col-span-2">
              <textarea
                placeholder="Enter Your Message"
                rows="4"
                className="w-full rounded-3xl px-6 py-4 text-secondary bg-white outline-none focus:ring-2 focus:ring-yellow transition-all resize-none"
                required
              />
            </div>

            <div className="md:col-span-2 pt-4">
              <Mainbtn text="Send Message" />
            </div>
          </form>
        </div>
      </motion.section>
    </>
  );
};

export default Faqs;
