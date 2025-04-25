import Image from "next/image";
import Button from "./CustomButton";

const Booking = () => {
  return (
    <div className="bg-[#F6F7FA] p-8">
      <div className="w-full h-[324px] relative rounded-md bg-[#FA9500]">
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10 w-full">
          <div className="text-center">
            <h3 className="text-[#FAFAFA] font-semibold text-[30px]">
              Booking Sekarang!
            </h3>

            <p className="mt-4 mb-6 text-[#FAFAFA] ">
              Tunggu apalagi, booking sekarang property syariah impian Anda
            </p>

            <Button
              leftIcon={
                <Image
                  src="/icon/shopping-cart.svg"
                  alt="Icon"
                  width={20}
                  height={20}
                />
              }
              className="font-semibold"
              size="sm"
            >
              Daftar & Beli NUB
            </Button>
          </div>
        </div>
        <Image
          className="absolute bottom-0 w-full object-contain z-0"
          src="/images/decoration-1.svg"
          width={1500}
          height={127}
          alt="Decor"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default Booking;
