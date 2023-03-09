<script lang="ts">
import { markRaw } from "vue";

import IconCheck from "../assets/icons/check.vue";

export default {
  name: "StepperItem",
  data() {
    return {
      IconCheck: markRaw(IconCheck),
    };
  },
  props: {
    icon: {
      type: Object,
      required: true,
    },
    step: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    statusStepper: {
      type: String, // ACTIVE, FILLED, UNFILLED
      required: true,
    },
  },
  computed: {
    borderStyle() {
      if (this.statusStepper == "ACTIVE" || this.statusStepper == "FILLED")
        return "border-0";
      else return "border border-neutral-40";
    },
    backgroundStyle() {
      if (this.statusStepper == "ACTIVE") return "bg-second-50";
      else if (this.statusStepper == "FILLED") return "bg-success-50";
      else return "bg-neutral-0";
    },
    iconColor() {
      if (this.statusStepper == "ACTIVE" || this.statusStepper == "FILLED")
        return "neutral-0";
      else return "neutral-60";
    },
    setIcon() {
      return this.statusStepper == "FILLED" ? this.IconCheck : this.icon;
    },
  },
};
</script>

<template>
  <div class="flex flex-row gap-[0.75rem] items-center flex-shrink-0">
    <div
      :class="`w-[2.5rem] h-[2.5rem]  rounded-full p-[0.5rem] ${borderStyle} ${backgroundStyle}`"
    >
      <component :is="setIcon" v-bind="{ color: iconColor }" />
    </div>
    <div class="flex flex-col">
      <p class="text-[0.813rem] text-neutral-60">Step {{ step }}</p>
      <h4 class="text-[1rem] text-neutral-100 font-semibold">{{ title }}</h4>
    </div>
  </div>
</template>
