(function () {
  "use strict";

  var particle = {
    load: function load(name) {
      var particle = this[name];

      if (!particle) {
        return;
      }

      return particle.instance || (particle.instance = particle.block());
    },

    register: function register(name, block) {
      if (this[name]) {
        return;
      }

      this[name] = {block: block};
    }
  };

  /*{{BUNDLE}}*/

  particle.load('aum');
  particle.load('/*{{MAIN}}*/');
})();

