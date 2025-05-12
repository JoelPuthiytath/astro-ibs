import { isMobile } from "react-device-detect";
export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-40%",
    transform: "translate(-50%, -50%)",
    zIndex: 1001,
    borderRadius: "15px",
    padding: isMobile ? "30px" : "60px",
    width: isMobile ? "85%" : "auto",
    backgroundColor: "#fff",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    zIndex: 1001,
  },
};


const getCustomStyles = (isMobile) => ({
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-40%",
    transform: "translate(-50%, -50%)",
    zIndex: 1001,
    borderRadius: "15px",
    padding: isMobile ? "30px" : "60px",
    backgroundColor: "#fff",
    width: isMobile ? "85%" : "auto",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    zIndex: 1001,
  },
});

export default getCustomStyles;