import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const JumbotronTemplate = (props) => {
    const data = props.words;

    return (
        <div className="container-fluid bg-light text-dark p-5">
            <div className="container bg-light p-5">
                <h1 className="display-4 fw-bold">{data.TopWords}</h1>
                <hr />
                <p>{data.BottomWords}</p>
            </div>
        </div>
    );
}

export default JumbotronTemplate;