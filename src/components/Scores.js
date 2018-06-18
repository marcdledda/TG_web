import React, { Component } from 'react';

class Scores extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            dataLoad: false
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        let component = this;
        fetch(`http://localhost/unitytest/ScoreData.php?`)
        .then(resp => resp.json())
        .then(function(myJson){
            console.log(myJson);
            let finishedArray = [];
            for (let i = 0; i < myJson.length; i++){
                let scoreINT = parseInt(myJson[i][2]);
                let object = {
                    Name: myJson[i][1],
                    Score: scoreINT
                }
                finishedArray.push(object);
            }
            component.setState({
                data: finishedArray,
                dataLoad: true
            })
        })
    }

    render(){
        console.log("DA STATE", this.state.data);
        const dataForm = this.state.data.map((item, index) => {
            return(
                <div key={index}>
                    <h2>Subject's Scores:</h2>
                    <h3>{item.Name}: {item.Score}</h3>
                </div>
            )
        })
        if (!this.state.dataLoad){
            return(
                <div>
                    Data is Loading
                </div>
            )
        } else if (this.state.dataLoad){
            return(
                <div>
                    LOAD
                    <div>
                        {dataForm}
                    </div>
                </div>
            )
        }
    }
}

export default Scores;