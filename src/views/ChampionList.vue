<template>
  <div class="ChampionList">
    <Navigation />
    <div class="flex-mid-container max-w-960">
      <div class="interface">
        <ChampionsHeader />
        <WorldChampions />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/global/Navigation.vue";
import ChampionsHeader from "@/components/ChampionsHeader.vue";
import WorldChampions from "@/components/WorldChampions.vue";

export default {
  name: "ChampionList",
  components: {
    Navigation,
    ChampionsHeader,
    WorldChampions
  }
};
</script>
