import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 2500);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_irms3j4",
        "template_fxecruk",
        refForm.current,
        "4N1cEdPZewimm98zc"
      )
      .then(
        () => {
          alert("Message sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send message!");
        }
      );
  };
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I'm interested in a remote full time job and be part of an amazing
            team to halp me skyrocket my skills 🚀
          </p>
          <p>
            If you have any questions, don't hesitate to contact me using the
            form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Message"
                    required
                  />
                </li>
                <input type="submit" className="flat-button" value="Send" />
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Samuel Coizet,
          <br />
          France,
          <br />
          83500 La Seyne Sur Mer <br />
          <a href="mailto: messa57fr@gmail.com">messa57fr@gmail.com</a>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[43.079477694277195, 5.89477660055998]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[43.079477694277195, 5.89477660055998]}>
              <Popup>I live here, Let's have a coffee by the beach :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
