import React, { useState, useEffect } from 'react';


export function GetTitle(){
    const [tieto, postData] = useState("");
    useEffect(() =>{
        fetch('https://api.nasa.gov/planetary/apod?api_key=zxRBp0T37f3A5yqQFS8uYwfRsSgl1Cg2DRfAla6H')
            .then(res => res.json())
            .then(data=>postData(data.title))
            
    },[]);



    return (
        <h1>
            {tieto}
     </h1>
    )
}