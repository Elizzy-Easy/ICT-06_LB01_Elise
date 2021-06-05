// import connection
import db from "../config/database.js";
 
// Get All Songs
export const getSongs = (result) => {
    db.query("SELECT * FROM song", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Song
export const getSongById = (id, result) => {
    db.query("SELECT * FROM song WHERE songId = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Song to Database
export const insertSong = (data, result) => {
    db.query("INSERT INTO song SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Song to Database
export const updateSongById = (data, id, result) => {
    db.query("UPDATE song SET genre = ?, songTitle = ?, artistName = ?, albumName = ?, releaseDate = ?, rating = ?, songComment = ?, remarkPositive = ?, remarkNegative = ? WHERE songId = ?", [data.genre, data.songTitle, data.artistName, data.albumName, data.releaseDate, data.rating, data.songComment, data.remarkPositive, data.remarkNegative, id,], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Song to Database
export const deleteSongById = (id, result) => {
    db.query("DELETE FROM song WHERE songId = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
