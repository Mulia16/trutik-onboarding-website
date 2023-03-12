<script lang="ts">
import CustomButton from "../../components/CustomButton.vue";

export default {
  name: "StepVerification",
  mounted() {
    if (this.$refs["code"] != undefined) {
      const codes: HTMLInputElement[] = this.$refs[
        "code"
      ] as HTMLInputElement[];
      for (let i = 0; i < codes.length; i++) {
        codes[i].addEventListener("keydown", function (event) {
          if (event.key === "Backspace") {
            codes[i].value = "";
            if (i !== 0) codes[i - 1].focus();
          } else {
            if (i === codes.length - 1 && codes[i].value !== "") {
              return true;
            } else if (event.key >= "0" && event.key <= "9") {
              codes[i].value = event.key;
              if (i !== codes.length - 1) codes[i + 1].focus();
            }
            event.preventDefault();
          }
        });
      }
    }
  },
  components: { CustomButton },
};
</script>

<template>
  <div class="flex flex-col gap-[1.5rem]">
    <div class="flex flex-col gap-[0.375rem]">
      <h3 class="text-[1.625rem] text-neutral-100 font-semibold">
        Account Verification Step 💬
      </h3>
      <p class="text-[0.9375rem] text-neutral-50">
        We sent a verification code to your mobile. Enter the code from the
        mobile in the field below.
      </p>
      <p class="text-[0.9375rem] text-neutral-100 font-semibold">******9763</p>
    </div>
    <div class="flex flex-col gap-[1rem]">
      <div class="flex flex-col gap-[0.375rem]">
        <p class="text-[0.9375rem] text-neutral-80 font-semibold">
          Type your 6 digit security code
        </p>
        <div class="flex flex-row gap-[0.625rem]">
          <input
            v-for="n in 6"
            :key="n"
            :ref="'code'"
            class="text-center w-[3.5rem] h-[3rem] border border-neutral-30 rounded-lg text-[1rem] text-neutral-100 focus:border-neutral-30 focus:outline-none focus:ring-0"
            type="text"
            maxlength="1"
            pattern="\d*"
          />
        </div>
      </div>
      <CustomButton
        text="Verify my account"
        :handle-click="() => {}"
        custom-style="bg-primary-50 h-[2.5rem] w-[24.125rem] text-[0.875rem] text-neutral-0 font-semibold"
      />
      <p class="text-[0.9375rem] text-neutral-80">
        Didn't get the code? <span class="text-info-50">Resend</span>
      </p>
    </div>
  </div>
</template>
