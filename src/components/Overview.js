import React, { Component } from 'react';
import './Overview.css';

class Overview extends Component {
    render(){
        return(
            <div className="py-lg-5 mx-auto my-lg-5 justify-content-center row overview">
                <div className="col-12 text-center">
                    <h2>Overview</h2>
                    <h4>Welcome to the Testing Grounds, Subject 24. Here you will be tested on two things: Your dexterity and reflex.</h4>
                </div>

                <div className="col-sm-4 mt-3 text-center">
                    <h2>Dexterity Test</h2>
                </div>

                <div className="col-sm-4 mt-3 text-center">
                    <h2>Reflex Test</h2>
                </div>
            </div>
        );
    }
}

export default Overview;