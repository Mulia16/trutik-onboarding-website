<script lang="ts">
export default {
  name: "ArrowRigth",
  data() {
    return {
      colorVariants: new Map([["primary-50", "stroke-primary-50"]]),
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
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.53958 12.2951L1.08203 6.82807L5.53958 1.36108"
      :class="strokeColor"
      stroke-width="2.12264"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
