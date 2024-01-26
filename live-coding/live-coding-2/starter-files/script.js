// API
const API_ENDPOINT = 'https://yesno.wtf/api';

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
document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('button');
    var input = document.getElementById('input');
    var error = document.getElementById('error');
    var answerDiv = document.getElementById('answer');

    button.addEventListener('click', function () {
        error.textContent = "";
        var question = input.value.trim();

        if (question === "") {
            error.textContent = "Please enter a question";
        } else {
            fetchAnswer(question);
        }
    });

    function fetchAnswer(question) {
        // Simulando una petición AJAX a https://yesno.wtf/api
        var response = { answer: 'Yes' };

        answerDiv.textContent = response.answer;

        setTimeout(function () {
            input.value = "";
            answerDiv.textContent = "";
        }, 5000);
    }

    function handleKeyEnter(event) {
        if (event.key === "Enter") {
            button.click();
        }
    }

    input.addEventListener('keypress', handleKeyEnter);
});