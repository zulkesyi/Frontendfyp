import React from 'react'

const courses = [
    {
        title: 'Web Development',
    },
    {
        title: 'Theory of Computation',
    },
    {
        title: 'Software Evo',
    },
];

const Card = () => {
  return (
    <div className="card--container">
        {courses.map((item) =>(
            <div className="card">
                <div className="card--cover">{item.icon}</div>
                <div className="card--title">
                <h2>{item.title}</h2>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Card;