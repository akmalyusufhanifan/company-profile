import Image from "next/image";
import ServicesCarousel from "./components/services-carousel";
import BusinessCarousel from "./components/business-carousel";
import CorporateCarousel from "./components/corporate-carousel";
import TestimonialCarousel from "./components/testimonial-carousel";
import TrackingFee from "./components/tracking-fee";
import ServicesPreview from "./components/services-preview";

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* Banner section */}
      <section className="min-h-[calc(100vh-80px)] mt-20">
        <div className="relative w-full h-[700px]">
          <Image
            src="/banner.png"
            alt="Website banner"
            fill
            className="object-cover object-bottom"
          />
        </div>
        <TrackingFee />
      </section>

      {/* Deskripsi section */}
      <section className="min-h-auto flex flex-col justify-center items-center text-black mt-5 gap-y-10 md:mt-20 md:gap-y-20">
        <div className="flex flex-col justify-center items-center gap-y-5 md:gap-y-10">
          <h1 className="text-3xl text-center uppercase font-bold max-w-[400px] md:text-4xl md:max-w-[800px]">
            Menyambung Kebahagiaan dari Generasi ke Generasi
          </h1>
          <p className="text-lg text-center max-w-[350px] md:text-xl md:max-w-[1200px]">
            Setiap kiriman membawa makna lebih dari sekadar barang. Di dalamnya
            ada cerita, harapan, dan kebahagiaan yang kami antarkan dengan
            sepenuh hati. JNE hadir untuk menghubungkan orang-orang di seluruh
            Indonesia melalui layanan yang cepat, aman, dan penuh kepedulian.
          </p>
          <p className="text-lg text-center max-w-[350px] md:text-xl md:max-w-[1200px]">
            Dengan semangat yang tak pernah pudar, kami terus berinovasi agar
            setiap kiriman menjadi bagian dari momen berharga dalam hidup banyak
            orang. Karena bagi kami, menyampaikan kebahagiaan adalah warisan
            yang ingin terus kami lanjutkan dari generasi ke generasi.
          </p>
        </div>
      </section>

      {/* Testimonial section */}
      <section className="min-h-auto flex flex-col justify-center items-center mt-10 text-black md:flex-row md:justify-center md:gap-x-30 md:mt-20 md:ml-30 md:mr-30">
        <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px]">
          <Image src="/35-tahun-jne.png" alt="Logo 35 tahun JNE" fill />
        </div>
        <div className="flex flex-col items-center gap-5 md:items-start">
          <h2 className="text-2xl mt-10 font-semibold md:text-4xl">
            Apa kata mereka
          </h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Preview services section */}
      <section className="min-h-auto flex flex-col justify-center items-center mt-30 text-black">
        <h2 className="text-2xl font-semibold mb-10 w-full text-center md:text-4xl md:mb-15 md:text-left md:pl-40">
          PELAYANAN
        </h2>
        <ServicesPreview />
        <ServicesCarousel />
      </section>

      {/* Business partner section */}
      <section className="min-h-auto flex flex-col justify-center items-center mt-30 text-black md:mt-50">
        <h2 className="text-xl font-semibold md:text-2xl">Business Partner</h2>
        <BusinessCarousel />
      </section>

      {/* Corporate value partner section */}
      <section className="min-h-auto flex flex-col justify-center items-center mt-20 text-black">
        <h2 className="text-xl font-semibold md:text-2xl">
          Corporate Value Partner
        </h2>
        <CorporateCarousel />
      </section>

      {/* Preview article section */}
      <section className="min-h-auto pb-20"></section>
    </main>
  );
}
