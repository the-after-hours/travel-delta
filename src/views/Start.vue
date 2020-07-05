<template>
  <div>
    <b-card class="m-8">
      <LocationInput />
    </b-card>

    <h2>Current Results</h2>
    <div v-for="location in homes" :key="location.zip">
      <Location :location="location" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import LocationInput from "@/components/LocationInput";
import Location from "@/components/Location";

export default {
  components: { LocationInput, Location },
  computed: {
    ...mapState({
      favorites: state => state.favorites,
      homes: state => state.homes
    })
  }
};
</script>

<style lang="scss">
.m-8 {
  margin: 8px;
}
</style>
