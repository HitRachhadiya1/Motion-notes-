import React from "react";
import { HiOutlineDocumentText } from "react-icons/hi";
import { motion } from "motion/react";

function Card({ data, referance }) {
  return (
    <motion.div
      drag
      dragConstraints={referance}
      whileDrag={{ scale: 1.05 }}
      className="relative w-52 h-60 bg-zinc-900 rounded-[35px] text-white p-7 overflow-hidden"
    >
      <HiOutlineDocumentText />
      <p className="text-base leading-tight mt-5 font-semibold">{data.desc}</p>
      {data.status == true ? (
        <div className="absolute bottom-0 bg-green-900 w-full py-3 left-0 flex items-center justify-center">
          <h3 className="text-base font-semibold">Completed</h3>
        </div>
      ) : (
        <div className="absolute bottom-0 bg-blue-900 w-full py-3 left-0 flex items-center justify-center">
          <h3 className="text-base font-semibold">Incomplete</h3>
        </div>
      )}
    </motion.div>
  );
}

export default Card;
