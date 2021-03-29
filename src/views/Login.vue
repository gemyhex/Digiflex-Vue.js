<template>
  <div class="container-fluid login-wrapper">
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
                    Login
                  </li>
                </ol>
              </nav>
              <h2>My Account <span>.</span></h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="login-wrap pt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 l-side pt-5">
            <h5>
              <strong>DigiFlex Membership</strong>
            </h5>
            <p>
              Click here to
              <router-link to="/register" @click="window.location.reload()"
                >register</router-link
              >
            </p>
            <form action="" class="mt-5">
              <label for="email">Username or email address</label>
              <input type="text" name="email" id="email-field" required />
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password-field"
                required
              />

              <button class="mt-4">Login</button>
              <div class="rem_lost">
                <input type="checkbox" name="remember" id="remember" />
                <label for="remember">Remember me</label>
              </div>
              <a href="#" id="lost_pass">
                Lost your Password?
              </a>
            </form>
          </div>
          <div class="col-lg-7 r-side">
            <img src="@/assets/side-image02.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-wrapper {
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

  .login-wrap {
    height: 600px;
    .container {
      height: 100%;
      .row {
        height: 100%;
      }
    }
    h5 {
      font-size: 2rem;
      font-weight: 600;
    }
    p {
      a {
        color: #000;
        font-weight: 600;
      }
    }
    .l-side {
      height: fit-content;
      label {
        display: block;
        font-weight: bold;
        margin-top: 15px;
      }
      input {
        width: 100%;
        height: 70px;
        padding: 8px 15px;
        font-weight: bold;
      }
      button {
        width: 100%;
        height: 60px;
        font-weight: bold;
        color: #fff;
        background: red;
        border: none;
      }
      .rem_lost {
        display: block;
        input {
          width: 18px;
          height: 18px;
          float: left;
          border: none;
          background: #a8a8a8;
          margin-right: 5px;
        }
        label {
          padding-left: 10px;
        }
      }
      #lost_pass {
        color: #000;
        font-weight: bold;
      }
    }
    .r-side {
      height: fit-content;
    }
  }
}
</style>
