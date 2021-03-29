<template>
  <div class="container-fluid blogs-wrapper">
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
                    Blog
                  </li>
                </ol>
              </nav>
              <h2>Blogs <span>.</span></h2>
              <p>
                Small Programs Perfect For Beginners To Get Started With
                Personal Growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="blogs-wrap pt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 posts">
            <div class="row">
              <div
                class="col-lg-12 blog-post mt-5 mb-5"
                v-for="blog in blogs"
                :key="blog.id"
              >
                <img :src="blog.backSrc" alt="" />
                <div class="overlay">
                  <div class="cont">
                    <span>{{ blog.postDate }}</span>
                    <a href="#">
                      {{ blog.title }}
                    </a>
                    <div class="owner">
                      <img :src="blog.logo" alt="" />
                      <p>
                        by
                        <span> {{ blog.copyright }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 articles pt-5 pl-5">
            <div class="search">
              <input
                type="search"
                name="search"
                id="search-field"
                placeholder="Search ..."
              />
              <button>Search</button>
            </div>
            <div class="recent_posts mt-5">
              <h3>Recent Posts</h3>
              <div class="post">
                <a href="#">
                  Exclusive: Santa Claus shares his list of must-watch
                  ho-ho-holiday
                </a>
                <span>
                  December 1, 2020
                </span>
              </div>
              <div class="post">
                <a href="#">
                  Digiflex’s spy thriller ‘Munich’ starring Ceremy Arons starts
                  production
                </a>
                <span>
                  December 1, 2020
                </span>
              </div>
              <div class="post">
                <a href="#">
                  Supernatural Horror Series Archive 81 Starring Emmy Award
                  Nominee
                </a>
                <span>
                  December 1, 2020
                </span>
              </div>
            </div>

            <div class="posters mt-5">
              <div class="poster">
                <img src="@/assets/tv-shows03.jpg" alt="" />
              </div>
              <div class="poster">
                <img src="@/assets/tv-shows04.jpg" alt="" />
              </div>
            </div>

            <div class="recent-comments mt-5">
              <h3>
                Recent Comments
              </h3>
              <div class="comment pt-2">
                <a href="#">
                  <span class="fa fa-chevron-right"></span>
                  Digiflex
                </a>
                <p>
                  on
                  <a href="#">
                    Thinking You | Season 1 – Episode 4
                  </a>
                </p>
              </div>
              <div class="comment">
                <a href="#">
                  <span class="fa fa-chevron-right"></span>
                  Digiflex
                </a>
                <p>
                  on
                  <a href="#">
                    Colors of Pain
                  </a>
                </p>
              </div>
              <div class="comment">
                <a href="#">
                  <span class="fa fa-chevron-right"></span>
                  admin
                </a>
                <p>
                  on
                  <a href="#">
                    Love Everywhere
                  </a>
                </p>
              </div>
              <div class="comment">
                <a href="#">
                  <span class="fa fa-chevron-right"></span>
                  admin
                </a>
                <p>
                  on
                  <a href="#">
                    Love Everywhere
                  </a>
                </p>
              </div>
              <div class="comment">
                <a href="#">
                  <span class="fa fa-chevron-right"></span>
                  admin
                </a>
                <p>
                  on
                  <a href="#">
                    Love Everywhere
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blogJson from "@/data/blog.json";
export default {
  data() {
    return {
      blogs: blogJson
    };
  }
};
</script>

<style lang="scss" scoped>
.blogs-wrapper {
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

  .blogs-wrap {
    .posts {
      padding: 0;
      .blog-post {
        padding: 0;
        .overlay {
          background: rgba(1, 1, 1, 0.1);
          color: #fff;
          padding: 40px;
          .cont {
            position: absolute;
            bottom: 5%;
            span {
              display: block;
            }
            a {
              font-size: 3rem;
              line-height: 50px;
              font-weight: 1000;
              color: #fff;
            }
            .owner {
              height: 85px;
              padding-top: 15px;
              img {
                width: 10%;
                border-radius: 50%;
                float: left;
              }
              p {
                display: flex;
                float: left;
                padding: 30px 10px;
                span {
                  padding-left: 5px;
                  font-weight: bold;
                }
              }
            }
          }
        }
      }
    }

    .articles {
      .search {
        input {
          width: 100%;
          height: 70px;
          padding: 8px 15px;
          border: 1px solid #ddd;
          font-weight: 600;
        }
        button {
          width: 50%;
          height: 60px;
          background: red;
          color: #fff;
          border: none;
          margin-top: 15px;
          font-weight: bold;
          font-size: 0.9rem;
          &:hover {
            background: #333;
            transition: all 0.7s ease;
          }
        }
      }

      .recent_posts {
        h3 {
          font-size: 1.2rem;
          font-weight: bold;
          border-bottom: 2px solid #ddd;
          padding-bottom: 6px;
        }
        .post {
          margin-top: 20px;
          a {
            color: #000;
            font-weight: bold;
            display: block;
          }
        }
      }
      .posters {
        height: 250px;
        .poster {
          width: 50%;
          float: left;
          padding: 1px 2px;
        }
      }
      .recent-comments {
        h3 {
          font-size: 1.2rem;
          font-weight: bold;
          border-bottom: 2px solid #ddd;
          padding-bottom: 6px;
        }
        .comment {
          a {
            color: #000;
            font-weight: bolder;
          }
          p {
            padding-left: 14px;
            font-size: 0.9rem;
          }
        }
      }
    }
  }
}
</style>
