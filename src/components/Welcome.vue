<template>
  <div class="welcome">
    <h1>Travel Delta</h1>
    <h3>
      The moving planner to help you find the change in distance from your
      favorite places.
    </h3>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
