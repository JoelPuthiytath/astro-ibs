

import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
  Suspense,
  lazy,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { Image as AstroImage } from '@astrojs/image/components';
import { Icons } from "../../utils/constants.js";  
// import '../styles/SmartSearch.css';
import AnimatedText from '../animatedDesign/AnimatedText.jsx';
import MobileTextArea from './MobileTextArea.jsx';

const Chat = lazy(() => import('../search/Chat.jsx'));
const AnimatedWave = lazy(() => import('../animatedDesign/animatedWave.jsx'));

import "./styles.css"

// const prompts = [
//   { prompt: "Help me choose the right CMS for my website." },
//   { prompt: "Can you build a custom e-commerce website?" },
//   { prompt: "I need a mobile app for my restaurant." },
//   { prompt: "Can you optimize my website for better SEO?" },
//   { prompt: "I need a social media marketing strategy." },
// ];

// export default function SmartSearch({ data, headerState }) {
//   const [inputValue, setInputValue] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [isChatActive, setIsChatActive] = useState(false);
//   const [chatInput, setChatInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const inputRef = useRef(null);

//   const handleInputChange = useCallback((e) => {
//     const val = e.target.value;
//     setInputValue(val);
//     if (!val) return setSuggestions([]);
//     const words = val.toLowerCase().split(/\s+/);
//     setSuggestions(
//       prompts.filter((p) =>
//         words.every((w) => p.prompt.toLowerCase().includes(w))
//       )
//     );
//   }, []);

//   const handleSuggestionClick = useCallback((txt) => {
//     if (!inputValue) return alert("Please enter a valid input");
//     setIsChatActive(true);
//     setChatInput(txt === "ai" ? inputValue : txt);
//   }, [inputValue]);

//   const closeAll = useCallback(() => {
//     setIsChatActive(false);
//     setIsTyping(false);
//     setInputValue("");
//     setSuggestions([]);
//   }, []);

//   useEffect(() => {
//     if (isTyping) inputRef.current?.focus();
//     document.body.classList.toggle("scroll-locked", isTyping || isChatActive);
//     return () => document.body.classList.remove("scroll-locked");
//   }, [isTyping, isChatActive]);

//   // Simple fade-in/fade-out for overlay
//   const overlayStyle = {
//     position: "fixed",
//     inset: 0,
//     backgroundColor: "rgba(0,0,0,0.3)",
//     backdropFilter: "blur(5px)",
//     zIndex: 10,
//     opacity: isTyping ? 1 : 0,
//     transition: "opacity 0.3s ease",
//     pointerEvents: isTyping ? "auto" : "none",
//   };

//   return (
//     <div className="smart-search lg:h-screen relative">
//       {isTyping && <div style={overlayStyle} onClick={() => setIsTyping(false)} />}
//       <div className="search-container h-full overflow-hidden px-4 md:px-0 relative">
//         {isChatActive ? (
//           <Chat initialInput={chatInput} onClose={closeAll} />
//         ) : (
//           <div className="flex flex-col items-center justify-center h-full w-full">
//             <h1 className="text-white text-3xl md:text-5xl font-semibold drop-shadow-md text-center mb-8">
//               Immersive Digital Experiences Through <AnimatedText />
//             </h1>

//             <div className="w-full md:w-3/4 relative">
//               <MobileTextArea
//                 value={inputValue}
//                 onChange={handleInputChange}
//                 onFocus={() => { setIsTyping(true); setInputValue(""); }}
//                 onSubmit={() => handleSuggestionClick("ai")}
//                 prompts={prompts}
//               />
//               {isTyping && suggestions.length > 0 && (
//                 <div className="suggestions-list absolute top-full mt-2 bg-white rounded shadow-lg z-20">
//                   {suggestions.map((s, i) => (
//                     <p
//                       key={i}
//                       className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                       onClick={() => handleSuggestionClick(s.prompt)}
//                     >
//                       {s.prompt}
//                     </p>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <button
//               className="mt-6 px-6 py-3 bg-blue-600 text-white rounded inline-flex items-center"
//               onClick={() => handleSuggestionClick("ai")}
//             >
//               <Icons.rightArrow className="w-5 h-5 mr-2" />
//               Search
//             </button>

