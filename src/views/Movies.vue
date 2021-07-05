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
              <p>All new released Hollywood and world movies here to watch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="movies-wrap">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <button @click="showModel = true" id="add-movie">
              (+) add movie
            </button>
          </div>
        </div>

        <div class="row shuffle-items">
          <movie v-for="movie in movies" :key="movie.id" :movie="movie"></movie>
        </div>
      </div>
    </div>
  </div>

  <model v-if="showModel" @close="showModel = !showModel">
    <template v-slot:header>
      <h3>Create New Movie</h3>
    </template>

    <template v-slot:body>
      <form @submit.prevent="addMovie" ref="movieForm" id="movie-form">
        <p>Please Fill The Data Below</p>
        <input
          v-model="movieForm.movieName"
          type="text"
          required
          placeholder="MovieName"
        />
        <input
          v-model="movieForm.imgSrc"
          type="text"
          required
          placeholder="Movie Poster Url"
        />
        <input
          v-model="movieForm.movieDate"
          type="text"
          required
          placeholder="MovieDate"
        />
        <input
          v-model="movieForm.movieCat"
          type="text"
          required
          placeholder="MovieCat"
        />
        <input
          v-model="movieForm.movieQuality"
          type="text"
          required
          placeholder="MovieQuality"
        />
        <input
          v-model="movieForm.seasons"
          type="text"
          required
          placeholder="Seasons"
        />

        <textarea
          v-model="movieForm.movieDesc"
          rows="6"
          required
          placeholder="Movie Description"
        ></textarea>
      </form>
    </template>

    <template v-slot:footer>
      <button id="add-movie" @click="$refs.movieForm.requestSubmit()">
        Add
      </button>
    </template>
  </model>
</template>

<style lang="scss" scoped>
.movies-wrapper-d {
  position: relative;
  background: #fff;
  padding: 0;
  padding-bottom: 400px;
  .page-head {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
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
    position: relative;
    top: 400px;
    width: 100%;
    background: #fff;
    z-index: 100;
    padding-top: 40px;
    padding-bottom: 80px;

    #add-movie {
      float: right;
      border: 1px solid white;
      padding: 15px 25px;
      background: red;
      font-weight: 600;
      font-size: 0.9rem;
      text-transform: capitalize;
      color: #fff;
    }
    .shuffle-list {
      ul {
        width: fit-content;
        display: flex;
        margin: 50px 0;

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
    }
  }
}
</style>

<script>
import Movie from "./Movie.vue";
import Model from "../components/Model.vue";
export default {
  data() {
    return {
      showModel: false,
      movies: [],
      rowClass: "page_o",
      favorites: [],
      movieForm: {
        movieName: "",
        imgSrc: "",
        movieDate: "",
        movieCat: "",
        movieQuality: "",
        movieDesc: "",
        seasons: "",
      },
    };
  },
  created() {
    this.movies = this.$store.getters.getMovies;
  },
  methods: {
    // shuffleMovies(rowclass) {
    //   this.rowClass = rowclass;
    // },
    // addToFav(movie){
    //   this.favorites.push(movie);
    // },
    // removeFromFav(movie){
    //   this.favorites.splice(this.favorites.indexOf(movie) , 1);
    // },
    addMovie(e) {
      e.preventDefault();
      this.$store.dispatch("addMovie", this.movieForm);
      this.showModel = false;
    }
  },
  computed: {
    // getMoviesRowsOne() {
    //   return this.Movies.slice(1, 10);
    // },
    // getMoviesRowsTwo() {
    //   return this.Movies.slice(11, 20);
    // },
    // getMoviesRowsThree() {
    //   return this.Movies.slice(21, 30);
    // },
    // getMoviesRowsFour() {
    //   return this.Movies.slice(31, 36);
    // }
  },
  components: {
    Movie,
    Model
  }
};
</script>
