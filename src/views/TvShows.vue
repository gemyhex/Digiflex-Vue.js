<template>
  <div class="container-fluid shows-wrapper">
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
                    Tv Shows
                  </li>
                </ol>
              </nav>
              <h2>TV SHOWS <span>.</span></h2>
              <p>
                Most popular TV Shows and serials here you can see it
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="streaming-wrapper">
      <div class="container">
        <div class="row movies-cont">
          <div class="col-lg-3 col-md-4 movie-d m-3">
            <img src="@/assets/tv-shows01.jpg" alt="movie" />
            <div class="overlay">
              <div class="content">
                <p>Thinking You</p>
                <span>
                  <button>
                    <i class="fa fa-play"></i>
                  </button>
                  <p>5 Seasons - 2019</p>
                </span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 movie-d m-3">
            <img src="@/assets/tv-shows02.jpg" alt="movie" />
            <div class="overlay">
              <div class="content">
                <p>Civil War</p>
                <span>
                  <button>
                    <i class="fa fa-play"></i>
                  </button>
                  <p>7 Seasons - 2017</p>
                </span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 movie-d m-3">
            <img src="@/assets/tv-shows03.jpg" alt="movie" />
            <div class="overlay">
              <div class="content">
                <p>Best Game</p>
                <span>
                  <button>
                    <i class="fa fa-play"></i>
                  </button>
                  <p>1 Season - 2010</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.shows-wrapper {
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
  }

  .movies-cont {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Cinzel", serif;
    .movie-d {
      padding: 0;
      img {
        width: 100%;
        height: 100%;
      }

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
</style>
