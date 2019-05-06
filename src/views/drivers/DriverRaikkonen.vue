<template>
  <section class="DriverRaikkonen">
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

const driversURL = "drivers/raikkonen.json";

export default {
  name: "DriverRaikkonen",
  components: {
    NavigateBack,
    Spinner
  },
  data() {
    return {
      loading: true,
      imageProfile: require("@/assets/kimi-raikkonen.jpg"),
      imageFlag: require("@/assets/finland.png"),
      imageDrive: require("@/assets/kimi-raikkonen-drive.jpg"),
      driverSummary:
        "Räikkönen entered Formula One as a regular driver for Sauber-Petronas in 2001, carrying only 23 car races under his belt. He joined McLaren Mercedes in 2002, and became a title contender by finishing runner-up in the championship to Michael Schumacher in 2003 and Fernando Alonso in 2005. Räikkönen's 2002, 2004 and 2006 seasons were plagued by severe unreliability from his McLaren cars.",
      Raikkonen: []
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
