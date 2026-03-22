import { motion, AnimatePresence } from "framer-motion";

function LoadingScreen({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 light:bg-slate-50"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              className="h-12 w-12 rounded-full border-4 border-cyan-500 border-t-transparent"
            />
            <p className="text-sm font-medium tracking-[0.2em] text-cyan-400 light:text-cyan-700">
              LOADING PORTFOLIO
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;