var accidentTransportation = {
        date : '',
        listTransportationInvolved : [],
        damagedPeopleNumber : new number,
        reasonAccident : new String();"The accident happened because the driver of Fiat was drunk.",
        toString : function(){
            return 'Crash happened on' + this.date + ' . ' + this.reasonAccident + '.' + 'damaged people number is' + this.DamagedPeopleNumber;
        }
    }
    var p=function(){
        var m;
        for(i in transportation){
            if (m===transportation[i]){
                accidentTransportation.listTransportationInvolved[listTransportationInvolved.length]=m;
                return accidentTransportation.listTransportationInvolved;
            }
        }
    }
    var hasInfo=function(accidentRepresents){
        for(accidentRepresents in accidentTransportation){
            return accidentTransportation.hasOwnProperty(accidentRepresents);
        }
    }
    var extendsAccidentTransportation=Object.create(accidentTransportation);
        extendsAccidentTransportation.problemOccurredAccident='';
    var civilianAviationAccident= Object.create(extendsAccidentTransportation);
        civilianAviationAccident.nameAirline='Alitalia';
        civilianAviationAccident.listTranspotationInvolved=['Boing737' , 'Airbus A319'];
    var militaryAviationAccidents=Object.create(extendsAccidentTransportation);
        militaryAviationAccidents.territory='Russia'
        militaryAviationAccidents.involvedCountries=['France' , 'Armenia' , 'Russia'];
        militaryAviationAccidents.listTranspotationInvolved=['MIG-29' , 'AH-64 Apach'];
    var transportation=['Boing737','Airbus A319','MIG-29','AH-64 Apach'];
        militaryAviationAccidents.damagedPeopleNumber=30;
        Object.defineProperty(civilianAviationAccident,'confInform',{value:'information' writeble:false});
        Object.getPrototypeOf(militaryAviationAccidents);
        militaryAviationAccidents.__proto__;
    


