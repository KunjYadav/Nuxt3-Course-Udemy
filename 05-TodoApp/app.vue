<template>
  <div class="container">
    <UCard class="cards">
      <h1>My Todos</h1>
      <div class="add-todo">
        <input placeholder="Add a new todo..." v-model="input" />
        <UButton @click="handleClick" color="white" variant="solid"
          >Add</UButton
        >
      </div>
      <UCard
        @click="() => updateTodo(todo.id)"
        class="card"
        v-for="todo in todos"
        :key="todo.id"
      >
        <h4 :class="todo.completed ? 'complete' : null">{{ todo.item }}</h4>
        <p @click="() => deleteTodo(todo.id)">x</p>
      </UCard>
    </UCard>
  </div>
</template>

<script setup>
const input = ref("");
const { todos, addTodo, updateTodo, deleteTodo } = useTodos();

const handleClick = () => {
  addTodo(input.value);
  input.value = "";
};
</script>

<style scoped>
.container {
  padding: 2rem;
  margin: 0 auto;
  max-width: 50%;
}
.cards {
  padding: 2rem;
}

h1 {
  font-weight: bold;
}

input {
  outline: none;
}

.add-todo {
  display: flex;
  justify-content: space-between;
}

.card {
  padding: 0.5rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  line-height: 0%;
}

h4 {
  float: left;
  cursor: pointer;
  display: inline;
}
p {
  float: right;
  cursor: pointer;
  margin-left: 400px;
}

.complete {
  text-decoration: line-through;
}
</style>
