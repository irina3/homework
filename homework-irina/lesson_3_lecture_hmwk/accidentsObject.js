var accidentTransportation = {
		date : '12.03.2017',
		listTranspotationInvolved : {
		CivilianAviation: ['Boing737' , 'Airbus A319'],
		MilitaryAviation: ['MIG-29' , 'AH-64 Apach']
		},
		DamagedPeopleNumber : 10,
		reasonAccident : "The accident happened because the driver of Fiat was drunk.",
		accidentInfo:function(){
			return 'Crash happened on'  + this.date  + ' . ' +  this.reasonAccident  +  '.'  +  'damaged people number is' + this.DamagedPeopleNumber;
		}
		hasInfo:function(){
				return this.hasOwnProperty();
		}
	} 
	
	var hasInfo=function(accidentRepresents){
	 return accidentTransportation.hasOwnProperty(accidentRepresents);
	}
	var	extendsAccidentTransportation=Object.create(accidentTransportation);
		extendsAccidentTransportation.problemOccurredAccident='10 km';
	var civilianAviationAccident= Object.create(extendsAccidentTransportation);
		civilianAviationAccident.nameAirline='Alitalia';
		civilianAviationAccident.listTranspotationInvolved=['Boing737' , 'Airbus A319'];
	var militaryAviationAccidents=Object.create(extendsAccidentTransportation);
		militaryAviationAccidents.territory='Russia'
		militaryAviationAccidents.involvedCountries=['France' , 'Armenia' , 'Russia'];
		militaryAviationAccidents.listTranspotationInvolved=['MIG-29' , 'AH-64 Apach'];
		Object.getOwnPropertyDescriptor(accidentTransportation,'date');
		extendsAccidentTransportation.__proto__;
		militaryAviationAccidents.__proto__;