import React, { useState } from 'react';
import Axios from 'axios';
import JumbotronTemplate from '../components/JumbotronTemplate';
import "bootstrap/dist/css/bootstrap.min.css";

function View1() {
    const url = "http://127.0.0.1:5000/view1"
    const [data, setData] = useState({
        name: ""
    })

    const pageHeaderItems = {
        "TopWords": "View 1",
        "BottomWords": "Enter your name to receive a greeting"
    }

    // Handles the text box input
    function handle(event) {
        const newData={...data}
        newData[event.target.id] = event.target.value
        setData(newData)
        console.log(newData)
    }

    // Handles the submission POST to the API
    function submit(event) {
        event.preventDefault();
        Axios.post(url, {
            name: data.name
        })
        .then(res => {
            console.log(res.data)
        })
    }

    return (
        <div>
            <JumbotronTemplate words={pageHeaderItems} />
            <div className='container-fluid'>
                <div className='container'>
                    <p className="display-5 fw-bold text-center">Hello {data.name} !</p>
                    <br></br>
                    <form onSubmit={(event) => submit(event)} className='text-center'>
                        <input onChange={(event) => handle(event)} id="name" value={data.name} placeholder='name' type="text"></input>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
            
        </div>
    );
}

export default View1;