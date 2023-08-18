import React from "react";
import axios from "axios";
import CharaCard from "./CharaCard";
import "./CharaList.css"
const BASE_URL="https://www.moogleapi.com/api/v1/characters/search?job=thief"

export default class JobList extends React.Component{
    state={
        jobs:[]
    }
    componentDidMount(){
        axios.get(BASE_URL).then((res) =>{
            const jobs=res.data;
            this.setState({jobs})
        });
    }
    render(){
        return(
            <>
                <ul className="CharaList">
                    {this.state.jobs.map((job)=>(
                    <CharaCard key={job.id} id={job.id} name={job.name}
                        age={job.age} img={job.pictures[0].url} job={job.job} origin={job.origin} bio={job.description}/>
                    ))}
                </ul>
            </>
        )
    }
}
