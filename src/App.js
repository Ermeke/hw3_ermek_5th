import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import "./index.css"

function App() {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const inc = () => {
        dispatch({type: "INCREMENT"})
    }
    const dec = () => {
        dispatch({type: "DECREMENT"})
    }
    return (
        <h1 className="App">
            <button onClick={inc}>increment by 1</button>
            <button onClick={dec}>decrement by 1</button>
            <p>{counter}</p>
        </h1>

    )
}


export default App;