import { useState } from "react";
import Button from "./Button"

const Counter = (props) => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>{count}</p>
            <Button text="Increase" />
            <Button text="Decrease" />
        </div>
    )
};

export default Counter;
