import vectorimg from "../assests/Vector.png";
import "./BookingPage.css";
import Search from "../assests/Search.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import img1 from "../assests/image 22.png";
import img2 from "../assests/Frame.png";

function BookingPage() {
    const [bookings, setBookings] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
      };
      function formatDate(dateString) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString("en-US", options);
      }
      useEffect(() => {
        // Retrieve data from localStorage
        const storedData = localStorage.getItem("selectedDetails");
        
        if (storedData) {
          // Parse the retrieved data into an object
          const parsedData = JSON.parse(storedData);
          
          // Access the values you need
          const timeSlot = parsedData.timeSlot;
          const centerDetails = parsedData.centerDetails;
          const dateSlot = parsedData.date;
  
          // Now you can do whatever you want with these values
          console.log(timeSlot);
          console.log(centerDetails);
          console.log(dateSlot);
          setBookings(centerDetails.map(center => ({...center, timeSlot, dateSlot})));
      }
    }, []);
  return(
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

        </div>
        <header className="div">
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputgroup">
            <input type="text" placeholder="search by hospital" className="search-hospital" />
            
            <button type="submit" className="button" onClick={handleSubmit}>
             
              <img src={Search} alt="search" className="icons1" />
              search
            </button>
          </div>
        </form>
      </header>
      <div className="card">
      {bookings.map((result, index) => (
            <Card key={index} className="custom-card">
              <CardMedia
                alt="Medical Center Image"
                image={img1}
                className="hospitalimg1"
              />
             
              <CardContent>
                <div className="card-details">
                  <Typography
                    gutterBottom
                    variant="h5"
                    className="card-heading"
                  >
                    {result["Hospital Name"]}  
                    </Typography>
                  
                 
                  <Typography variant="p" className="card-statecity">
                    {result.City}, {result.State}
                  </Typography>
                  <Typography variant="p" className="card-address">
                    {result.Address}
                  </Typography>
                  <Typography variant="p" className="card-free">
                    <span className="free">FREE</span> $500 Consultation fee at
                    clinic
                  </Typography>
                 
                  <div className="rating">
                    <img src={img2} alt="..." />
                    <Typography variant="p" className="ratingval">
                      {result["Hospital overall rating"]}
                    </Typography>
                  </div>
                </div>
              </CardContent>
              <CardContent>
                <div className="date">
              <Button variant="outlined" className="card-dateSlot">
                      {formatDate(result.dateSlot)} 
                    </Button>
                    <Button variant="outlined" className="card-timeSlot">
                    {result.timeSlot.time}   
                    </Button>
                    </div>
              </CardContent>
              
            </Card>
          ))}
          </div>
    </div>
  ) ;
}
export default BookingPage;
