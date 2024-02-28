<template>
  <div>
    <div class="container">
      <h3>My Notes</h3>
      <NotesForm />
      <div class="card-container" v-if="notesResponse.data">
        <UCard class="card" v-for="note in notesResponse.data" :key="note.id">
          <h2>{{ note.title }}</h2>
          <p>{{ note.note }}</p>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { supabase } = useSupabase();
const { user } = useAuth();

const notesResponse = ref();

if (process.client) {
  notesResponse.value = await supabase
    .from("notes")
    .select()
    .eq("user_id", user.value.id);
}

definePageMeta({
  middleware: "auth",
});
</script>

<style scoped>
.container {
  max-width: 50%;
  margin: 0 auto;
  padding: 3rem 0;
  height: 90vh;
}

h3 {
  font-size: 2rem;
}

.card {
  padding: 0.2rem;
  margin-top: 1.5rem;
}

.card h2 {
  font-weight: bold;
  font-size: 1.5rem;
}

.card-container {
  margin-top: 1.5rem;
}
</style>
