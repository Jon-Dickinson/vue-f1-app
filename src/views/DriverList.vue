<template>
  <div class="driver">
    <Navigation />
    <div class="flex-mid-container max-w-960">
      <div class="interface">
        <DriversHeader />
        <router-link class="horizontal-inline-flex" to="/driver/alonso">
          <AlonsoContentRow />
        </router-link>
        <router-link class="horizontal-inline-flex" to="/driver/button">
          <ButtonContentRow />
        </router-link>
        <router-link class="horizontal-inline-flex" to="/driver/hamilton">
          <HamiltonContentRow />
        </router-link>
        <router-link class="horizontal-inline-flex" to="/driver/raikkonen">
          <RaikkonenContentRow />
        </router-link>
        <router-link class="horizontal-inline-flex" to="/driver/vettel">
          <VettelContentRow />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/global/Navigation.vue";
import DriversHeader from "@/components/DriversHeader.vue";
import AlonsoContentRow from "@/components/driver-content-row/AlonsoContentRow.vue";
import RaikkonenContentRow from "@/components/driver-content-row/RaikkonenContentRow.vue";
import HamiltonContentRow from "@/components/driver-content-row/HamiltonContentRow.vue";
import ButtonContentRow from "@/components/driver-content-row/ButtonContentRow.vue";
import VettelContentRow from "@/components/driver-content-row/VettelContentRow.vue";

export default {
  name: "DriverList",
  components: {
    Navigation,
    DriversHeader,
    AlonsoContentRow,
    RaikkonenContentRow,
    HamiltonContentRow,
    ButtonContentRow,
    VettelContentRow
  },
  data() {
    return {
      loading: true,
      driver: []
    };
  }
};
</script>

<style>
/* not scoped as this view acts as a parent to .driver-content-row */

.driver-content-row {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  line-height: 1.5;
  border: var(--border-width) solid var(--color-border);
  transition: all 0.3s ease;
  overflow: hidden;
  margin: 0 0 5px;
  padding: 10px 20px;
}

.driver-content-row--left-angle-edge:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  background-color: var(--primary-5);
  height: 300px;
  transform: rotate(20deg) translate(-50%, -50%);
  transition: all 0.3s ease;
}

.driver-content-row--left-angle-edge:hover:before {
  content: "";
  left: 50%;
  transform: rotate(0deg) translate(-50%, -50%);
}

@media screen and (max-width: 768px) {
  .driver-content-row--left-angle-edge:before {
    transform: none;
    background-color: transparent;
    border: none;
  }
}
</style>
