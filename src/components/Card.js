import React from 'react';

function Card({ data, timeframe }) {

	let prevTime = "day";
	switch (timeframe) {
		case "daily":
			prevTime = "day"
			break;
		case "weekly":
			prevTime = "week"
			break;
		case "monthly":
			prevTime = "month"
			break;
		default:
			break;
	}

    return (
        <div className="card" style={{backgroundColor: `${data.bgColor}`}}>
            <img src={data.icon} alt="icon" />
            <div className="data">
                <p className="title">{data.title}</p>
                <div className="timeframes">
                    <p className="current">
                        {data.timeframes[`${timeframe}`].current} hrs
                    </p>
                    <p className="previous">
                        Last {prevTime} - {data.timeframes[`${timeframe}`].previous} hrs
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;
