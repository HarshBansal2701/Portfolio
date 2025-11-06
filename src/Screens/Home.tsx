import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import { url } from 'inspector'
import Button from "../components/Button";
import Background from "./../assets/backgroundImage.jpg";
import Mypic from "./../assets/Mypic.jpg";
import Card from "../components/Card";
import Range from "../components/Range";
import webDesignImage from "./../assets/paintbrush-solid-full.svg";
import advertisingImage from "./../assets/chart-simple-solid-full.svg";
import appDesignImage from "./../assets/code-solid-full.svg";
import cppLogo from './../assets/cpp.jpg';
import dsaLogo from './../assets/DSA_Logo.png';
import reactLogo from './../assets/react logo.png';
import htmlLogo from './../assets/html logo.png';
import cssLogo from './../assets/css logo.png';
import javascriptLogo from './../assets/javascript logo.jpeg';

const Home = () => {
    const [first, setFirst] = useState(true);

    function handleChange(){
      if(first){
        setFirst(false);
      }
      else{
        setFirst(true);
      }

    }

    let otherSkillContent;
    if(first){
      otherSkillContent = <div
          className="otherskillscrausal"
          style={{
            // border: "1px solid white",
            width: "100%",
            height: "65%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Card
            image ={htmlLogo}
            tack="HTML5"
            message="The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser."
          />
          <Card
            image={cssLogo}
            tack="CSS"
            message="The Cascading Style Sheets, or CSS, is the standard style language used to describe the visual presentation and layout of web pages in browsers."
          />
          <Card
            image={javascriptLogo}
            tack="JavaScript"
            message="The JavaScript programming language is widely used to create dynamic and interactive web pages, enabling real-time updates, animations, and event-driven functionality within browsers."
          />
          
        </div>
    }
    else{
      otherSkillContent = <div
          className="otherskillscrausal"
          style={{
            // border: "1px solid white",
            width: "100%",
            height: "65%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Card
            image={cppLogo}
            tack="CPP"
            message="The C++ programming language is a powerful, high-performance language widely used for system software, game development, embedded systems, and performance-critical applications across platforms."
          />
          <Card
            image={dsaLogo}
            tack="DSA"
            message="Data Structures and Algorithms, or DSA, form the foundation of efficient programming, helping developers organize data, solve complex problems, and optimize program performance."
          />
          <Card
            image={reactLogo}
            tack="React.js"
            message="The React library, developed by Facebook, is a powerful JavaScript framework for building user interfaces using reusable components and efficient virtual DOM rendering."
          />
          
        </div>
    }

  return (
    <div
      style={{
        // border:'2px black solid',
        height: "100vh",
        width: "100vw",
      }}
    >
      <NavBar />

      <div
        id="main"
        style={{
          // backgroundColor: 'lightpink',
          backgroundImage: `url(${Background})`,
          //   backgroundPosition: 'fixed',
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectFit: "fill",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div
          style={{
            width: "50vw",
            position: "relative",
            top: "40%",
            left: "15%",
            fontSize: "2.5rem",
            color: "white",
            textShadow: "2px 2px 8px black",
          }}
        >
          <p>Hello, Myself</p>
          <h1>Harsh Bansal</h1>
          <p>
            And i'm a <span>Coder</span>
          </p>
          <Button message="Hire me" />
        </div>
      </div>

      <div
        className="about"
        id="about"
        style={{
          //   backgroundColor: "darkred",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            // border: '3px solid white',
            height: "100%",
            justifyItems: "center",
          }}
        >
          <div
            className="aboutText"
            style={{
              // border: '3px solid cyan',
              width: "100%",
              height: "25%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2rem",
            }}
          >
            <h2>About me</h2>
            <p style={{ fontWeight: "bold" }}>
              ---- <span style={{ color: "darkred" }}>who i am</span> ----
            </p>
          </div>

          <div
            className="aboutDescription"
            style={{
              // border: "3px solid grey",
              width: "100%",
              height: "65%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "20%",
                marginLeft: "10%",
              }}
              src={Mypic}
              alt="Myimage"
            />

            <div className="aboutContent">
              <h3 style={{ fontSize: "1.8rem" }}>
                My self Harsh and i'm Coder
              </h3>
              <p
                style={{
                  width: "30vw",
                  fontSize: "1.2rem",
                  margin: "5%  0",
                }}
              >
                I’m currently in the 3rd year of my Bachelor in Technology from
                Galgotias University in computer science. Also I am very
                dedicated person,passionate about coding, goal-oriented
                individual with a high energy level ,Good communication skill ,
                and meticulous attention to detail,or in nature i am very kind &
                friendly.
              </p>
              <Button message="Download CV"></Button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="services"
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div
          className="myservices"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className="servicesText"
            style={{
              height: "25%",
              width: "100%",
              justifyItems: "center",
              alignContent: "end",
              fontSize: "1.7rem",
            }}
          >
            <h2>My Services</h2>
            <p>
              -- <span style={{ color: "darkred" }}>what i provide</span> --
            </p>
          </div>
          <div
            className="sercicesCards"
            style={{
              height: "70%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Card
              image={webDesignImage}
              tack="Web Design"
              message="Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different, including standardised code and proprietary software; user experience design; and search engine optimization."
            />
            <Card
              image={advertisingImage}
              tack="Advertising"
              message="Online advertising, also known as online marketing, Internet advertising, digital advertising or web advertising, is a form of marketing and advertising which uses the Internet to deliver promotional marketing messages to consumers."
            />
            <Card
              image={appDesignImage}
              tack="Apps Design"
              message="App design combines the user interface (UI) and user experience (UX). While UI lends itself to the overall style of the app (including the colors, fonts, and general look and feel), UX focuses on the actual functionality and usability."
            />
          </div>
        </div>
      </div>

      <div
        className="skills"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          className="myskills"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className="skillText"
            style={{
              // border: '1px red solid',
              width: "100%",
              height: "25%",
              justifyItems: "center",
              alignContent: "end",
              fontSize: "1.7rem",
            }}
          >
            <h2>My Skills</h2>
            <p>
              -- <span style={{ color: "darkred" }}>what i know</span> --
            </p>
          </div>
          <div
            className="skillCard"
            style={{
              width: "100%",
              height: "65%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div
              className="skillLeft"
              style={{
                // border: '1px solid black',
                height: "80%",
                width: "40%",
                padding: "10px",
              }}
            >
              <h2 style={{ paddingBottom: "10px" }}>
                My creative skills & experiences.
              </h2>
              <p
                style={{
                  fontSize: "1.2rem",
                  paddingBottom: "15px",
                }}
              >
                I don't have any experiences yet but this is my first resposive
                website(avi thoda work r krna h ispe). Also I have been
                tinkering with code since my first year. I love working on web
                apps, as well as the related tools & technologies. And I have
                spent many of my nights up hacking on coding and learning
                languages. I also regularly practice and code on website like
                (hackerrank/hackerearth/geeksforgeeks).
              </p>
              <Button message="Read more" />
            </div>
            <div
              className="skillRight"
              style={{
                // border: '1px solid black',
                height: "80%",
                width: "40%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                // alignItems: "center"
                padding: "1% 0px",
              }}
            >
              <Range name="HTML" per="90%" />
              <Range name="CSS" per="60%" />
              <Range name="JavaScript" per="80%" />
              <Range name="CoreCpp" per="50%" />
              <Range name="React" per="30%" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="otherskills"
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div
          className="otherSkillText"
          style={{
            // border: '1px red solid',
            width: "100%",
            height: "25%",
            justifyItems: "center",
            alignContent: "end",
            fontSize: "1.7rem",
          }}
        >
          <h2>Other Skills</h2>
          <p>
            -- <span style={{ color: "darkred" }}>what i provide</span> --
          </p>
        </div>
           {/* nvjkdnfkdf */}
        {/* <div
          className="otherskillscrausal"
          style={{
            // border: "1px solid white",
            width: "100%",
            height: "65%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Card
            image="one"
            tack="HTML5"
            message="The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser."
          />
          <Card
            image="one"
            tack="CSS"
            message="The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser."
          />
          <Card
            image="one"
            tack="JavaScript"
            message="The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser."
          />
          
        </div> */}
        {otherSkillContent}
        <div className="" style={{display: 'flex', width: '100%' , justifyContent: 'center'}}>
          <button onClick={handleChange} ><span>&#129092;</span></button>
          <button onClick={handleChange}><span>&#129094;</span></button>
        </div>
      </div>

      <div
        className="contact"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          className="mycontact"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className="contactText"
            style={{
              // border: '1px red solid',
              width: "100%",
              height: "25%",
              justifyItems: "center",
              alignContent: "end",
              fontSize: "1.7rem",
            }}
          >
            <h2>My Contact</h2>
            <p>
              -- <span style={{ color: "darkred" }}>get in touch</span> --
            </p>
          </div>
          <div
            className="contactDetails"
            style={{
              width: "100%",
              height: "65%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <div
              className="contactLeft"
              style={{
                // border: '1px solid black',
                height: "80%",
                width: "30%",
                padding: "20px",
              }}
            >
              <h2>Get in Touch</h2>
              <p style={{ fontSize: "1.3rem", padding: "15px 0" }}>
                I hope you like this, if you want to talk or suggest me
                something then write a mail to me so that i can take action or
                response to them. Thank you
              </p>
              <ul style={{ listStyle: "none", fontSize: "1.4rem" }}>
                <li>
                  <h4>Name</h4> <p>Harsh Bansal</p>
                </li>
                <li>
                  <h4>Address</h4>
                  <p>Muzaffarnagar, Utter Pradesh</p>
                </li>
                <li>
                  <h4>Email</h4>
                  <p>harshbansal9870@gmail.com</p>
                </li>
              </ul>
            </div>
            <div
              className="ContactRight"
              style={{
                border: "1px solid black",
                height: "80%",
                width: "30%",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <h2 style={{ paddingBottom: "15px" }}>Message me</h2>
              <div
                style={{
                  display: "flex",
                  height: "50%",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <input type="text" size={10} placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <input type="text" placeholder="Message" />
              </div>
              <Button message="Send message"></Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
