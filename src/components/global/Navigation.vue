<template>
  <nav class="navigation bg-primary-5a shadow-2">
    <router-link class="logo-block bg-color-race-red" to="/">
      <span class="font--s-2-25 font-w--500 color--ffffff">
        F1
      </span>
    </router-link>
    <div class="if__content-panel">
      <router-link class="icon-block icon" to="/">
        <span class="icon-link icon-trophy" />
      </router-link>
      <router-link class="icon-block icon" to="/driver/">
        <span class="icon-link icon-person" />
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
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

.logo-block {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  min-width: 72px;
  max-width: 72px;
  height: 72px;
}

.logo-block.router-link-exact-active {
  border-bottom: none;
}
</style>
