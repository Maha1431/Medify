import React, { useState } from "react";
import "./LandingPage.css";
import vectorimg from "../assests/Vector.png";
import docpic from "../assests/doctor.png";
import textimg from "../assests/Shield check.png";
import SearchIcon from "../assests/Icon.png";
import Search from "../assests/Search.png";
import Doctor from "../assests/Doctoricon.png";
import Ambulance from "../assests/Ambulance.png";
import Capsule from "../assests/Capsule.png";
import Drugstore from "../assests/Drugstore.png";
import Hospital from "../assests/Hospital.png";
import picture from "../assests/pic1.png";
import picture1 from "../assests/pic2.png";
import picture2 from "../assests/Stethoscope.png";
import picture3 from "../assests/Heart Rate.png";
import picture4 from "../assests/Heart Rate Monitor.png";
import picture5 from "../assests/Blood Sample.png";
import picture6 from "../assests/Immune.png";
import picture7 from "../assests/X-Ray.png";
import picture8 from "../assests/div-element.png";
import picture9 from "../assests/sideimg.png";
import picture10 from "../assests/rightclick.png";
import picture11 from "../assests/cards.png";
import picture12 from "../assests/wrap.png";
import picture13 from "../assests/img.png";
import picture14 from "../assests/widget.png";
import SearchResult from "./SearchResult";
import picture15 from "../assests/dowloadmedify.png";
import picture16 from "../assests/fb.png";
import picture17 from "../assests/twitter.png";
import picture18 from "../assests/youtube.png";
import picture19 from "../assests/pinterst.png";
import picture20 from "../assests/arrow.png";

