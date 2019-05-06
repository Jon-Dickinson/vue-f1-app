<template>
  <div class="spinner">
    <div class="edge-cube1 cube" />
    <div class="edge-cube2 cube" />
    <div class="edge-cube4 cube" />
    <div class="edge-cube3 cube" />
  </div>
</template>

<script>
export default {
  name: "Spinner"
};
</script>

<style scoped>
.spinner {
  position: relative;
  margin: 8px 4px;
  width: 66px;
  height: 66px;
  perspective: 500px;
  perspective-origin: 50%, 50%;
}

.spinner .cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  transform: scale(1.1);
}

.spinner .cube:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  animation: FoldingCube 2.5s infinite linear both;
  transform-origin: 100% 100%;
}

.spinner .edge-cube2 {
  transform: scale(1.1) rotateZ(90deg);
}

.spinner .edge-cube3 {
  transform: scale(1.1) rotateZ(180deg);
}

.spinner .edge-cube4 {
  transform: scale(1.1) rotateZ(270deg);
}

.spinner .edge-cube2:before {
  animation-delay: 0.3s;
}

.spinner .edge-cube3:before {
  animation-delay: 0.6s;
}

.spinner .edge-cube4:before {
  animation-delay: 0.9s;
}

@keyframes FoldingCube {
  0%,
  10% {
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}
</style>
