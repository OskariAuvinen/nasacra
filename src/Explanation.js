import React, { useState, useEffect } from 'react';


export function GetExplanation(){
    const [tieto, postData] = useState("");
    useEffect(() =>{
        fetch('https://api.nasa.gov/planetary/apod?api_key=zxRBp0T37f3A5yqQFS8uYwfRsSgl1Cg2DRfAla6H')
            .then(res => res.json())
            .then(data=>postData(data.explanation))
            
    },[]);



    return (
        <div>
            {tieto}
        </div>
    )
}