
import React, { Component } from "react";
import axios from "axios";
import './CreateSong.css'



class CreateSong extends Component{
    state= {
        title:"",
        artist:"",
        album:"",
        release_date:"",
        likes:""
    }

    handleChange = (event) => {
        
        console.log("hello")
        this.setState({
          [event.target.name]: event.target.name,
        })
    }

    handleSubmit = async(event) => {
        event.preventDefault();        
        
        let newSong = this.state
        await axios.post("http://127.0.0.1:8000/music/", newSong)
        
        
        
    }

    render() {
        return(            
            <form  onSubmit={() => this.handleSubmit()}  method="post">
                
                <label>Title:</label>
                <div className=''>
                    <input  type="text" name="title" onChange={this.handleChange} ></input>
                    <label>Artist Name:</label>
                    <input type="text" name="artist" onChange={this.handleChange} ></input>
                    <label>Album Name:</label>
                    <input type="text" name="album" onChange={this.handleChange} ></input>
                    <label>Release Date:</label>
                    <input type="text" name="release_date" onChange={this.handleChange} ></input>
                    <label>Likes:</label>
                    <input type="text" name="likes" onChange={this.handleChange} value='0' ></input>
                    <button type="submit">Add Song</button>
                </div>
                          
            </form>
        )
    }     
}



export default CreateSong;