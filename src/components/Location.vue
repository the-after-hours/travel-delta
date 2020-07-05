<template>
  <div>
    Result:
    <h3>
      {{ location.name }}
    </h3>
    <span>{{ location.street }}</span>
    <span>{{ location.zip }}</span>
    <span>{{ location.city }}</span>

    <b-button type="primary" @click="removeLocation">Remove</b-button>
  </div>
</template>

<script>
export default {
  name: "Location",
  props: {
    location: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeLocation() {
      const payload = {
        id: this.$props.location.id,
        type: this.$props.location.type
      };

      this.$store.dispatch("removeLocation", payload);
    }
  }
};
</script>
