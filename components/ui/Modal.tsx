"use client";

import { MouseEvent } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
export default function Modal({ isOpen, onClose, children }: Props) {
  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={{
            open: { opacity: 1 },
            closed: {
              opacity: 0,
              transition: { staggerChildren: 0.05 },
            },
          }}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ duration: 0.1 }}
          className="fixed inset-0 z-50 bg-black/50 flex justify-center items-end retaltive "
          onClick={handleOverlayClick}
        >
          <motion.div
             variants={{
              open: { y: 0 },
              closed: { y: 50 },
            }}
            className="bg-white px-4 rounded-t-2xl relative shadow-md w-full "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-7 h-1 bg-[#B9BEC3] rounded-full mx-auto mt-[15.5px]" />
            <p className="text-center mt-8 mb-6 text-primaryText font-space-grotesk text-xl font-medium">
              Sort By
            </p>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
