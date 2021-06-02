<template>
  <div>
    <router-link :to="{ name: 'Create' }" class="button is-success mt-5"
      >Add New</router-link
    >

    <div>
    <article class="col-6 " v-for="item in items" :key="item.songId">
          <p>{{ item.author }}</p>
          <p>{{ item.songTitle }}</p>
          <p>{{ item.artistName }}</p>
          <p>{{ item.albumName }}</p>
          <p>{{ item.releaseDate }}</p>
          <p>{{ item.rating }}</p>
          <p>{{ item.songComment }}</p>
          <p>{{ item.remarkPositive }}</p>
          <p>{{ item.remarkNegative }}</p>
          <p class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: item.songId } }"
              class="button is-info is-small"
              >Edit</router-link
            >
            <a
              class="button is-danger is-small"
              @click="deleteProduct(item.songId)"
              >Delete</a></p>
              
      </article>
</div>
  </div>
</template>
<script>
// import axios
import axios from "axios";
 
export default {
  name: "ProductList",
  data() {
    return {
      items: [],
    };
  },
 
  created() {
    this.getProducts();
  },
 
  methods: {
    // Get All Products
    async getProducts() {
      try {
        const response = await axios.get("http://localhost:5000/products");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
 
    // Delete Product
    async deleteProduct(id) {
      try {
        await axios.delete(`http://localhost:5000/products/${id}`);
        this.getProducts();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>