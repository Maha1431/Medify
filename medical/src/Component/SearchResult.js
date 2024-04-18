import React, { useEffect, useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import search from "../assests/Search1.png";
import "./SearchResult.css";
import Search from "../assests/Search.png";
import img from "../assests/sideimg1.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img1 from "../assests/image 22.png";
import img2 from "../assests/Frame.png";
import BookingPage from "./BookingPage";
import { useNavigate } from "react-router-dom";


function SearchResult(props) {
  const [results, setResults] = useState([]);
  const [dateSlots, setDateSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
  const [isBookingClicked, setIsBookingClicked] = useState(false); // State to track if booking button is clicked


  const navigate = useNavigate();
  useEffect(() => {
    const fetchdata = async () => {
      const url = `https://meddata-backend.onrender.com/data?state=${props.state}&city=${props.city}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setResults(data);
      } catch (e) {
        console.log("error fetching details:", e);
      }
    };
    fetchdata();
  }, [props.state, props.city]);

  useEffect(() => {
    const today = new Date();

    // Generate date slots for the next 7 days
    const nextDays = [...Array(7)].map((_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      return date;
    });
    setDateSlots(nextDays);
  }, []);

  const handleBookingClick = () => {
    setIsBookingClicked(true); // Set the state to true when booking button is clicked
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleDateClick = (date) => {
    console.log("Selected date:", date);

    // Set selected date
    setSelectedDate(date);

    // Find time slots for the selected date
    const selectedDateSlots = timeSlots.filter(
      (slot) => slot.date.getTime() === date.getTime()
    );

    console.log("Selected date slots:", selectedDateSlots);

    // Update selected time slots
    if (selectedDateSlots) {
      setSelectedTimeSlots(selectedDateSlots.slots);
    } else {
      setSelectedTimeSlots([]);
    }
  };



  const handleTimeSlotClick = (timeSlot, date) => {
    // Combine selected time slot and center details
    const selectedDetails = {
      timeSlot: timeSlot,
      centerDetails: results,
      date: date,
    };

    // Store selected details in local storage
    localStorage.setItem("selectedDetails", JSON.stringify(selectedDetails));

    // Navigate to the booking page
    navigate('/bookings')
  };




  const timeSlots = [
    {
      date: dateSlots[0],
      slots: [
        { time: "11:30AM", type: "Morning" },
        { time: "12:00PM", type: "Morning" },
        { time: "1:30PM", type: "Afternoon" },
        { time: "2:30PM", type: "Afternoon" },
        { time: "6:00PM", type: "Evening" },
        { time: "7:00PM", type: "Evening" },
        { time: "8:30PM", type: "Evening" },
        { time: "10:00PM", type: "Evening" },
      ],
    },
  ];

  return (
    <div>
      <header className="div">
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputgroup">
            <img src={search} alt="search" className="icons" />
            <input
              type="text"
              placeholder="state"
              className="state"
              value={props.state}
            />
          </div>
          <div className="inputgroup">
            <img src={search} alt="search" className="icons" />
            <input
              type="text"
              placeholder="city"
              className="city"
              value={props.city}
              
            />
          </div>
          <div className="inputgroup">
            <img src={Search} alt="search" className="icons" />
            <button type="submit" className="button" onClick={handleSubmit}>
              search
            </button>
          </div>
        </form>
      </header>
      <div className="content">
        <div className="doctor-details">
          <h5>
            {results.length} medical center available in{" "}
            <span>{props.city}</span>
          </h5>
          <p>
            Book appointments with minimum wait-time & verified doctor details
          </p>
          {/* Iterate over results and display each medical center as a Material-UI Card */}
          {results.map((result, index) => (
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
              <div className="card-action">
                <Typography variant="p" className="card-sidebar">
                  Available Today
                </Typography>
                <Button
                  variant="contained"
                  className="card-button"
                  onClick={handleBookingClick}
                >
                  Book FREE Center Visit
                </Button>
              </div>
            </Card>
          ))}
          {isBookingClicked && (
            <div className="calenderSlot">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={3}
                slidesPerGroup={1}
                navigation={{ clickable: true }}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                {dateSlots.map((date, index) => (
                  <SwiperSlide key={index}>
                    <button
                      className={selectedDate === date ? "selected-date" : ""}
                      onClick={() => handleDateClick(date)}
                    >
                      {index === 0
                        ? "Today"
                        : index === 1
                        ? "Tomorrow"
                        : date.toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          })}
                    </button>
                    <div className="time-slot-container">
                      {timeSlots
                        .filter(
                          (slot) => slot.date.getTime() === date.getTime()
                        )
                        .map((slot, index) => (
                          <div key={index} className="time-slot-row">
                            <div className="time-slot-label">{slot.type}</div>
                            <div className="time-slot-values">
                              {slot.slots.map((timeSlot, idx) => (
                                <React.Fragment key={idx}>
                                  <Button onClick={() => handleTimeSlotClick(timeSlot, date)}>{timeSlot.time}</Button>
                                  {idx < slot.slots.length - 1 && <hr />}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
        <div className="sideimg">
          <img src={img} alt="..." className="image" />
        </div>
      </div>
    </div>
  );
}
export default SearchResult;
