import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/ShoppingCartContext";

const ComponentA = () => {
    const { counter, increment } = useContext
    (CounterContext);
    return(
        <div>
            <p>{counter}</p>
            <button onClick={() => increment()}>Sumar</button>
        </div>

    );
};

export default ComponentA