import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PortafolioItem } from "./PortafolioItem";
import portafolio from "../data/portafolio";
import { v4 as uuidv4 } from 'uuid';



export const Portafolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
   

    responsive: [
      {
        breakpoint: 767, // breakpoint para pantallas de 640px o menos
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        },
      },
      {
        breakpoint: 1023, // breakpoint para pantallas de 640px o menos
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],

  };

  return (
    <>

      <div id="proyectos" className="flex-col md:flex-row  dark:shadow-white   justify-center bg-stone p-8 rounded-lg shadow-md flex items-center">


        <Slider {...settings} className="w-full  dark:border-stone-900 border-white">
          {portafolio.map((project) => (
            <>
              <div  className="flex justify-center py-4 transform hover:scale-110 duration-300 " >
              <PortafolioItem
              key={uuidv4()}
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}

            />
              </div>
             
            </>

          ))}
        </Slider>
      </div>
    </>

  );
};
