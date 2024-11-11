function FAQ() {
    return (
        <section id="Faq" className="container py-5">
        <div className="d-flex row"/>
            <div className="col-12 col-md-6 order-1 order-md-1 text-center text-md-start">
                <h3 className="fw-bold">Frequently Asked Question</h3>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="col-12 col-md-6 order-2 order-md-2 mt-4 mt-md-0">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item border-2 border border-gray-300 rounded-3">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed bg-transparent shadow-none" type="button"
                                data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                                aria-controls="flush-collapseOne">
                                Apa saja syarat yang dibutuhkan?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to
                                demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion
                                body.</div>
                        </div>
                    </div>

                    <div className="accordion-item border-2 border border-gray-300 rounded-3 my-3">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed bg-transparent shadow-none" type="button"
                                data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                aria-controls="flush-collapseTwo">
                                Berapa hari minimal sewa mobil lepas kunci?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to
                                demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion
                                body. Let's imagine this being filled with some actual content.</div>
                        </div>
                    </div>

                    <div className="accordion-item border-2 border border-gray-300 rounded-3 my-3">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed bg-transparent shadow-none" type="button"
                                data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false"
                                aria-controls="flush-collapseThree">
                                Berapa hari sebelumnya sabaiknya booking sewa mobil?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to
                                demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion
                                body. Let's imagine this being filled with some actual content.</div>
                        </div>
                    </div>

                    <div className="accordion-item border-2 border border-gray-300 rounded-3 my-3">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed bg-transparent shadow-none" type="button"
                                data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false"
                                aria-controls="flush-collapseFour">
                                Apakah Ada biaya antar-jemput?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to
                                demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion
                                body. Nothing more exciting happening here in terms of content, but just filling up the
                                space to make it look, at least at first glance, a bit more representative of how this
                                would look in a real-world application.</div>
                        </div>
                    </div>

                    <div className="accordion-item border-2 border border-gray-300 rounded-3">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed bg-transparent shadow-none" type="button"
                                data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false"
                                aria-controls="flush-collapseFive">
                                Bagaimana jika terjadi kecelakaan?
                            </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to
                                demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion
                                body. Nothing more exciting happening here in terms of content, but just filling up the
                                space to make it look, at least at first glance, a bit more representative of how this
                                would look in a real-world application.</div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    )
}

export default FAQ