import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useSearchParams } from "react-router-dom";


export default function JobList (){
    const [character, setCharacter] = useState({})
    const [img, setImg] = useState("")
    const location=useLocation()

    async function getData(){
        let BASE_URL="https://www.moogleapi.com/api/v1/characters/search?name="
        BASE_URL = BASE_URL+(location.pathname.slice(15))
        console.log()
        const response = await fetch(BASE_URL);
        const character = await response.json();
        console.log(response)
        console.log(character)

        setCharacter(character[0])
        setImg(character[0].pictures[0].url)
    }

    useEffect(()=> {
        getData()
    },[]);
        return(
            <div className="Card">
                <p className="charaName"> Name: {character.name}</p>
                <img className="charaImage" src={img}/>
                <h2 className="charaAge"> Age: {character.age}</h2>
                <h3 className="charaJob"> Job: {character.job}</h3>
                <h4 className="charaGame"> Game: {character.origin}</h4>
                <p className="charaBio">Bio: {character.description}</p>
            </div>

        )
}
