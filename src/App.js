import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
    const [ numValue, setNumValue ] = useState(0);
    const [ functionName, setFunctionName ] = useState('isPrime')
    const [ constraintSatistfied, setConstraintSatistfied ] = useState("ji");
    const computeConstraint = () => {
        console.log("Compute constraint running with num of: ", numValue);
        if (functionName === "isPrime") {
            console.log("prime called");
            setConstraintSatistfied(isPrime(numValue).toString());
        } else {
            setConstraintSatistfied(isFibonacci(numValue).toString());
        }
    };
    useEffect(() => {
        computeConstraint()
    
      
    }, [numValue, functionName])
    

    const isPrime = (num) => {
        console.log("isPrime called with: ", num)
        for (let i = 2, s = Math.sqrt(num); i <= s; i++)
            if (num % i === 0) return false;
        return num > 1;
    }
    const isFibonacci = (query, count = 1, last = 0) => {
        if (count < query) {
            return isFibonacci(query, count + last, count);
        }
        if (count === query) {
            return true;
        }
        return false;
    };
    
    const handleOnNumChange = (e) => {
        e.preventDefault();
        if(!e.target.checkValidity()){
            console.log("Invalid")
            return;
        }
        setNumValue(Math.floor(e.target.value))
        console.log("Num change running with: ", numValue)
        //computeConstraint()
        
    }
    const handleOnFuncNameChange = (e) => {
        e.preventDefault()
        if(!e.target.checkValidity()){
            return;
        }
        setFunctionName(e.target.value);
        //computeConstraint();
    }
    return (
        <div className="App">
            <div className="Column1">
                <form>
                    <label for="number">Input A Number Here</label>
                    <input
                        type="number"
                        name="number"
                        id="number"
                        onChange={handleOnNumChange}
                    />
                </form>
            </div>
            <div className="Column2">
                <form>
                    <select
                        id="calculationType"
                        name="calculationType"
                        defaultValue="isPrime"
                        onChange={handleOnFuncNameChange}
                    >
                        <option value="isPrime">isPrime</option>
                        <option value="isFibonacci">isFibonacci</option>
                    </select>
                </form>
            </div>
            <div className="Column3">
                <p>{constraintSatistfied}</p>
            </div>
        </div>
    );
}

export default App;
