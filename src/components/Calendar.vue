<script lang="ts">
import ArrowLeft from "../assets/icons/arrow-left.vue";
import ArrowRight from "../assets/icons/arrow-right.vue";

import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import locale from "dayjs/locale/en";

dayjs.extend(weekday);
dayjs.extend(weekOfYear);
dayjs.locale(locale);

export default {
  name: "Calendar",
  data() {
    return {
      days: ["S", "M", "T", "W", "T", "F", "S"],
      selectedDate: dayjs(),
      choosedDate: dayjs(),
    };
  },
  components: { ArrowLeft, ArrowRight },
  methods: {
    getWeekday(date: string): number {
      return dayjs(date).weekday();
    },
    selectDate(newSelectedDate: dayjs.Dayjs) {
      this.selectedDate = newSelectedDate;
    },
    chooseDate(date: string) {
      this.choosedDate = dayjs(date);
    },
    selectNext() {
      console.log("Next date");
      let newSelectedDate = dayjs(this.selectedDate).add(1, "month");
      this.selectedDate = newSelectedDate;
    },
    selectPrevious() {
      console.log("Previous date");
      let newSelectedDate = dayjs(this.selectedDate).subtract(1, "month");
      this.selectedDate = newSelectedDate;
    },

    getLabelFromDate(date: string) {
      return dayjs(date).format("D");
    },
    getStyleLabel(date: string, isActive: boolean) {
      if (date == this.choosedDate.format("YYYY-MM-DD"))
        return "text-neutral-0";
      else if (isActive) return "text-neutral-100";
      else return "text-neutral-30";
    },
    getStyleBackgroundLabel(date: string) {
      return date == this.choosedDate.format("YYYY-MM-DD")
        ? "bg-primary-50"
        : "bg-neutral-0";
    },
  },
  computed: {
    daysInTheMonth(): { date: string; isActive: boolean }[] {
      return [
        ...this.previousMonthDays,
        ...this.currentMonthDays,
        ...this.nextMonthDays,
      ];
    },
    today(): string {
      return dayjs().format("YYYY-MM-DD");
    },
    month(): number {
      return Number(this.selectedDate.format("M"));
    },
    year(): number {
      return Number(this.selectedDate.format("YYYY"));
    },
    numberOfDaysInMonth(): number {
      return dayjs(this.selectedDate).daysInMonth();
    },
    currentMonthDays(): { date: string; isActive: boolean }[] {
      return [...Array(this.numberOfDaysInMonth)].map((day, index) => {
        return {
          date: dayjs(`${this.year}-${this.month}-${index + 1}`).format(
            "YYYY-MM-DD"
          ),
          isActive: true,
        };
      });
    },
    previousMonthDays(): { date: string; isActive: boolean }[] {
      const firstDayOfTheMonthWeekday = this.getWeekday(
        this.currentMonthDays[0].date
      );
      const previousMonth = dayjs(`${this.year}-${this.month}-01`).subtract(
        1,
        "month"
      );

      const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
        ? firstDayOfTheMonthWeekday
        : 6;

      const previousMonthLastMondayDayOfMonth = dayjs(
        this.currentMonthDays[0].date
      )
        .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
        .date();

      return [...Array(visibleNumberOfDaysFromPreviousMonth)].map(
        (day, index) => {
          return {
            date: dayjs(
              `${previousMonth.year()}-${previousMonth.month() + 1}-${
                previousMonthLastMondayDayOfMonth + index
              }`
            ).format("YYYY-MM-DD"),
            isActive: false,
          };
        }
      );
    },
    nextMonthDays(): { date: string; isActive: boolean }[] {
      const nextMonth = dayjs(`${this.year}-${this.month}-01`).add(1, "month");

      const visibleNumberOfDaysFromNextMonth =
        42 - this.previousMonthDays.length - this.currentMonthDays.length;

      return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
        return {
          date: dayjs(
            `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
          ).format("YYYY-MM-DD"),
          isActive: false,
        };
      });
    },
  },
};
</script>

<template>
  <div class="flex flex-col gap-[2.5rem] items-center">
    <div
      class="w-[80%] flex flex-row gap-[1.25rem] justify-between items-center"
    >
      <button @click="() => selectPrevious()">
        <ArrowLeft class="h-[1rem] w-[0.5rem]" />
      </button>
      <h3 class="text-[1.1875rem] text-neutral-100 font-bold">
        {{ selectedDate.format("MMMM, YYYY") }}
      </h3>
      <button @click="() => selectNext()">
        <ArrowRight class="h-[1rem] w-[0.5rem]" />
      </button>
    </div>
    <div class="w-full flex flex-col gap-[0.75rem]">
      <div class="w-full grid grid-cols-7 gap-[1.5rem]">
        <h4
          v-for="n in days.length"
          :key="n - 1"
          class="text-[1rem] text-neutral-100 font-medium flex flex-col justify-center items-center mx-auto h-[1.875rem] w-[1.875rem]"
        >
          {{ days[n - 1] }}
        </h4>
      </div>
      <div class="w-full h-px border-b border-neutral-30"></div>
      <ol class="w-full grid grid-cols-7 gap-[1.5rem]">
        <li
          v-for="n in daysInTheMonth.length"
          :key="n - 1"
          :class="`text-[1rem] font-medium flex flex-col justify-center items-center mx-auto h-[1.875rem] w-[1.875rem] rounded-lg cursor-pointer ${getStyleLabel(
            daysInTheMonth[n - 1].date,
            daysInTheMonth[n - 1].isActive
          )} ${getStyleBackgroundLabel(daysInTheMonth[n - 1].date)}`"
          @click="
            () =>
              daysInTheMonth[n - 1].isActive
                ? chooseDate(daysInTheMonth[n - 1].date)
                : null
          "
        >
          {{ getLabelFromDate(daysInTheMonth[n - 1].date) }}
        </li>
      </ol>
    </div>
  </div>
</template>
