import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer text-[#fafafa]">
      {/* Footer Top */}
      <div className="footer-top bg-[#282835] py-12">
        <div className="container flex flex-col md:flex-row justify-between md:space-x-8">
          {/* Left Section */}
          <div className="footer-top-left mb-6 md:mb-0 flex flex-col items-start">
            <Image
              src="/images/logo.svg"
              width={156}
              height={70}
              alt="Logo"
              draggable={false}
            />
            <p className="text-sm font-normal mt-4 md:text-left">
              Jl. Mulia, Jl. KH. Harun Nafsi Samarinda, Kalimantan Timur
            </p>
          </div>

          {/* Middle Section */}
          <div className="footer-top-middle flex flex-col gap-y-4 mb-6 md:mb-0  md:text-left">
            <p className="text-sm font-medium">Panglima Propertindo</p>
            <Link href="/" className="text-sm font-normal">
              Tentang Kami
            </Link>
            <Link href="/" className="text-sm font-normal">
              Project
            </Link>
            <Link href="/" className="text-sm font-normal">
              Pertanyaan Umum
            </Link>
          </div>

          {/* Right Section */}
          <div className="footer-top-right flex flex-col gap-y-4 md:text-left">
            <p className="text-sm font-medium">Kontak</p>

            <div className="flex flex-row gap-x-3 items-center  md:justify-start">
              <Image
                src="/icon/whatsapp.svg"
                width={20}
                height={20}
                alt="WhatsApp Icon"
              />
              <Link href="/" className="text-sm font-normal">
                081224090989 (chat)
              </Link>
            </div>

            <div className="flex flex-row gap-x-3 items-center  md:justify-start">
              <Image
                src="/icon/phone.svg"
                width={20}
                height={20}
                alt="Phone Icon"
              />
              <Link href="/" className="text-sm font-normal">
                (021) 2829-0901
              </Link>
            </div>

            <div className="flex flex-row gap-x-3 items-center md:justify-start">
              <Image
                src="/icon/envelope.svg"
                width={20}
                height={20}
                alt="Envelope Icon"
              />
              <Link href="/" className="text-sm font-normal">
                Layanan@panglimapropertindo.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom bg-[#287C3E] py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <span className="text-sm font-normal text-center  md:text-left">
            © Copyright Panglima Propertindo 2024. All Rights Reserved
          </span>
          <div className="social-icons flex flex-row gap-x-8 justify-center mt-4 md:mt-0">
            <Link href="/">
              <Image
                src="/icon/fb.svg"
                width={20}
                height={20}
                alt="Facebook Icon"
              />
            </Link>

            <Link href="/">
              <Image src="/icon/x.svg" width={20} height={20} alt="X Icon" />
            </Link>

            <Link href="/">
              <Image
                src="/icon/ig.svg"
                width={20}
                height={20}
                alt="Instagram Icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
