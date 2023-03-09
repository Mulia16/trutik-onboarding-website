<script lang="ts">
export default {
  name: "Office",
  data() {
    return {
      colorVariants: new Map([
        ["neutral-80", "stroke-neutral-80"],
        ["primary-50", "stroke-primary-50"],
      ]),
    };
  },
  props: {
    color: {
      type: String,
      default: "neutral-80",
    },
  },
  computed: {
    strokeColor() {
      return this.colorVariants.get(this.color);
    },
  },
};
</script>

<template>
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 41 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.67383 33.75H37.6738M22.6738 33.75V6.25C22.6738 5.91848 22.5421 5.60054 22.3077 5.36612C22.0733 5.1317 21.7553 5 21.4238 5H6.42383C6.09231 5 5.77437 5.1317 5.53994 5.36612C5.30552 5.60054 5.17383 5.91848 5.17383 6.25V33.75M35.1738 33.75V16.25C35.1738 15.9185 35.0421 15.6005 34.8077 15.3661C34.5733 15.1317 34.2553 15 33.9238 15H22.6738M10.1738 11.25H15.1738M12.6738 21.25H17.6738M10.1738 27.5H15.1738M27.6738 27.5H30.1738M27.6738 21.25H30.1738"
      :class="strokeColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
