import React from 'react';
import './App.css';
import Github from './components/Github';
import axios from 'axios'




class App extends React.Component {
state = {
  
}
  
  componentDidMount() {
    axios.get('https://api.github.com/users/srattacasa').then(response => this.setState(response.data))
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Github Card</h1>
      {console.log(this.state)}
      <Github data={this.state.login} followers={this.state.followers}/>
      </header>
    </div>
  );
  }
}

export default App;
