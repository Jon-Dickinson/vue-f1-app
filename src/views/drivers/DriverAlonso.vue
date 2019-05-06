<template>
  <section class="DriverAlonso">
    <NavigateBack />
    <div class="flex-mid-container max-w-960">
      <div class="interface">
        <div v-if="loading">
          <Spinner />
        </div>
        <div v-else-if="driver && driver.MRData">
          <div
            v-for="(tableDriver, index) of driver.MRData.DriverTable.Drivers"
            :key="'table-' + index"
          >
            <div
              class="if__content-panel align--center min-h-100p min-h-50p--under-768 padding-lr-5--under-768"
            >
              <h1
                class="margin-tb-0 font-w--300 t-align--l font--s-1-25 font-s--15--under-768 color--ffffff"
              >
                {{ tableDriver.givenName }} {{ tableDriver.familyName }}
              </h1>
            </div>
            <div
              class="data-block align--flex-start bg-primary-5a shadow-2 pad-tb-20 column-under--768"
            >
              <div class="ib__content-panel">
                <img
                  class="shadow-2 max-w-300p max-w-100-perc--under-768"
                  :src="imageProfile"
                />
              </div>
              <div
                class="if__content-panel align--flex-start direction--column w-100-perc padding-l-20 padding-lr-0--under-768"
              >
                <div
                  class="horizontal-inline-flex direction--column hide--under-768"
                >
                  <div class="ib__content-panel w-100-perc">
                    <img class="shadow-2 w-100-perc" :src="imageDrive" />
                  </div>
                </div>
                <p class="color--ffffff t-align--l margin-t-10">
                  {{ driverSummary }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavigateBack from "@/components/global/NavigateBack.vue";
import Spinner from "@/components/global/Spinner.vue";
import { HTTP } from "@/server.js";

const driversURL = "drivers/alonso.json";

export default {
  name: "DriverAlonso",
  components: {
    NavigateBack,
    Spinner
  },
  data() {
    return {
      loading: true,
      imageProfile: require("@/assets/fernando-alonso.jpg"),
      imageFlag: require("@/assets/spain.png"),
      imageDrive: require("@/assets/fernando-alonso-drive.jpg"),
      driverSummary:
        "Alonso has held various driving records in Formula One. He was formerly the youngest driver to qualify on pole position and to win a Grand Prix at the 2003 Malaysian Grand Prix and the 2003 Hungarian Grand Prix respectively. He was the youngest World champion upon clinching the title at the age of 24 years and 58 days, and subsequently the youngest double World Champion.",
      Alonso: []
    };
  },
  created() {
    HTTP.get(`${driversURL}`).then(response => {
      this.driver = response.data;
      this.loading = false;
    });
  }
};
</script>
