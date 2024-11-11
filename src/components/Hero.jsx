function Hero() {
  return (
    <section className="container py-md-5 py-5">
      <div className="row">
        <div className="col-12 col-md-6 order-1 order-md-1">
          <h1 className="fw-bold" style={{ fontSize: "36px" }}>
            Sewa & Rental Mobil Terbaik di kawasan Yogyakarta
          </h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <button
            type="button"
            className="btn btn-color border-2 p-2 px-3 rounded-2 fw-semibold"
          >
            Mulai Sewa Mobil
          </button>
        </div>
        <div className="col-12 col-md-6 order-2 order-md-2 mt-4 mt-md-0">
          <img
            src="/images/img_car.png"
            className="img-fluid"
            alt="image car hero section"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