//             <p className="text-white opacity-70 text-sm mt-4 flex items-center gap-1">
//               <Icons.profile className="w-4 h-4" /> Powered by AI
//             </p>

//             <button
//               className="absolute bottom-8 animate-bounce"
//               onClick={() => {
//                 const el = document.getElementById("expertise");
//                 if (el) el.scrollIntoView({ behavior: "smooth" });
//               }}
//               aria-label="Explore our services"
//             >
//               <span className="inline-flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded-full shadow">
//                 Explore Our Services <Icons.downArrow className="w-5 h-5" />
//               </span>
//             </button>
//           </div>
//         )}
//         <div className="absolute inset-0 opacity-30 pointer-events-none">
//           <AnimatedWave />
//         </div>
//       </div>
//     </div>
//   );
// }



// Lazy load Chat and AnimatedWave for code splitting


const prompts = [
  { prompt: 'Help me choose the right CMS for my website.' },
  { prompt: 'Can you build a custom e-commerce website for my business?' },
  { prompt: 'I need a mobile app for my restaurant. Can you help?' },
  { prompt: 'Can you optimize my website for better SEO performance?' },
  { prompt: 'I need a social media marketing strategy for my brand.' },
];

export default function SmartSearch({ data, headerState }) {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isChatActive, setIsChatActive] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [chatInput, setChatInput] = useState('');

  const allowedKeys = { searchUsingAi: ['initialAsk'] };

  function pushToDataLayer(eventName, data = {}) {
    const keysForThisEvent = allowedKeys[eventName] || ['event'];
    const filteredData = { event: eventName };
    for (const key of keysForThisEvent) {
      if (key !== 'event' && key in data) filteredData[key] = data[key];
    }
    window.dataLayer?.push(filteredData);
  }

  const inputRef = useRef(null);

  const handleInputChange = useCallback((e) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);
    if (!value) {
      setSuggestions([]);
    } else {
      const words = value.split(/\s+/);
      setSuggestions(
        prompts.filter((p) => words.every((w) => p.prompt.toLowerCase().includes(w)))
      );
    }
  }, []);

  useEffect(() => {
    if (isTyping && window.innerWidth > 768) inputRef.current?.focus();
    else setSuggestions([]);
  }, [isTyping]);

  const handleSuggestionClick = useCallback((link) => {
    if (!inputValue) return alert('Please enter a valid input');
    setIsChatActive(true);
    const val = link === 'ai' ? inputValue : link;
    setChatInput(val);
    pushToDataLayer('searchUsingAi', { initialAsk: val });
  }, [inputValue]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setIsTyping(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('scroll-locked', isTyping || isChatActive);
    return () => document.body.classList.remove('scroll-locked');
  }, [isTyping, isChatActive]);

  const onClose = useCallback(() => {
    setIsChatActive(false);
    setIsTyping(false);
    setInputValue('');
    setSuggestions([]);
  }, []);

  // Variants
  const inputVariants = useMemo(() => ({
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 500 } },
    exit: { y: 20, opacity: 0, transition: { duration: 0.2 } },
  }), []);
  const searchBarVariants = useMemo(() => ({ initial: { y: '30%', scale: 1 }, focused: { y: '-250%', top: 0, scale: 1.1, transition: { type: 'spring', stiffness: 100, damping: 12, duration: 0.5 } }, exit: { y: '30%', scale: 1, transition: { duration: 0.5 } } }), []);
  const overlayVariants = useMemo(() => ({ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }), []);

  const overlay = (
    <AnimatePresence>
      {isTyping && (
        <motion.div
          className="overlay"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          onClick={() => setIsTyping(false)}
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', backgroundColor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(5px)' }}
        />
      )}
    </AnimatePresence>
  );

  const suggestionsPanel = (
    <motion.div className="suggestions-list" initial="hidden" animate="visible" exit="exit">
      {suggestions.map((s, i) => (
        <motion.p key={i} className="suggestion-item" onClick={() => handleSuggestionClick(s.prompt)}>
          {s.prompt}
        </motion.p>
      ))}
    </motion.div>
  );

  const handleScrollToExpertise = () => {
    const elem = document.getElementById('expertise');
    if (!elem) return;
    const offset = 80;
    elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => window.scrollTo({ top: elem.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' }), 0);
  };

  const gradientVariants = {
    initial: { background: 'linear-gradient(45deg,#00aee5,#2f23b3,#a235fe)' },
    animate: { background: ['linear-gradient(45deg,#00aee5,#2f23b3,#a235fe)', 'linear-gradient(45deg,#2f23b3,#a235fe,#00aee5)', 'linear-gradient(45deg,#a235fe,#00aee5,#2f23b3)'], transition: { duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'linear' } },
  };

  const searchBar = (
    <div className="flex flex-col items-center justify-center h-full w-full" id="fade-down-content">
      <div style={{ zIndex: 10 }} className="demo-text md:w-[80%] 2xl:w-[800px] lg:w-[60%] mb-5">
        <h1 className="fadeDown text-white text-center text-[24px] leading-[40px] font-[600] drop-shadow-md md:leading-[70px] text-4xl lg:text-[48px] text-wrap">
          Immersive Digital Experiences Through <AnimatedText />
        </h1>
      </div>

      <div style={{ zIndex: 101, width: '100%' }}>
        <div className="mobile-text-area">
          <MobileTextArea value={inputValue} onChange={handleInputChange} onFocus={() => { setIsTyping(true); setInputValue(''); }} onSubmit={() => handleSuggestionClick('ai')} prompts={prompts} />
          {isTyping && suggestions.length > 0 && suggestionsPanel}
        </div>

        <motion.div className="fadeDown search-bar" initial="initial" animate={isTyping ? 'focused' : 'initial'} exit="exit" variants={searchBarVariants} onClick={() => setIsTyping(true)}>
          {isTyping && suggestions.length > 0 && suggestionsPanel}
          <AnimatePresence>
            <motion.input
              ref={inputRef}
              key={!isTyping ? inputValue : null}
              type="text"
              placeholder="Unlock Tailored Services: Your Needs, Instantly Found"
              value={inputValue}
              onChange={handleInputChange}
              onFocus={() => { setIsTyping(true); setInputValue(''); }}
              className="search-input"
              variants={inputVariants}
              maxLength={300}
              onKeyDown={(e) => e.key === 'Enter' && handleSuggestionClick('ai')}
            />
          </AnimatePresence>
          <motion.button className="search-btn" initial={{ scale: 1, translateY: '-50%', opacity: 0 }} animate={{ opacity: 1 }} exit={{ scale: 0.9, translateY: '-50%', opacity: 0 }} whileHover={{ scale: 1.1, translateY: '-50%' }} whileTap={{ scale: 0.9, translateY: '-50%' }} onClick={() => handleSuggestionClick('ai')} aria-label="Search">
            <img src="/images/smartsearch/up-arrow.webp" alt="search" width={20} height={20} />
          </motion.button>
        </motion.div>
      </div>

      <div className="fadeDown powered-by">
        <p className="text-[13px] font-[500] flex gap-2 items-center text-white opacity-70 mt-[-20px] ml-[-10px]">
          <img src="/artificial-intelligence.webp" alt="intelligence" width={16} height={16} /> Powered by AI
        </p>
      </div>

      <div style={{ zIndex: 99 }} className="mb-16 md:mb-24 lg:mb-8 c-expertise-button c-expertise-button--gooey animate-bounce">
        <div onClick={handleScrollToExpertise} className="transition-500 z-10">
          <button type="button" className="c-expertise-button" aria-label="explore our services">
            <span className="flex items-center gap-2">
              Explore Our Services
              <Icons.downArrow className="h-5 w-5 cursor-pointer" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="smart-search lg:h-[100vh]">
      <motion.div className="search-container h-full overflow-hidden px-[15px] md:px-0" variants={gradientVariants} initial="initial" animate="animate">
        {overlay}
        <Suspense fallback={null}>
          {isChatActive ? <Chat initialInput={chatInput} onClose={onClose} /> : searchBar}
          <div className="absolute right-0 top-0 w-full h-full overflow-hidden opacity-40">
            <AnimatedWave />
          </div>
        </Suspense>
      </motion.div>
    </div>
  );
}

