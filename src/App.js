import axios from "axios";
import React, {Component} from "react";
import DisplayAllMusic from "./components/DisplayAllSongs/DisplayAllSongs";




class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      songs:[]
    };

  }

  componentDidMount(){
    this.getAllSongs();
  }

  getAllSongs = async () => {
    let response = await axios.get('http://127.0.0.1:8000/music/')
    console.log('hello')
    this.setState({
      
      songs: response.data
    });
    
  }


  render() {
    return (
      <div>
      <h1>Hello World</h1>      
      <DisplayAllMusic songs={this.state.songs} />
      </div>
    )
  }
}

export default App;
