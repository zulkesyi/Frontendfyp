import React from 'react'
import ProfileHeader from './ProfileHeader';
import '../styles/profile.css';
import userImage from '../assets/Pic1.jpg';

const courses=[
  {
    title: 'React.js',
    duration: '2 hours',
  },
  {
    title: 'JavaScript',
    duration: '2 hours',
  },
  {
    title: 'HTML & CSS',
    duration: '2 hours',
  },
];

const Profile = () => {
  return ( 
    <div className="profile">
      <ProfileHeader />

      <div className="user--profile">
        <div className="user--detail">
          <img src={userImage} alt="" />
          <h3 className="username">Zulhilmi Firdaus</h3>
          <span className="profession">Teacher</span>
        </div>

        <div className="user-courses">
          {courses.map(coures=> (
            <div className="courses">
              <div className="course--detail">
                <div className="course-name">
                  <h5 className="title">{coures.title}</h5>
                  <span className="duration">{coures.duration}</span>
                </div>
              </div>
              <div className="action">:</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;