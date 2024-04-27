<template>
  <div class="todo-app">
    <h1 class="title">TO DO LIST</h1>
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask" placeholder="Tambahkan Daftar" />
      <button>Tambahkan</button>
    </form>
    <ul>
      <li v-for="(task, index) in tasksFiltered" :key="index" :class="{ completed: task.completed }">
        <span @click="completeTask(index)">{{ task.title }}</span>
        <button @click="deleteTask(index)">Hapus</button>
      </li>
    </ul>
    <div class="filter">
      <input type="checkbox" id="completedOnly" v-model="completedOnly" />
      <label for="completedOnly">Hanya Tampilkan yang belum selesai</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { title: 'Belajar Vue.js', completed: false },
        { title: 'Buat aplikasi to-do list', completed: false },
        
      ],
      newTask: '',
      completedOnly: false
    };
  },
  computed: {
    tasksFiltered() {
      if (this.completedOnly) {
        return this.tasks.filter(task => !task.completed);
      } else {
        return this.tasks;
      }
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ title: this.newTask, completed: false });
        this.newTask = '';
      }
    },
    completeTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style>
.todo-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  color: red;
  margin-bottom: 20px;
}

form {
  display: flex;
  margin-bottom: 20px;
}

input[type="text"] {
  padding: 5px;
  font-size: 16px;
  flex: 1;
  margin-right: 10px;
}

button {
  padding: 5px 10px;
  font-size: 16px;
  background-color: #ec00c5;
  color: #fff;
  border: none;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

li.completed {
  text-decoration: line-through;
}

li span {
  flex: 1;
  cursor: pointer;
}

.filter {
  margin-top: 20px;
}

.filter input[type="checkbox"] {
  margin-right: 5px;
}

.filter label {
  font-size: 14px;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
