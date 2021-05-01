<template>
  <section class="developments">
    <div class="developments__wrapper">
      <h1>Our Latest Developments</h1>
      <div v-if="!ERROR">
        <Filter />
        <ul class="developments__list">
          <DevelopmentItem
            v-for="house in filteredHouses"
            :key="house.id"
            :house="house"
          />
        </ul>
        <button class="developments__button" type="button">See more</button>
      </div>
      <div v-else class="development__error">
        <h2>Ooops, something went wrong!</h2>
      </div>
    </div>
  </section>
</template>

<script>
import DevelopmentItem from "@/components/DevelopmentItem";
import { mapGetters, mapActions } from "vuex";
import Filter from "@/components/Filter";

export default {
  name: "DevelopmentList",
  components: { Filter, DevelopmentItem },
  data() {
    return {
      filteredHouses: []
    };
  },
  computed: {
    ...mapGetters(["HOUSES", "ERROR", "SEARCH_VALUE"])
  },
  methods: {
    ...mapActions(["GET_HOUSES_FROM_API"]),
    filterHouses(value) {
      this.filteredHouses = [...this.HOUSES];
      if (value && value.length >= 3) {
        this.filteredHouses = this.filteredHouses.filter(function(item) {
          return item.title.toLowerCase().includes(value.toLowerCase());
        });
      } else {
        this.filteredHouses = this.HOUSES;
      }
    }
  },
  watch: {
    SEARCH_VALUE() {
      this.filterHouses(this.SEARCH_VALUE);
    }
  },
  mounted() {
    this.GET_HOUSES_FROM_API().then(response => {
      if (response.data) {
        this.filterHouses(this.SEARCH_VALUE);
      }
    });
  }
};
</script>
