import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

// export default App;



////////////////////////////////////////////////sidebarnav & PiechartPage/////////////////////////////////////////////////////
// import React from 'react';
// import React, { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import Content from './components/Content';
// import Profile from './components/Profile';

// import {PieChart, Pie, Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar } from 'recharts';

// import './App.css';

// const App = () => {
//     return ( 
//         <div className="dashboard">
//             <Sidebar />
//             <div className="dashboard--content">
//                 <Content />
//                 <Profile />
                
//             </div>
//         </div>
//     );
// };

// const App =() => {

//     const data =[
//         {name: "Class A", value: 250},
//         {name: "Class B", value: 120},
//         {name: "Class C", value: 50},
//         {name: "Class D", value: 180},
//     ];

//     return (
//         <div style={{ textAlign: "center"}}>
//             <h1>Chart List Of Students In Each Classes</h1>
//         <div className="App">
//             <PieChart width={400} height={400}>
//           <Pie
//             dataKey="value"
//             isAnimationActive={false}
//             data={data}
//             cx="50%"
//             cy="50%"
//             outerRadius={80}
//             fill="#8884d8"
//             label
//           />
//           <Tooltip />
//         </PieChart>

//         <BarChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//           barSize={20}
//         >
//           <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <CartesianGrid strokeDasharray="3 3" />
//           <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
//         </BarChart>
//         </div>
//         </div>
//     );
// };
///////////////////////////////////////AnnouncementPost///////////////////////////////////
// function App() {
//     const [announcement, setAnnouncement] = useState("");
//     const [announcements, setAnnouncements] = useState([]);
  
//     const handleInputChange = (e) => {
//       setAnnouncement(e.target.value);
//     };
  
//     const handlePostAnnouncement = () => {
//       if (announcement.trim()) {
//         setAnnouncements([...announcements, announcement]);
//         setAnnouncement("");
//       }
//     };
  
//     const handleDeleteAnnouncement = (index) => {
//       const newAnnouncements = announcements.filter((_, i) => i !== index);
//       setAnnouncements(newAnnouncements);
//     };
  
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>Post Announcement</h1>
//           <textarea
//             value={announcement}
//             onChange={handleInputChange}
//             placeholder="Type your announcement here..."
//             rows="4"
//             cols="50"
//           />
//           <br />
//           <button onClick={handlePostAnnouncement}>Post Announcement</button>
//           <div className="announcements">
//             <h2>Announcements</h2>
//             {announcements.map((ann, index) => (
//               <div key={index} className="announcement-item">
//                 <p>{ann}</p>
//                 <button onClick={() => handleDeleteAnnouncement(index)}>Delete</button>
//               </div>
//             ))}
//           </div>
//         </header>
//       </div>
//     );
//   }

export default App;



