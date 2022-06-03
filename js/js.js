function testen(){
	var tel = document.form.telefon.value;
	var telck = /^[0-9]{10}$/;
	

	if(document.form.firma.value == ""){
		alert("Gib eine Firma an");
		document.form.firma.focus();
		return false;
	}

	if(document.form.person.value == ""){
		alert("Gib eine Kontaktperson an");
		document.form.person.focus();
		return false;
	}

	
	if(document.form.telefon.value == ""){
		alert("Gib eine Telefonnummer ein");
		document.form.telefon.focus();
		return false;
	}

	if(!telck.test(tel)){
			alert("Gib eine korrekte Telefonnummer an")
			document.form.telefon.focus();
			return false;
		}

}