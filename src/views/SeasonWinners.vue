<template>
  <div class="SeasonWinners">
    <NavigateBack />
    <div class="flex-mid-container max-w-960">
      <div class="interface">
        <div
          class="if__content-panel align--center min-h-100p min-h-50p--under-768 padding-lr-5--under-768"
        >
          <h1
            class="margin-tb-0 font-w--300 t-align--l font--s-1-25 font-s--15--under-768 color--ffffff"
          >
            F1 Season {{ $route.params.season }}
          </h1>
        </div>
        <div v-if="loading">
          <Spinner />
        </div>
        <div v-else-if="season && season.MRData" class="vertical-inline-flex">
          <!-- highlight the season winner workaround using CSS -->
          <div
            v-for="(tableRace, index) of season.MRData.RaceTable.Races"
            :key="'table-' + index"
            class="season-panel bg-primary-5a"
          >
            <div
              class="if__content-panel align--center flex--1 max-w-50p max-w-30p--under-768 w-30p--under-768"
            >
              <span class="color--ffffff font-s--14">
                {{ tableRace.round }}
              </span>
            </div>
            <div
              v-for="(tableResult, idx) of tableRace.Results"
              :key="'table-' + idx"
              class="if__content-panel align--center flex--1 flex--2--under-768 column-under--1024 align--flex-start-under--1024"
            >
              <div class="if__content-panel flex--1 align--center">
                <span class="color--ffffff font-s--18 font-s--14--under-768">
                  {{ tableResult.Driver.givenName }}
                </span>
                <span
                  class="color--ffffff font-s--18 font-s--14--under-768 margin-l-5"
                >
                  {{ tableResult.Driver.familyName }}
                </span>
              </div>
              <div class="if__content-panel flex--1 align--center">
                <span class="color--ffffff t-align--l font-s--14--under-768">
                  {{ tableResult.Time.time }}
                </span>
              </div>
            </div>
            <div
              class="if__content-panel flex--1 align--center column-under--1024 align--flex-end-under--1024"
            >
              <div class="flex--1 t-align--l hide--under-768">
                <span class="color--ffffff font-s--14">
                  {{ tableRace.Circuit.circuitName }}
                </span>
              </div>
              <div
                class="flex--1 t-align--r w-150p min-w-150p max-w-150p width-reset-initial--under-768"
              >
                <span class="color--ffffff font-s--14">
                  {{ tableRace.Circuit.Location.country }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigateBack from "@/components/global/NavigateBack.vue";
import Spinner from "@/components/global/Spinner.vue";
import { HTTP } from "@/server.js";

const resultsURL = "results/1.json";

export default {
  name: "SeasonWinners",
  components: {
    NavigateBack,
    Spinner
  },
  data() {
    return {
      loading: true,
      season: []
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.loading = true;
    HTTP.get(`${to.params.season}/${resultsURL}`).then(response => {
      this.setSeason(response.data);
      next();
    });
  },
  beforeRouteEnter(to, from, next) {
    HTTP.get(`${to.params.season}/${resultsURL}`).then(response => {
      next(vm => vm.setSeason(response.data));
    });
  },
  methods: {
    setSeason(data) {
      this.season = data;
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.season-panel {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  padding: 5px 20px;
  margin: 0 0 5px;
  overflow: hidden;
}
</style>
