import "../Pages_CSS/AboutUsPage.css";

function AboutUsPage() {
  return (
    <div>
      <div class="bg-light">
        <div class="container py-5">
          <div class="row h-100 align-items-center py-5">
            <div class="col-lg-2 d-none d-lg-block">
              <img src="/Images/mainlogo.png" alt="" class="img-fluid" />
            </div>
            <div class="col-lg-10">
              <h1 class="display-4">Election Commission of India</h1>
              <p class="lead text-muted mb-0">
                The Election Commission of India is an autonomous constitutional
                authority responsible for administering Union and State election
                processes in India. The body administers elections to the Lok
                Sabha, Rajya Sabha, State Legislative Assemblies in India, and
                the offices of the President and Vice President in the country.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white py-5">
        <div class="container py-5">
          <div class="row align-items-center mb-5">
            <div class="col-lg-6 order-2 order-lg-1">
              <i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 class="font-weight-light">
                The Functions (Electoral System of India)
              </h2>
              <p class="font-italic text-muted mb-4">
                India is a sovereign, socialist, secular, democratic republic.
                Democracy runs like a golden thread in the social, economic and
                political fabric woven by the Constitution given by ‘We, the
                People of India’ unto ourselves. The concept of democracy as
                visualised by the Constitution pre-supposes the representation
                of the people in Parliament and State legislatures by the method
                of election.
              </p>
            </div>
            <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img src="/Images/es.jpg" alt="" class="img-fluid mb-4 mb-lg-0" />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-5 px-5 mx-auto">
              <img
                src="/Images/eci.jpg"
                alt=""
                class="img-fluid mb-4 mb-lg-0"
              />
            </div>
            <div class="col-lg-6">
              <i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 class="font-weight-light">A Constitutional Body</h2>
              <p class="font-italic text-muted mb-4">
                India is a Socialist, Secular, Democratic Republic and the
                largest democracy in the World. The modern Indian nation state
                came into existence on 15th of August 1947. Since then free and
                fair elections have been held at regular intervals as per the
                principles enshrined in the Constitution, Electoral Laws and
                System.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-light py-5">
        <div class="container py-5">
          <div class="row mb-4">
            <div class="col-lg-5">
              <h2 class="display-4 font-weight-light">HON'BLE COMMISSION</h2>
            </div>
          </div>

          <div class="row text-center">
            <div class="col-xl-4 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="/Images/ec-sc.jpg"
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">Sh. Sushil Chandra</h5>
                <span class="small text-uppercase text-muted">
                  Chief Election Commissioner
                </span>
              </div>
            </div>

            <div class="col-xl-4 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="/Images/ec-rk.jpg"
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">Sh. Rajiv Kumar</h5>
                <span class="small text-uppercase text-muted">
                  Election Commissioner
                </span>
              </div>
            </div>

            <div class="col-xl-4 col-sm-6 mb-5">
              <div class="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="/Images/ec-acp.jpg"
                  alt=""
                  width="100"
                  class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 class="mb-0">Sh. Anup Chandra Pandey </h5>
                <span class="small text-uppercase text-muted">
                  Election Commissioner
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="text-center text-white" style={{backgroundColor: '#f1f1f1'}}>
        <div class="pt-4">
          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.facebook.com/ECI/"
            target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
           <i class="bi bi-facebook"></i>
          </a>

          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://twitter.com/ECISVEEP"
            target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
           <i class="bi bi-twitter"></i>
          </a>

          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.youtube.com/eci"
            target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i class="bi bi-youtube"></i>
          </a>

          <a
            class="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.instagram.com/ecisveep/"
            target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
           <i class="bi bi-instagram"></i>
          </a>
        </div>

        <div
          class="text-center text-dark p-3"
          style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
        >
          © 2022 Copyright:
          <a class="text-dark" href="#!">
            eci.gov.in
          </a>
        </div>
      </footer>
    </div>
  );
}

export default AboutUsPage;
