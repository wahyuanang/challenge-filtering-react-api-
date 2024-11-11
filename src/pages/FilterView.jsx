import React, { useEffect, useState } from "react";
import axios from "axios";

function FilterView() {
  const [shops, setShops] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shopName, setShopName] = useState("");
  const [productName, setProductName] = useState("");
  const [stock, setStock] = useState("");
  const [activePage, setActivePage] = useState(1);

  // Menggabungkan semua parameter ke dalam satu state body
  const [body, setBody] = useState({
    params: {
      shopName,
      productName,
      stock,
      page: activePage,
    },
  });

  const handlerFilter = () => {
    setActivePage(1);
    setBody({
      params: {
        shopName,
        productName,
        stock,
        page: 1,
      },
    });
  };

  const handlerPagination = (pageSelect) => {
    setActivePage(pageSelect);
    setBody({
      params: {
        shopName,
        productName,
        stock,
        page: pageSelect,
      },
    });
  };

  useEffect(() => {
    const fetchShops = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/api/v1/shops", {
          params: body.params,
        });
        console.log("response", response.data);
        const data = response.data;
        if (data.isSuccess) {
          setShops(data.data.shops);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, [body]);

  // Render pagination
  const pagination = (
    <div className="d-flex justify-content-center mt-4">
      <button
        className="btn btn-primary mx-1"
        onClick={() => handlerPagination(activePage - 1)}
        disabled={activePage === 1}
      >
        Previous
      </button>
      <span className="mx-2">Page {activePage}</span>
      <button
        className="btn btn-success mx-1"
        onClick={() => handlerPagination(activePage + 1)}
        disabled={shops.length === 0}
      >
        Next
      </button>
    </div>
  );

  return (
    <>
      <header className="d-flex justify-content-between align-items-center p-3 bg-white shadow rounded-3">
        <h1 className="h5 font-weight-bold text-success">Shops Product</h1>
        <nav className="d-flex">
          <a href="#" className="text-dark mx-2">
            Our Services
          </a>
          <a href="#" className="text-dark mx-2">
            Why Us
          </a>
          <a href="#" className="text-dark mx-2">
            Testimonial
          </a>
          <a href="#" className="text-dark mx-2">
            FAQ
          </a>
        </nav>
        <button className="btn btn-success">Register</button>
      </header>

      <main className="container mt-5 text-center">
        {loading ? (
          <p className="h5 text-secondary mt-4">Loading...</p>
        ) : error ? (
          <p className="h5 text-danger mt-4">Error: {error}</p>
        ) : (
          <>
            <div className="min-h-screen flex items-center bg-gradient-to-r from-green-50 to-white">
              <div
                id="shopForm"
                className="flex flex-wrap p-4 justify-center py-4 shadow-lg rounded-lg bg-white border border-success"
              >
                <div className="row w-100">
                  <div className="col-md-6 pt-2">
                    <label htmlFor="productName" className="font-weight-bold">
                      Nama Produk
                    </label>
                    <input
                      type="text"
                      id="productName"
                      name="productName"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      className="form-control"
                      placeholder="Masukkan nama produk"
                    />
                  </div>

                  <div className="col-md-6 pt-2">
                    <label htmlFor="stock" className="font-weight-bold">
                      Stok
                    </label>
                    <input
                      type="number"
                      id="stock"
                      name="stock"
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                      className="form-control"
                      placeholder="Masukkan stok produk"
                    />
                  </div>

                  <div className="col-md-12 pt-3">
                    <button
                      onClick={handlerFilter}
                      className="btn btn-success w-100 font-weight-bold rounded-lg py-2 transition duration-300 ease-in-out transform hover:bg-success hover:scale-105 shadow-lg focus:outline-none focus:ring-3 focus:ring-success"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <section className="mt-5">
              <div className="row">
                {shops.length === 0 ? (
                  <p>No data available</p>
                ) : (
                  shops.map((shop, index) => (
                    <div key={index} className="col-sm-6 col-md-4 mb-4">
                      <div className="card shadow border-success">
                        <img
                          src={shop.products[0].images[0]}
                          alt={shop.products[0].name}
                          className="card-img-top"
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title font-weight-bold text-primary">
                            {shop.products[0].name}
                          </h5>
                          <p className="text-success font-weight-bold">
                            Rp. {shop.products[0].price} / Hari
                          </p>
                          <p className="card-text text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                          <div className="d-flex justify-content-between text-secondary small">
                            <span>4 orang</span>
                            <span>Manual</span>
                            <span>Tahun 2020</span>
                          </div>
                          <button className="btn btn-success btn-block mt-3">
                            Pilih Mobil
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>
            {pagination} {/* Render pagination here */}
          </>
        )}
      </main>
    </>
  );
}

export default FilterView;
