!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/build/",t(t.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=222,o=function(){function e(){var e=this;this.SPACE=32,this.LEFT=37,this.RIGHT=39,this.UP=38,this.DOWN=40,this.CTRL=17,this.PAUSE=80,this.keys=new Array(r),this.prev=new Array(r);for(var t=0;t<r;t++)this.keys[t]=this.prev[t]=!1;window.onkeydown=function(t){e.keys[t.keyCode]=!0},window.onkeyup=function(t){e.keys[t.keyCode]=!1}}return e.prototype.reset=function(){for(var e=0;e<r;e++)this.prev[e]=this.keys[e]},e.prototype.isPressed=function(e){return!1===this.prev[e]&&!0===this.keys[e]},e.prototype.wasPressed=function(e){return this.prev[e]&&!this.keys[e]},e.prototype.isDown=function(e){return this.keys[e]},e}();t.Keys=o,t.keys=new o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()},i=0,u=o(),s=function(e){var t=function(){for(r=o(),i+=Math.min(1,(r-u)/1e3);i>1/60;)e.update(1/60),i-=1/60;e.render(i),u=r,requestAnimationFrame(t)};t()};t.loop=function(e){s(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(0),i=function(){function e(){this.init()}return e.prototype.init=function(){},e.prototype.update=function(e){},e.prototype.render=function(e){o.keys.reset()},e}(),u=new i;setTimeout(function(){r.loop(u)},1e3)}]);