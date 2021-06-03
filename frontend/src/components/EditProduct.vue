<template>
  <div>

    <div class="field">
      <label class="label">Your Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="How do you want to be called?"
          v-model="author"
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

    <div class="field">
      <label class="label">Comment</label>
      <div class="control">
        <input
          class="input"
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


    <div class="control">
      <button class="button is-success" @click="updateSong">Update my opinion</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "EditSong",
  data() {
    return {
      author: "",
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
  created: function () {
    this.getSongById();
  },
  methods: {
    // Get Song By Id
    async getSongById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/songs/${this.$route.params.id}`
        );
        this.author = response.data.author;
        this.songTitle = response.data.songTitle;
        this.artistName = response.data.artistName;
        this.albumName = response.data.albumName;
        this.releaseDate = response.data.releaseDate;
        this.songTitle = response.data.songTitle;
        this.rating = response.data.rating;
        this.songComment = response.data.songComment;
        this.remarkPositive = response.data.remarkPositive;
        this.remarkNegative = response.data.remarkNegative;


      } catch (err) {
        console.log(err);
      }
    },
 
    // Update Song
    async updateSong() {
      try {
        await axios.put(
          `http://localhost:5000/songs/${this.$route.params.id}`,
          {
            author: this.author,
            songTitle: this.songTitle,
            artistName: this.artistName,
            albumName: this.albumName,
            releaseDate: this.releaseDate,
            rating: this.rating,
            songComment: this.songComment,
            remarkPositive: this.remarkPositive,
            remarkNegative: this.remarkNegative,
          }
        );
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
