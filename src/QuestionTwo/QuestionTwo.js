import React, { useEffect, useState } from 'react';
const QuestionTwo = (props) => {
    const [ data, setData ] = useState([])
    const [ userInput, setUserInput ] = useState("");
    useEffect(() => {
        const url = "https://api.publicapis.org/categories";
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json.categories);
                
                console.log(json);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchData();
    }, []);

    const info = data
        .filter((category) =>
            category.toLowerCase().startsWith(userInput.toLowerCase())
        )
        .map((category, index) => (
            <div key={index}>{category}</div>
        ));
    const handleInputChange = (e) => {
        e.preventDefault();
        setUserInput(e.target.value);
    }
    
    return (
        <div>
            <input
                type="text"
                id="filter"
                name="filter"
                onChange={handleInputChange}
            />
            {info}
        </div>
    );
};
export default QuestionTwo;