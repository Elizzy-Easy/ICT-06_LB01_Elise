// Import function from Song Model (OK-ALL)
import { getSongs, getSongById, insertSong, updateSongById, deleteSongById } from "../models/songModel.js";
 
// Get All Songs
export const showSongs = (req, res) => {
    getSongs((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Song 
export const showSongById = (req, res) => {
    getSongById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Song
export const createSong = (req, res) => {
    const data = req.body;
    insertSong(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Song
export const updateSong = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateSongById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Song
export const deleteSong = (req, res) => {
    const id = req.params.id;
    deleteSongById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
