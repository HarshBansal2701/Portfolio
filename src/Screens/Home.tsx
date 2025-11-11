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
import cppLogo from "./../assets/cpp.jpg";
import dsaLogo from "./../assets/DSA_Logo.png";
import reactLogo from "./../assets/react logo.png";
import htmlLogo from "./../assets/html logo.png";
import cssLogo from "./../assets/css logo.png";
import javascriptLogo from "./../assets/javascript logo.jpeg";
import "./../App.css";

const Home = () => {
  const [first, setFirst] = useState(true);

  setInterval(handleChange, 2000);

  function handleChange() {
    if (first) {
      setFirst(false);
    } else {
      setFirst(true);
    }
  }

  let otherSkillContent;
  if (first) {
    otherSkillContent = (
      <div className="otherskillscrausal">
        <Card
          image={htmlLogo}
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
    );
  } else {
    otherSkillContent = (
      <div className="otherskillscrausal">
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
    );
  }

  return (
    <div className="home">
      <NavBar />

      <div
        id="home"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <div className="homeContent">
          <p>Hello, Myself</p>
          <h1>Harsh Bansal</h1>
          <p>
            And i'm a <span>Coder</span>
          </p>
          <Button message="Hire me" />
        </div>
      </div>

      <div id="about">
        <div className="about">
          <div className="aboutText">
            <h2>About me</h2>
            <p>
              ---- <span>who i am</span> ----
            </p>
          </div>

          <div className="aboutDescription">
            <img src={Mypic} alt="Myimage" />

            <div className="aboutContent">
              <h3>My self Harsh and i'm Coder</h3>
              <p>
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

      <div id="services">
        <div className="myservices">
          <div className="servicesText">
            <h2>My Services</h2>
            <p>
              -- <span>what i provide</span> --
            </p>
          </div>
          <div className="sercicesCards">
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

      <div id="skills" className="skills">
        <div className="myskills">
          <div className="skillText">
            <h2>My Skills</h2>
            <p>
              -- <span>what i know</span> --
            </p>
          </div>
          <div className="skillCard">
            <div className="skillLeft">
              <h2>My creative skills & experiences.</h2>
              <p>
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
            <div className="skillRight">
              <Range name="HTML" per="90%" />
              <Range name="CSS" per="60%" />
              <Range name="JavaScript" per="80%" />
              <Range name="CoreCpp" per="50%" />
              <Range name="React" per="30%" />
            </div>
          </div>
        </div>
      </div>

      <div id="otherskills">
        <div className="otherSkillText">
          <h2>Other Skills</h2>
          <p>
            -- <span>what i provide</span> --
          </p>
        </div>
        {otherSkillContent}
        <div className="leftRightButton">
          <button onClick={handleChange}>
            <span>&#129092;</span>
          </button>
          <button onClick={handleChange}>
            <span>&#129094;</span>
          </button>
        </div>
      </div>

      <div id="contact">
        <div className="mycontact">
          <div className="contactText">
            <h2>My Contact</h2>
            <p>
              -- <span>get in touch</span> --
            </p>
          </div>
          <div className="contactDetails">
            <div className="contactLeft">
              <h2>Get in Touch</h2>
              <p>
                I hope you like this, if you want to talk or suggest me
                something then write a mail to me so that i can take action or
                response to them. Thank you
              </p>
              <ul>
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
            <div className="ContactRight">
              <h2>Message me</h2>
              <div className="contactInputs">
                <input className="inputName" type="text" placeholder="Name" />

                <input className="inputName" type="email" placeholder="Email" />
                <input
                  className="inputSubject"
                  type="text"
                  placeholder="Subject"
                />
                <input
                  className="inputMessage"
                  type="text"
                  placeholder="Message"
                />
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
