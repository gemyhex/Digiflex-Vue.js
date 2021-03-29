<template>
  <div class="cont" v-if="!isLoaded">
    <div class="scaling-squares-spinner" :style="spinnerStyle">
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isLoaded: false
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        setInterval(() => {
          this.isLoaded = true;
        }, 2000);
      }
    };
  }
};
</script>

<style scoped>
.cont {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.scaling-squares-spinner,
.scaling-squares-spinner * {
  box-sizing: border-box;
}

.scaling-squares-spinner {
  height: 65px;
  width: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  animation: scaling-squares-animation 1250ms;
  animation-iteration-count: infinite;
  transform: rotate(0deg);
}

.scaling-squares-spinner .square {
  height: calc(100px * 0.25 / 1.3);
  width: calc(100px * 0.25 / 1.3);
  margin-right: auto;
  margin-left: auto;
  border: calc(65px * 0.04 / 1.3) solid #ff1d5e;
  position: absolute;
  animation-duration: 1250ms;
  animation-iteration-count: infinite;
}

.scaling-squares-spinner .square:nth-child(1) {
  animation-name: scaling-squares-spinner-animation-child-1;
}

.scaling-squares-spinner .square:nth-child(2) {
  animation-name: scaling-squares-spinner-animation-child-2;
}

.scaling-squares-spinner .square:nth-child(3) {
  animation-name: scaling-squares-spinner-animation-child-3;
}

.scaling-squares-spinner .square:nth-child(4) {
  animation-name: scaling-squares-spinner-animation-child-4;
}

@keyframes scaling-squares-animation {
  50% {
    transform: rotate(90deg);
  }

  100% {
    transform: rotate(180deg);
  }
}

@keyframes scaling-squares-spinner-animation-child-1 {
  50% {
    transform: translate(150%, 150%) scale(2, 2);
  }
}

@keyframes scaling-squares-spinner-animation-child-2 {
  50% {
    transform: translate(-150%, 150%) scale(2, 2);
  }
}

@keyframes scaling-squares-spinner-animation-child-3 {
  50% {
    transform: translate(-150%, -150%) scale(2, 2);
  }
}

@keyframes scaling-squares-spinner-animation-child-4 {
  50% {
    transform: translate(150%, -150%) scale(2, 2);
  }
}
</style>
