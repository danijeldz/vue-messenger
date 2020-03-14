<template>
  <div class="chat container">
    <h2>VueMessenger</h2>
    <p>Hello, {{ this.name }}</p>
  </div>
</template>

<script>
export default {
  name: "Chat",
  props: ["name"],
  data() {
    return {};
  }
};
</script>

<style>
</style>
