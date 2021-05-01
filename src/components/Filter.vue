<template>
  <form class="filter" v-on:submit.prevent>
    <div class="filter__field">
      <label for="filter">Filter</label>
      <input
        type="text"
        name="filter"
        id="filter"
        v-model="searchValue"
        @input="search(searchValue)"
      />
    </div>
  </form>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Filter",
  data() {
    return {
      searchValue: ""
    };
  },
  computed: {
    ...mapGetters(["SEARCH_VALUE"])
  },
  methods: {
    ...mapActions(["GET_SEARCH_VALUE"]),
    search(value) {
      this.GET_SEARCH_VALUE(value);
    }
  }
};
</script>
