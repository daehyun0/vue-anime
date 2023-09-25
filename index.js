import anime from 'animejs/lib/anime.es.js'

(function() {
'use strict';

function install(Vue) {
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

module.exports = {
  install: install
};
})();
