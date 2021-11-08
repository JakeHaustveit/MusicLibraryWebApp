
import React, { Component } from "react";
import axios from "axios";
import './CreateSong.css'



class CreateSong extends Component{ 
    constructor(props){
        super(props);

        this.state= {
            title:"",
            artist:"",
            album:"",
            release_date:"",
            likes:""
        }
    }

    handleChange = (event) => {
        
        console.log("hello")
        this.setState({
          [event.target.name]: event.target.value,
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();        
        
        let newSong = this.state
        await axios.post("http://127.0.0.1:8000/music/", newSong)
        console.log("song has been created")
        this.props.getAllSongs()
        
        
        
    }

    render() {
        return(            
            <form  onSubmit={(event) => this.handleSubmit(event)}  method="post">
                
                <label>Title:</label>
                <div className=''>
                    <input  type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                    <label>Artist Name:</label>
                    <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist} />
                    <label>Album Name:</label>
                    <input type="text" name="album" onChange={this.handleChange} value={this.state.album} />
                    <label>Release Date:</label>
                    <input type="date" name="release_date" onChange={this.handleChange} value={this.state.release_date} />
                    <label>Likes:</label>
                    <input type="text" name="likes" onChange={this.handleChange} value={this.state.likes} />
                    <button type="submit">Add Song</button>
                </div>
                          
            </form>
        )
    }     
}



export default CreateSong;