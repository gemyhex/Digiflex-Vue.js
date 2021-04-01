<template>
  <div class="home">
    <section class="slider-wrapper">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div
            class="carousel-item"
            v-for="slide in sliders"
            :key="slide.id"
            :class="{ active: slide.id === 0 }"
          >
            <img :src="slide.imgSrc" class="d-block w-100" alt="Slider" />
            <div class="overlay">
              <div class="movie-wrap">
                <h6>{{ slide.release }}</h6>
                <h2>{{ slide.title }}</h2>
                <div class="movie-info">
                  <div class="rate-d">
                    <span id="movie-rate">
                      <span id="rate">
                        {{ slide.rate }}
                      </span>
                    </span>
                    <span id="imdb-stick">
                      {{ slide.rateBrand }}
                    </span>
                  </div>
                  <span id="movie-date">{{ slide.pYear }}</span>
                  <span id="quality-wrap">
                    {{ slide.quality }}
                  </span>

                  <span id="movie-duration">
                    {{ slide.duration }}
                  </span>

                  <span id="movie-type">{{ slide.type }}</span>

                  <span id="movie-dept">
                    {{ slide.department }}
                  </span>
                </div>
                <p id="description">
                  {{ slide.description }}
                </p>
                <button class="watch-now">Watch Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="streaming-wrapper">
      <div class="container">
        <h6>online streaming</h6>
        <h2>Watch Shows Online</h2>

        <div class="row movies-cont">
          <div
            class="col-lg-3 col-md-4 col-sm-6 pt-5 movie-d"
            v-for="movie in getOnineMovies"
            :key="movie.id"
          >
            <div class="poster-im">
              <img :src="movie.imgSrc" alt="movie" />
              <div class="overlay">
                <div class="content">
                  <p>{{ movie.movieName }}</p>
                  <span>
                    <button>
                      <i class="fa fa-play"></i>
                    </button>
                    <p>
                      {{ movie.seasons }} Seasons -
                      {{ movie.movieDate }}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row stream-d">
          <div class="col-lg-6">
            <img src="@/assets/side-image01.png" alt="" />
            <div class="overlay"></div>
          </div>
          <div class="col-lg-6">
            <p id="heading">
              Best pick for hassle-free
              <span>streaming</span> experience.
            </p>
            <div class="item">
              <div class="pic">
                <img src="@/assets/icon01.png" alt="" />
              </div>
              <div class="inf">
                <h3>Access while traveling</h3>
                <p>
                  Keep access to your entertainment content while roaming the
                  world.Pick from thousands.
                </p>
              </div>
            </div>
            <div class="item">
              <div class="pic">
                <img src="@/assets/icon02.png" alt="" />
              </div>
              <div class="inf">
                <h3>Stream with no interruptions</h3>
                <p>
                  Pause for snacks, not buffering. Stream smoothly with our
                  lightning-fast NordLynx protocol network.
                </p>
              </div>
            </div>
            <div class="item">
              <div class="pic">
                <img src="@/assets/icon03.png" alt="" />
              </div>
              <div class="inf">
                <h3>Stay secure at all times</h3>
                <p>
                  Securely access and enjoy your favorite content, even on
                  public Wi-Fi. Your connection
                </p>
              </div>
            </div>
            <div class="overlay"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="movies-wrapper pt-5">
      <div class="container">
        <div class="head-d">
          <h6>online streaming</h6>
          <h2>Watch Shows Online</h2>
        </div>
        <div class="row mov-con">
          <div
            class="col-lg-3 col-md-4 col-sm-6 pt-5 cont"
            v-for="movie in getMovies"
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

        <div class="row mov-info-con">
          <router-link
            id="browseMovies"
            to="/movies"
            @click="window.location.reload()"
            >browse all movies</router-link
          >
        </div>
      </div>
    </section>

    <section class="advert-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 adv-col">
            <h4>Trusted by tech experts and real users</h4>
            <q>
              As VPN services go, it's hard to beat NordVPN. It has a large and
              diverse collection of servers, an excellent collection of advanced
              features, strong privacy and security
            </q>
            <div class="adv-ow">
              <img src="@/assets/avatar01.jpg" alt="" />
              <img id="brand" src="@/assets/brand01.jpg" alt="" />
              <div class="adv-ow-in">
                <span>Max Eddy</span>
                <span id="ow-pos">Software analyst, PCMag</span>
              </div>
              <div class="overlay"></div>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="@/assets/side-image02.png" alt="" />
            <div class="overlay"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="directors-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 subs-wrap">
            <h5>Start for your first 30 days.</h5>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div class="subs-d">
              <input
                type="email"
                name="email"
                placeholder="Type your e-mail address"
                id="email-field"
              />
              <button>get started</button>
            </div>
          </div>
          <div class="col-lg-12 dir-wrap">
            <div class="row">
              <div class="col-lg-4 ask-d">
                <h5>
                  Questions?
                  <span> Call 0850-380-6444 </span>
                </h5>
                <p>
                  Format for custom post types that are not book or you can use
                  else if to specify a second post type the same way as above.
                </p>

                <div class="lang">
                  <select name="lang" id="lang-opt">
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                  </select>
                  <span>
                    <i class="fa fa-globe"></i>
                  </span>
                </div>
              </div>
              <div class="col-lg-8 links-wrap">
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-4 pt-4 link-item">
                    <h6>DIGIFLEX</h6>
                    <ul>
                      <li>
                        <a href="#">Digiflex</a>
                      </li>
                      <li><a href="#">Devices</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4 pt-4 link-item">
                    <h6>SUPPORT</h6>
                    <ul>
                      <li><a href="#">FAQ</a></li>
                      <li>
                        <a href="#">Help Center</a>
                      </li>
                      <li><a href="#">Support</a></li>
                      <li><a href="#">Account</a></li>
                    </ul>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4 pt-4 link-item">
                    <h6>POLICIES</h6>
                    <ul>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms od Use</a>
                      </li>
                      <li>
                        <a href="#">Legal Noticies</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import sliderJson from "@/data/slider.json";
