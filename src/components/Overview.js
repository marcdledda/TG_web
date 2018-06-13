import React, { Component } from 'react';
import './Overview.css';

class Overview extends Component {
    render(){
        return(
            <div className="py-lg-5 mx-auto my-lg-5 justify-content-center row overview">
                <div className="col-12 text-center">
                    <h2>Overview</h2>
                    <h4>Welcome to the Testing Grounds, Subject 24. Here you will be tested on two things: </h4>
                </div>

                <div className="col-sm-4 my-4 mx-lg-4 text-center dexTest">
                    <h2>Dexterity Test</h2>
                    <h4>Dodge incoming spheres</h4>
                </div>

                <div className="col-sm-4 mt-lg-4 mb-4 mx-lg-4 text-center refTest">
                    <h2>Reflex Test</h2>
                    <h4>Shoot the dummies</h4>
                </div>

                <div className="col-12 text-center">
                    <h4>Failure to perform adequately will result in punishment. Thank you for participating!</h4>
                </div>
            </div>
        );
    }
}

export default Overview;