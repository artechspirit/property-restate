"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { whyUs } from "@/constants";

const WhyUs = () => {
  return (
    <section className="bg-[#282835] bg-[url('/images/decoration.svg')] bg-cover bg-center py-16 lg:py-20">
      <div className="container">
        {/* Heading */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-start  gap-y-6 lg:gap-x-8 text-center lg:text-left"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-[340px] mx-auto lg:mx-0">
            <h2 className="text-[#FAFAFA] text-2xl lg:text-3xl font-semibold leading-snug lg:leading-[48px]">
              Kenapa Harus{" "}
              <span className="text-[#FA9500]">Panglima Propertindo?</span>
            </h2>
          </div>
          <p className="text-[#FAFAFA] text-sm lg:text-base font-normal max-w-xl lg:max-w-4xl lg:leading-[28px] mx-auto lg:mx-0 ">
            Dengan komitmen penuh pada prinsip-prinsip syariah, kami
            menghadirkan properti berkualitas tinggi yang memberikan keamanan
            dan keberkahan bagi Anda dan keluarga.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {whyUs.map((item) => (
            <motion.div
              key={item.id}
              className="bg-[#287C3E] min-h-[168px] rounded-lg p-6 flex flex-col justify-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={48}
                  height={48}
                />
                <h3 className="text-[#FAFAFA] text-lg lg:text-xl font-semibold leading-snug mt-4 sm:mt-0 sm:ml-4">
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 text-[#FAFAFA] text-sm lg:text-base font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
