import { motion } from "framer-motion";

interface LoaderProps {
  hasVisited: Boolean;
  setHasVisited: Function;
}

const Loader = ({ hasVisited, setHasVisited }: LoaderProps) => {
  setTimeout(() => {
    localStorage.setItem("visited", "true");
    setHasVisited(true);
  }, 4500);

  return (
    <motion.div
      className="w-full h-screen flex items-center justify-center fixed z-[50] bg-[#EFECE7"
      key="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: hasVisited ? 0 : 1 }}
    >
      <video width="400" autoPlay muted>
        <source src="/assets/logo.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default Loader;
