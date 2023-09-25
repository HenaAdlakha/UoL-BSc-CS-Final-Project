"use client";
import React, { useEffect, useState } from 'react';
import FastAPIClient from '../client';
import config from '../config';

const client = new FastAPIClient(config);

function App() {
    const [data, setData] = useState({});
    const [message, setMessage] = useState({});
    useEffect(() => {
        fetchWelcomeMessage()
    }, [])
    useEffect(() => {
        fetchTruth()
    }, [])

    const fetchWelcomeMessage = () => {
        client.getWelcomeMessage().then((data) => {
            setMessage(data)
        })
    }
    const fetchTruth = () => {
        client.getTruth().then((data) => {
            setData(data)
        })
    }

    return (
        <div className="App">
            <h1>React App: {message.message}</h1>
            <p>Data from FastAPI: {data.ID}</p>
            <p>Best chimp in the world {data.Name}</p>
        </div>
    );
}

export default App;