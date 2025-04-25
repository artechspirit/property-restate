"use client";

import Image from "next/image";
import Button from "./CustomButton";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Membuat animasi terjadi setiap kali elemen muncul
    threshold: 0.3, // Ketika 30% elemen sudah terlihat
  });

  return (
    <section className="h-[532px] bg-[url('/images/background-top.svg')] bg-no-repeat bg-cover bg-[center_top] md:bg-[0px_0px] xl:bg-[0px_-175px]">
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-center md:items-start h-full">
          <motion.div
            ref={ref} // Apply intersection observer
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 40,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative max-w-3xl text-left"
          >
            <h1 className="font-semibold text-2xl md:text-4xl text-[#09090B] leading-snug md:leading-[48px]">
              <span className="text-[#287C3E]">Hidup Nyaman & Berkah</span>{" "}
              dengan Properti Syariah Kelas Dunia
              <Image
                src="/images/hero-decor.svg"
                width={144}
                height={48}
                alt="Hero Decoration"
                className="absolute hidden md:block md:right-[50px] lg:right-[265px] top-[48px]"
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 20,
              }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[#09090B] text-sm md:text-base mt-6 mb-8 max-w-2xl"
            >
              Developer Properti Syariah terdepan menghadirkan solusi properti
              tanpa riba dan sesuai prinsip syariah. Daftar dan booking sekarang
              juga!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: inView ? 1 : 0,
                scale: inView ? 1 : 0.9,
              }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button size="sm">Daftar & Beli NUB</Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
