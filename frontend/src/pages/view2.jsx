import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import UserTable from "../components/UserTable.js";
import JumbotronTemplate from '../components/JumbotronTemplate';

function View2() {
    const [data, setData] = useState([]);

    const pageHeaderItems = {
        "TopWords": "View 2",
        "BottomWords": "These are the users that have been entered"
    }

    useEffect(() => {
        fetch("/view2").then(
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
                    <UserTable names={data} />
                </div>
            </div>
        </div>
    )
}

export default View2;