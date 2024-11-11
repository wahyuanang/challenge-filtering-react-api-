import React from "react";
import { useNavigate } from "react-router-dom";

function CTA() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/filter");
  };

  return (
    <section className="container py-5">
      <div className="text-center align-items-center ">
        <div className="text-white banner p-5">
          <h2 className="text-center">Sewa Mobil di Yogyakarta Sekarang</h2>
          <p className="pt-3 text-center paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="pt-5">
            <button
              onClick={handleNavigate}
              type="button"
              className="btn btn-color border-2 p-2 px-3 rounded-2 fw-semibold"
            >
              Mulai Sewa Mobil
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
