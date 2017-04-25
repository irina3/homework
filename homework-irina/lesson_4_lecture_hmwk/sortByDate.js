 var militaryAccidents = [{id : 'ma1', date : new Date('2015-04-10')},{id : 'ma2', date : new Date('2015-02-10')},{id : 'ma3', date : new Date('2016-01-05')},{id : 'ma4', date : new Date('2011-03-10')}];
militaryAccidents.sort(function(a, b){
    a = a.date; 
    b = b.date; 
    return a-b;
});
