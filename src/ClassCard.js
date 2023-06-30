import React from "react";
import { Link } from "react-router-dom"
import "./ClassCard.css";
export default class JobList extends React.Component{
    render(){
        return(
            <div className="Card">
                <Link to={`/ff/classes/${this.props.id}`} state={{name:this.props.name, age:this.props.age, job:this.props.job, game:this.props.origin, bio:this.props.bio}}>
                <p className="charaName"> Name: {this.props.name}</p>
                </Link>
                <img className="charaImage" src={this.props.img}/>
                <h2 className="charaAge"> Age: {this.props.age}</h2>
                <h3 className="charaJob"> Job: {this.props.job}</h3>
                <h4 className="charaGame"> Game: {this.props.origin}</h4>
            </div>
            
        )
    }
}