import CharaCard from "./CharaCard";
import "./CharaList.css"
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export default function JobList (){
    const [jobs, setJobs] = useState([])
    const location = useLocation()

    async function getData(){
        let BASE_URL="https://www.moogleapi.com/api/v1/characters/search?job="
        if (location.pathname == '/'){
            BASE_URL=BASE_URL+'thief'
        }
        else{
            BASE_URL = BASE_URL+(location.pathname.slice(7))
        }
        const response = await fetch(BASE_URL);
        const data = await response.json();
        console.log(response)
        console.log(data)
        setJobs(data)
    }

    useEffect(()=> {
        getData()
    },[]);

    return(
        <>
            <ul className="CharaList">
                {jobs.map((job)=>(
                <CharaCard key={job.id} id={job.id} name={job.name}
                    age={job.age} img={job.pictures[0].url} job={job.job} origin={job.origin} bio={job.description}/>
                ))}
            </ul>
        </>
    )
}
