
function AviationAccidents(){
    this.altitude = altitude;
}
AviationAccidents.prototype = new Accident();
AviationAccidents.prototype.constructor = AviationAccidents.prototype;
function CivilianAviationAccidents() {
    this.nameAirline = nameAirline;
    var listTranspotation = ['Boing737' , 'Airbus A319'];
}
CivilianAviationAccidents.prototype = new AviationAccidents();
CivilianAviationAccidents.prototype.constructor = CivilianAviationAccidents.prototype;
function MilitaryAviationAccidents() {
    this.territory = territory;
    this.involvedCountries = involvedCountries;
    this.listTranspotationInvolved = listTranspotationInvolved;
MilitaryAviationAccidents.prototype= new AviationAccidents();
Accidents.prototype.hasInfo = function(p){
    return Accidents.hasOwnProperty(p);
}
var transportationM=['MIG-29','AH-64 Apach'];
var transportationA=['Boing737','Airbus A319'];
MilitaryAviationAccidents.prototype.listTranspotationInvolved = function(t){
    for(var i = 0; i < transportationM.length; i++) {
        if (t === transportationM[i]) {
            this.listTranspotationInvolved.push(t)
        }
    }
};
CivilianAviationAccidents.prototype.listTranspotationInvolved = function(t){
    for(var i = 0; i < transportationA.length; i++) {
        if (t === transportationA[i]) {
            this.listTranspotationInvolved.push(t);
        }
    }
};