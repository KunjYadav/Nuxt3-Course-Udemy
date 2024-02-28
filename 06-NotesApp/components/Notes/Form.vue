<template>
  <UCard class="card">
    <input placeholder="My title" v-model="notesInput.title" />
    <textarea placeholder="My note" v-model="notesInput.note" />
    <UButton @click="handleSubmit" color="white">Save Note</UButton>
  </UCard>
</template>

<script setup lang="ts">
const { supabase } = useSupabase();
const { user } = useAuth();

const notesInput = reactive({
  title: "",
  note: "",
});

const handleSubmit = async () => {
  if (!notesInput.title || !notesInput.note) return;

  await supabase.from("notes").insert({
    title: notesInput.title,
    note: notesInput.note,
    user_id: user.value.id,
  });

  notesInput.title = "";
  notesInput.note = "";
};
</script>

<style scoped>
.card {
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
}

input,
textarea {
  width: 100%;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  padding: 0.2rem;
}
</style>
