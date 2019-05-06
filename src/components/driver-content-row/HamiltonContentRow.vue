<template>
  <div v-if="loading">
    <Spinner />
  </div>
  <div
    v-else-if="driver && driver.MRData"
    class="driver-content-row driver-content-row--left-angle-edge shadow-2 bg-primary-5a"
  >
    <div
      v-for="(tableDriver, index) of driver.MRData.DriverTable.Drivers"
      :key="'table-' + index"
      class="cssr-card--row padding-l-0"
    >
      <ContentRow :table-driver="tableDriver" />
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/global/Spinner.vue";
import ContentRow from "@/components/global/ContentRow.vue";
import { HTTP } from "@/server.js";

const driversURL = "drivers/hamilton.json";

export default {
  name: "HamiltonContentRow",
  components: {
    Spinner,
    ContentRow
  },
  data() {
    return {
      loading: true,
      Hamilton: []
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
