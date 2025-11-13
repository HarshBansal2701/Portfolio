import React, { useEffect, useState } from 'react';
import Card from './Card';
import './../App.css';
import cppLogo from "./../assets/cpp.jpg";
import dsaLogo from "./../assets/DSA_Logo.png";
import reactLogo from "./../assets/react logo.png";
import htmlLogo from "./../assets/html logo.png";
import cssLogo from "./../assets/css logo.png";
import javascriptLogo from "./../assets/javascript logo.jpeg";


const Carousel = () => {

     const otherskillsItems = [
    {
      image:  htmlLogo ,
      tack: "HTML5",
      message: "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser."
    },
    {
      image: cssLogo ,
      tack: "CSS",
      message: "The Cascading Style Sheets, or CSS, is the standard style language used to describe the visual presentation and layout of web pages in browsers."
    },
    {
      image:  javascriptLogo ,
      tack: "JavaScript",
      message: "The JavaScript programming language is widely used to create dynamic and interactive web pages, enabling real-time updates, animations, and event-driven functionality within browsers."
    },
    {
      image:  cppLogo ,
      tack: "CPP",
      message: "The C++ programming language is a powerful, high-performance language widely used for system software, game development, embedded systems, and performance-critical applications across platforms."
    },
    {
      image:  dsaLogo ,
      tack: "DSA",
      message: "Data Structures and Algorithms, or DSA, form the foundation of efficient programming, helping developers organize data, solve complex problems, and optimize program performance."
    },
    {
      image:  reactLogo ,
      tack: "React.js",
      message: "The React library, developed by Facebook, is a powerful JavaScript framework for building user interfaces using reusable components and efficient virtual DOM rendering."
    },
     {
      image:  htmlLogo ,
      tack: "HTML5",
      message: "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser."
    },
    {
      image: cssLogo ,
      tack: "CSS",
      message: "The Cascading Style Sheets, or CSS, is the standard style language used to describe the visual presentation and layout of web pages in browsers."
    },
    {
      image:  javascriptLogo ,
      tack: "JavaScript",
      message: "The JavaScript programming language is widely used to create dynamic and interactive web pages, enabling real-time updates, animations, and event-driven functionality within browsers."
    },
    {
      image:  cppLogo ,
      tack: "CPP",
      message: "The C++ programming language is a powerful, high-performance language widely used for system software, game development, embedded systems, and performance-critical applications across platforms."
    },
    {
      image:  dsaLogo ,
      tack: "DSA",
      message: "Data Structures and Algorithms, or DSA, form the foundation of efficient programming, helping developers organize data, solve complex problems, and optimize program performance."
    },
    {
      image:  reactLogo ,
      tack: "React.js",
      message: "The React library, developed by Facebook, is a powerful JavaScript framework for building user interfaces using reusable components and efficient virtual DOM rendering."
    }
  ];

  const [idx, setIdx] =  useState(0);



  function nextSlide(){
    setIdx((prevIdx) => (prevIdx+1)%otherskillsItems.length);
  };

  function prevSlide(){
    setIdx((prevIdx) => prevIdx===0 ? otherskillsItems.length-1 : prevIdx-1)
  }

  useEffect(()=>{
    const ionterval = setInterval(()=>{
      nextSlide();
    }, 3000);
  }, []);


  return (
    <div className='carousel'>
        <button className="prev carouselBtn"  onClick={prevSlide}>❮</button>
        <div className="carouselWrapper" >
            <div className="carouselContent"
             
            >
                {
                    otherskillsItems.map((item, index)=>{
                        return (
                            <div className="carouselItem" key={index}  style={{transform: `translateX(-${idx*145}px)` , transition: 'transform 0.5s ease-in-out'}}>
                                <Card image = {item.image}  tack = {item.tack} message={item.message}/> 
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <button className="next carouselBtn" onClick={nextSlide}>❯</button>
    </div>
  )
}

export default Carousel