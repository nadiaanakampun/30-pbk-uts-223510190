<template>
    <div>
      <h1>Full Photo</h1>
      <img :src="$route.query.url" alt="Full Photo" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'FullPhoto',
  };
  </script>
  
  <style scoped>
  img {
    max-width: 100%;
  }
  </style>
  