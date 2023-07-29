import React from "react";
import { Link } from "react-router-dom"
import "./CharaCard.css";

export default class JobList extends React.Component{
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return(
            <div className="Card">
                <Link to={`/ff/characters/${this.props.name}`}>
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