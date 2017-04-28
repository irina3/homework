(function () {
    'use strict';
    function createEnum(arg) {
        var val=0;
        var obj=arg.reduce(function (result,item){
        var key=item;
        if (typeof item === 'object') {
            val=item.value;
            key=item.name;
            result[key]=val++;
        }else
        {
          result[key]=val++;
        }
            return result;
       }, {});
        return obj;
    }
    window.createEnum = createEnum;
})();
console.log(createEnum(['red',{name:'green', value:5},'blue']));
