<template>
  <div>
    <label for="location">target A</label>
    <input
      id="location"
      name="location"
      :value="location"
      @input="setTargetAddress"
    />
    <button
      v-if="location.length"
      type="submit"
      :click="addTarget"
      @keyup.enter="addTarget"
    >
      Save
    </button>
  </div>
</template>

<script>
export default {
  name: "LabeledInput",
  data() {
    return {
      location: {
        name: "",
        street: "",
        zip: "",
        city: ""
      }
    };
  },
  methods: {
    addFavorite: function(e) {
      this.$store.dispatch("addFavorite", e.target.value);
    },
    addTarget: function() {
      this.$store.dispatch("addTarget", this.$data.location);
    },
    setTargetAddress: function(e) {
      this.$set(this.$data, "location", e.target.value);
    },
    updateTarget: function(e) {
      this.$data.location = e.target.value;
    }
  }
};
</script>

<style lang="scss">
label,
button {
  margin-right: 8px;
}
</style>
