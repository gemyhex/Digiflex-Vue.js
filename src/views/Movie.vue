<template>
  <div class="col-lg-4 col-md-6 pt-5 m-item">
    <div class="item-img">
      <img
        :src="require('@/assets/' + movie.imgSrc)"
        alt=""
        @click="openDetails"
      />
    </div>
    <div class="mov-i">
      <span>{{ movie.movieDate }}</span>
      <span id="mov-t">{{ movie.movieCat }}</span>
      <span id="mov-d">{{ movie.movieQuality }}</span>
      <h5 @click="openDetails">{{ movie.movieName }} </h5>
      <button id="btnaddfav" @click="addToFav(movie)">add to favorite</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    movie: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    openDetails() {
      this.$router.push({
        name: "moviePreview",
        params: { id: this.movie.id }
      });
    }
  }
};
</script>

<style lang="scss">
.m-item {
  width: 100%;
  .item-img {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .mov-i {
    padding-top: 10px;

    span {
      font-size: 0.8rem;
      font-weight: bold;
    }
    #mov-t {
      color: red;
      font-weight: bold;
      padding-left: 5%;
    }
    #mov-d {
      color: #d4d4d4;
      border: 1px solid #a3a3a8;
      float: right;
      padding: 1px 2px;
      font-size: 0.6rem;
      font-weight: bold;
    }
    h5 {
      color: #333;
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
    }
    #btnaddfav {
      text-transform: uppercase;
      font-size: 0.9rem;
      font-weight: bold;
      background: #333;
      color: #fff;
      padding: 15px 35px;
      border: 1px solid #333;
      &:hover {
        background: red;
        transition: 0.6s all ease;
        border: 1px solid red;
      }
    }
  }
}
</style>
