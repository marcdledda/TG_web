import React, { Component } from 'react';
import './FirstSection.css';
import Logo from './images/Logo.png';

class FirstSection extends Component {
    render(){
        return(
            <div className="py-lg-5 mx-auto my-lg-5 row align-items-center">
                <div className="testingGround col-sm-5 text-center">
                    <img className="img-fluid" src={Logo} alt="Logo of Testing"/>
                    <h1 className="mt-2 mb-3">Testing Grounds</h1>
                    <button className="download px-4 py-2"><h4 className="m-0">Download Now</h4></button>
                </div>
                <div className="col-sm embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/IJNR2EpS0jw" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
        );
    }
}

export default FirstSection;