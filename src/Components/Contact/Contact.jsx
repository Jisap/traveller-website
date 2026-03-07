import React from 'react';
import PageTransition from '../Transition/PageTransition';

const Contact = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-6xl font-kaushan! mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-400 max-w-md mx-auto figtree!">
            We'd love to hear from you. Our team is always here to help you plan your next adventure.
          </p>
          <div className="mt-10">
            <button className="main-btn">Send Message</button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
