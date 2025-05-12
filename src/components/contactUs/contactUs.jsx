import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from 'react-modal';
import { useLongTextAnimation } from '../../hooks/textAnimation.jsx';
// import ContactForm from './form/Index.jsx';
import getCustomStyles from '../../styles/popUpModelStyle.js';
// import '../../styles/popUpModelStyle.js'; 

Modal.setAppElement('#root'); // adjust to your astro root selector

export default function ContactUs({ data, partners }) {
  const { heading, explore_cta } = data || {};
  const [showForm, setShowForm] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const longTextRef = useLongTextAnimation('.contact-section-main');
  const partnerHeading = partners?.heading || '';
  const partnersList = partners?.partners?.data || [];

  // Remove next/navigation; use window.location
  const [slug, setSlug] = useState('');
  useEffect(() => {
    const path = window.location.pathname;
    setSlug(path.split('/')[1] || '');
  }, []);

  const openForm = useCallback(() => setShowForm(true), []);
  const closeForm = useCallback(() => setShowForm(false), []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 800);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = getCustomStyles(isMobile);

  return (
    <div className="pt-[39.35%] relative h-[450px] lg:h-auto bg-gradientBG opacity-85 contact-section-main" ref={longTextRef}>
      <div className="container flex justify-center items-center flex-col gap-8 p-5 absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="text-center demo-text">
          <p className="text-white text-3xl font-bold py-2 drop-shadow-md md:text-[34px] md:leading-[52px] lg:leading-[56px] lg:w-[70%] mx-auto lg:text-[48px]">
            {heading}
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={openForm}
            className="ca-button--gooey text-black bg-white rounded-xl cursor-pointer inline-block align-middle text-[14px] font-[600] capitalize py-4 px-10 relative"
          >
            <span className="relative z-10">
              {explore_cta?.name || 'Talk with Experts'}
            </span>
            <div className="c-button__blobs">
              <div />
              <div />
              <div />
            </div>
          </button>

          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
              >
                <Modal
                  isOpen={showForm}
                  onRequestClose={closeForm}
                  style={styles}
                  htmlOpenClassName="ReactModal__Body--open"
                >
                  {/* <ContactForm id="contact_form" onClose={closeForm} /> */}
                </Modal>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full opacity-40">
        <picture>
          <source media="(max-width:760px)" srcSet="/images/m-color-waves-2.webp" />
          <img
            src="/images/color-waves-3.webp"
            width={1358}
            height={534}
            loading="lazy"
            alt="bgImage"
            className="object-cover h-full w-full"
          />
        </picture>
      </div>

      {partners && (
        <div className="mt-6 lg:mt-0 2xl:mt-6 absolute left-1/2 w-[90%] bg-white p-3 flex sm:p-5 lg:pb-0 z-20 flex-col items-center rounded-xl shadow-xl border border-gray-300 md:w-[65%] lg:w-[40%] transform -translate-x-1/2 top-[-12%]">
          <h2 className="text-royalBlue text-[20px] md:text-[25px] lg:text-[20px] font-[700] capitalize">
            {partnerHeading}
          </h2>
          <div className="flex justify-center gap-5">
            {partnersList.map((item, i) => (
              <div key={i} className="relative w-[90px] md:w-[130px]">
                <img
                  src={item.attributes.image.data.attributes.url}
                  width={150}
                  height={150}
                  alt="partner-logo"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
