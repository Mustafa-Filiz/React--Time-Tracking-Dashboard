import React from 'react'
import work from "../images/icon-work.svg"

function Card() {
	return (
		<div className="card">
			<img src={work} alt="icon" />
			<div className="data">
				<p className="title">Work</p>
				<div className="timeframes">
					<p className="current">32 hrs</p>
					<p className="previous">Last week - 36 hrs</p>
				</div>
			</div>
		</div>
	)
}

export default Card
