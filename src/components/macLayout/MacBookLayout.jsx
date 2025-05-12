import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import "../../styles/macbook.css";

const MacBookLayout = ({
  projectImage,
  xlHeight,
  xlWidth,
  mdHeight,
  mdWidth,
}) => {
  return (
    <div
      className={` flex flex-col justify-center items-center my-12 px-4 md:px-0  md:my-0 w-[400px]  lg:w-[600px] `}
    >
      <div className="screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={projectImage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="viewport"
          >
            <Image
              src={projectImage}
              layout="fill"
              objectFit="cover"
              className="rounded-[5px]"
              alt="mac_img"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="base"></div>
      <div className="notch"></div>
    </div>
  );
};

export default MacBookLayout;