import moviesJson from "@/data/movies.json";
export default {
  data() {
    return {
      sliders: sliderJson,
      movies: moviesJson,
      classes: ["page_o", "page_t", "page_th", "page_f"]
    };
  },
  methods: {},
  computed: {
    getOnineMovies() {
      return this.movies.slice(0, 4);
    },
    getMovies() {
      return this.movies.slice(0, 8);
    }
  }
};
</script>

<style lang="scss" scoped>
.slider-wrapper {
  color: #fff;
  position: relative;
  width: 100%;
  z-index: 111;
  .carousel {
    .carousel-indicators {
      width: fit-content;
      height: fit-content;
      position: absolute;
      top: 50%;
      left: 95%;
      margin: 0;
      display: block;
      li {
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
    }
    .carousel-inner {
      .carousel-item {
        width: 100vw;
        height: 100vh;
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba($color: #000000, $alpha: 0.1);

          .watch-now {
            width: 175px;
            height: 65px;
            background: red;
            color: #fff;
            margin-top: 10px;
            border: none;
            font-weight: bold;
            font-size: 17px;
            text-transform: uppercase;

            &:hover {
              border: 1px solid red;
              background: black;

              transition: 0.5s all ease;
            }
          }
        }

        .movie-wrap {
          width: 30%;
          position: absolute;
          top: 30%;
          left: 15%;
          text-align: left;

          h6 {
            color: rgba(180, 180, 180, 0.459);
            font-size: 1.2rem;
            font-weight: bold;
            padding: 2px 5px;
            text-transform: uppercase;
            &:before {
              content: "|";
              color: red;
            }
          }

          h2 {
            font-size: 4rem;
            font-weight: bold;
            text-transform: uppercase;
          }
          .movie-info {
            display: flex;
            padding-top: 10px;
            overflow-x: hidden;
            span {
              margin-left: 15px;
            }
            .rate-d {
              display: flex;

              #movie-rate {
                width: fit-content;
                height: fit-content;
                border-radius: 50%;
                margin-left: 0;
              }
              #rate {
                width: fit-content;
                height: fit-content;
                border-bottom: 3px solid green;
                text-align: center;
                font-weight: bold;
                margin-left: 0;
              }
              #imdb-stick {
                width: fit-content;
                height: fit-content;
                background: rgb(224, 174, 6);
                color: black;
                padding: 2px;
                font-weight: bold;
                font-size: 0.8rem;
                margin-left: 4px;
              }
            }

            #movie-date {
              width: fit-content;
              height: fit-content;
              font-weight: bold;
            }
            #quality-wrap {
              width: fit-content;
              height: fit-content;
              border: 2px solid #fff;
              font-weight: 700;
              background: #fff;
              color: #000;
            }

            #movie-type {
              width: fit-content;
              height: fit-content;
              border: 2px solid #fff;
              border-radius: 25px;
              font-size: 0.8rem;
              font-weight: bold;
              padding: 2px 6px;
            }
            #movie-dept {
              color: red;
              font-weight: bold;
              font-size: 18px;
            }
          }
          #description {
            padding-top: 11px;
            font-weight: 600;
          }
        }
      }
    }
  }
}

