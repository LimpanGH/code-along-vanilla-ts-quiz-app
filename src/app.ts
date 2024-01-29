import './style.css'
import { Question, questions } from './questions';

const questionElement = document.getElementById('question') as HTMLHeadingElement;
const optionsElement = document.getElementById('options') as HTMLUListElement;
const nextButton = document.getElementById('nextButton') as HTMLButtonElement;
const scoreElement = document.getElementById('score') as HTMLParagraphElement;
let score = 0;


let currentQuestionIndex = 0;

function displayQuestion(question: Question) {

    // Visar frågan
    questionElement.textContent = question.question;
    // Rensar listan för att kunna visa nya svar
    optionsElement.innerHTML = '';

    // Visar svarsalternativen. Mappar en lista kring varje svar och sedan joinar dem till en sträng.
    const lis = question.options.map(option => {
        return`<li>${option}</li>`
    }).join('');

    // Visar svarsalternativen i listan
    optionsElement.innerHTML = lis;

    // Lägger till en eventlistener på varje svarsalternativ
    document.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', () => {
            // checkAnswer tar in två strängar och jämför dem (svarsalternativet och det korrekta svaret)
            checkAnswer(li.textContent!, question.correctAnswer);
        });
    })

    // Annat sätt att rendera ut i DOM:en
    // question.options.forEach(option => {
    //     const li = document.createElement('li');
    //     li.textContent = option;
    //     li.addEventListener('click', () => {
    //         checkAnswer(option, question.correctAnswer);
    //     });
    //     optionsElement.appendChild(li);
    // });
}


function checkAnswer(selectedOption: string, correctAnswer: string) {

    if (selectedOption === correctAnswer) {
        // Hantera rätt svar
        // Visa det i DOM:er, hålla reda på score, etc.
        console.log('Correct!');
        // Lägg till poäng
        score++;
    } else {
        // Hantera inkorrekt svar
        console.log('Incorrect!');
    }

    // Gå till nästa fråga
    currentQuestionIndex++;

    // Visa nästa fråga så länge det finns fler frågor i questions-arrayen
    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex]);
    } else {
        // Meddela att quiz:et är slut.
        console.log('Quiz completed!');
        // Next-knappen blir disablad
        nextButton.disabled = true;
        scoreElement.textContent = `Final Score: ${score}/${questions.length}`;

    }
}

// Initierar appen
function initApp() {
    // Visa första frågan
    displayQuestion(questions[currentQuestionIndex]);
}


nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(questions[currentQuestionIndex]);
    }
});

initApp()