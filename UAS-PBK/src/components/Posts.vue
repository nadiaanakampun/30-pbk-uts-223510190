
<template>
  <div>
    <h1>Posts</h1>
    <div>
      <label for="user-select">Select User:</label>
      <select id="user-select" v-model="selectedUser" @change="fetchPosts">
        <option v-for="user in users" :key="user.id" :value="user.id">
          {{ user.name }}
        </option>
      </select>
    </div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      posts: [],
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
    async fetchPosts() {
      if (this.selectedUser) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUser}`);
        this.posts = await response.json();
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
</style>
