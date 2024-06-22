<template>
  <div>
    <h1>To-Do List</h1>
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask" placeholder="Add a new task" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="(task, index) in filteredTasks" :key="index" :class="{ completed: task.completed }">
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
      <button :class="{ active: filter === 'all' }" @click="setFilter('all')">All</button>
      <button :class="{ active: filter === 'active' }" @click="setFilter('active')">Active</button>
      <button :class="{ active: filter === 'completed' }" @click="setFilter('completed')">Completed</button>
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
/* Styles as before */
</style>
