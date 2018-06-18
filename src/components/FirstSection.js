import React, { Component } from 'react';
import './FirstSection.css';
import downloadFile from './tgDownload.zip';
import Logo from './images/Logo.png';

class FirstSection extends Component {
    render(){
        return(
            <div className="container">
                <div className="py-lg-5 my-lg-5 row align-items-center">
                    <div className="testingGround col-sm-5 text-center">
                        <img className="img-fluid" src={Logo} alt="Logo of Testing"/>
                        <h1 className="mt-2 mb-3">Testing Grounds</h1>
                        <a href={downloadFile} download="Testing Grounds VR"><button className="download px-4 py-2"><h4 className="m-0">Download Now</h4></button></a>
                    </div>
                    <div className="theVideo col-sm embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/L44CEcX4Z78" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstSection;