(function () {
    'use strict';
    function indexOf (a,x) {
        for ( var i = 0; i < a.length; i++ ) {
            if ( a[i] === x ) {
                return i;
            }
        }
        return -1;
    }
    window.indexOf=indexOf;
})();

(function () {
    'use strict';
    
    function matrixIndexof(matrix,item){
        for (var i = 0; i < matrix.length; i++){
            var row=matrix[i];
            for(var j = 0; j < row.length; j++){
            var rowIndex=indexOf(matrix[i],item);
                if (rowIndex >= 0) {
                    return {i:i,j:j};

                }
            }
        }
    }
    window.matrixIndexof=matrixIndexof;
})();
