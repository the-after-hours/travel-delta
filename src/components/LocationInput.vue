<template>
  <div>
    <h1>Add a Location</h1>
    <b-form @submit.prevent="onSubmit" @reset="onReset">
      <h3>{{ this.$props.type }}</h3>
      <b-form-group
        id="location-name"
        label="Location Nickname:"
        label-for="name"
        description="Unique nickname for your location"
      >
        <b-form-input
          id="name"
          v-model="location.name"
          required
          placeholder="Enter nickname"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="location-street"
        label="Street:"
        label-for="street"
        description="Your street"
      >
        <b-form-input
          id="street"
          v-model="location.street"
          required
          placeholder="Enter street"
        >
        </b-form-input>
      </b-form-group>

      <b-form-group
        id="location-zip"
        label="Zip:"
        label-for="zip"
        description="Your zip"
      >
        <b-form-input
          id="zip"
          v-model="location.zip"
          required
          placeholder="Enter zip"
        >
        </b-form-input>
      </b-form-group>

      <b-form-group
        id="location-city"
        label="City:"
        label-for="city"
        description="Your city"
      >
        <b-form-input
          id="city"
          v-model="location.city"
          required
          placeholder="Enter city"
        >
        </b-form-input>
      </b-form-group>

      <b-form-group> </b-form-group>

      <b-button type="reset" variant="danger">Clear</b-button>
      <b-button type="submit" variant="primary">Add</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "LocationInput",
  components: {},
  props: { type: { type: String, required: true } },
  data() {
    return {
      location: {}
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("addLocation", {
        id: `${this.location.name}-${this.location.zip}`,
        city: this.location.city,
        name: this.location.name,
        street: this.location.street,
        type: this.$props.type,
        zip: this.location.zip
      });

      this.location = {};
    },
    onReset() {
      this.location = {};
    }
  }
};
</script>
