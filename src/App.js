import axios from "axios";
import React, {Component} from "react";
import DisplayAllMusic from "./components/DisplayAllSongs/DisplayAllSongs";
import CreateSong from "./components/CreateSong/CreateSong";




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
    this.setState({      
      songs: response.data
    });
  }



  render() {
    return (
      <div>
      <h1>Hello World</h1>      
      <DisplayAllMusic songs={this.state.songs} />
      <CreateSong />
      </div>
    )
  }
}

export default App;
