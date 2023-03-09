<script lang="ts">
import { ref } from "vue";
import IconUpload from "../assets/icons/upload-filled.vue";

export default {
  setup() {
    const refFile = ref<HTMLInputElement | null>(null);
    return {
      refFile,
    };
  },
  data() {
    return {
      isDragging: false,
      file: null as File | null | undefined,
    };
  },
  components: {
    IconUpload,
  },
  methods: {
    onChange() {
      this.file = this.refFile?.files?.item(0);
    },
    dragover(e: DragEvent) {
      e.preventDefault();
      this.isDragging = true;
    },
    dragleave() {
      this.isDragging = false;
    },
    drop(e: DragEvent) {
      e.preventDefault();
      if (this.refFile != undefined) {
        this.refFile.files = e.dataTransfer?.files!;
        this.onChange();
      }
      this.isDragging = false;
    },
  },
};
</script>

<template>
  <div
    class="p-[1.5rem] bg-drop-file rounded-lg w-full h-full flex flex-col items-center justify-center gap-[0.5rem] shadow-lg"
    @dragover="dragover"
    @dragleave="dragleave"
    @drop="drop"
  >
    <input
      type="file"
      name="file"
      id="fileInput"
      class="hidden absolute h-full w-full"
      accept=".pdf,.jpg,.jpeg,.png"
      ref="refFile"
      @change="onChange"
    />
    <IconUpload class="h-[3.5rem] w-[3.5rem]" />
    <label for="fileInput" class="text-[0.875rem] text-neutral-50 font-medium">
      <div v-if="file != null">{{ file.name }}</div>
      <div v-else-if="isDragging">Release to drop files here.</div>
      <div v-else>
        Drag and drop file, or
        <span class="relative text-primary-50 font-bold"> browse </span>
      </div>
    </label>
  </div>
</template>
