import React from "react";
import { useNavigate } from "react-router-dom";

function search() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/filter");
  };

  return (
    <section className="search">
      <div className="container px-4">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="row search__card mx-lg-5 py-4 px-4">
              <div className="col-lg-auto col-xl-2 col-xxl-3 col-md-auto mt-2">
                <label className="fw-medium">Tipe Driver</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="tipeDriver"
                >
                  <option value="default" selected>
                    Pilih Tipe Driver &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                  </option>
                  <option value="true">Dengan Supir</option>
                  <option value="false">Tanpa Supir (Lepas Kunci)</option>
                </select>
              </div>
              <div className="col-lg-auto col-xl-auto col-md-auto mt-2">
                <label className="fw-medium">Tanggal</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Pilih Tanggal"
                  id="tanggal"
                />
              </div>
              <div className="col-lg-auto col-xl-auto col-md-auto search__time mt-2">
                <labe className="fw-medium">Pilih Waktu</labe>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="waktuJemput"
                >
                  <option value="false" selected>
                    Pilih Waktu &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </option>
                  <option value="08:00">08.00 WIB</option>
                  <option value="09:00">09.00 WIB</option>
                  <option value="10:00">10.00 WIB</option>
                  <option value="11:00">11.00 WIB</option>
                  <option value="12:00">12.00 WIB</option>
                </select>
              </div>
              <div className="col-lg-auto col-xl-auto col-md-auto mt-2">
                <label className="fw-medium">Jumlah Penumpang (optional)</label>
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control border-end-0"
                    placeholder="Jumlah Penumpang"
                    id="jumlahPenumpang"
                    value="0"
                  />
                  <span className="input-group-text bg-white">
                    <img src="images/fi_users.png" width="20px" alt="" />
                  </span>
                </div>
              </div>
              <div className="col-lg-2 col-xl-auto col-md-2 mt-2 pt-4">
                <button
                  onClick={handleNavigate}
                  className="btn btn-color"
                  id="load-btn"
                >
                  Cari Mobil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default search;
