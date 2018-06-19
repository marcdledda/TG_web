import React, { Component } from 'react';
import Search from './Search';

class Scores extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            dataLoad: false,
            searchState: false,
            searchInput: ""
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

    searching = (input) => {
        if (input == ""){
            this.setState({
                searchState: false,
                searchInput: ""
            })
        } else {
            this.setState({
                searchState: true,
                searchInput: input
            })
        }
    }

    render(){
        const dataForm = this.state.data.map((item, index) => {
            if (this.state.searchState){
                let lowerName = item.Name.toLowerCase();
                let lowerSearch = this.state.searchInput.toLowerCase();
                if(lowerName.includes(lowerSearch)){
                    return (
                        <tr key={index}>
                            <td>{item.Name}</td>
                            <td>{item.DexTest}/15</td>
                            <td>{item.RefTest}/15</td>
                            <td>{item.CompTest}</td>
                        </tr>
                    )
                }
            } else {
                return (
                    <tr key={index}>
                        <td>{item.Name}</td>
                        <td>{item.DexTest}/15</td>
                        <td>{item.RefTest}/15</td>
                        <td>{item.CompTest}</td>
                    </tr>
                )
            }
        })


        if (this.state.dataLoad){
            return(
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                                <div className="col justify-content-center">
                                    <div className="col text-lg-center">                                  
                                        <h2 className="mb-1">Scores</h2>
                                    </div>
                                    {/* <div className="col align-self-center d-flex justify-content-end">
                                        <input type="text" placeholder="Search by Subject Name" className="mb-1"/>
                                    </div> */}
                                    <Search search={this.searching}/>
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