
/* global getName */
(function() {
    'use strict';
    window.classNameOf = function(val) {
        return getName(Object.prototype.toString.call(val));
    };
}());
(function() {
    'use strict';
    window.getName = function(name) {
        return name.slice(8, -1);
    };
}());
