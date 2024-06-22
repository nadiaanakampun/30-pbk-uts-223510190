<template>
    <div>
      <h1>Album Foto</h1>
      <div>
        <label for="user-select">Select User:</label>
        <select id="user-select" v-model="selectedUser" @change="fetchAlbums">
          <option v-for="user in users" :key="user.id" :value="user.id">
            {{ user.name }}
          </option>
        </select>
      </div>
      <ul>
        <li v-for="album in albums" :key="album.id">
          <h3><router-link :to="`/albums/${album.id}`">{{ album.title }}</router-link></h3>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [],
        albums: [],
        selectedUser: null,
      };
    },
    created() {
      this.fetchUsers();
    },
    methods: {
      async fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        this.users = await response.json();
      },
      async fetchAlbums() {
        if (this.selectedUser) {
          const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${this.selectedUser}`);
          this.albums = await response.json();
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles as before */
  </style>
  