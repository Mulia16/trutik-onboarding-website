<script lang="ts">
export default {
  name: "Diamond",
  data() {
    return {
      colorVariants: new Map([
        ["neutral-80", "stroke-neutral-80"],
        ["primary-50", "stroke-primary-50"],
      ]),
      fillVariants: new Map([
        ["neutral-80", "fill-neutral-80"],
        ["primary-50", "fill-primary-50"],
      ]),
    };
  },
  props: {
    color: {
      type: String,
      default: "neutral-50",
    },
  },
  computed: {
    strokeColor() {
      return this.colorVariants.get(this.color);
    },
    fillColor() {
      return this.fillVariants.get(this.color);
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
    <!-- <g opacity="0.2">
      <path
        d="M29.272 6.25H20.522L12.8501 16.25L20.522 35L38.022 16.25L29.272 6.25Z"
        fill="#4B465C"
      />
      <path
        d="M29.272 6.25H20.522L12.8501 16.25L20.522 35L38.022 16.25L29.272 6.25Z"
        fill="white"
        fill-opacity="0.2"
      />
    </g> -->
    <path
      d="M11.772 6.25H29.272L38.022 16.25L20.522 35L3.02197 16.25L11.772 6.25Z"
      :class="strokeColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.772 6.25H29.272L38.022 16.25L20.522 35L3.02197 16.25L11.772 6.25Z"
      :class="strokeColor"
      stroke-opacity="0.2"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21.3154 5.64131C21.1261 5.39462 20.8329 5.25 20.522 5.25C20.2111 5.25 19.9178 5.39462 19.7286 5.64131L12.3569 15.25H3.02197C2.46969 15.25 2.02197 15.6977 2.02197 16.25C2.02197 16.8023 2.46969 17.25 3.02197 17.25H12.1788L19.5965 35.3787C19.7502 35.7545 20.1159 36 20.522 36C20.928 36 21.2937 35.7545 21.4475 35.3787L28.8652 17.25H38.022C38.5743 17.25 39.022 16.8023 39.022 16.25C39.022 15.6977 38.5743 15.25 38.022 15.25H28.687L21.3154 5.64131ZM26.1663 15.25L20.522 7.89287L14.8777 15.25H26.1663ZM14.3397 17.25L20.522 32.3593L26.7042 17.25H14.3397Z"
      :class="fillColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21.3154 5.64131C21.1261 5.39462 20.8329 5.25 20.522 5.25C20.2111 5.25 19.9178 5.39462 19.7286 5.64131L12.3569 15.25H3.02197C2.46969 15.25 2.02197 15.6977 2.02197 16.25C2.02197 16.8023 2.46969 17.25 3.02197 17.25H12.1788L19.5965 35.3787C19.7502 35.7545 20.1159 36 20.522 36C20.928 36 21.2937 35.7545 21.4475 35.3787L28.8652 17.25H38.022C38.5743 17.25 39.022 16.8023 39.022 16.25C39.022 15.6977 38.5743 15.25 38.022 15.25H28.687L21.3154 5.64131ZM26.1663 15.25L20.522 7.89287L14.8777 15.25H26.1663ZM14.3397 17.25L20.522 32.3593L26.7042 17.25H14.3397Z"
      :class="fillColor"
      fill-opacity="0.2"
    />
  </svg>
</template>
