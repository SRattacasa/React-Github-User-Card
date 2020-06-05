import React from "react";
// import axios from 'axios';

class Github extends React.Component { 
    constructor() {
        super();
        this.state = {
           

        }
      }

    // componentDidMount(){axios.get('https://api.github.com/users/srattacasa').then(response => this.setState(response)
    
    // )}


    render() {
        return (
        <div className="card">
            <p>Github Username: {this.props.data}</p>
            <p>Github Followers {this.props.followers}</p>
            
        </div>
        )    
}
    
}


export default Github