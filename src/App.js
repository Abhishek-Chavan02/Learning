import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Using BrowserRouter and Routes for routing
import { store } from './app/store';
import SignUp from './page/SignUp';
import Profile from './page/Profile';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
