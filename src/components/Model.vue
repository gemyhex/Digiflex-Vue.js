<template>
  <transition name="model">
    <div class="model-mask" @click="closeModel">
      <div class="model-wrapper">
        <div class="model-container">
          <div class="model-header">
            <slot name="header"></slot>
          </div>

          <div class="model-body">
            <slot name="body"></slot>
          </div>

          <div class="model-footer">
            <button @click="$emit('close')">Close</button>
            <slot name="footer">
              <div></div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    closeModel(e) {
      if (
        e.target.className === "model-mask" ||
        e.target.className === "model-wrapper"
      ) {
        this.$emit("close");
      }
    }
  }
};
</script>

<style lang="scss">
.model-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;

  .model-wrapper {
    margin: 2rem 10px 10px 10px;

    .model-container {
      max-width: 400px;
      margin: 0px auto;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      transition: all 0.3s ease;

      .model-header {
        background-color: #fff;
        padding: 10px;
        color: #333;
        text-transform: uppercase;
        text-align: center;
        font-weight: bold;
      }

      .model-body {
        padding: 20px;
        background-color: rgb(255, 255, 255);
        max-height: 550px;
        overflow: auto;

        input {
          margin: 5px 0;
          width: 100%;
          height: 35px;
          padding: 2px 15px;
        }

        textarea {
          width: 100%;
          padding: 8px 15px;
          margin: 5px 0;
        }
      }

      .model-footer {
        padding: 10px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;

        button {
          background-color: #e10505;
          border: none;
          padding: 10px 7px;
          width: fit-content;
          color: white;
          cursor: pointer;
          text-transform: uppercase;
          outline: none;
          font-weight: 600;
        }
        #add-movie {
          background: green;
        }
      }

      .model-enter {
        opacity: 0;
      }

      .model-leave-active {
        opacity: 0;
      }

      .model-enter .model-container,
      .model-leave-active .model-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
  }
}
</style>
