<template>
  <div id="app" class="body-wrapper">
    <div class="router-wrapper">
      <!-- global navigation within router-view -->
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      home: []
    };
  }
};
</script>
