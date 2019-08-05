(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('src/smooth-scroll')) :
  typeof define === 'function' && define.amd ? define(['exports', 'src/smooth-scroll'], factory) :
  (global = global || self, factory(global.mdb = {}, global.smoothScroll));
}(this, function (exports, smoothScroll) { 'use strict';

  smoothScroll = smoothScroll && smoothScroll.hasOwnProperty('default') ? smoothScroll['default'] : smoothScroll;



  exports.SmoothScroll = smoothScroll;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=mdb.js.map
