import { SlEarphonesAlt } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { SiInstagram } from "react-icons/si";
import { BsTiktok } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="left-0 bottom-0 w-full h-auto bg-white text-black border-t border-gray-300 pt-5 pb-5">
      <div className="flex flex-col justify-center items-start ml-5 mr-30 gap-15 md:ml-30">
        <div className="flex flex-col justify-center items-start gap-y-15 w-full md:flex-row md:justify-between">
          <div className="flex flex-col justify-center items-start gap-y-2 w-full">
            <h2 className="text-md font-semibold">COSTUMER SERVICE</h2>
            <h3 className="text-md flex items-center gap-4">
              <SlEarphonesAlt className="text-xl" />
              (021) 2927 8888
            </h3>
            <h3 className="text-md flex items-center gap-4">
              <CiMail className="text-xl" />
              costumercare@jne.co.id
            </h3>

            <div className="flex items-center gap-6 mt-4 text-2xl">
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiInstagram />
              </Link>
              <Link
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTiktok />
              </Link>
              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-start w-full md:justify-center md:gap-x-20">
            <div className="flex flex-col justify-center items-start gap-y-2">
              <h2 className="text-md font-semibold">PERUSAHAAN</h2>
              <Link href="/history">History</Link>
              <Link href="/teams">Teams</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/articles">Article</Link>
            </div>
            <div className="flex flex-col justify-center items-start gap-y-2">
              <h2 className="text-md font-semibold">SERVICE</h2>
              <Link href="/services">JNE Express</Link>
              <Link href="/services">JNE Logistic</Link>
              <Link href="/services">JNE Freight</Link>
              <Link href="/services">Roket Indonesia</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-y-2">
          <h2 className="text-xl font-semibold">Download Aplikasi MyJNE!</h2>
          <div className="flex justify-between items-center gap-2">
            <Link href="/">
              <Image
                src="/apple-store.svg"
                alt="Apple Store logo"
                width={120}
                height={100}
              />
            </Link>
            <Link href="/">
              <Image
                src="/play-store.svg"
                alt="Play Store logo"
                width={130}
                height={100}
              />
            </Link>
          </div>
        </div>
        <h3 className="text-sm">2025 copyright JNE</h3>
      </div>
    </footer>
  );
}
