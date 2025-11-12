export default function CorporateCarousel() {
  return (
    <div className="carousel carousel-center rounded-box gap-x-5 w-[360px] h-[127px] md:w-[1080px] md:gap-x-10">
      <div className="carousel-item">
        <img
          src="/corporate-partner-1.png"
          alt="Corporate partner Rumah Harapan Melanie"
        />
      </div>
      <div className="carousel-item">
        <img src="/corporate-partner-2.png" alt="Corporate partner SPAI" />
      </div>
      <div className="carousel-item">
        <img src="/corporate-partner-3.png" alt="Corporate partner BenihBaik" />
      </div>
      <div className="carousel-item">
        <img
          src="/corporate-partner-4.png"
          alt="Corporate partner CT Arsa Foundation"
        />
      </div>
      <div className="carousel-item">
        <img src="/corporate-partner-5.png" alt="Corporate partner FOI" />
      </div>
      <div className="carousel-item">
        <img src="/corporate-partner-6.png" alt="Corporate partner Forum TBM" />
      </div>
    </div>
  );
}
