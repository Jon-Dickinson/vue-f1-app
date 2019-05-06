<template>
  <div class="if__content-panel align--center">
    <h1 class="margin-tb-0 font-w--300 font--s-1 color--ffffff ">
      {{ tableDriver.givenName }} {{ tableDriver.familyName }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "ContentRow",
  props: {
    tableDriver: {
      type: Object
    }
  },
  data() {
    return {
      result: []
    };
  }
};
</script>
