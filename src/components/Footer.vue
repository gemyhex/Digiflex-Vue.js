<template>
  <section class="directors-wrapper">
    <div class="container">
      <div class="col-lg-12 dir-wrap">
        <div class="row">
          <div class="col-lg-4 ask-d">
            <h5>
              Questions?
              <span> Call 0850-380-6444 </span>
            </h5>
            <p>
              Format for custom post types that are not book or you can use else
              if to specify a second post type the same way as above.
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
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.directors-wrapper {
  background: rgb(29, 29, 29);
  position: relative;
  bottom: 0;
  padding-bottom: 80px;

  z-index: 100;
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
</style>
