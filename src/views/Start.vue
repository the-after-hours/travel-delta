<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card>
          <LocationInput />
        </b-card>
      </b-col>
      <b-col>
        <b-card>
          <h3>Homes</h3>
          <Location
            v-for="location in homes"
            :key="location.zip"
            :location="location"
          />
        </b-card>
        <b-card>
          <h3>Favorites</h3>
          <Location
            v-for="favorite in favorites"
            :key="favorite.zip"
            :location="favorite"
          />
        </b-card>
      </b-col>
    </b-row>
  </b-container>
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