.streaming-wrapper {
  position: relative;
  padding: 80px 0;
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba($color: #000000, $alpha: 0.3);
  }
  h6 {
    text-transform: uppercase;
    color: #616161;
    font-size: 0.9rem;
    letter-spacing: 1px;
    font-weight: bolder;
  }
  h2 {
    font-weight: bolder;
  }

  .movies-cont {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Cinzel", serif;
    .movie-d {
      .poster-im {
        position: relative;
        width: 100%;
        height: 100%;
        .overlay {
          text-align: center;
          .content {
            position: absolute;
            bottom: 8%;
            left: 10%;
            p {
              color: #fff;
              font-size: 1.7rem;
            }
            span {
              display: flex;
              button {
                width: 50px;
                height: 50px;
                border: 0;
                border-radius: 50%;
                background: #fff;
                &:hover {
                  background: rgb(214, 7, 7);
                  transition: all 0.7s ease;
                  color: white;
                }
              }
              p {
                font-size: 1rem;
                padding: 5px 10px;
              }
            }
          }
        }
      }
    }
  }
  .stream-d {
    padding-top: 80px;
    .overlay {
      background: rgba($color: #000000, $alpha: 0);
    }
    #heading {
      font-size: 2rem;
      font-weight: bold;
      span {
        text-decoration: underline;
      }
    }
    .item {
      display: flex;
      padding-top: 20px;
      .pic {
        width: 22%;
        height: 90%;
        margin-right: 5%;
        padding-top: 20px;
      }
      .inf {
        padding-top: 10px;
        h3 {
          font-size: 1.3rem;
          font-weight: bold;
        }
        p {
          font-weight: 500;
        }
      }
    }
  }
}

