import React from 'react'
import "../styles/teacherList.css"
import Image1 from '../assets/Pic1.jpg';
import Image2 from '../assets/Pic3.jpeg';

const teachers = [
    {
        image: Image2,
        name: 'Mr. Zulhilmi Firdaus',
        cost: 'RM 500',
    },
    {
        image: Image1,
        name: 'Mr. Zulhilmi Firdaus',
        cost: 'RM 500',
    },
    {
        image: Image1,
        name: 'Mr. Zulhilmi Firdaus',
        cost: 'RM 500',
    },
];

const TeacherList = () => {
  return ( <div className="teacher--list">
    <div className="list--header">
            <h2>Teachers</h2>
            <select>
                <option value="english">English</option>
                <option value="malay">Malay</option>
            </select>
        </div>
        <div className="list--container">
            {teachers.map((teacher) =>( 
                <div className="list">
                    <div className="teacher--detail">
                        <img src={teacher.image} alt={teacher.name}/>
                        <h2> {teacher.name}</h2>

                    </div>
                    <span>{teacher.cost}/hr.</span>
                    <span className="teacher--todo"></span>
                </div>
            ))}
        </div>
    </div>
  );
};

export default TeacherList;