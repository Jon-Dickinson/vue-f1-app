<template>
  <section class="DriverButton">
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

const driversURL = "drivers/button.json";

export default {
  name: "DriverButton",
  components: {
    NavigateBack,
    Spinner
  },
  data() {
    return {
      loading: true,
      imageProfile: require("@/assets/jenson-button.jpg"),
      imageFlag: require("@/assets/uk.png"),
      imageDrive: require("@/assets/jenson-button-drive.jpg"),
      driverSummary:
        "Button began karting at the age of eight and achieved early success, before progressing to car racing in the British Formula Ford Championship and the British Formula 3 Championship. He first drove in Formula One with Williams for the 2000 season. The following year he switched to Benetton, which in 2002 became Renault, and then for the 2003 season he moved to BAR. In 2004 he finished 3rd in the World Drivers Championship, with only the two Ferraris ahead of him.",
      Button: []
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
