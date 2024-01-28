function ContactUsPage() {
  return (
    <section id="contact">
      <div class="container">
        <h3 class="text-center text-uppercase">contact us</h3>
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-3 my-5">
            <div class="card border-0">
              <div class="card-body text-center">
                <i
                  class="bi bi-telephone-fill mb-3"
                  aria-hidden="true"
                  style={{ fontSize: "70px" }}
                ></i>
                <h4 class="text-uppercase mb-5">control room</h4>
                <p>23052220, 23052221</p>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3 my-5">
            <div class="card border-0">
              <div class="card-body text-center">
                <i
                  class="bi bi-geo-alt-fill mb-3"
                  aria-hidden="true"
                  style={{ fontSize: "70px" }}
                ></i>
                <h4 class="text-uppercase mb-5">Address</h4>
                <address>
                  Nirvachan Sadan, Ashoka Road, New Delhi 110001
                </address>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3 my-5">
            <div class="card border-0">
              <div class="card-body text-center">
                <i
                  class="bi bi-file-break-fill mb-3"
                  aria-hidden="true"
                  style={{ fontSize: "70px" }}
                ></i>
                <h4 class="text-uppercase mb-5">faxline</h4>
                <address>23052219, 23052162/63/19/45 </address>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3 my-5">
            <div class="card border-0">
              <div class="card-body text-center">
                <i
                  class="bi bi-envelope-open-fill mb-3"
                  aria-hidden="true"
                  style={{ fontSize: "70px" }}
                ></i>
                <h4 class="text-uppercase mb-5">email</h4>
                <p>complaints@eci.gov.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsPage;
