//dichiaro le variabili
let userName, userSurname, userColor, password;

//Chiedi all’utente il suo nome
userName = prompt ("inserisci il tuo nome");
console.log(userName);

//Chiedi all’utente il suo cognome
userSurname = prompt ("inserisci il tuo cognome");
console.log(userSurname);

//Chiedi all’utente il suo colore preferito
userColor = prompt ("inserisci il tuo colore preferito");
console.log(userColor);

//crea password dell'utente
password = userName + userSurname + userColor;
console.log(password);

//comunica password all'utente
document.getElementById("user_password").innerHTML = password;
