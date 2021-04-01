<template>
  <nav class="header-wrapper">
    <div class="top-nav px-5" id="topnav">
      <a href="index.html" class="logo">
        <img src="@/assets/logo.png" alt="Digiflex" />
      </a>
      <div class="links">
        <ul>
          <li>
            <router-link to="/" class="active">home</router-link>
          </li>
          <li><router-link to="/movies">movies</router-link></li>
          <li><router-link to="/tvshows">tv shows</router-link></li>
          <li><router-link to="/blog">blog</router-link></li>
        </ul>
      </div>
      <div class="user-options">
        <ul>
          <li>
            <a href="#"><i class="fa fa-search"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-bookmark"></i></a>
          </li>
          <li><router-link to="login">account</router-link></li>
        </ul>
      </div>
      <a href="javascript:void(0);" class="icon" @click="openMenu()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
  </nav>

  <section class="side-wrapper" :style="{ width: clicked ? '75%' : '0' }">
    <span id="closeMenu" @click="closeMenu()">
      <i class="fa fa-times"></i>
    </span>
    <div class="side-menu">
      <select name="search" id="search">
        <option value="movie">Movie</option>
        <option value="show">TV Show</option>
      </select>
      <input type="search" placeholder="Search here" />
      <button>find</button>
      <div class="account">
        <a href="#"><span class="fa fa-user"></span> Account</a>
      </div>
      <div class="links">
        <ul>
          <li>
            <router-link to="/" class="active">home</router-link>
          </li>
          <li><router-link to="/movies">movies</router-link></li>
          <li>
            <router-link to="/tvshows">tv shows</router-link>
          </li>
          <li><router-link to="/blog">blog</router-link></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      clicked: false
    };
  },
  methods: {
    openMenu() {
      // document.getElementsByClassName("side-wrapper").style.width = "75%";
      this.clicked = true;
    },
    closeMenu() {
      // document.getElementsByClassName("side-wrapper").style.width = "0";
      this.clicked = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.header-wrapper {
  width: 100%;
  height: 100px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 999;
  padding: 20px;
  .top-nav {
    display: flex;
    .logo {
      img {
        width: 50px;
        height: 50px;
        animation: logoShake 0.7s infinite;
        &:hover {
          animation: logoShake 0.3s infinite;
        }
      }
    }

    .links {
      width: fit-content;
      height: fit-content;
      text-align: center;
      padding-top: 10px;
      margin: 0 auto;
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
      padding-top: 12px;
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
      }
    }
    .icon {
      width: 30px;
      height: 20px;
      display: none;
      color: white;
      font-size: 1.75rem;
      position: absolute;
      right: 1rem;
      outline: none;
      text-decoration: none;
    }
  }
}

.side-wrapper {
  width: 0;
  height: 100vh;
  background: #333;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  overflow-x: hidden;
  transition: 0.7s;
  #closeMenu {
    position: absolute;
    top: 1rem;
    right: 1rem;

    i {
      font-size: 1.5rem;
      color: white;
    }
  }

  .side-menu {
    padding: 2rem;
    margin-top: 3rem;
    select,
    input,
    button {
      width: 100%;
      height: 70px;
      padding: 0.5rem;
      font-weight: bold;
      color: #9e9d9d;
      margin-top: 0.25rem;
    }
    button {
      background: transparent;
      border: 1px solid #fff;
      text-transform: uppercase;
      color: #fff;
    }

    .account {
      width: 100%;
      height: 70px;
      background: red;
      margin-top: 0.6rem;
      padding: 1.2rem;

      a {
        color: white;
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: uppercase;
      }
    }

    .links {
      margin-top: 1rem;
      ul {
        width: fit-content;
        margin: 0;
        li {
          display: flex;
          flex-direction: column;
          text-transform: uppercase;
          padding: 0.6rem;
          a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            font-size: 1rem;
            &:hover {
              color: rgb(233, 1, 1);
              transition: all 0.5s ease;
            }
          }
        }
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

@media only screen and (max-width: 700px) {
  .header-wrapper {
    .top-nav {
      .links {
        display: none;
      }
      .user-options {
        display: none;
      }
      .icon {
        display: flex !important;
      }
    }
  }
}
</style>
