<template>
  <li class="development">
    <a href="#">
      <div class="development__wrapper">
        <div class="development__picture">
          <picture
            ><source
              type="image/webp"
              srcset="img/Bitmap.webp 1x, img/Bitmap@2x.webp 2x"/>
            <img
              src="/img/Bitmap.png"
              srcset="img/Bitmap.webp 1x, img/Bitmap.png 2x"
              width="380"
              height="214"
              :alt="house.title"
          /></picture>
          <span :class="'development__type development__type--' + houseType">{{
            houseTypeTitle
          }}</span>
        </div>
        <div class="development__content">
          <h3>{{ house.title }}</h3>
          <p class="development__address">{{ house.address }}</p>
          <p class="development__price">
            New Properties for Sale from
            <span class="development__price-value">£ {{ housePrice }}</span>
          </p>
          <p class="development__description">Shared Ownership Available</p>
        </div>
      </div>
    </a>
  </li>
</template>
<script>
export default {
  name: "DevelopmentList",
  props: {
    house: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    housePrice() {
      let price = this.house.price.toString();
      return price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    houseType() {
      return this.house.type === "IndependentLiving"
        ? "independent"
        : "support";
    },
    houseTypeTitle() {
      return this.house.type === "IndependentLiving"
        ? "Independent Living"
        : "Restaurant & Support available";
    }
  }
};
</script>
