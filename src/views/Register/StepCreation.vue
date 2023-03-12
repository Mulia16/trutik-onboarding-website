<script lang="ts">
import Calendar from "../../components/Calendar.vue";

export default {
  name: "StepCreation",
  data() {
    return {
      accountType: "Basic",
      selectedTime: "09:00am",
      time: [
        "09:00am",
        "09:30am",
        "09:40am",
        "09:50am",
        "10:00am",
        "10:30am",
        "10:40am",
        "10:50am",
        "11:00am",
        "11:30am",
        "11:40am",
        "11:50am",
        "12:00am",
        "12:30am",
        "12:40am",
        "01:00pm",
        "01:30pm",
        "01:40pm",
      ],
    };
  },
  methods: {
    getStyleBorder(type: string) {
      if (this.accountType == type) return "border-primary-50";
      else return "border-neutral-30";
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
    getStyleBorderTime(time: string) {
      if (this.selectedTime == time) return "border-primary-50";
      else return "border-neutral-30";
    },
    getStyleTextTime(time: string) {
      if (this.selectedTime == time) return "text-primary-50";
      else return "text-neutral-100";
    },
    onClickTime(time: string) {
      this.selectedTime = time;
    },
  },
  components: { Calendar },
};
</script>

<template>
  <div class="flex flex-col gap-[3.5rem]">
    <div class="flex flex-col gap-[1.5rem]">
      <div class="flex flex-col gap-[0.375rem]">
        <h3 class="text-[1.625rem] text-neutral-100 font-semibold">
          Account Type
        </h3>
        <p class="text-[1.375rem] text-neutral-50">
          Select what suites your business need
        </p>
      </div>
      <div class="flex flex-col gap-[0.75rem]">
        <div class="flex flex-row gap-[1rem]">
          <div
            :class="`flex-grow w-[30%] relative border rounded-md ${getStyleBorder(
              'Basic'
            )}`"
          >
            <button
              @click="onClickType('Basic')"
              :class="`absolute top-[0.625rem] right-[0.625rem] h-[1.125rem] w-[1.125rem] rounded-full ${getStyleBullet(
                'Basic'
              )}`"
            ></button>
            <div class="flex flex-col gap-[0.25rem] items-center p-[1.25rem]">
              <h5
                :class="`text-[1.375rem] font-semibold ${getStyleTitle(
                  'Basic'
                )}`"
              >
                Basic
              </h5>
              <p class="text-[0.9375rem] text-neutral-50 text-center">
                A simple start for subcontract/carrier
              </p>
              <div class="flex flex-row items-center">
                <p class="text-[0.9375rem] text-second-50">%</p>
                <p class="text-[2rem] text-second-50 font-semibold">.015</p>
                <p class="text-[0.9375rem] text-neutral-80">/month</p>
              </div>
            </div>
          </div>
          <div
            :class="`flex-grow w-[30%] relative border rounded-md ${getStyleBorder(
              'Standard'
            )}`"
          >
            <button
              @click="onClickType('Standard')"
              :class="`absolute top-[0.625rem] right-[0.625rem] h-[1.125rem] w-[1.125rem] rounded-full ${getStyleBullet(
                'Standard'
              )}`"
            ></button>
            <div class="flex flex-col gap-[0.25rem] items-center p-[1.25rem]">
              <h5
                :class="`text-[1.375rem] font-semibold ${getStyleTitle(
                  'Standard'
                )}`"
              >
                Standard
              </h5>
              <p class="text-[0.9375rem] text-neutral-50 text-center">
                A simple start for subcontract/carrier
              </p>
              <div class="flex flex-row items-center">
                <p class="text-[0.9375rem] text-second-50">%</p>
                <p class="text-[2rem] text-second-50 font-semibold">.025</p>
                <p class="text-[0.9375rem] text-neutral-80">/month</p>
              </div>
            </div>
          </div>
          <div
            :class="`flex-grow w-[30%] relative border rounded-md ${getStyleBorder(
              'Enterprise'
            )}`"
          >
            <button
              @click="onClickType('Enterprise')"
              :class="`absolute top-[0.625rem] right-[0.625rem] h-[1.125rem] w-[1.125rem] rounded-full ${getStyleBullet(
                'Enterprise'
              )}`"
            ></button>
            <div class="flex flex-col gap-[0.25rem] items-center p-[1.25rem]">
              <h5
                :class="`text-[1.375rem] font-semibold ${getStyleTitle(
                  'Enterprise'
                )}`"
              >
                Enterprise
              </h5>
              <p class="text-[0.9375rem] text-neutral-50 text-center">
                Solution for carrier/shippers
              </p>
              <div class="flex flex-row items-center">
                <p class="text-[0.9375rem] text-second-50">%</p>
                <p class="text-[2rem] text-second-50 font-semibold">.050</p>
                <p class="text-[0.9375rem] text-neutral-80">/month</p>
              </div>
            </div>
          </div>
        </div>
        <p class="text-[0.875rem] text-neutral-60">
          *Per invoice managed/processed
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-[1.5rem]">
      <div class="flex flex-col gap-[0.375rem]">
        <h3 class="text-[1.625rem] text-neutral-100 font-semibold">
          Payment Information
        </h3>
        <p class="text-[0.938rem] text-neutral-50">
          Enter your card information
        </p>
      </div>
      <div class="flex flex-row flex-wrap gap-[1rem]">
        <div class="flex-grow flex flex-col w-[70%]">
          <h5 class="text-[0.75rem] text-neutral-100 font-semibold">
            Card Nuimber
          </h5>
          <input
            class="w-full border border-neutral-30 rounded-lg text-[0.875rem] text-neutral-100 placeholder:text-neutral-50 px-[1rem] py-[0.5rem] focus:ring-0 focus:outline-none focus:border-neutral-30"
            type="text"
            placeholder="7465 8374 5837 5067"
          />
        </div>
        <div class="flex-grow flex flex-col w-[20%]">
          <h5 class="text-[0.75rem] text-neutral-100 font-semibold">
            Promo Code
          </h5>
          <input
            class="w-full border border-neutral-30 rounded-lg text-[0.875rem] text-neutral-100 placeholder:text-neutral-50 px-[1rem] py-[0.5rem] focus:ring-0 focus:outline-none focus:border-neutral-30"
            type="text"
            placeholder="MM/YY"
          />
        </div>
        <div class="flex-grow flex flex-col w-[44%]">
          <h5 class="text-[0.75rem] text-neutral-100 font-semibold">
            Name on Card
          </h5>
          <input
            class="w-full border border-neutral-30 rounded-lg text-[0.875rem] text-neutral-100 placeholder:text-neutral-50 px-[1rem] py-[0.5rem] focus:ring-0 focus:outline-none focus:border-neutral-30"
            type="text"
            placeholder="7465 8374 5837 5067"
          />
        </div>
        <div class="flex-grow flex flex-col w-[20%]">
          <h5 class="text-[0.75rem] text-neutral-100 font-semibold">
            Expire Date
          </h5>
          <input
            class="w-full border border-neutral-30 rounded-lg text-[0.875rem] text-neutral-100 placeholder:text-neutral-50 px-[1rem] py-[0.5rem] focus:ring-0 focus:outline-none focus:border-neutral-30"
            type="text"
            placeholder="MM/YY"
          />
        </div>
        <div class="flex-grow flex flex-col w-[20%]">
          <h5 class="text-[0.75rem] text-neutral-100 font-semibold">
            CVV Code
          </h5>
          <input
            class="w-full border border-neutral-30 rounded-lg text-[0.875rem] text-neutral-100 placeholder:text-neutral-50 px-[1rem] py-[0.5rem] focus:ring-0 focus:outline-none focus:border-neutral-30"
            type="text"
            placeholder="234"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-[1.5rem]">
      <div class="flex flex-col gap-[0.375rem]">
        <h3 class="text-[1.625rem] text-neutral-100 font-semibold">
          General Question Support
        </h3>
        <p class="text-[0.938rem] text-neutral-50">
          Want to speed up onboarding. Schedule a 30 min call with our customer
          services reps .
        </p>
      </div>
      <div
        class="flex flex-row items-stretch gap-[2rem] border border-neutral-30 rounded-lg px-[1rem] py-[0.875rem]"
      >
        <div class="flex-grow w-[50%]">
          <Calendar />
        </div>
        <div class="w-[1px] border-r border-neutral-30"></div>
        <div class="flex-grow w-[40%] grid grid-cols-3 gap-[0.75rem]">
          <button
            v-for="n in time.length"
            :key="n"
            :class="`border rounded-lg align-center text-center px-[1.375rem] py-[0.75rem] ${getStyleBorderTime(
              time[n - 1]
            )} ${getStyleTextTime(time[n - 1])}`"
            @click="() => onClickTime(time[n - 1])"
          >
            {{ time[n - 1] }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
