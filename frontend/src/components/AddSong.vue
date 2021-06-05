<template> 
  <!--START : Felder-->
  <div class="rowDark">
    <div class="col-6">

      <div class="field">
        <label class="label">Genre</label>
        <div class="control">
          <input
          class="input"
          type="text"
          placeholder="Pop, Metal, Electronica..."
          v-model="genre"
        />
        </div>
      </div>

      <div class="field">
        <label class="label">Song Title</label>
        <div class="control">
          <input
          class="input"
          type="text"
          placeholder="Song Title"
          v-model="songTitle"
        />
        </div>
      </div>

      <div class="field">
        <label class="label">Artist Name</label>
        <div class="control">
          <input
          class="input"
          type="text"
          placeholder="Artist"
          v-model="artistName"
        />
        </div>
      </div>
      
      <div class="field">
        <label class="label">Album Name</label>
        <div class="control">
          <input
          class="input"
          type="text"
          placeholder="From the album..."
          v-model="albumName"
        />
        </div>
      </div>
      <div class="field">
        <label class="label">Release Date</label>
        <div class="control">
          <input
          class="input"
          type="Date"
          placeholder="Released in..."
          v-model="releaseDate"
        />
        </div>
      </div>
    </div>

    <div class="col-6">
      <div class="field">
        <label class="label">Rating</label>
        <div class="control">
          <input
          class="input"
          type="number" name="num" min="1" max="10"
          placeholder="Enter a number between 1 and 10."
          v-model="rating"
        />
        </div>
      </div>

      <div class="fieldcomment">
        <label class="label">Comment</label>
        <div class="control">
        <textarea rows="45" cols="45"
          class="commentfield"
          type="text"
          placeholder="Tell us your thoughts"
          v-model="songComment"
        />
        </div>
      </div>

      <div class="field">
        <label class="label">Positive remark</label>
        <div class="control">
          <input
          class="input"
          type="text"
          placeholder="What do you like?"
          v-model="remarkPositive"
        />
        </div>
      </div>

      <div class="field">
        <label class="label">Negative remark</label>
        <div class="control">
          <input
          class="input"
          type="text"
          placeholder="What do you dislike?"
          v-model="remarkNegative"
        />
        </div>
      </div>

      <div class="clear">&nbsp;</div>
      <div style="float:right;">
      <div class="control">
        <button class="submitButton" @click="saveSong"><span>Submit</span></button>
      </div>
      </div>

      <div style="float:left;">
      <div class="control">
        <button class="deleteButton"><a href="/"><span>Cancel</span></a></button>
      </div>
      </div>
      <div class="clear">&nbsp;</div>
      
    </div>
    <!--END : Felder--> 
    
  </div>
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddSong",
  data() {
    return {
    genre: "",
    songTitle: "",
    artistName: "",
    albumName: "",
    releaseDate: "",
    rating: "",
    songComment: "",
    remarkPositive: "",
    remarkNegative: "",
    };
  },
  methods: {
    // Create New song
    async saveSong() {
      try {
        await axios.post("http://localhost:5000/songs", {
        genre: this.genre,
        songTitle: this.songTitle,
        artistName: this.artistName,
        albumName: this.albumName,
        releaseDate: this.releaseDate,
        rating: this.rating,
        songComment: this.songComment,
        remarkPositive: this.remarkPositive,
        remarkNegative: this.remarkNegative,
        });
        this.genre = "";
        this.songTitle = "";
        this.artistName = "";
        this.albumName = "";
        this.releaseDate = "";
        this.rating = "";
        this.songComment = "";
        this.remarkPositive = "";
        this.remarkNegative = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style>
</style>