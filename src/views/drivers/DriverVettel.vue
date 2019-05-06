<template>
  <section class="DriverVettel">
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
                <img class="shadow-2 max-w-300p" :src="imageProfile" />
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

const driversURL = "drivers/vettel.json";

export default {
  name: "DriverVettel",
  components: {
    NavigateBack,
    Spinner
  },
  data() {
    return {
      loading: true,
      imageProfile: require("@/assets/sebastian-vettel.jpg"),
      imageFlag: require("@/assets/german.png"),
      imageDrive: require("@/assets/sebastian-vettel-drive.jpg"),
      driverSummary:
        "Vettel started his Formula One career as a test driver for BMW Sauber in 2006 and made his racing debut with the team at the 2007 United States Grand Prix, replacing the injured Robert Kubica. Already part of the Red Bull programme, Vettel joined Toro Rosso later in the season, and was kept as a driver for 2008. In his first full season in Formula One, although the latter record was broken by Max Verstappen in 2016. He won four races en route to becoming the youngest-ever World Drivers' Championship runner-up.",
      Vettel: []
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
