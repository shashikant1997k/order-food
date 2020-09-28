import React from 'react'
import '../css/Carousel.css'
import image1 from '../image/img2.jpg';
import image2 from '../image/img3.jpg';
import image3 from '../image/img4.jpg';

function Carousel() {
    return (
        <div className="carousel__container">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={ image1 } alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={ image2 } alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={ image3 } alt="Third slide" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
