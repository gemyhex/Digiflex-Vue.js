<template>
  <div class="container-fluid movies-wrapper-d">
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
                    Movies
                  </li>
                </ol>
              </nav>
              <h2>Movies <span>.</span></h2>
              <p>
                All new released Hollywood and world movies here to watch
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="movies-wrap">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 shuffle-list">
            <ul class="list-unstyled">
              <li>&larr;</li>
              <li
                @click="
                  shuffleMovies('page_o');
                  window.location.reload();
                "
              >
                1
              </li>
              <li
                @click="
                  shuffleMovies('page_t');
                  window.location.reload();
                "
              >
                2
              </li>
              <li
                @click="
                  shuffleMovies('page_th');
                  window.location.reload();
                "
              >
                3
              </li>
              <li
                @click="
                  shuffleMovies('page_f');
                  window.location.reload();
                "
              >
                4
              </li>
              <li>&rarr;</li>
            </ul>
          </div>
        </div>
        <div class="row shuffle-items" v-if="rowClass === 'page_o'">
          <div
            class="col-lg-4 col-md-6 pt-5 m-item"
            v-for="movie in getMoviesRowsOne"
            :key="movie.id"
          >
            <div class="item-img">
              <img :src="movie.imgSrc" alt="" />
            </div>
            <div class="mov-i">
              <span>{{ movie.movieDate }}</span>
              <span id="mov-t">{{ movie.movieCat }}</span>
              <span id="mov-d">{{ movie.movieQuality }}</span>
              <h5>
                <a href="#">{{ movie.movieName }}</a>
              </h5>
            </div>
          </div>
        </div>
        <div class="row shuffle-items" v-if="rowClass === 'page_t'">
          <div
            class="col-lg-4 col-md-6 pt-5 m-item"
            v-for="movie in getMoviesRowsTwo"
            :key="movie.id"
          >
            <div class="item-img">
              <img :src="movie.imgSrc" alt="" />
            </div>
            <div class="mov-i">
              <span>{{ movie.movieDate }}</span>
              <span id="mov-t">{{ movie.movieCat }}</span>
              <span id="mov-d">{{ movie.movieQuality }}</span>
              <h5>
                <a href="#">{{ movie.movieName }}</a>
              </h5>
            </div>
          </div>
        </div>
        <div class="row shuffle-items" v-if="rowClass === 'page_th'">
          <div
            class="col-lg-4 col-md-6 pt-5 m-item"
            v-for="movie in getMoviesRowsThree"
            :key="movie.id"
          >
            <div class="item-img">
              <img :src="movie.imgSrc" alt="" />
            </div>
            <div class="mov-i">
              <span>{{ movie.movieDate }}</span>
              <span id="mov-t">{{ movie.movieCat }}</span>
              <span id="mov-d">{{ movie.movieQuality }}</span>
              <h5>
                <a href="#">{{ movie.movieName }}</a>
              </h5>
            </div>
          </div>
        </div>
        <div class="row shuffle-items" v-if="rowClass === 'page_f'">
          <div
            class="col-lg-4 col-md-6 pt-5 m-item"
            v-for="movie in getMoviesRowsFour"
            :key="movie.id"
          >
            <div class="item-img">
              <img :src="movie.imgSrc" alt="" />
            </div>
            <div class="mov-i">
              <span>{{ movie.movieDate }}</span>
              <span id="mov-t">{{ movie.movieCat }}</span>
              <span id="mov-d">{{ movie.movieQuality }}</span>
              <h5>
                <a href="#">{{ movie.movieName }}</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movies-wrapper-d {
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

  .movies-wrap {
    .shuffle-list {
      ul {
        width: fit-content;
        display: flex;
        margin: 10px auto;
        li {
          height: 100%;
          border: 1px solid rgb(238, 238, 238);
          padding: 10px 25px;
          font-weight: bold;
          &:hover,
          &.active {
            cursor: pointer;
            // background: red;
            // color: white;
          }
        }
      }
    }

    .shuffle-items {
      transition: all 1s ease;
      .m-item {
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
            a {
              color: #333;
              font-weight: bold;
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>

<script>
import movies from "../data/movies.json";
export default {
  data() {
    return {
      Movies: movies,
      rowClass: "page_o"
    };
  },
  methods: {
    shuffleMovies(rowclass) {
      this.rowClass = rowclass;
    }
  },
  computed: {
    getMoviesRowsOne() {
      return this.Movies.slice(1, 10);
    },
    getMoviesRowsTwo() {
      return this.Movies.slice(11, 20);
    },
    getMoviesRowsThree() {
      return this.Movies.slice(21, 30);
    },
    getMoviesRowsFour() {
      return this.Movies.slice(31, 36);
    }
  },
  components: {}
};
</script>
