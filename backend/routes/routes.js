// import express
import express from "express";

// import function from controller (OK)
import { showSongs, showSongById, createSong, updateSong, deleteSong } from "../controllers/song.js";

// init express router
const router = express.Router();

// Get All Song
router.get('/songs', showSongs);

// Get Single Song
router.get('/songs/:id', showSongById);

// Create New Song
router.post('/songs', createSong);

// Update Song
router.put('/songs/:id', updateSong);

// Delete Song
router.delete('/songs/:id', deleteSong);

// export default router
export default router;