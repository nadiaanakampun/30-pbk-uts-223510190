<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/todos">Todos</router-link></li>
          <li><router-link to="/posts">Post</router-link></li>
          <li><router-link to="/albums">Album Foto</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

header {
  width: 100%;
  background-color: #007bff;
  padding: 10px;
}

nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

#app {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
}
</style>
