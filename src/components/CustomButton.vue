<script lang="ts">
export default {
  name: "CustomButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    handleClick: {
      type: Function,
      required: true,
    },
    customStyle: String,
    preIcon: Object,
    preIconColor: String,
  },
};
</script>

<template>
  <button
    :class="
      customStyle +
      ' rounded-lg flex flex-row gap-2 items-center justify-center'
    "
    @click="() => handleClick()"
  >
    <component
      :is="preIcon"
      v-show="preIcon != undefined || preIcon != null"
      v-bind="{ color: preIconColor }"
    ></component>
    <p>
      {{ text }}
    </p>
  </button>
</template>
