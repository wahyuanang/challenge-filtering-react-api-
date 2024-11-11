function Testimonial() {
  return (
    <section id="Testimonial" className="py-5 container">
      <div className="text-center mb-4">
        <h3 className="fw-bold">Testimonial</h3>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      <div
        id="carouselExampleRide"
        className="carousel slide rounded-3 position-relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-content d-flex align-items-center flex-column flex-md-row justify-content-center text-center">
              <img
                src="/images/img_photo.png"
                className="d-block testimonial-img me-4"
                alt="profile testimonial"
              />
              <div className="testimonial-content">
                <img src="/images/Rate.svg" alt="rating" />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus vitae magni, officia accusamus numquam saepe itaque,
                  excepturi consectetur inventore consequatur voluptatibus, illo
                  blanditiis.
                </p>
                <h6 className="fw-semibold">John Dee 32, Bromo</h6>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-content d-flex align-items-center flex-column flex-md-row justify-content-center text-center">
              <img
                src="/images/img_photo.png"
                className="d-block testimonial-img me-4"
                alt="profile testimonial"
              />
              <div className="testimonial-content">
                <img src="/images/Rate.svg" alt="rating" />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus vitae magni, officia accusamus numquam saepe itaque,
                  excepturi consectetur inventore consequatur voluptatibus, illo
                  blanditiis.
                </p>
                <h6 className="fw-semibold">John Dee 32, Bromo</h6>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <img src="/images/left.svg" alt="icon prev" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <img src="/images/next.svg" alt="icon next" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Testimonial;
