import anime from 'animejs/lib/anime.es.js'
import { isVue2 } from 'vue-demi'

let install = () => {}

if (isVue2) {
  install = function (Vue) {
    Vue.directive('anime', {
      bind: function bind(targets, binding) {
        var opts = Object.assign({}, binding.value, { targets: targets });
        anime(opts);
      },
      update: function bind(targets, binding) {
        var opts = Object.assign({}, binding.value, { targets: targets });
        anime(opts);
      }
    });
    Vue.prototype.$anime = anime;
  }
} else {
  install = function (app, options) {
    app.directive('anime', {
      bind: function bind(targets, binding) {
        var opts = Object.assign({}, binding.value, { targets: targets });
        anime(opts);
      },
      update: function bind(targets, binding) {
        var opts = Object.assign({}, binding.value, { targets: targets });
        anime(opts);
      }
    });
    app.prototype.$anime = anime;
  }
}

export default {
  install
}
