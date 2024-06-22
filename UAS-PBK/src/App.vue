<template>
  <div id="app">
    <h1>To-Do List</h1>
    <form @submit.prevent="addTask">
      <input
        type="text"
        v-model="newTask"
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li
        v-for="(task, index) in filteredTasks"
        :key="index"
        :class="{ completed: task.completed }"
      >
        <span>{{ task.text }}</span>
        <div>
          <button @click="toggleTaskCompletion(index)">
            {{ task.completed ? 'Undo' : 'Complete' }}
          </button>
          <button @click="deleteTask(index)">Delete</button>
        </div>
      </li>
    </ul>
    <div class="filter-buttons">
      <button
        :class="{ active: filter === 'all' }"
        @click="setFilter('all')"
      >
        All
      </button>
      <button
        :class="{ active: filter === 'active' }"
        @click="setFilter('active')"
      >
        Active
      </button>
      <button
        :class="{ active: filter === 'completed' }"
        @click="setFilter('completed')"
      >
        Completed
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      newTask: '',
      filter: 'all',
    };
  },
  computed: {
    filteredTasks() {
      if (this.filter === 'all') {
        return this.tasks;
      } else if (this.filter === 'active') {
        return this.tasks.filter((task) => !task.completed);
      } else if (this.filter === 'completed') {
        return this.tasks.filter((task) => task.completed);
      }
    },
  },
  methods: {
    addTask() {
      if (this.newTask.trim() === '') return;
      this.tasks.push({ text: this.newTask, completed: false });
      this.newTask = '';
    },
    toggleTaskCompletion(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    setFilter(filter) {
      this.filter = filter;
    },
  },
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

#app {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

form {
  display: flex;
  margin-bottom: 20px;
}

input[type="text"] {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}

button:disabled {
  background-color: #ccc;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

li.completed span {
  text-decoration: line-through;
  color: #888;
}

.filter-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.filter-buttons button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #ddd;
  color: #333;
  border-radius: 4px;
  cursor: pointer;
}

.filter-buttons button.active {
  background-color: #007bff;
  color: #fff;
}
</style>
