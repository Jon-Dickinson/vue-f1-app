<template>
  <nav class="navigation bg-primary-5a shadow-2">
    <div
      class="data-block align--center justify--center max-w-200p min-h-72p bg-color-race-red"
    >
      <h1 class="margin-tb-0 font-w--300 t-align--c font--s-1 color--ffffff">
        Error 404
      </h1>
    </div>
    <router-link
      class="icon-block align--center w-100-perc max-w-200p min-h-72p"
      to="/"
    >
      <span class="color--ffffff">
        Home
      </span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "Error404"
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
