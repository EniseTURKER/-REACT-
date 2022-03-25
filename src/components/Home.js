import React, { Component } from 'react'
import ContactForm from './ContactForm'


export default class Home extends Component {
  render() {
    return (
      
      <div><i>
        <hr />

        <h1 className="fs-1"></h1>

        <div id="carouselExampleCaptions" className="carousel slide mb-5 mt-3" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./img/1.webp" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Get your dream job.</h5>
                <p>You may be the person sought.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src="./img/2.jpeg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Get your dream job.</h5>
                <p>You may be the person sought.</p>
              </div>
            </div>

            <div className="carousel-item">
              <img src="./img/3.webp" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Get your dream job.</h5>
                <p>You may be the person sought.</p>
              </div>
            </div>

          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          
        </div>
<hr />
        <div>
         <h1><i>Examine Career Opportunities</i></h1>
         </div>
         <hr />
         <div>

       <ContactForm/>
       </div>
       <hr />
       </i>
       
      </div>
      
    )
  }
}
