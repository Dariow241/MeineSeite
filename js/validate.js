
$(document).ready(function(){
//Methoden zur validierung
	jQuery.validator.addMethod("namen", function(value, element)
	{	return this.optional(element) || /^[a-zA-ZüÜäÄöÖéèàâç ]*$/.test(value);
	},	"Ungültige Zeichen!")
	jQuery.validator.classRuleSettings.namen = {namen: true};

	jQuery.validator.addMethod("tele", function(value, element)
	{	return this.optional(element) || /^([0-9]{10,20})*$/.test(value);
	},	"Telfonnummer ?")
	jQuery.validator.classRuleSettings.tele = {tele: true};

//Formular das validiert werden soll
	$("#userform").validate({
//Regeln für Elemente
	rules: {
	vorname: {
		required: true,
		namen: true,
		minlength:3
	},
	nachname: {
		required: true,
		namen: true,
		minlength:3
	},

	firma: {
		required: true,
		namen: true,
		minlength:3
	},

	telefon: {
		required: true,
		tele: true
	}

},

//Ausgabe für funktion	
success: function(element) {
		element
		.text('').addClass('valid')
		.closest('.control-group').removeClass('error').addClass('success');
	},


//Eigene Ausgabenachrichten eintragen
	messages: {
	
    vorname: {
        required: "Bitte Nachnamen eingeben",
        minlength: "Name zu Kurz, mindestens 3 Buchstaben"
    },
    
    nachname: {
		required: "Bitte Vorname eingeben",
		minlength: "Name zu Kurz, mindestens 3 Buchstaben"
	},

	firma: {
		required: "Bitte Firmenname eingeben",
		minlength: "Name zu Kurz, mindestens 3 Buchstaben"
	},

	telefon: {
		required: "Telefonnummer eingeben",
		tele: "Die Telefonnummer muss mindestens 10 stellen haben"
		},

	},
	});
});