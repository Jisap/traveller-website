import sectionbanner from "../../assets/section-banner.jpg"
import CommonBanner from '../../Components/CommonBanner/CommonBanner';
import faqimg from "../../assets/faq-media.png"
import contactbg from "../../assets/con-sec-bg.jpg"
import Mainbtn from "../../Components/Buttons/Mainbtn";
import { Icon } from "@iconify/react";
import { useState } from "react";




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
    { id: 3, question: "¿Puedo cancelar o modificar mi reserva?", answer: "Sí, puedes cancelar o modificar mi reserva desde tu cuenta o contactando con nuestro equipo de soporte. Las condiciones de cancelación pueden variar dependiendo del tour reservado." },
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
        title="Faqs"
        bgImage={sectionbanner}
        breadcrumbs={breadcrumbs}
      />

      <div className="px-[2%] sm:px-[8%] py-[6%] md:py-[8%] flex justify-between items-start xl:flex-row flex-col gap-12 h-auto xl:h-250 bg-[#Efffff]">
        <div className="w-full xl:w-[50%] title text-center relative h-full">
          <h1 className="text-secondary text-4xl md:text-6xl font-bold">
            Find <span className="text-yellow">Answers </span> For Questions You Have
          </h1>

          <p className="text-secondary my-2 text-lg">
            Traveller is a multi-award-winning strategy and content creation agency that specializes in travel marketing.
          </p>

          <div className="relative">
            <img
              src={faqimg}
              alt="faqimg"
              className="sm:ms-10"
            />

            <div className="faq-element flex-wrap">
              <Icon
                icon="la:quote-left"
                width="32"
                height="32"
              />

              <h3>
                Give us a chance to help you!
              </h3>
            </div>
          </div>

        </div>

        <div className="w-full xl:w-[50%]">
          <div className='service-table2 mb-8'>
            {faqs.map((faq, index) => (
              <li key={faq.id} className='p-5 border-b border-gray-200 list-none!'>
                <button onClick={() => toggleFAQ(index)} className='w-full flex justify-between items-center cursor-pointer'>
                  <span className='text-lg font-medium text-secondary text-start'>{faq.question}</span>
                  <Icon
                    icon="lsicon:right-outline"
                    width="35"
                    height="35"
                    className={`text-secondary transition-all duration-300 ${activeIndex === index ? 'rotate-90 text-yellow' : ''}`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-40 pt-3' : 'max-h-0'}`}>
                  <p className='text-sm md:text-lg font-light text-secondary'>{faq.answer}</p>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>

      <div className="contact-faq px-[2%] sm:px-[8%] py-[6%] md:py-[10%] bg-no-repeat bg-cover bg-center relative"
        style={{ backgroundImage: `url(${contactbg})` }}
      >
        <div className="absolute bg-black/30 top-0 left-0 w-full h-full" ></div>

        <div className="w-full lg:w-[50%] title relative h-full p-5 sm:py-10 md:py-15 md:px-12.5 rounded-2xl border border-gray-200 backdrop-blur-[5px]">
          <h1 className="text-white text-3xl md:text-4xl xl:text-5xl font-bold pb-3">
            <span className="text-yellow">Reach </span> & Get in Touch<br /> With Us!
          </h1>

          <p className="text-gray-200 pb-5">
            We’love to hear from you. Our friendly team is always here to chat
          </p>

          <form action="post" className="space-y-8">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full rounded-full px-6 py-4 text-gray-700 placeholder-gray-500 font-light bg-white outline-none transition duration-300"
              required
            />
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full rounded-full px-6 py-4 text-gray-700 placeholder-gray-500 font-light bg-white outline-none transition duration-300"
              required
            />
            <input
              type="text"
              placeholder="Add Your Subject"
              className="w-full rounded-full px-6 py-4 text-gray-700 placeholder-gray-500 font-light bg-white outline-none transition duration-300"
              required
            />
            <textarea
              placeholder="Enter Your Message"
              rows="5"
              className="w-full rounded-4xl px-6 py-4 text-gray-700 placeholder-gray-500 font-light bg-white outline-none transition duration-300"
              required
            />

            <Mainbtn
              text="Send Message"
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Faqs
