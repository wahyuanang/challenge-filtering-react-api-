function Service() {
  return (
    <section id="OurServices" className="container py-md-5">
      <div className="row">
        <div className="col-12 col-md-6 order-1 order-md-1 mt-4 mt-md-0">
          <img
            src="/images/img_service.png"
            className="img-fluid w-75"
            alt="img our service"
          />
        </div>
        <div className="col-12 col-md-6 order-2 order-md-2 mt-4 mt-md-0">
          <h3 className="fw-bold">
            Best Car Rental for any kind of trip in Yogyakarta!
          </h3>
          <p style={{ fontSize: '14px' }}>
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <div className="d-flex">
            <img src="/images/check.svg" alt="img check" />
            <span className="px-3">Sewa Mobil Dengan Supir di Bali 12 Jam</span>
          </div>
          <div className="d-flex mt-3">
            <img src="/images/check.svg" alt="img check" />
            <span className="px-3">Sewa Mobil Lepas Kunci di Bali 24 Jam</span>
          </div>
          <div className="d-flex mt-3">
            <img src="/images/check.svg" alt="img check" />
            <span className="px-3">Sewa Mobil Jangka Panjang Bulanan</span>
          </div>
          <div className="d-flex mt-3">
            <img src="/images/check.svg" alt="img check" />
            <span className="px-3">Gratis Antar - Jemput Mobil di Bandara</span>
          </div>
          <div className="d-flex mt-3">
            <img src="/images/check.svg" alt="img check" />
            <span className="px-3">Layanan Airport Transfer / Drop In Out</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
