<template>
  <nav class="navigation bg-primary-5a shadow-2">
    <div class="icon-block icon force-router-link--active">
      <a class="icon-link icon-arrow_left" @click="NavigateBack()" />
    </div>
  </nav>
</template>

<script>
import router from "@/router";

export default {
  name: "NavigateBack",
  methods: {
    NavigateBack() {
      router.go(-1);
    }
  }
};
</script>

<style scoped>
.navigation {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>
