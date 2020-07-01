<template>
  <div class="home">
    <Welcome />
    <router-link class="btn btn-primary green" to="/start"
      >Get Started</router-link
    >
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome.vue";

export default {
  name: "Home",
  components: {
    Welcome
  }
};
</script>

<style lang="scss" scoped>
.btn-primary {
  background-color: green;
  border: solid 1px green;

  &:hover {
    color: black;
    background-color: lightgreen;
  }
}
</style>
