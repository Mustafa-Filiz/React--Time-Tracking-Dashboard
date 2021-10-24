import React from 'react';
import avatar from '../images/image-jeremy.png';

function InfoCard() {
    return (
        <div className="info-card">
            <div className="person-info">
                <img src={avatar} alt="avatar" />
                <p>
                    Report for <br />
                    <span id="name">Jeremy Robson</span>
                </p>
            </div>
            <div className="button-container">
                <button>Daily</button>
                <button>Weekly</button>
                <button>Monthly</button>
            </div>
        </div>
    );
}

export default InfoCard;
