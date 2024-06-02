// Функція 1 зміна кольору
function changeColor(color) {
    document.body.style.backgroundColor = color;
}
// Функція кінець зміна кольору

// Функція 2 тестування елементу
function checkResults() {
    const correctAnswers = ['0', '1', '1', '0'];
    const userAnswers = [
        document.getElementById('result1').value,
        document.getElementById('result2').value,
        document.getElementById('result3').value,
        document.getElementById('result4').value
    ];

    let isCorrect = true;
    for (let i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i] !== correctAnswers[i]) {
            isCorrect = false;
            break;
        }
    }

    const resultDiv = document.getElementById('test-result');
    if (isCorrect) {
        resultDiv.innerHTML = '<p style="color: green;">Всі відповіді правильні!</p>';
    } else {
        resultDiv.innerHTML = '<p style="color: red;">Деякі відповіді неправильні. Спробуйте ще раз.</p>';
    }
}
// Функція 2 кінець тестування елементу

// Функція 3 ділення 10 на 5
function checkAnswer() {
    const correctAnswer = '2';
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        const resultElement = document.getElementById('quiz-result');
        if (selectedAnswer.value === correctAnswer) {
            resultElement.textContent = 'Правильно!';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Неправильно. Спробуйте ще раз!';
            resultElement.style.color = 'red';
        }
    } else {
        alert('Будь ласка, виберіть відповідь.');
    }
}
// Функція 3 кінець ділення 10 на 5

// Функція 4 форма реєстрації
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const resultElement = document.getElementById('registration-result');
    
    if (password !== confirmPassword) {
        resultElement.textContent = 'Паролі не співпадають.';
        resultElement.style.color = 'red';
        return;
    }

    resultElement.textContent = 'Реєстрація успішна!';
    resultElement.style.color = 'green';
});
// Функція 4 кінець форми реєстрації
