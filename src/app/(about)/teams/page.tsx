import Image from "next/image";

export default function TeamsPage() {
  return (
    <main className="bg-white">
      <section className="min-h-auto pt-30 flex flex-col justify-between items-center gap-y-15 md:gap-y-10">
        <h1 className="text-3xl text-[#203475] font-semibold md:text-5xl">
          Jajaran Direktur
        </h1>
        <div className="flex flex-col justify-center items-center md:mt-10">
          <div className="relative w-[173px] h-[231px]">
            <Image
              src="/mohammad-feriadi.png"
              alt="Presiden Direktur Mohammad Feriadi"
              fill
            />
          </div>
          <h2 className="text-xl text-black font-semibold mt-4">
            Mohammad Feriadi
          </h2>
          <h3 className="text-md text-gray-500">Presiden Direktur</h3>
        </div>

        <div className="absolute top-[550px] left-60 h-40 border-l-2 border-dashed border-gray-400 md:top-[570px] md:left-190 md:h-100" />
        <div className="absolute top-[710px] left-[200px] w-20 border-t-2 border-dashed border-gray-400 md:top-[730px] md:left-[600px] md:w-80" />
        <div className="hidden md:block absolute top-[970px] left-[280px] w-240 border-t-2 border-dashed border-gray-400" />
        <div className="hidden md:block absolute top-[970px] left-[280px] h-30 border-l-2 border-dashed border-gray-400" />
        <div className="hidden md:block absolute top-[970px] left-[600px] h-30 border-l-2 border-dashed border-gray-400" />
        <div className="hidden md:block absolute top-[970px] right-[280px] h-30 border-l-2 border-dashed border-gray-400" />
        <div className="hidden md:block absolute top-[970px] right-[600px] h-30 border-l-2 border-dashed border-gray-400" />

        <div className="flex flex-row justify-between items-center w-full px-10 md:max-w-[900px]">
          <div className="flex flex-col justify-center items-center">
            <div className="relative w-[173px] h-[231px]">
              <Image
                src="/chandra-fireta.png"
                alt="Direktur Chandra Fireta"
                fill
              />
            </div>
            <h2 className="text-xl text-black font-semibold mt-4">
              Chandra Fireta
            </h2>
            <h3 className="text-md text-gray-500">Direktur</h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="relative w-[173px] h-[231px]">
              <Image src="/edi-santoso.png" alt="Direktur Edi Santoso" fill />
            </div>
            <h2 className="text-xl text-black font-semibold mt-4">
              Edi Santoso
            </h2>
            <h3 className="text-md text-gray-500">Direktur</h3>
          </div>
        </div>
      </section>

      <section className="min-h-auto pt-30 pb-20 flex flex-col justify-between items-center gap-y-10">
        <h2 className="text-3xl text-[#203475] font-semibold md:text-5xl">
          Teams
        </h2>

        <div className="grid grid-cols-2 grid-rows-2 px-10 gap-y-10 md:grid-cols-4 md:grid-rows-1 md:gap-x-20 md:items-start">
          <div className="flex flex-col justify-center items-center">
            <div className="relative w-[173px] h-[231px]">
              <Image src="/teams-3.jpg" alt="Dummy teams 1" fill />
            </div>
            <h2 className="text-xl text-black font-semibold mt-4">
              Andi Pratama
            </h2>
            <h3 className="text-md text-gray-500 text-center">
              Manajer Pemasaran & Kemitraan
            </h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="relative w-[173px] h-[231px]">
              <Image src="/teams-2.png" alt="Dummy teams 2" fill />
            </div>
            <h2 className="text-xl text-black font-semibold mt-4">
              Rina Pratiwi
            </h2>
            <h3 className="text-md text-gray-500 text-center">
              Manajer Operasional & Distribusi
            </h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="relative w-[173px] h-[231px]">
              <Image
                src="/teams-4.jpg"
                alt="Dummy teams 3"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-xl text-black font-semibold mt-4">
              Budi Santoso
            </h2>
            <h3 className="text-md text-gray-500 text-center">
              Manajer Gudang &
              <br />
              Inventori
            </h3>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="relative w-[173px] h-[231px]">
              <Image src="/teams-1.jpg" alt="Dummy teams 4" fill />
            </div>
            <h2 className="text-xl text-black font-semibold mt-4">
              Dewi Anindya
            </h2>
            <h3 className="text-md text-gray-500 text-center">
              Manajer Layanan
              <br />
              Pelanggan
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}
