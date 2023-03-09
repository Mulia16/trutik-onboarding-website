<script lang="ts">
export default {
  name: "Check",
  data() {
    return {
      colorVariants: new Map([
        ["primary-50", "stroke-primary-50"],
        ["success-50", "stroke-success-50"],
        ["second-20", "stroke-second-20"],
        ["neutral-0", "stroke-neutral-0"],
      ]),
    };
  },
  props: {
    color: {
      type: String,
      default: "primary-50",
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
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 8L6.66667 12L14 4"
      :class="strokeColor + ' fill-transparent'"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
