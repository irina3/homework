
(function () {
    'use strict';
    var getClassName = function(m) {
            if (m === null) {
                return 'null';
            }
            return m.constructor.name;
        }
    window.getClassName = getClassName;
})();