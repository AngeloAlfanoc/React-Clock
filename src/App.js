import React from 'react';
import './style.css'
import Clock from './components/Clock'
function App() {
  
  return (
    <div>
    <div className="head">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z"/></svg>
      <span>React Clock</span></div>
    <div className="container">
      
      <div className="clock-container">
        <div className="clock-circle"> <Clock/></div>
         
      </div>
    </div>
    </div>
  );
}

export default App;
