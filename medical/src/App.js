import './App.css';
import LandingPage from './Component/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResult from './Component/SearchResult';
import BookingPage from './Component/BookingPage';

function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/search' element={<SearchResult />} />
        <Route path="/bookings" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
