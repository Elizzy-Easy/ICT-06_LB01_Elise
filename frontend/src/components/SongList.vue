<template>
    <div>
    <div class="row" id="submit">
    <div class="col-4">&nbsp;</div>
    <div class="col-4"><button><router-link :to="{ name: 'Create' }" class="submitButton"><span>Add a new opinion</span></router-link></button></div>
    <div class="col-4">&nbsp;</div>

      </div>
    <div>

      <div id="opinions">&nbsp;</div>
      <article class="col-6 " v-for="item in items" :key="item.songId">
          <p>{{ item.genre }}</p>
          <p class="bigtitle">{{ item.songTitle }}</p>
          <span class="artist">{{ item.artistName }}</span>
          <hr>
          <p>From the album {{ item.albumName }} | Released in {{ item.releaseDate }}</p>
          <p>{{ item.rating }} ☆</p>
          <p class="comment">"{{ item.songComment }}"</p>
          <p>+ {{ item.remarkPositive }}</p>
          <p>- {{ item.remarkNegative }}</p>
          <div class="horizontalLine">&nbsp;</div>
          <div class="largeSpace">&nbsp;</div>
          <p class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: item.songId } }"
              class="editButton"
              ><span>Edit opinion</span></router-link
            >
            <a
              class="deleteButton"
              @click="deleteSong(item.songId)"
              ><span>Delete opinion</span></a></p>
              <div class="largeSpace">&nbsp;</div>
      </article>
      <div class="clear">&nbsp;</div> 
      <div id="opinions"></div>
    </div>
  </div>
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "SongList",
  data() {
    return {
      items: [],
    };
  },
 
  created() {
    this.getSongs();
  },
 
  methods: {
    // Get All Songs
    async getSongs() {
      try {
        const response = await axios.get("http://localhost:5000/songs");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Song
    async deleteSong(id) {
      try {
        await axios.delete(`http://localhost:5000/songs/${id}`);
        this.getSongs();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>