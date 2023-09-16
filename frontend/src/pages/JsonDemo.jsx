import React, { useState, useEffect } from 'react'

function JsonDemo() {
    const [data, setData] = useState([{}]);

    useEffect(() => {
        fetch("/jsondemo").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
            }
        )
    }, [])

    return (
        <div>
            <h1>Flask JSON Demo</h1>
            <p>{data.Greeting}</p>
            <p>{data.Message}</p>
            <p>{data.Detail}</p>
        </div>
    )
}

export default JsonDemo;