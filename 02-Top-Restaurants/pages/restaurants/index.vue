<template>
  <div>
    <Html :lang="dynamic > 50 ? 'en-GB' : 'en-US'">
      <Head>
        <Title>Top 50 Restaurants in the World</Title>
        <Meta name="description" content="My page is cool" />
        <Link
          rel="preload"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaW7Qtg5V-R6T-6f9d7AyB73c_LK4tFp6WtA&usqp=CAU"
          as="script"
        />
      </Head>
    </Html>
    <NuxtLayout name="custom">
      <div class="container">
        <RestaurantTable />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
