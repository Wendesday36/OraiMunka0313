function validateForm() {
  let x = document.validTeszt.knev.value;
  if (x === "") {
    alert("A mező kitöltése kötelező!");
    return false;
  }
  return true;
}
function azonos() {
  let valid = true;
  const jlsz1 = document.validTeszt.jlsz1.value;
  const jlsz2 = document.validTeszt.jlsz2.value;

  if (jlsz1 === jlsz2) {
    valid = true;
  } else {
    alert("nem lehet különböző a két jelszó!!");
  }

  return valid;
}
function jelszobaKotelezo() {
  if (jlsz1.length < 8) {
    alert("A jelszo nem lehet kisebb mint 8 karakter");
    return false;
  }
  if (jlsz2.length < 8) {
    alert("A jelszo nem lehet kisebb mint 8 karakter");
    return false;
  }

  if (jlsz1 != jlsz2) {
    alert("A jelszavak nem egyeznek!!");
    return false;
  }
  var upperCaseLetters = /[A-Z]/g;
  if (jlsz1.value.match(upperCaseLetters)) {
    valid = true;
  } else {
    alert("nagy betut is kell tartalmaznia");
  }
  if (jlsz2.value.match(upperCaseLetters)) {
    valid = true;
  } else {
    alert("nagy betut is kell tartalmaznia");
  }

  var lowerCaseLetters = /[a-z]/g;
  if (jlsz1.value.match(lowerCaseLetters)) {
    valid = true;
  } else {
    alert("kisbetut is kell tartalmaznia");
  }
  if (jlsz2.value.match(lowerCaseLetters)) {
    valid = true;
  } else {
    alert("kisbetut is kell tartalmaznia");
  }

  var numbers = /[0-9]/g;
  if (jlsz1.value.match(numbers)) {
    valid = true;
  } else {
    alert("Számot is kell tartalmaznia!");
  }
  if (jlsz2.value.match(numbers)) {
    valid = true;
  } else {
    alert("Számot is kell tartalmaznia!");
  }
}
