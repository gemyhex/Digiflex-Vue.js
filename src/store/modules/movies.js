import movieList from "@/data/movies-list.js";
import userList from "@/data/users-list.js";

const ADD_MOVIE = "ADD_MOVIE";
const REMOVE_MOVIE = "REMOVE_MOVIE";
const UPDATE_MOVIE = "UPDATE_MOVIE";

const ADD_USER = "ADD_USER";

const state = {
  movies: movieList,
  users: userList
};

const mutations = {
  [ADD_MOVIE](state, movie) {
    state.movies.push(movie);
  },
  [REMOVE_MOVIE](state, id) {
    state.movies.splice(
      state.movies.findIndex(movie => movie.id === id),
      1
    );
  },
  [UPDATE_MOVIE](state, movie) {
    state.movies = state.movies.map(oldMovie => {
      if (movie.id === oldMovie.id) {
        return movie;
      }
      return oldMovie;
    });
  },
  [ADD_USER](state, user) {
    state.users.push(user);
  }
};

const actions = {
  addMovie({ commit, state }, movie) {
    movie.id = state.movies.length + 1;
    commit(ADD_MOVIE, movie);
  },
  removeMovie({ commit }, id) {
    commit(REMOVE_MOVIE, id);
  },
  addUser({ commit }, user) {
    commit(ADD_USER, user);
  }
};

const getters = {
  getMovies: state => {
    return state.movies;
  },
  getMovieById: state => id => {
    return state.movies.find(movie => movie.id === id);
  },
  getUsers: state => {
    return state.users;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
