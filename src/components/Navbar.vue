<template>
  <header class="header-wrapper">
    <div class="row">
      <div class="col-lg-1 logo">
        <a href="index.html">
          <img src="@/assets/logo.png" alt="Digiflex" />
        </a>
      </div>
      <div class="col-lg-9 links">
        <ul>
          <li>
            <router-link to="/" class="active" @click="window.location.reload()"
              >home</router-link
            >
          </li>
          <li>
            <router-link to="/movies" @click="window.location.reload()"
              >movies</router-link
            >
          </li>
          <li>
            <router-link to="/tvshows" @click="window.location.reload()"
              >tv shows</router-link
            >
          </li>
          <li>
            <router-link to="/blog" @click="window.location.reload()"
              >blog</router-link
            >
          </li>
        </ul>
      </div>
      <div class="col-lg-2 user-options">
        <ul>
          <li>
            <a href="#"><i class="fa fa-search"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-bookmark"></i></a>
          </li>
          <li>
            <router-link to="/login" @click="window.location.reload()"
              >account</router-link
            >
          </li>
          <li id="user-logo">
            <router-link to="/login" @click="window.location.reload()"
              ><i class="fa fa-user"></i
            ></router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-wrapper {
  width: 100%;
  background: transparent;
  padding: 1px 5%;
  position: absolute;
  top: 25px;
  z-index: 999;
  i {
    font-size: 20px;
  }

  .logo {
    padding-top: 10px;
    max-width: 80px;
    max-height: 60px;
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      animation: logoShake 0.5s infinite;
    }
  }

  .links {
    width: fit-content;
    height: fit-content;
    text-align: center;
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      width: fit-content;
      margin: 0;
      li {
        display: inline-block;
        text-transform: uppercase;
        padding: 5px 15px;
        a {
          color: white;
          text-decoration: none;
          font-weight: bold;
          &:hover {
            color: rgb(233, 1, 1);
            transition: all 0.5s ease;
          }
        }
      }
    }
  }

  .user-options {
    width: fit-content;
    height: fit-content;
    color: white;
    padding-top: 10px;
    ul {
      li {
        display: inline-block;
        text-transform: uppercase;
        text-align: center;
        padding: 2px 8px;

        a {
          color: white;
          text-decoration: none;
          font-weight: bold;
        }
        &:hover {
          a {
            color: rgb(233, 1, 1);
            transition: all 0.5s ease;
          }
        }
      }
      #user-logo {
        width: 40px;
        height: 40px;
        padding-top: 5px;
        border: 2px solid #fff;
        border-radius: 50%;
      }
    }
  }
}

@keyframes logoShake {
  25% {
    transform: scale(1.1, 1.1);
  }
  50% {
    transform: scale(1.2, 1.2);
  }
  75% {
    transform: scale(1.1, 1.1);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
