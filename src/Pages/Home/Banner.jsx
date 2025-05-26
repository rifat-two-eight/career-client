import { motion } from "motion/react";
const Banner = () => {
  return (
    <div className="my-5 min-h-[80vh] flex w-[75%] mx-auto justify-center items-center">
      <div className="space-y-5">
        <h2 className="text-3xl font-semibold">
          Welcome to{" "}
          <motion.span
            animate={{
              color: ["#bf442a", "#2abf90", "#2a2fbf", "#bf2a96"],
              transition: { duration: 4, repeat: Infinity },
            }}
          >
            Job
          </motion.span>{" "}
          Portal
        </h2>
        <p className="w-[70%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          natus inventore illum placeat perspiciatis dolorum voluptas itaque
          totam blanditiis dignissimos!
        </p>
      </div>
      <div>
        <motion.img
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-96 border-blue-500 border-s-4 border-b-4 rounded-t-4xl"
          src="/job1.jpg"
          alt=""
        />
        <motion.img
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-96 border-blue-500 border-s-4 border-b-4 rounded-t-4xl"
          src="/job2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
