import React from 'react';

function Card({ data }) {
    return (
        <div className="card" style={{backgroundColor: `${data.bgColor}`}}>
            <img src={data.icon} alt="icon" />
            <div className="data">
                <p className="title">{data.title}</p>
                <div className="timeframes">
                    <p className="current">
                        {data.timeframes.weekly.current} hrs
                    </p>
                    <p className="previous">
                        Last week - {data.timeframes.weekly.previous} hrs
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;
