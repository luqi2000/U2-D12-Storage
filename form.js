//Exercise 1

const nameInput = document.getElementById("name-input");
const saveButton = document.getElementById("save-button");
const removeButton = document.getElementById("remove-button");
const savedName = document.getElementById("saved-name");

// Recupera il valore dal local storage all'avvio dell'applicazione
const savedNameValue = localStorage.getItem("savedName");
// Mostra il nome salvato se presente
if (savedNameValue) {
  savedName.textContent = `Il nome salvato è: ${savedNameValue}`;
}

//Save button with event listener on click
saveButton.addEventListener("click", () => {
  // Salva il valore nel local storage
  localStorage.setItem("savedName", nameInput.value);
  savedName.textContent = `Il nome salvato è: ${nameInput.value}`;
});

removeButton.addEventListener("click", () => {
  // Rimuove il valore dal local storage
  localStorage.removeItem("savedName");
  savedName.textContent = "";
  nameInput.value = "";
});

//Exercise 2

const counterEl = document.getElementById("counter");
let counter = sessionStorage.getItem("counter");

// Inizializza il contatore a 0 se non esiste
if (!counter) {
  counter = 0;
  sessionStorage.setItem("counter", counter);
}

// Aggiorna il valore del contatore ogni secondo utilizzando set timeout in modo che si aggiorni ogni volta
const intervalId = setInterval(() => {
  counter++; //inizializzato prima a 0 e adesso fara' counter = 0+1
  sessionStorage.setItem("counter", counter); // inserisco nella sessione chiave e valore
  counterEl.textContent = counter; // scrivo in window il valore che si aggiorna ogni 1 secondo
}, 1000); // 1000 sarebbe 1 secondo

// Pulisci l'intervallo quando la pagina viene chiusa
window.addEventListener("beforeunload", () => {
  clearInterval(intervalId);
});
