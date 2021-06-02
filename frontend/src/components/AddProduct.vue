<template>
<!--START : Felder-->
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
          type="int"
          placeholder="Good, bad, average..."
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
<!--END : Felder-->

    <div class="control">
      <button class="button is-success" @click="saveProduct">Submit</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  name: "AddProduct",
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
  methods: {
    // Create New product
    async saveProduct() {
      try {
        await axios.post("http://localhost:5000/products", {
          author: this.author,
          songTitle: this.songTitle,
          artistName: this.artistName,
          albumName: this.albumName,
          releaseDate: this.releaseDate,
          rating: this.rating,
          songComment: this.songComment,
          remarkPositive: this.remarkPositive,
          remarkNegative: this.remarkNegative,
        });
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