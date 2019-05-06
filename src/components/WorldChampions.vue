<template>
  <div class="info vertical-inline-flex">
    <div v-if="loading">
      <Spinner />
    </div>
    <div v-else-if="info && info.MRData" class="vertical-inline-flex">
      <div
        v-for="(tableStanding, indexA) of info.MRData.StandingsTable
          .StandingsLists"
        :key="'table-' + indexA"
        class="horizontal-inline-flex align--center"
      >
        <router-link
          class="champion-panel bg-primary-5a left-angle-edge"
          :to="'season/' + tableStanding.season"
        >
          <span
            class="flex--1 margin-r-20 font-s--18 color--ffffff font-s--14--under-768"
          >
            {{ tableStanding.season }}
          </span>
          <div
            v-for="(driverStanding, indexB) of tableStanding.DriverStandings"
            :key="'driver-' + indexB"
            class="if__content-panel align--center w-100-perc justify--space-between column-under--1024"
          >
            <div
              class="if__content-panel align--center flex--1 w-100-perc--under-1024 margin-l-60 margin-lr-0--under-1024"
            >
              <span class="color--ffffff font-s--18 font-s--15--under-768">
                {{ driverStanding.Driver.givenName }}
              </span>
              <span
                class="color--ffffff font-s--18 font-s--15--under-768 margin-l-5"
              >
                {{ driverStanding.Driver.familyName }}
              </span>
              <div
                v-for="(Constructor, indexC) of driverStanding.Constructors"
                :key="'constructor-' + indexC"
                class="if__content-panel align--center w-100-perc"
              >
                <span
                  class="color--ffffff flex--1 t-align--r margin-r-20 capitalize font-s--14 margin-lr-0--under-1024"
                >
                  {{ Constructor.constructorId }}
                </span>
              </div>
            </div>
            <div
              class="if__content-panel align--center justify--flex-end w-100-perc--under-1024 flex--1"
            >
              <div
                class="if__content-panel flex--2 align--center justify--flex-end justify--flex-start-under--1024"
              >
                <span
                  class="color--ffffff font-s--12 pad-lr-10 padding-l-0--under-1024"
                >
                  points
                </span>
                <span
                  class="color--ffffff font-s--12 pad-lr-10 pad-tb-2 bg-color-blue min-w-40p t-align--c"
                >
                  {{ driverStanding.points }}
                </span>
              </div>
              <div
                class="if__content-panel flex--1 align--center justify--flex-end"
              >
                <span class="color--ffffff font-s--12 pad-lr-10">
                  wins
                </span>
                <span
                  class="color--ffffff font-s--12 pad-lr-10 pad-tb-2 bg-color-race-red min-w-35p t-align--c"
                >
                  {{ driverStanding.wins }}
                </span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/global/Spinner.vue";
import { HTTP } from "@/server.js";

const driverStanding = "driverStandings/1.json?limit=11&offset=55";

export default {
  name: "Info",
  components: {
    Spinner
  },
  data() {
    return {
      loading: true,
      error: null,
      info: []
    };
  },
  created() {
    HTTP.get(`${driverStanding}`).then(response => {
      this.info = response.data;
      this.loading = false;
    });
  }
};
</script>

<style scoped>
.champion-panel {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  margin: 0 0 5px;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.left-angle-edge:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  border: var(--border-width) solid var(--color-border);
  background-color: var(--primary-5);
  height: 350px;
  transform: rotate(25deg) translate(-50%, -50%);
  transition: all 0.3s ease;
}

.left-angle-edge:hover:before {
  content: "";
  left: 50%;
  border-color: var(--secondary-4a);
  transform: rotate(0deg) translate(-50%, -50%);
}

@media screen and (max-width: 768px) {
  .champion-panel {
    padding: 5px 20px;
  }

  .left-angle-edge:before {
    transform: none;
    background-color: transparent;
    border: none;
  }
}
</style>