function LandingPage() {
  const [showResult, setShowResult] = useState(false);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const handlesearch = (e) => {
    console.log(setShowResult);
    setShowResult(true);
  };

  return (
    <div>
      <div className="topdiv">
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </div>
      <div className="box">
        <nav className="navbar">
          <img src={vectorimg} alt="Medify-img" className="logo" />
          <h2 className="heading">Medify</h2>
          <ul className="list">
            <li> Find Doctors</li>
            <li> Hospitals</li>
            <li> Surgeries</li>
            <li> Software for Provider</li>
            <li> Facilities</li>
          </ul>
          <button className="bookingbtn"> my bookings</button>
        </nav>
        {!showResult && (
          <div>
            <div className="container">
              <div className="side">
                <h6 className="landing">
                  <span className="skip">
                    Skip the travel! Find Online <br />
                  </span>
                  <span className="medical">Medical </span>
                  <span className="center"> Centers</span>
                </h6>
                <p className="para">
                  Connect instantly with a 24x7 specialist or choose to <br />
                  video visit a particular doctor.
                </p>
                <button className="centerbtn">Find Ceners</button>
              </div>
              <div className="doctor-img">
                <img src={docpic} alt="doctors" className="doctors" />
                <div className="regular-checkup">
                  <img src={textimg} alt="logo" className="img1" />
                  <span className="text">Regular Checkup</span>
                </div>
              </div>
            </div>
            <div className="container1">
              <form
                className="formcontainer"
                onSubmit={(e) => {
                  e.preventDefault();
                  handlesearch();
                }}
              >
                <div className="inputgroup">
                  <img src={SearchIcon} alt="search" className="icons" />

                  <input
                    type="text"
                    placeholder="state"
                    value={state}
                    className="state"
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
                <div className="inputgroup">
                  <img src={SearchIcon} alt="search" className="icons" />

                  <input
                    type="text"
                    placeholder="city"
                    value={city}
                    className="city"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="inputgroup">
                  <img src={Search} alt="search" className="icons" />
                  <button type="submit" className="button">
                    search
                  </button>
                </div>
              </form>
              <p className="para1">You may be looking for</p>
              <div className="container2">
                <div className="container3">
                  <img src={Doctor} alt="doctor" />
                  <p className="para2">Doctors</p>
                </div>
                <div className="container3">
                  <img src={Drugstore} alt="doctor" />
                  <p className="para2">Labs</p>
                </div>
                <div className="container3">
                  <img src={Hospital} alt="doctor" />
                  <p className="para2">Hospitals</p>
                </div>
                <div className="container3">
                  <img src={Capsule} alt="doctor" />
                  <p className="para2">Medical store</p>
                </div>
                <div className="container3">
                  <img src={Ambulance} alt="doctor" />
                  <p className="para2">Ambulance</p>
                </div>
              </div>
            </div>
            <div className="container4">
              <img src={picture} alt="pic" className="pic" />
              <img src={picture1} alt="pic" className="pic" />
              <img src={picture} alt="pic" className="pic" />
            </div>
            <div className="container5">
              <h1 className="heading1">Find by specialisation</h1>
              <div className="card1">
                <div className="box1">
                  <img src={Drugstore} alt="doctor" />
                  <p className="para2">Dentistry</p>
                </div>
                <div className="box1">
                  <img src={picture2} alt="...." />
                  <p className="para2">Primary Care</p>
                </div>
                <div className="box1">
                  <img src={picture3} alt="...." />
                  <p className="para2">Cardiology</p>
                </div>
                <div className="box1">
                  <img src={picture4} alt="...." />
                  <p className="para2">MRI Resonance</p>
                </div>
              </div>
              <div className="card2">
                <div className="box1">
                  <img src={picture5} alt="...." />
                  <p className="para2">Blood Test</p>
                </div>
                <div className="box1">
                  <img src={picture6} alt="...." />
                  <p className="para2">Piscologist</p>
                </div>
                <div className="box1">
                  <img src={Drugstore} alt="doctor" />
                  <p className="para2">Laboratory</p>
                </div>
                <div className="box1">
                  <img src={picture7} alt="...." />
                  <p className="para2">X-Ray</p>
                </div>
              </div>
              <button className="viewallbtn">View All</button>
            </div>
            <div className="container6">
              <h1 className="heading3">Our Medical Specialist</h1>
              <img src={picture8} alt="..." className="specialist" />
            </div>
            <div className="container7">
              <img src={picture9} alt="..." className="sideimg" />
              <div className="side">
                <h5 className="heading">
                  HELPING PATIENTS FROM AROUND THE GLOBE!!
                </h5>
                <h2>
                  <span className="medical">Patient</span>
                  <span className="center">Caring</span>
                </h2>
                <p className="text1">
                  Our goal is to deliver quality of care in a courteous,
                  respectful, and <br />
                  compassionate manner. We hope you will allow us to care for
                  you and <br />
                  strive to be the first and best choice for healthcare.
                </p>
                <span className="lis">
                  <img src={picture10} alt="..." className="right" />
                  Stay Updated About Your Health
                </span>
                <span className="lis">
                  {" "}
                  <img src={picture10} alt="..." className="right" />
                  Check Your Results Online
                </span>
                <span className="lis">
                  <img src={picture10} alt="..." className="right" />
                  Manage Your Appointments
                </span>
              </div>
            </div>
            <div className="container8">
              <h6 className="heading">Blog & News</h6>
              <h2 className="heading2">Read Our Latest News</h2>
              <img src={picture11} alt="...." className="cardview" />
              <img src={picture11} alt="...." className="cardview" />
              <img src={picture11} alt="...." className="cardview" />
            </div>
            <div className="container7">
              <div className="side1">
                <h5 className="heading">
                  CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
                </h5>
                <h1>Our Families</h1>
                <p className="text1">
                  We will work with you to develop individualised care plans,{" "}
                  <br />
                  including management of chronic diseases. If we cannot assist,
                  <br />
                  we can provide referrals or advice about the type of
                  practitioner <br />
                  you require. We treat all enquiries sensitively and in the
                  strictest
                  <br />
                  confidence.
                </p>
              </div>
              <img src={picture12} alt="....." />
            </div>

            <div className="container6">
              <h5>Get Your Answer</h5>
              <h1>Frequently Asked Questions</h1>
              <div className="container4">
                <img src={picture13} alt="...." className="img" />
                <img src={picture14} alt="...." className="img2" />

                <div className="ques">
                  <p>
                    Why choose our medical for your family?{" "}
                    <span className="plus">+</span>
                  </p>
                  <p>
                    Why we are different from others?
                    <span className="plus">+</span>
                  </p>
                  <p>
                    Trusted & experience senior care & love{" "}
                    <span className="plus">+</span>
                  </p>
                  <p>
                    How to get appointment for emergency{" "}
                    <span className="plus">+</span> <br /> Cases{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {showResult && <SearchResult state={state} city={city} />}

        <div>
          <img src={picture15} alt="...." />
        </div>
        <footer className="footer">
          <div className="footer-side">
            <img src={vectorimg} alt="Medify-img" className="logo" />
            <span className="heading">Medify</span>
            <div className="sociallogo">
              <img src={picture16} alt="...." />
              <img src={picture17} alt="...." />
              <img src={picture18} alt="...." />
              <img src={picture19} alt="...." />
            </div>
            <p className="copyright">
              Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
            </p>
          </div>
          <div className="firstrow">
            <p className="foot-header">
              {" "}
              <span> &gt; </span> About us
            </p>

            <p className="foot-header">
              {" "}
              <span> &gt; </span> Our Pricing
            </p>

            <p className="foot-header">
              {" "}
              <span> &gt; </span>Our Gallery
            </p>

            <p className="foot-header">
              <span> &gt; </span>Appointment
            </p>

            <p className="foot-header">
              <span> &gt; </span>Privacy Policy
            </p>
          </div>
          <div className="secondrow">
            <p className="foot-header">
              <span> &gt; </span>Orthology
            </p>

            <p className="foot-header">
              <span> &gt; </span>Neurology
            </p>

            <p className="foot-header">
              <span> &gt; </span>Dental Care
            </p>

            <p className="foot-header">
              <span> &gt; </span>Opthalmology
            </p>

            <p className="foot-header">
              <span> &gt; </span>Cardiology
            </p>
          </div>

          <div className="thirdrow">
            <p className="foot-header">
              <span> &gt; </span>About us
            </p>

            <p className="foot-header">
              <span> &gt; </span>Our Pricing
            </p>

            <p className="foot-header">
              <span> &gt; </span>Our Gallery
            </p>

            <p className="foot-header">
              <span> &gt; </span>Appointment
            </p>

            <p className="foot-header">
              <span> &gt; </span>Privacy Policy
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default LandingPage;
