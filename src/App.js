import axios from "axios";
import React, {Component} from "react";
import DisplayAllMusic from "./components/DisplayAllSongs/DisplayAllSongs";
import CreateSong from "./components/CreateSong/CreateSong";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";




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

  DeleteSong = async(id) => {
    
    await axios.delete('http://127.0.0.1:8000/music/'+id+'/')
    
  }


  // filterSOngs = (searchTerm) => {
  //   let filteredSongs = this.state.songs.filter(function(song){
  //     if(song.title.includes(searchTerm)){
  //       return true
  //     } 
  //     else {
  //       return false;
  //       }
  //     })
  //   }
  



  render() {
    return (
      <div>
      <Header />
      <SearchBar />   
      <body >    
      <DisplayAllMusic songs={this.state.songs} deleteSong= {this.DeleteSong} />
      <CreateSong  getAllSongs={this.getAllSongs} />
      </body>
      </div>
    )
  }
}

export default App;
