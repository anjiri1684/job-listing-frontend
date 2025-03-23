/* eslint-disable no-unused-vars */
import { motion } from "motion/react";

const Spinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <motion.div
      className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    />
  </div>
);

export default Spinner;
