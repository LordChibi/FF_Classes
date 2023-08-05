import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useSearchParams } from "react-router-dom";

let BASE_URL="https://www.moogleapi.com/api/v1/characters/search?name="
export default function JobList (){
    const [character, setCharacter] = useState({})
    const [img, setImg] = useState("")
    const location=useLocation()
    useEffect(()=>{
        BASE_URL=BASE_URL+(location.pathname.slice(15))

        axios.get(BASE_URL).then((res) =>{
            const character=res.data;
            
            setCharacter(character[0])
            setImg(character[0].pictures[0].url)
        })
       
    },[location]);
    
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
