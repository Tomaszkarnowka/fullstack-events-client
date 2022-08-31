import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EventsContainer from './pages/EventsContainer';
import EditEventContainer from './pages/EditEventContainer';
import CreateEventContainer from './pages/CreateEventContainer';
function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/create-event">Create a event</Link>
        </div>

        <Routes>
          <Route path="/" element={<EventsContainer />} />
          <Route path="/create-event" element={<CreateEventContainer />} />
          <Route path="/edit-event/:id" element={<EditEventContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