.movies-wrapper {
  background: black;
  color: white;
  padding-bottom: 80px;
  .head-d {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h6 {
      text-transform: uppercase;
      color: #a0a0a0;
      font-size: 0.9rem;
      letter-spacing: 1px;
      font-weight: bolder;
    }
    h2 {
      font-weight: bolder;
    }
  }
  .mov-con {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .cont {
      .item-img {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .mov-info-con {
    display: flex;
    justify-content: center;
    align-items: center;
    #browseMovies {
      width: fit-content;
      padding: 1px 20px;
      height: 60px;
      text-transform: uppercase;
      font-size: 0.9rem;
      font-weight: bold;
      border: none;
      background: red;
      color: #fff;
      margin-top: 35px;
      padding-top: 18px;
      &:hover {
        background: black;
        border: 1px solid red;
        transition: all 0.7s ease;
      }
    }
  }
  .mov-i {
    padding-top: 10px;

    span {
      font-size: 1rem;
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
      font-size: 0.7rem;
      font-weight: bold;
    }
    h5 {
      a {
        color: #fff;
        font-weight: bold;
        font-size: 1rem;
      }
    }
  }
}

.advert-wrapper {
  padding-top: 80px;
  padding-bottom: 80px;
  .overlay {
    background: rgba($color: #000000, $alpha: 0);
  }
  .adv-col {
    margin-top: 150px;
    h4 {
      font-size: 2.4rem;
      font-weight: bolder;
      padding-bottom: 20px;
    }
    q {
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 30px;
    }
    .adv-ow {
      height: 110px;
      display: flex;
      margin-top: 30px;
      img {
        width: 20%;
        border-radius: 50%;
      }
      #brand {
        width: 10%;
        height: 50%;
        margin-top: 20px;
        margin-left: -5px;
        z-index: -1;
      }
      .adv-ow-in {
        padding-top: 25px;
        span {
          display: block;
          padding: 0px 15px;
          font-weight: bold;
        }
        #ow-pos {
          font-size: 0.7rem;
        }
      }
    }
  }
}

.directors-wrapper {
  text-align: center;
  padding: 80px 0;
  background: rgb(29, 29, 29);
  .subs-wrap {
    color: #fff;
    h5 {
      font-size: 2.5rem;
      font-weight: bolder;
    }
    p {
      font-weight: bolder;
    }
    .subs-d {
      padding-bottom: 80px;
      border-bottom: 1px solid #636161;
      input {
        width: 38%;
        height: 70px;
        padding: 20px;
        font-weight: bold;
      }
      button {
        width: 17%;
        height: 70px;
        background: red;
        text-align: center;
        text-transform: uppercase;
        color: #fff;
        border: 1px solid red;
        font-size: 0.9rem;
        font-family: sans-serif;
        font-weight: 700;
      }
    }
  }
  .dir-wrap {
    color: #fff;
    padding-top: 80px;
    text-align: left;
    .ask-d {
      h5 {
        font-size: 1.1rem;
        font-weight: 500;
        padding: 20px 0;
        span {
          font-weight: bolder;
        }
      }
      p {
        font-weight: 1rem;
        font-weight: 500;
        padding-bottom: 15px;
      }

      .lang {
        width: 50%;
        border: 1px solid #a0a0a0;
        padding: 8px 0;
        #lang-opt {
          width: 80%;
          background: transparent;
          color: #fff;
          padding: 5px 10px;
          border: 0;

          option {
            color: #000;
          }
        }
        span {
          font-size: 1.5rem;
        }
      }
    }
    .links-wrap {
      .link-item {
        h6 {
          font-weight: bolder;
          letter-spacing: 2px;
          font-size: 1.1rem;
          padding-bottom: 10px;
        }
        ul {
          list-style: decimal-leading-zero;
          width: fit-content;
          padding-left: 25px;
          li {
            a {
              color: #fff;
              line-height: 40px;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .directors-wrapper {
    .subs-d {
      input {
        width: 100% !important;
      }
      button {
        width: 40% !important;
        margin-top: 10px;
      }
    }
  }
}

@media only screen and (min-width: 576px) and (max-width: 968px) {
  .slider-wrapper {
    .carousel {
      .carousel-indicators {
        top: 75% !important;
      }
      .carousel-inner {
        .carousel-item {
          .movie-wrap {
            left: 7% !important;
            h6 {
              font-size: 1rem;
            }
            h2 {
              font-size: 3rem !important;
            }
            #description {
              font-size: 0.9rem !important;
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 575px) {
  .slider-wrapper {
    .carousel {
      .carousel-indicators {
        top: 75% !important;
      }
      .carousel-inner {
        .carousel-item {
          .movie-wrap {
            left: 7% !important;
            h6 {
              font-size: 1rem;
            }
            h2 {
              font-size: 3rem !important;
            }
            #description {
              display: none;
            }
            .movie-info {
              #movie-date {
                display: block !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>
