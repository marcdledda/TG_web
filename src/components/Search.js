import React, { Component } from 'react';

class Search extends Component {

    search = () => {
        this.props.search(document.getElementById("search").value);
    }

    render(){
        return(
            <div className="col align-self-center d-flex justify-content-end">
                <input type="text" id="search" placeholder="Search by Subject Name" className="mb-1" onKeyUp={this.search}/>
            </div>
        );
    }
}

export default Search;