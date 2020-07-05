<template>
  <b-container>
    <b-card>
      <b-row>
        <b-col>
          <b-row>
            <h3>
              {{ location.name }}
            </h3>
          </b-row>
          <b-row>
            <div>Street: {{ location.street }}</div>
          </b-row>
          <b-row>
            <div>City: {{ location.city }}</div>
          </b-row>
          <b-row>
            <div>Zip: {{ location.zip }}</div>
          </b-row>
        </b-col>
        <b-col>
          <b-row>
            <b-button class="m-auto" type="primary" @click="removeLocation"
              >Remove</b-button
            >
          </b-row>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
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
