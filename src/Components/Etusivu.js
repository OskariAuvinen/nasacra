import React, { useState, useEffect } from 'react';

export function NameField() {
    const [nimi, change] = useState();
    const handleChange = (e) =>
        change(e.target.value)
    return (
        <div>
            <h2>Tervetuloa NasaApiin</h2>
            <p>Tervetuloa
             <br></br>
                {nimi}
                <br></br>
                <input value={nimi} placeholder="Syötä nimi" onChange={handleChange} />
            </p>
        </div>
    )
}

export function Taulukko() {
    const [planetName, setPlanetName] = useState('');
    const [planets, setPlanets] = useState([{ planetName: 'Maa', planetid:0}])
    const handlePlanetNameChange = (e) => setPlanetName(e.target.value);
    const handleAdd = () => {
        setPlanets([...planets, { planetName: planetName, planetid: planets.length+1 }]);
        setPlanetName("");
        console.log(planets);
    
    } 
    return (
        <div>
            <ul>
                {planets.map((p, i) => (<li>{p.planetName}</li>))}
            </ul>
            <input value={planetName} placeholder="Syötä Planeetan nimi" onChange={handlePlanetNameChange} />
            <input type="submit" value="Lisää" onClick={handleAdd} />
        </div>
    )
}

export function FetchNasaData(){
    const [tieto, postData] = useState("");
    useEffect(() =>{
        fetch('https://api.nasa.gov/planetary/apod?api_key=zxRBp0T37f3A5yqQFS8uYwfRsSgl1Cg2DRfAla6H')
            .then(res => res.json())
            .then(data=>postData(data.hdurl))
            
    },[]);



    return (
        <div>
            <p><img src={tieto} alt="FetchNasaData"/></p>
        </div>
    )
}
