import React from "react";
import axios from "axios";

const DeleteSong = (event) => {
    axios.delete('http://127.0.0.1:8000/music/')
}