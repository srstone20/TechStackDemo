import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import JumbotronTemplate from '../components/JumbotronTemplate';

function Home() {
    const [data, setData] = useState([{}]);

    const pageHeaderItems = {
        "TopWords": "SAIO",
        "BottomWords": "Our Student All-In-One Project"
    }

    useEffect(() => {
        fetch("/home").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
            }
        )
    }, [])

    return (
        <div>
            <JumbotronTemplate words={pageHeaderItems} />
            <div className='container-fluid'>
                <div className='container'>
                    <p className="display-6 fw-bold text-center">{data.Greeting}</p>
                    <p className="display-6 fw-bold text-center">{data.Message}</p>
                </div>
            </div> 
        </div>
    )
}

export default Home;