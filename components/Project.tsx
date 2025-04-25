"use client";
import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const Project = () => {
  return (
    <div className="bg-[#E4E4E7] py-14">
      <div className="container">
        <h2 className="text-[#09090B] text-[30px] font-semibold">Project</h2>
        <p className="text-base text-[#71717A] font-normal my-3">
          Berikut adalah daftar project dari Panglima Propertindo
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-md p-5 min-h-[413px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }} // aktif tiap masuk viewport
            >
              <Image
                alt={item.name}
                src={item.image}
                width={341}
                height={208}
                className="rounded-sm w-full h-auto object-cover"
              />

              <h2 className="mt-3 mb-4 font-semibold text-[#09090B] text-xl">
                {item.name}
              </h2>

              <div className="address flex items-start gap-3">
                <Image
                  src="/icon/maps.svg"
                  alt="maps"
                  width={24}
                  height={24}
                  className="mt-1"
                />
                <div className="max-w-[90%]">
                  <p className="text-sm mb-0.5 text-[#09090B]  whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.alamat}
                  </p>
                  <Link
                    href={item.maps}
                    target="_blank"
                    className="text-[#FA9500] text-sm font-normal hover:underline"
                  >
                    <p className="flex items-center">
                      Lihat di Map{" "}
                      <Image
                        alt="Icon"
                        width={20}
                        height={20}
                        src="/icon/arrow-up-right.svg"
                        className="ml-1"
                      />
                    </p>
                  </Link>
                </div>
              </div>

              <div className="mt-3">
                <p className="text-sm text-[#71717A] font-normal mb-1">
                  Tipe Unit
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {item.tipe.slice(0, 3).map((type, index) => (
                    <div
                      key={index}
                      className="text-panglima-foreground text-sm rounded-full bg-[#fa950014] px-2.5 py-1 border border-panglima-orange"
                    >
                      {type}
                    </div>
                  ))}
                  {item.tipe.length > 3 && (
                    <div className="text-panglima-foreground text-sm rounded-full bg-[#fa950014] px-2.5 py-1 border border-panglima-orange">
                      +{item.tipe.length - 3}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
