<template>
  <b-container>
    <h1>Add a Location</h1>
    <b-form @submit.prevent="onSubmit" @reset="onReset">
      <b-form-radio-group
        v-model="location.type"
        :options="options"
        value-field="locationType"
        text-field="name"
      ></b-form-radio-group>

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

      <b-button type="reset" variant="danger">Clear</b-button>
      <b-button type="submit" variant="primary">Add</b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  name: "LocationInput",
  components: {},
  data() {
    return {
      location: {
        type: "favorites"
      },
      options: [
        { checked: true, locationType: "favorites", name: "Favorites" },
        { locationType: "homes", name: "Homes" }
      ]
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("addLocation", {
        id: `${this.location.name}-${this.location.zip}`,
        city: this.location.city,
        name: this.location.name,
        street: this.location.street,
        type: this.location.type,
        zip: this.location.zip
      });

      this.location = { type: this.location.type };
    },
    onReset() {
      this.location = { type: this.location.type };
    }
  }
};
</script>
