import React from "react";

import "./TableFilter.css"

const TableFilter = (props) => {
    return ( 
        props.songs.filter(function(song){
            return(
            <table className= "table">
                <div key={song.id}>
                <tr>                
                <th className="th"> {song.title} </th>
                <th className="th"> {song.artist} </th>
                <th className="th"> {song.album} </th>
                <th className="th"> {song.release_date} </th>
                <th className="th"> {song.likes}  </th>
                <th> <button onClick={() => props.deleteSong(song.id)} >Delete Song</button> </th>
                </tr>
                </div>
            </table>
            )
        })
     );
}
 
export default TableFilter;