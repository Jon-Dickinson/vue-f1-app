<template>
  <header class="drivers-header">
    <h1
      class="margin-tb-0 font-w--300 t-align--l font--s-1-25 font-s--15--under-768 color--ffffff"
    >
      Champion Drivers
      <span class="font-w--300 pad-lr-20 font-s--13 color--ffffff">
        2005 - 2015
      </span>
    </h1>
  </header>
</template>

<script>
export default {
  name: "DriversHeader"
};
</script>

<style scoped>
.drivers-header {
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: 100px;
  width: 100%;
}

@media screen and (max-width: 768px) {
  .drivers-header {
    min-height: 50px;
    padding-left: 5px;
    padding-right: 5px;
  }
}
</style>
