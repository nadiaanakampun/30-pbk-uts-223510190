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
        <h3>{{ album.title }}</h3>
        <ul>
          <li v-for="photo in album.photos" :key="photo.id">
            <img :src="photo.thumbnailUrl" :alt="photo.title" />
          </li>
        </ul>
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
        const albums = await response.json();
        const promises = albums.map(async (album) => {
          const photosResponse = await fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos`);
          album.photos = await photosResponse.json();
          return album;
        });
        this.albums = await Promise.all(promises);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

select {
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

h3 {
  margin: 0 0 10px;
}

img {
  max-width: 150px;
  border-radius: 4px;
  margin: 5px;
}
</style>
