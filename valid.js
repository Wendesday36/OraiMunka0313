function validateForm() {
	let x = document.validTeszt.knev.value;
	let y = document.validTeszt.Vnev.value;
	let z = document.validTeszt.jlsz1.value;
	let v = document.validTeszt.jlsz2.value;
	if (x === "", y === " ",z === " ",v === "") {
    	alert("A mező kitöltése kötelező!");
    	return false;
	}
return true;
}
// function validateForm(){
//     let valid = true;
    
//     return valid;
// }
