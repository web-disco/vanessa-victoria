import Lottie from "react-lottie";
import { motion } from "framer-motion";
import * as animationData from "../assets/logo-animation.lottie.json";

interface LoaderProps {
  cookie: string;
  setCookie: Function;
  setLoading: Function;
}

const Loader = ({ cookie, setCookie, setLoading }: LoaderProps) => {
  const lottieOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <motion.div
      className="w-full h-screen flex items-center justify-center bg-lightBrown fixed z-[50]"
      initial={{ opacity: 1 }}
      animate={{ opacity: cookie ? 0 : 1 }}
      key="loader"
    >
      <Lottie
        options={lottieOptions}
        width={400}
        height={400}
        eventListeners={[
          {
            eventName: "complete",
            callback: () => {
              setCookie("visited", true);
              setLoading(false);
            },
          },
        ]}
      />
    </motion.div>
  );
};

export default Loader;
