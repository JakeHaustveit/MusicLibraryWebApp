import React from "react";

const DisplayAllMusic = (props) => {
    return ( 
        props.songs.map(function(song){
            return(
            <table className= "table">
                <tr>
                <th className="th"> {song.id} </th>
                <th className="th"> {song.title} </th>
                <th className="th"> {song.artist} </th>
                <th className="th"> {song.album} </th>
                <th className="th"> {song.release_date} </th>
                <th className="th"> {song.likes} </th>
                </tr>
            </table>
            )
        })
     );
}
 
export default DisplayAllMusic;