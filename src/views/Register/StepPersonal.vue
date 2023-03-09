<script lang="ts">
import DropFile from "../../components/DropFile.vue";

export default {
  name: "StepPersonal",
  data() {
    return {
      isSameAsMailingAddress: false,
    };
  },
  components: {
    DropFile,
  },
};
</script>

<template>
  <div class="flex flex-col gap-[3.5rem]">
    <div class="flex flex-col gap-[1.5rem]">
      <div class="flex flex-col gap-[0.375rem]">
        <h3 class="text-[1.625rem] text-neutral-100 font-semibold">
          Mailing Address
        </h3>
        <p class="text-[0.938rem] text-neutral-50">
          Enter Your Mailing Details
        </p>
      </div>
      <div class="flex flex-row gap-[1rem]">
        <div class="flex-grow flex flex-col">
          <h5 class="text-[0.75rem] text-neutral-100 font-semibold">Address</h5>
          <input
            class="w-full border border-neutral-30 rounded-lg text-[0.875rem] text-neutral-100 placeholder:text-neutral-50 px-[1rem] py-[0.5rem] focus:ring-0 focus:outline-none focus:border-neutral-30"
            type="text"
            placeholder="usdot#"
          />
        </div>
        <div class="flex-grow flex flex-col">
          <h5 class="text-[0.75rem] text-neutral-100 font-semibold">
            Contact Number
          </h5>
          <input
            class="w-full border border-neutral-30 rounded-lg text-[0.875rem] text-neutral-100 placeholder:text-neutral-50 px-[1rem] py-[0.5rem] focus:ring-0 focus:outline-none focus:border-neutral-30"
            type="text"
            placeholder="company name"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-[1.5rem]">
      <div class="flex flex-col gap-[0.375rem]">
        <h3 class="text-[1.625rem] text-neutral-100 font-semibold">
          Physical Information
        </h3>
        <p class="text-[0.938rem] text-neutral-50">
          Enter Your Physical Details
        </p>
      </div>
      <div class="flex flex-row gap-2 items-center">
        <input
          type="checkbox"
          v-model="isSameAsMailingAddress"
          class="bg-neutral-0 text-primary-50 cursor-pointer ring-0 outline-none focus:ring-0 focus:outline-none rounded"
        />
        <p class="text-[1rem] text-neutral-90">Same As Mailing Address</p>
      </div>
      <div v-show="!isSameAsMailingAddress" class="flex flex-row gap-[1rem]">
        <div class="flex-grow flex flex-col">
          <h5 class="text-[0.75rem] text-neutral-100 font-semibold">
            Physical Address
          </h5>
          <input
            class="w-full border border-neutral-30 rounded-lg text-[0.875rem] text-neutral-100 placeholder:text-neutral-50 px-[1rem] py-[0.5rem] focus:ring-0 focus:outline-none focus:border-neutral-30"
            type="text"
            placeholder="usdot#"
          />
        </div>
        <div class="flex-grow flex flex-col">
          <h5 class="text-[0.75rem] text-neutral-100 font-semibold">
            Contact Number
          </h5>
          <input
            class="w-full border border-neutral-30 rounded-lg text-[0.875rem] text-neutral-100 placeholder:text-neutral-50 px-[1rem] py-[0.5rem] focus:ring-0 focus:outline-none focus:border-neutral-30"
            type="text"
            placeholder="company name"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-[1.5rem]">
      <div class="flex flex-col gap-[0.375rem]">
        <h3 class="text-[1.625rem] text-neutral-100 font-semibold">
          Company Logo
        </h3>
        <p class="text-[0.938rem] text-neutral-50">Upload Your Company Logo</p>
      </div>
      <DropFile />
    </div>
  </div>
</template>
