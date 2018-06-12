import React, { Component } from 'react';
import './FirstSection.css';
import Logo from './images/Logo.png';

class FirstSection extends Component {
    render(){
        return(
            <div className="container">
                <div className="py-lg-5 my-lg-5 row align-items-center">
                    <div className="testingGround col-sm-5 text-center">
                        <img className="img-fluid" src={Logo} alt="Logo of Testing"/>
                        <h1 className="mt-2 mb-3">Testing Grounds</h1>
                        <button className="download px-4 py-2"><h4 className="m-0">Download Now</h4></button>
                    </div>
                    <div className="theVideo col-sm embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/IJNR2EpS0jw" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstSection;