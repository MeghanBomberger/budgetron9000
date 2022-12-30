import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Routes,
} from 'react-router-dom'
import {
  Dashboard, 
  Home, 
  NotFound,
} from './pages';

function App () {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="*"
            element={<NotFound />}
          />
          <Route 
            path="/" 
            element={<Home/>}
          />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
