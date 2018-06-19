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
        fetch(`http://localhost/testinggrounds/GetScore.php`)
        .then(resp => resp.json())
        .then(function(myJson){
            component.setState({
                data: myJson,
                dataLoad: true
            })
        })
    }

    render(){
        console.log("DA STATE", this.state.data);
        const dataForm = this.state.data.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.Name}</td>
                    <td>{item.DexTest}/15</td>
                    <td>{item.RefTest}/15</td>
                    <td>{item.CompTest}</td>
                </tr>
            )
        })


        if (this.state.dataLoad){
            return(
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                                <div className="row justify-content-center">
                                    <div className="col-7 text-right">                                  
                                        <h2 className="mb-1">Scores</h2>
                                    </div>
                                    <div className="col align-self-center d-flex justify-content-end">
                                        <input type="text" placeholder="Search by Subject Name" className="mb-1"/>
                                    </div>
                                </div>
                                <table className="table table-striped text-center">
                                    <thead>
                                        <tr>
                                        <th scope="col">Subject Name</th>
                                        <th scope="col">Dexterity Test</th>
                                        <th scope="col">Reflex Test</th>
                                        <th scope="col">Composite Grade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataForm}
                                    </tbody>
                                </table>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="container">
                    <div className="col text-center">
                        <h2>Scores data was not found.</h2>
                    </div>
                </div>
            )
        }
    }
}

export default Scores;