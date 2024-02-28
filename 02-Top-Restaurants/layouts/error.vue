<template>
  <div>
    <div>
      <img
        class="image"
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt=""
      />
    </div>
    <slot name="header" />
    <slot name="redirectEl" />
  </div>
</template>

<style scoped>
img {
  height: 400px;
}
</style>
