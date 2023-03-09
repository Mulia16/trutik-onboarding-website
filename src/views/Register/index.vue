<script lang="ts">
import { markRaw } from "vue";

import LogoTrutik from "../../assets/images/logo-trutik.png";
import IconSmartHome from "../../assets/icons/smart-home.vue";
import StepperItem from "../../components/StepperItem.vue";
import CustomButton from "../../components/CustomButton.vue";

export default {
  name: "Register",
  data() {
    return {
      LogoTrutik,
      IconSmartHome: markRaw(IconSmartHome),
      stepperPath: [
        {
          step: 1,
          path: "account",
        },
        {
          step: 2,
          path: "personal",
        },
        {
          step: 3,
          path: "verification",
        },
        {
          step: 4,
          path: "creation",
        },
      ],
    };
  },
  components: {
    StepperItem,
    CustomButton,
  },
  computed: {
    currentStep() {
      const path = this.$router.currentRoute.path.split("/")[2];
      const step = this.stepperPath
        .map((stepper) => stepper.path)
        .indexOf(path);
      return step;
    },
  },
  methods: {
    getStatusStepper(step: number) {
      if (this.currentStep > step) return "FILLED";
      else if (this.currentStep == step) return "ACTIVE";
      else return "UNFILLED";
    },
    onClickPrevious() {
      if (this.currentStep == 0) this.$router.back();
      else {
        this.$router.push(
          `/register/${this.stepperPath[this.currentStep - 1].path}`
        );
        window.scrollTo(0, 0);
      }
    },
    onClickNext() {
      if (this.currentStep == 3) {
      } else {
        this.$router.push(
          `/register/${this.stepperPath[this.currentStep + 1].path}`
        );
        window.scrollTo(0, 0);
      }
    },
  },
};
</script>

<template>
  <div class="flex flex-row min-h-screen">
    <div
      class="flex-grow w-[30%] flex flex-col justify-between px-[2.5rem] pb-[2.5rem] pt-[4.75rem] bg-second-50 bg-register bg-no-repeat bg-[length:100%_100%]"
    >
      <div class="flex flex-col gap-[7.5rem]">
        <img
          :src="LogoTrutik"
          alt="Logo Trutik"
          class="h-[2.625rem] w-[7.375rem]"
        />
        <div class="flex flex-col gap-[2rem]">
          <h1 class="text-[2rem] text-neutral-0 font-bold">
            SAVE THE TREES! LET’S GO PAPERLESS FULL TRANPARENCY
          </h1>
          <p class="text-[1rem] text-neutral-0">
            It’s Not Just About Shipping A Product . It’s EFFICIENTLY
            Transferring Information . Tied To That PRODUCT . <br /><br />We
            Eliminated The MAN-MADE Errors in Between And Create Real-Time
            TRANSPARENCY Between All Parties Involved.
          </p>
        </div>
      </div>
      <div class="flex flex-row gap-[1.25rem]">
        <a href="#" class="text-[0.875rem] !text-neutral-0">Help</a>
        <a href="#" class="text-[0.875rem] !text-neutral-0">Privacy</a>
        <a href="#" class="text-[0.875rem] !text-neutral-0"
          >Terms & Conditions</a
        >
      </div>
    </div>
    <div class="flex-grow w-[70%] flex flex-col justify-between gap-[3.5rem]">
      <div
        class="flex flex-row px-[2.5rem] py-[1.5rem] items-center gap-[1rem] border-b border-neutral-30"
      >
        <StepperItem
          :icon="IconSmartHome"
          :step="1"
          title="Account"
          :statusStepper="getStatusStepper(0)"
        />
        <div class="flex-grow h-px bg-neutral-40"></div>
        <StepperItem
          :icon="IconSmartHome"
          :step="2"
          title="Personal"
          :statusStepper="getStatusStepper(1)"
        />
        <div class="flex-grow h-px bg-neutral-40"></div>
        <StepperItem
          :icon="IconSmartHome"
          :step="3"
          title="Verification"
          :statusStepper="getStatusStepper(2)"
        />
        <div class="flex-grow h-px bg-neutral-40"></div>
        <StepperItem
          :icon="IconSmartHome"
          :step="4"
          title="Creation"
          :statusStepper="getStatusStepper(3)"
        />
      </div>
      <div class="flex-grow px-[5rem]">
        <router-view></router-view>
      </div>
      <div
        class="flex flex-row px-[1.5rem] py-[0.75rem] justify-between border-t border-neutral-30 gap-[3.5rem]"
      >
        <CustomButton
          :text="currentStep == 0 ? 'Cancel' : 'Previous'"
          custom-style="border border-neutral-30 text-[0.875rem] text-neutral-90 font-semibold w-[7rem] h-[2.375rem]"
          :handle-click="() => onClickPrevious()"
        />
        <CustomButton
          text="Next"
          custom-style="bg-primary-50 text-[0.875rem] text-neutral-0 font-semibold w-[7rem] h-[2.375rem]"
          :handle-click="() => onClickNext()"
        />
      </div>
    </div>
  </div>
</template>
