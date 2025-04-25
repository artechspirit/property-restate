"use client";

import { totalProject } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pt-14 pb-20">
      <div className="container">
        <motion.h2
          className="text-[#09090B] text-[30px] font-semibold"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          Tentang Kami
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center my-6 gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={284}
            height={127}
            className="object-contain"
          />
          <p className="text-base font-normal text-panglima-foreground">
            Sejak 1880, Panglima Propertindo menjadi Developer Syariah yang
            berkomitmen menyediakan Properti Halal Berkualitas bagi Ummat dengan
            Lingkungan yang Baik.
          </p>
        </motion.div>

        <motion.div
          className="my-6 px-4 md:px-8 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          <div className="py-5 lg:h-[320px] rounded-lg w-full bg-cover bg-center bg-[url('/images/tentang-bg.svg')] relative overflow-hidden lg:px-7">
            {/* Overlay hitam */}
            <div className="absolute inset-0 bg-black opacity-60 rounded-lg z-0"></div>

            {/* Konten di atas overlay */}
            <div className="relative z-10 flex items-center justify-center h-full px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
                {totalProject.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-panglima-green h-32 rounded-lg border-2 border-[#FAFAFA] text-[#FAFAFA] flex text-center flex-col justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ amount: 0.3 }}
                  >
                    <p className="font-semibold text-3xl">{item.value}</p>
                    <p className="text-base mt-2">{item.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="border-2 border-[#E4E4E7] rounded-md p-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          <h3 className="text-panglima-foreground text-xl font-semibold">
            Visi
          </h3>
          <p className="text-base font-normal text-panglima-foreground mt-4">
            Menjadi Developer Property Syariah Kelas Dunia, pengembang
            lingkungan pemukiman yang baik yang Menenangkan Hati.
          </p>
        </motion.div>

        <motion.div
          className="border-2 border-[#E4E4E7] rounded-md p-5 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          <h3 className="text-panglima-foreground text-xl font-semibold">
            Misi
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-[#09090B] text-base mt-4">
            <li>
              Mengembangkan proyek Property yang memberi value terbaik &
              ketenangan hati.
            </li>
            <li>
              Membentuk lingkungan yang berperan nyata dalam pembentukan
              Peradaban Mulia.
            </li>
            <li>
              Bertumbuh dengan cepat dan berkesinambungan sehingga dapat
              mensejahterakan para pemangku kepentingan.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
