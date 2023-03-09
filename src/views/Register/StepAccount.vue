<script lang="ts">
import IconOffice from "../../assets/icons/office.vue";
import IconDiamond from "../../assets/icons/diamond.vue";
import IconSuitcase from "../../assets/icons/suitcase.vue";

export default {
  name: "StepAccount",
  data() {
    return {
      accountType: "subcontractor",
    };
  },
  components: {
    IconOffice,
    IconDiamond,
    IconSuitcase,
  },
  methods: {
    getStyleBorder(type: string) {
      if (this.accountType == type) return "border-primary-50";
      else return "border-neutral-30";
    },
    getStyleIcon(type: string) {
      if (this.accountType == type) return "primary-50";
      else return "neutral-80";
    },
    getStyleTitle(type: string) {
      if (this.accountType == type) return "text-primary-50";
      else return "text-neutral-100";
    },
    getStyleBullet(type: string) {
      if (this.accountType == type)
        return "border-[0.375rem] border-primary-50";
      else return "border-[0.125rem] border-neutral-40";
    },
    onClickType(type: string) {
      this.accountType = type;
    },
  },
};
</script>

<template>
  <div class="flex flex-col gap-[3.5rem]">
    <div class="flex flex-col gap-[1.5rem]">
      <div class="flex flex-col gap-[0.375rem]">
        <h3 class="text-[1.625rem] text-neutral-100 font-semibold">
          Account Type
        </h3>
        <p class="text-[0.9375rem] text-neutral-50">
          Select what suites your business need
        </p>
      </div>
      <div class="flex flex-row gap-[1rem]">
        <div
          :class="`flex-grow relative border rounded-md ${getStyleBorder(
            'subcontractor'
          )}`"
        >
          <button
            @click="onClickType('subcontractor')"
            :class="`absolute top-[0.625rem] right-[0.625rem] h-[1.125rem] w-[1.125rem] rounded-full ${getStyleBullet(
              'subcontractor'
            )}`"
          ></button>
          <div class="flex flex-col gap-[0.5rem] items-center p-[1.25rem]">
            <IconOffice
              :color="getStyleIcon('subcontractor')"
              class="h-[2.5rem] w-[2.5rem]"
            />
            <div class="flex flex-col items-center gap-[0.25rem]">
              <h5
                :class="`text-[0.9375rem] font-semibold ${getStyleTitle(
                  'subcontractor'
                )}`"
              >
                I am a Subcontractor
              </h5>
              <p class="text-[0.8125rem] text-neutral-50 text-center">
                Manage loads as Carrier. Link to Shipper or Carrier. Manage
              </p>
            </div>
          </div>
        </div>
        <div
          :class="`flex-grow relative border rounded-md ${getStyleBorder(
            'carrier'
          )}`"
        >
          <button
            @click="onClickType('carrier')"
            :class="`absolute top-[0.625rem] right-[0.625rem] h-[1.125rem] w-[1.125rem] rounded-full ${getStyleBullet(
              'carrier'
            )}`"
          ></button>
          <div class="flex flex-col gap-[0.5rem] items-center p-[1.25rem]">
            <IconDiamond
              :color="getStyleIcon('carrier')"
              class="h-[2.5rem] w-[2.5rem]"
            />
            <div class="flex flex-col items-center gap-[0.25rem]">
              <h5
                :class="`text-[0.9375rem] font-semibold ${getStyleTitle(
                  'carrier'
                )}`"
              >
                I am a Carrier
              </h5>
              <p class="text-[0.8125rem] text-neutral-50 text-center">
                Manage loads as Carrier. Link to Shipper or Carrier.
              </p>
            </div>
          </div>
        </div>
        <div
          :class="`flex-grow relative border rounded-md ${getStyleBorder(
            'shipper'
          )}`"
        >
          <button
            @click="onClickType('shipper')"
            :class="`absolute top-[0.625rem] right-[0.625rem] h-[1.125rem] w-[1.125rem] rounded-full ${getStyleBullet(
              'shipper'
            )}`"
          ></button>
          <div class="flex flex-col gap-[0.5rem] items-center p-[1.25rem]">
            <IconSuitcase
              :color="getStyleIcon('shipper')"
              class="h-[2.5rem] w-[2.5rem]"
            />
            <div class="flex flex-col items-center gap-[0.25rem]">
              <h5
                :class="`text-[0.9375rem] font-semibold ${getStyleTitle(
                  'shipper'
                )}`"
              >
                I am a Shipper
              </h5>
              <p class="text-[0.8125rem] text-neutral-50 text-center">
                Manage loads as Shipper/Broker. Link to Shipper or Carrier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-[1.5rem]">
      <div class="flex flex-col gap-[0.375rem]">
        <h3 class="text-[1.625rem] text-neutral-100 font-semibold">
          Account Information
        </h3>
        <p class="text-[0.9375rem] text-neutral-50">
          Enter Your Account Details
        </p>
      </div>
      <div class="flex flex-row flex-wrap gap-[1rem]">
        <div class="flex-grow w-[40%] flex flex-col">
          <h5 class="text-[0.75rem] text-neutral-100 font-semibold">Address</h5>
          <input
            class="w-full border border-neutral-30 rounded-lg text-[0.875rem] text-neutral-100 placeholder:text-neutral-50 px-[1rem] py-[0.5rem] focus:ring-0 focus:outline-none focus:border-neutral-30"
            type="text"
            placeholder="usdot#"
          />
        </div>
        <div class="flex-grow w-[40%] flex flex-col">
          <h5 class="text-[0.75rem] text-neutral-100 font-semibold">
            Company Name
          </h5>
          <input
            class="w-full border border-neutral-30 rounded-lg text-[0.875rem] text-neutral-100 placeholder:text-neutral-50 px-[1rem] py-[0.5rem] focus:ring-0 focus:outline-none focus:border-neutral-30"
            type="text"
            placeholder="company name"
          />
        </div>
        <div class="flex-grow w-[40%] flex flex-col">
          <h5 class="text-[0.75rem] text-neutral-100 font-semibold">Title</h5>
          <input
            class="w-full border border-neutral-30 rounded-lg text-[0.875rem] text-neutral-100 placeholder:text-neutral-50 px-[1rem] py-[0.5rem] focus:ring-0 focus:outline-none focus:border-neutral-30"
            type="text"
            placeholder="president"
          />
        </div>
        <div class="flex-grow w-[40%] flex flex-col">
          <h5 class="text-[0.75rem] text-neutral-100 font-semibold">
            Cell Number
          </h5>
          <input
            class="w-full border border-neutral-30 rounded-lg text-[0.875rem] text-neutral-100 placeholder:text-neutral-50 px-[1rem] py-[0.5rem] focus:ring-0 focus:outline-none focus:border-neutral-30"
            type="text"
            placeholder="546 784 5489"
          />
        </div>
        <div class="flex-grow w-[40%] flex flex-col">
          <h5 class="text-[0.75rem] text-neutral-100 font-semibold">
            First Name
          </h5>
          <input
            class="w-full border border-neutral-30 rounded-lg text-[0.875rem] text-neutral-100 placeholder:text-neutral-50 px-[1rem] py-[0.5rem] focus:ring-0 focus:outline-none focus:border-neutral-30"
            type="text"
            placeholder="John"
          />
        </div>
        <div class="flex-grow w-[40%] flex flex-col">
          <h5 class="text-[0.75rem] text-neutral-100 font-semibold">
            Last Name
          </h5>
          <input
            class="w-full border border-neutral-30 rounded-lg text-[0.875rem] text-neutral-100 placeholder:text-neutral-50 px-[1rem] py-[0.5rem] focus:ring-0 focus:outline-none focus:border-neutral-30"
            type="text"
            placeholder="Doe"
          />
        </div>
        <div class="flex-grow w-[40%] flex flex-col">
          <h5 class="text-[0.75rem] text-neutral-100 font-semibold">
            Username
          </h5>
          <input
            class="w-full border border-neutral-30 rounded-lg text-[0.875rem] text-neutral-100 placeholder:text-neutral-50 px-[1rem] py-[0.5rem] focus:ring-0 focus:outline-none focus:border-neutral-30"
            type="text"
            placeholder="John.doe"
          />
        </div>
        <div class="flex-grow w-[40%] flex flex-col">
          <h5 class="text-[0.75rem] text-neutral-100 font-semibold">Email</h5>
          <input
            class="w-full border border-neutral-30 rounded-lg text-[0.875rem] text-neutral-100 placeholder:text-neutral-50 px-[1rem] py-[0.5rem] focus:ring-0 focus:outline-none focus:border-neutral-30"
            type="text"
            placeholder="john.doe@gmail.com"
          />
        </div>
      </div>
    </div>
  </div>
</template>
