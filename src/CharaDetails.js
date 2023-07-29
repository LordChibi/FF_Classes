import React from "react";
import axios from "axios";

const BASE_URL="https://www.moogleapi.com/api/v1/characters/search?name=lightning"
export default class JobList extends React.Component{
    state={
        character:{},
        img:""
    }
    componentDidMount(){
        axios.get(BASE_URL).then((res) =>{
            const character=res.data;
            console.log(character[0].pictures[0].url)
            this.setState({character: character[0], img: character[0].pictures[0].url})
        });
    }
    render(){
        
        return(
            <div className="Card">
                <p className="charaName"> Name: {this.state.character.name}</p>
                <img className="charaImage" src={this.state.img}/>
                <h2 className="charaAge"> Age: {this.state.character.age}</h2>
                <h3 className="charaJob"> Job: {this.state.character.job}</h3>
                <h4 className="charaGame"> Game: {this.state.character.origin}</h4>
                <p className="charaBio">Bio: {this.state.character.description}</p>
            </div>
            
        )
    }
}