<template>
    <div>
      <h1>Album Detail</h1>
      <ul>
        <li v-for="photo in photos" :key="photo.id">
          <img :src="photo.thumbnailUrl" @click="viewFullPhoto(photo.url)" />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        photos: [],
      };
    },
    created() {
      this.fetchPhotos();
    },
    methods: {
      async fetchPhotos() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${this.id}/photos`);
        this.photos = await response.json();
      },
      viewFullPhoto(url) {
        this.$router.push({ path: `/photos/${this.id}`, query: { url } });
      }
    }
  };
  </script>
  
  <style scoped>
  img {
    max-width: 150px;
    border-radius: 4px;
    margin: 5px;
    cursor: pointer;
  }
  </style>
  