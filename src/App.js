import './App.css';
import Card from './components/Card';
import { datas } from './utils/datas';
import avatar from './images/image-jeremy.png';
import { useState } from 'react';

function App() {

    const [timeframe, setTimeframe] = useState("daily")

    return (
        <div className="App">
            <div className="dashboard">
                <div className="info-card">
                    <div className="person-info">
                        <img src={avatar} alt="avatar" />
                        <p>
                            Report for <br />
                            <span id="name">Jeremy Robson</span>
                        </p>
                    </div>
                    <div className="button-container">
                        <button onClick={() => setTimeframe("daily")}>Daily</button>
                        <button onClick={() => setTimeframe("weekly")}>Weekly</button>
                        <button onClick={() => setTimeframe("monthly")}>Monthly</button>
                    </div>
                </div>
                <div className="card-container">
                    {datas.map((data, index) => {
                        return <Card key={index} data={data} timeframe={timeframe} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
