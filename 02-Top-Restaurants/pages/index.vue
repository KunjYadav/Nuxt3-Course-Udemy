<template>
  <div>
    <Html :lang="dynamic > 50 ? 'en-GB' : 'en-US'">
      <Head>
        <Title>Restaurantly</Title>
        <Meta name="description" content="My page is cool" />
        <Link
          rel="preload"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaW7Qtg5V-R6T-6f9d7AyB73c_LK4tFp6WtA&usqp=CAU"
          as="script"
        />
      </Head>
    </Html>
    <div class="container">
      <h1>Welcome to Restaurantly</h1>
      <a href="/restaurants">Go to restaurants</a>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  margin-top: 5rem;
}
</style>
