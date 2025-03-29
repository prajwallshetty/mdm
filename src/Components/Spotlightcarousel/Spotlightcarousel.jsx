import React from "react";
import Slider from "react-slick";
import './Spotlightcarousel.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Spotlightcarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // To show partial view of the next/previous slides
    centerPadding: "50px", // Adjust this to control visibility of side slides
    autoplay: true,
    autoplaySpeed: 2000, // Auto-scroll every 3 seconds
  }; 

  const spotlightData = [
    {
      id: 1,
      title: "spotlight 1",
      description: "Description of Event 1",
      imageUrl: "https://ew.com/thmb/_gqGqr0EOtv4s3f0F4ezfTha--s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1351653458-bcd29b9ce3a24dceb93dc3bad7517e5d.jpg", // Add the image URL
    },
    {
      id: 2,
      title: "spotlight 2",
      description: "Description of Event 2",
      imageUrl: "https://variety.com/wp-content/uploads/2024/07/GettyImages-2149367807.jpg",
    },
    {
      id: 3,
      title: "spotlight 3",
      description: "Description of Event 3",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcRq0HXI_b38D-L3Zw8OpKwl5m3Q1xTvVHPg&s",
    },
    // Add more events with image URLs here
  ];

  return (
    <div className="spotlight-carousel">
      <Slider {...settings}>
        {spotlightData.map((event) => (
          <div key={event.id} style={{ padding: "10px" }}>
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "15px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.0)",
                textAlign: "center",
              }}
            >
              <img
                src={event.imageUrl} // Image for each card
                alt={event.title}
              />
              {/* <h2>{event.title}</h2>
              <p>{event.description}</p> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Spotlightcarousel;
