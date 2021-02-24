import Header from '../components/common/Header'
import React, { useState } from 'react';
import global from "../global"


function Home() {
  const [messegeSent, setMessegeStatus] = useState(false);
  function handleSendMessege(event) {
    setMessegeStatus(true)
    var messege = {
      "fullName": event.target[0].value,
      "email": event.target[1].value,
      "subject": event.target[2].value,
      "messege": event.target[3].value,

    }
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: JSON.stringify(messege)
    };

    fetch(global.contactUs, requestOptions)
      .then(response => { console.log(response) })


  }

  return (
    <>
      <Header />

      {/* <!-- End Header --> */}

      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" className="d-flex align-items-center">

        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">We help you to outsource your IT requirements.</h1>
              <h4 data-aos="fade-up" data-aos-delay="400">So that you can focus on the things that metters.</h4>
              <div data-aos="fade-up" data-aos-delay="800">
                <a href="#contact" className="btn-get-started">Get Started</a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
              <img src="assets/img/hero-img.png" className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>

      </section>
      {/* <!-- End Hero --> */}

      <main id="main">

        {/* <!-- ======= Clients Section ======= --> */}
        <section id="clients" className="clients clients">
          <div className="container">

            <div className="row">

              <div className="col-lg-2 col-md-4 col-6">
                <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" data-aos="zoom-in" />
              </div>

              <div className="col-lg-2 col-md-4 col-6">
                <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100" />
              </div>

              <div className="col-lg-2 col-md-4 col-6">
                <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="200" />
              </div>

              <div className="col-lg-2 col-md-4 col-6">
                <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="300" />
              </div>

              <div className="col-lg-2 col-md-4 col-6">
                <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="400" />
              </div>

              <div className="col-lg-2 col-md-4 col-6">
                <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="500" />
              </div>

            </div>

          </div>
        </section>
        {/* <!-- End Clients Section --> */}

        {/* <!-- ======= About Us Section ======= --> */}
        <section id="about" className="about">
          <div className="container">

            <div className="section-title" data-aos="fade-up">
              <h2>About Us</h2>
            </div>

            <div className="row content">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
                <p>
                  We are an Indian startup technology company that specializes in information technology services and consulting, headquartered in Hyderabad, Telengana, India.           </p>
                <ul>
                  <li><i className="ri-check-double-line"></i> We IT-enable all kinds of B2B, B2C interactions and internal operations.</li>
                  <li><i className="ri-check-double-line"></i> Improve and innovate with the tech trends</li>
                  <li><i className="ri-check-double-line"></i> Every aspect of your IT ecosystem. Taken care of.</li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
                <p>
                  We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.
            </p>
                <a href="#" className="btn-learn-more">Learn More</a>
              </div>
            </div>

          </div>
        </section>
        {/* <!-- End About Us Section --> */}

        {/* <!-- ======= Counts Section ======= --> */}
        <section id="counts" className="counts">
          <div className="container">

            <div className="row">
              <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
                <img src="assets/img/counts-img.svg" alt="" className="img-fluid" />
              </div>

              <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
                <div className="content d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="icofont-simple-smile"></i>
                        <span data-toggle="counter-up">65</span>
                        <p><strong>Happy Clients</strong> </p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="icofont-document-folder"></i>
                        <span data-toggle="counter-up">85</span>
                        <p><strong>Projects</strong> delivered </p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="icofont-clock-time"></i>
                        <span data-toggle="counter-up">20+</span>
                        <p><strong>Years of experience</strong> of our promoters in IT industary</p>
                      </div>
                    </div>

                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="icofont-award"></i>
                        <span data-toggle="counter-up">15</span>
                        <p><strong>Awards</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End .content--> */}
              </div>
            </div>

          </div>
        </section>
        {/* <!-- End Counts Section --> */}

        {/* <!-- ======= Services Section ======= --> */}
        <section id="services" className="services">
          <div className="container">

            <div className="section-title" data-aos="fade-up">
              <h2>Services</h2>
              <p>We believe professional growth is a lifelong journey</p>
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                  <div className="icon"><i className="bx bx-code-block"></i></div>
                  <h4 className="title"><a href="">Software Development</a></h4>
                  <p className="description">The development of reliable and scalable software solutions for any OS, browser and device. </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                  <div className="icon"><i className="bx bx-analyse"></i></div>
                  <h4 className="title"><a href="">IT Outsourcing</a></h4>
                  <p className="description">Within IT outsourcing, a vendor takes responsibility for 30-100% of your IT landscape covering such areas as IT service planning and management, IT evolution and managed IT services.</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                  <div className="icon"><i className="bx bxs-user-plus"></i></div>
                  <h4 className="title"><a href="">IT Staffing</a></h4>
                  <p className="description">We make it super easy for you to hire (Direct/Indirect) your rockstar developer</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                  <div className="icon"><i className="bx bx-world"></i></div>
                  <h4 className="title"><a href="">BPO services</a></h4>
                  <p className="description">Let experts handle your back-office processes so you can focus on what you do best. </p>
                </div>
              </div>

            </div>

          </div>
        </section>
        {/* <!-- End Services Section --> */}

        {/* <!-- ======= More Services Section ======= --> */}
        {/* <section id="more-services" className="more-services">
      <div className="container">

        <div className="row">
          <div className="col-md-6 d-flex align-items-stretch">
            <div className="card" style={{backgroundImage:`url("assets/img/more-services-1.jpg")`}} data-aos="fade-up" data-aos-delay="100">
              <div className="card-body">
                <h5 className="card-title"><a href="">Lobira Duno</a></h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="card" style={{backgroundImage:`url("assets/img/more-services-2.jpg")`}} data-aos="fade-up" data-aos-delay="200">
              <div className="card-body">
                <h5 className="card-title"><a href="">Limere Radses</a></h5>
                <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.</p>
                <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
              </div>
            </div>

          </div>
          <div className="col-md-6 d-flex align-items-stretch mt-4">
            <div className="card" style={{backgroundImage:`url("assets/img/more-services-3.jpg")`}} data-aos="fade-up" data-aos-delay="100">
              <div className="card-body">
                <h5 className="card-title"><a href="">Nive Lodo</a></h5>
                <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.</p>
                <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-stretch mt-4">
            <div className="card" style={{backgroundImage:`url("assets/img/more-services-4.jpg")`}} data-aos="fade-up" data-aos-delay="200">
              <div className="card-body">
                <h5 className="card-title"><a href="">Pale Treda</a></h5>
                <p className="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem.</p>
                <div className="read-more"><a href="#"><i className="icofont-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section> */}
        {/* <!-- End More Services Section --> */}

        {/* <!-- ======= Features Section ======= --> */}
        <section id="features" className="features">
          <div className="container">

            <div className="section-title" data-aos="fade-up">
              <h2>Technologies</h2>
              {/* <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p> */}
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="300">
              <div className="col-lg-3 col-md-4">
                <div className="icon-box">
                  <span className="iconify" data-icon="simple-icons:mongodb" data-width="36" data-height="36" data-inline="false" style={{ color: "green" }}></span>
                  <h3><a href="">Mongo DB</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <span className="iconify" data-icon="simple-icons:react" data-width="36" data-height="36" data-inline="false" style={{ color: "skyblue" }}></span>
                  <h3><a href="">React</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <span className="iconify" data-icon="simple-icons:node-dot-js" data-width="36" data-height="36" data-inline="false" style={{ color: "green" }}></span>
                  <h3><a href="">Node.js</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                <div className="icon-box">
                  <span className="iconify" data-icon="simple-icons:javascript" data-width="36" data-height="36" data-inline="false" style={{ color: "green" }}></span>
                  <h3><a href="">Java Script</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <span className="iconify" data-icon="simple-icons:dot-net" data-width="36" data-height="36" data-inline="false" style={{ color: "#1f80db" }}></span>
                  <h3><a href="">.Net Technologies</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <span className="iconify" data-icon="simple-icons:microsoftsqlserver" data-width="36" data-height="36" data-inline="false" style={{ color: "#1f80db" }}></span>
                  <h3><a href="">MS SQL</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <span className="iconify" data-icon="simple-icons:java" data-width="36" data-height="36" data-inline="false" style={{ color: "red" }}></span>
                  <h3><a href="">Java</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <span className="iconify" data-icon="simple-icons:angular" data-inline="false" style={{ color: "red" }} data-width="36" data-height="36"></span>
                  <h3><a href="">Angular</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <span className="iconify" data-icon="simple-icons:amazonaws" data-inline="false" data-width="36" data-height="36"></span>
                  <h3><a href="">Amazon Services</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <span className="iconify" data-icon="simple-icons:mysql" data-inline="false" data-width="36" data-height="36"></span>
                  <h3><a href="">My Sql</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <span className="iconify" data-icon="simple-icons:androidstudio" data-inline="false" data-width="36" data-height="36"></span>
                  <h3><a href="">Android Development</a></h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <span className="iconify" data-icon="simple-icons:apple" data-inline="false" data-width="36" data-height="36"></span>
                  <h3><a href="">IOS Development</a></h3>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* <!-- End Features Section --> */}

        {/* <!-- ======= Testimonials Section ======= --> */}
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
            {/* <p>Magnam dolores commodi suscipit eum quidem consectetur velit</p> */}
          </div>

          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="testimonial-wrap row">
                  <div className="testimonial-item col-lg-6 col-md-6 col-sm-12">
                    <img style={{ height: `100px`, borderRadius: "50%" }} src="./assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                    <h3>Ashwani Khajuria</h3>
                    <h4>CEO , Megalith Consultants</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      My final comment about ezit reflects their dedication to handle any problem that occurs as a result of hardware or software issues; simply put, they will go the extra mile to support their customers regardless of the time of day these issues arise.                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                  <div className="testimonial-item col-lg-6 col-md-6 col-sm-12">
                    <img style={{ height: `100px`, borderRadius: "50%" }} src="./assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                    <h3>Akhilesh Sharma</h3>
                    <h4>CEO , Binary Semantics</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      EZIT proved to be a professional service provider from the outset. We appreciate their proactive approach and ability to suggest improvements to a prospective solution on both architectural and business levels. We know we can always rely on EZIT's various competencies when our clients require quality software which would facilitate their business success.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="carousel-item">
                <div className="testimonial-wrap row">
                  <div className="testimonial-item col-lg-6 col-md-6 col-sm-12">
                    <img style={{ height: `100px` }} src="./assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                    <h3>Nitya Gupta</h3>
                    <h4>className 12th Student</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                I was unsure about hmy streams and subjects for className 11th. CareerAwesome experts found my perfect fit with humanities, and helped me deal with my misconceptions about the field. I am now acing my className 12 and looks forward to a career in Psychology.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                  <div className="testimonial-item col-lg-6 col-md-6 col-sm-12">
                    <img style={{ height: `100px` }} src="./assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                    <h3>Radhika Jamwal</h3>
                    <h4>Career Counsellor,Mumbai</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                It's a pity that it is not possible to give hundred stars to Career Awesome Team. I am now filled with renewed enthusiasm and vigour to go back and give career counselling to my students. Thumbs up !!
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="testimonial-wrap row">
                  <div className="testimonial-item col-lg-6 col-md-6 col-sm-12">
                    <img style={{ height: `100px` }} src="./assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                    <h3>Shaurya</h3>
                    <h4>Student 1st year</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Signing up for Career Awesome, and meeting and interacting with their experienced team was one of the decisions I made.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                  <div className="testimonial-item col-lg-6 col-md-6 col-sm-12">
                    <img style={{ height: `100px` }} src="./assets/img/testimonials/testimonials-6.jpg" className="testimonial-img" alt="" />
                    <h3>Ruby Maini</h3>
                    <h4>Principal,G.D. Goenka International School</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Career Awesome  have made a positive impact on the learning outcomes of our students. Many students who earlier feared choosing subjects now seem to enjoy these subjects.
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>*/}
            </div>
            {/* <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a> */}
          </div>

        </div>
        {/* <!-- End Testimonials Section --> */}

        {/* <!-- ======= Portfolio Section ======= --> */}
        {/* <section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="200">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="400">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section> */}
        {/* <!-- End Portfolio Section --> */}

        {/* <!-- ======= Team Section ======= --> */}
        <section id="team" className="team section-bg">
          <div className="container">

            <div className="section-title" data-aos="fade-up">
              <h2>Team</h2>
              {/* <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p> */}
            </div>

            <div className="row">

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="100">
                  <div className="member-img">
                    <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                    {/* <div className="social">
                  <a href=""><i className="icofont-twitter"></i></a>
                  <a href=""><i className="icofont-facebook"></i></a>
                  <a href=""><i className="icofont-instagram"></i></a>
                  <a href=""><i className="icofont-linkedin"></i></a>
                </div> */}
                  </div>
                  <div className="member-info">
                    <h4>Ashish Gupta</h4>
                    <span>Main Promoter </span>
                    <span>20+ years of experiance in IT</span>


                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="200">
                  <div className="member-img">
                    <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                    {/* <div className="social">
                  <a href=""><i className="icofont-twitter"></i></a>
                  <a href=""><i className="icofont-facebook"></i></a>
                  <a href=""><i className="icofont-instagram"></i></a>
                  <a href=""><i className="icofont-linkedin"></i></a>
                </div> */}
                  </div>
                  <div className="member-info">
                    <h4>Adish Gupta</h4>
                    <span>CEO</span>
                    <span>10+ years of experiance in IT</span>

                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="300">
                  <div className="member-img">
                    <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                    {/* <div className="social">
                  <a href=""><i className="icofont-twitter"></i></a>
                  <a href=""><i className="icofont-facebook"></i></a>
                  <a href=""><i className="icofont-instagram"></i></a>
                  <a href=""><i className="icofont-linkedin"></i></a>
                </div> */}
                  </div>
                  <div className="member-info">
                    <h4>Eishi Abhiraj</h4>
                    <span>Marketing head</span>
                    <span>10+ years of experiance in industary</span>

                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="400">
                  <div className="member-img">
                    <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                    {/* <div className="social">
                  <a href=""><i className="icofont-twitter"></i></a>
                  <a href=""><i className="icofont-facebook"></i></a>
                  <a href=""><i className="icofont-instagram"></i></a>
                  <a href=""><i className="icofont-linkedin"></i></a>
                </div> */}
                  </div>
                  <div className="member-info">
                    <h4>Sagun Gupta</h4>
                    <span>CTO</span>
                    <span>10+ years of experiance in IT</span>

                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
        {/* <!-- End Team Section --> */}

        {/* <!-- ======= Pricing Section ======= --> */}
        {/* <section id="pricing" className="pricing">
      <div className="container">

        <div className="section-title">
          <h2>Pricing</h2>
          <p>Sit sint consectetur velit nemo qui impedit suscipit alias ea</p>
        </div>

        <div className="row">

          <div className="col-lg-4 col-md-6">
            <div className="box" data-aos="zoom-in-right" data-aos-delay="200">
              <h3>Free</h3>
              <h4><sup>$</sup>0<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li className="na">Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
            <div className="box recommended" data-aos="zoom-in" data-aos-delay="100">
              <h3>Business</h3>
              <h4><sup>$</sup>19<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="box" data-aos="zoom-in-left" data-aos-delay="200">
              <h3>Developer</h3>
              <h4><sup>$</sup>29<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section> */}
        {/* <!-- End Pricing Section --> */}

        {/* <!-- ======= F.A.Q Section ======= --> */}
        <section id="faq" className="faq">
          <div className="container">

            <div className="section-title" data-aos="fade-up">
              <h2>Frequently Asked Questions</h2>
            </div>

            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-5">
                <i className="ri-question-line"></i>
                <h4>What is ezit ?</h4>
              </div>
              <div className="col-lg-7">
                <p>
                  We are a digital transformation consultancy and software development company that provides cutting edge engineering solutions, helping  companies and enterprise clients untangle complex issues that always emerge during their digital evolution journey.
            </p>
              </div>
            </div>
            {/* <!-- End F.A.Q Item--> */}

            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
              <div className="col-lg-5">
                <i className="ri-question-line"></i>
                <h4>Why choose us?</h4>
              </div>
              <div className="col-lg-7">
                <p>
                  Our team includes people with 20+ years of experiance in IT and have wroked with many fortune 500 companies like microsoft,accenture,sapient,wellsfrago and more
            </p>
              </div>
            </div>
            {/* <!-- End F.A.Q Item--> */}

            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
              <div className="col-lg-5">
                <i className="ri-question-line"></i>
                <h4>What services do we offer?</h4>
              </div>
              <div className="col-lg-7">
                <p>
                  We provide services like Application development,IT support/outsourcing,IT staffing,BPO services
            </p>
              </div>
            </div>
            {/* <!-- End F.A.Q Item--> */}

            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
              <div className="col-lg-5">
                <i className="ri-question-line"></i>
                <h4>In what techonologies do you work ?</h4>
              </div>
              <div className="col-lg-7">
                <p>
                  We have expertise in MERN/MEAN stack , .Net technologies, Java,Android development,IOS development,Big data,AI .
            </p>
              </div>
            </div>
            {/* <!-- End F.A.Q Item--> */}

            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="500">
              <div className="col-lg-5">
                <i className="ri-question-line"></i>
                <h4>From where should we start working with ezit ?</h4>
              </div>
              <div className="col-lg-7">
                <p>
                  Hire remote app developers and go mobile-first.
            </p>
              </div>
            </div>
            {/* <!-- End F.A.Q Item--> */}

          </div>
        </section>
        {/* <!-- End F.A.Q Section --> */}

        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" className="contact">
          <div className="container">

            <div className="section-title" data-aos="fade-up">
              <h2>Contact Us</h2>
            </div>

            <div className="row">

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="contact-about">
                  <h3>EZIT</h3>
                  <p>We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.</p>
                  {/* <div className="social-links">
                    <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
                    <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                    <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
                    <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
                  </div> */}
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
                <div className="info">
                  <div>
                    <i className="ri-map-pin-line"></i>
                    <p>908-B,Manjeera Diamond,kukatpally,Hyderabad<br />telangana, India</p>
                  </div>

                  <div>
                    <i className="ri-mail-send-line"></i>
                    <p>info@ezit.in</p>
                  </div>
                  <div>
                    <i className="ri-phone-line"></i>
                    <p>+91 9055451499 (India)</p>
                  </div>
                  <div>
                    <i className="ri-phone-line"></i>
                    <p>+1 604 7856381 (Canada)</p>
                  </div>

                  

                </div>
              </div>

              {messegeSent ? <div className="d-flex justify-content-center col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300"><h5>Thank you ! </h5></div> :
                <div className="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
                  <form onSubmit={handleSendMessege} method="post" role="form" className="php-email-form">
                    <div className="form-group">
                      <input required type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                      <div className="validate"></div>
                    </div>
                    <div className="form-group">
                      <input required type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                      <div className="validate"></div>
                    </div>
                    <div className="form-group">
                      <input required type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                      <div className="validate"></div>
                    </div>
                    <div className="form-group">
                      <textarea required className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                      <div className="validate"></div>
                    </div>
                    <div className="mb-3">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                  </form>
                </div>
              }

            </div>

          </div>
        </section>
        {/* <!-- End Contact Section --> */}

      </main>
      {/* <!-- End #main --> */}

      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 text-lg-left text-center">
              <div className="copyright">
                &copy; Copyright <strong>EZIT</strong>. All Rights Reserved
          </div>
              <div className="credits">
                {/* <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you purchased the pro version. -->
            <!-- Licensing information: https://bootstrapmade.com/license/ --> */}
                {/* <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/vesperr-free-bootstrap-template/ --> */}
                {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
                <a href="#intro" className="scrollto">Home</a>
                <a href="#about" className="scrollto">About</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Use</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}

      <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>
    </>
  )
}
export default Home;
