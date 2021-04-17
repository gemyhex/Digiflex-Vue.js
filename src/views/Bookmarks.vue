<template>
  <div class="container-fluid bookmarks-wrapper">
    <div class="heading-wrap">
      <div class="row">
        <div class="col-lg-12 page-head">
          <img src="@/assets/page-header-bg.jpg" alt="" />
          <div class="overlay">
            <div class="cont">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/" @click="window.location.reload()"
                      >Home</router-link
                    >
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Bookmarks
                  </li>
                </ol>
              </nav>
              <h2>Bookmarks<span>.</span></h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row bookmarks-wrap">
      <div
        class="col-lg-4 col-md-6 pt-5 m-item"
        v-for="movie in favorites"
        :key="movie.id"
      >
        <div class="item-img">
          <img :src="movie.imgSrc" alt="" />
        </div>
        <div class="mov-i">
          <span>{{ movie.movieDate }} Film</span>
          <span id="mov-t">{{ movie.movieCat }}</span>
          <span id="mov-d">{{ movie.movieQuality }}</span>
          <h5>
            <a href="#">{{ movie.movieName }}</a>
          </h5>
          <button id="btnaddfav" @click="removeFromFav(movie)">
            add to favorite
          </button>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="container">
        <h6>see all list</h6>
        <h4>Find your favorite</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgSrc", "movieDate", "movieCat", "movieQuality", "movieName"],
  data() {
    return {
      props: {
        favorites: {
          type: Array,
          default: null
        }
      }
    };
  },
  methods: {
    // removeFromFav(movie){
    //   this.$emit('removeFromFav');
    // }
  }
};
</script>

<style lang="scss">
.bookmarks-wrapper {
  .page-head {
    position: relative;
    padding: 0;
    height: 400px;
    .breadcrumb {
      background: transparent;
      li {
        a {
          color: white;
          font-weight: bold;
        }
      }
    }
    .overlay {
      .cont {
        position: absolute;
        bottom: 40%;
        left: 15%;
        color: #fff;
        h2 {
          font-size: 3rem;
          font-weight: bolder;
          span {
            color: red;
          }
        }
        p {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
