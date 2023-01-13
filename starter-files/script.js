// API
const API_ENDPOINT = 'https://yesno.wtf/api';
let button = document.getElementById("button");
let respuestaSecreta = document.getElementById("respuesta");

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

function fetchAnswer(){
    //peticion 
    fetch(API_ENDPOINT)
        .then(response => response.json())
        .then(data => {
            console.log(data.answer);
        respuestaSecreta.innerHTML = `${data.answer}`
    });

}//fetchAnswer

button.addEventListener("click", (e) => {
    fetchAnswer();
});
