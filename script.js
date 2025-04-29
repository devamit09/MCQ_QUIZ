// DOM Elements
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const questionCountEl = document.querySelector('.question-count');
const timerEl = document.querySelector('.timer');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const resultEl = document.getElementById('result');

// Quiz state variables
let currentQuestion = 0;
let score = 0;
let userAnswers = new Array(quizData.length).fill(null);
let time = 0;
let timerInterval;

// Initialize quiz
function initQuiz() {
    startTimer();
    displayQuestion();
    updateProgressSidebar(); 
    window.addEventListener('resize', handleResize);
}

// Handle window resize
function handleResize() {
    // Adjust layout if needed
    if (window.innerWidth < 600) {
        // Mobile-specific adjustments if any
    } else {
        // Desktop adjustments
    }
}

// Start timer
function startTimer() {
    timerInterval = setInterval(() => {
        time++;
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        timerEl.textContent = `Time: ${minutes}:${seconds}`;
    }, 1000);
}

// Display current question
function displayQuestion() {
    const question = quizData[currentQuestion];
    questionEl.innerHTML = `${question.id}. ${question.question}`;
    questionCountEl.textContent = `Question ${question.id} of ${quizData.length}`;
    
    // Clear previous options
    optionsEl.innerHTML = '';

    // Display statements if they exist
    if (question.statements) {
      const statementsContainer = document.createElement('div');
      statementsContainer.className = 'statements-container';
      
      question.statements.forEach(statement => {
          const statementEl = document.createElement('div');
          statementEl.className = 'statement';
          statementEl.textContent = statement;
          statementsContainer.appendChild(statementEl);
      });
      
      optionsEl.appendChild(statementsContainer);
  }

    // Display table if it exists
    if (question.tableData) {
        const table = document.createElement('table');
        
        // Create table header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        question.tableData.headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Create table body
        const tbody = document.createElement('tbody');
        question.tableData.rows.forEach(rowData => {
            const row = document.createElement('tr');
            rowData.forEach(cellData => {
                const td = document.createElement('td');
                td.textContent = cellData;
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        
        optionsEl.appendChild(table);
    }
    
    // Add options
    question.options.forEach((option, index) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        if (userAnswers[currentQuestion] === index) {
            optionEl.classList.add('selected');
        }
        optionEl.innerHTML = `
            <input type="radio" name="option" id="option-${index}" value="${index}" 
                ${userAnswers[currentQuestion] === index ? 'checked' : ''}>
            <label for="option-${index}">${option}</label>
        `;
        optionEl.addEventListener('click', () => selectOption(index));
        optionsEl.appendChild(optionEl);
    });

    // Update navigation buttons
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = currentQuestion === quizData.length - 1;
    submitBtn.style.display = currentQuestion === quizData.length - 1 ? 'block' : 'none';
  
    updateProgressSidebar();
}

// Handle option selection
function selectOption(index) {
    userAnswers[currentQuestion] = index;
    displayQuestion();
}

// Move to next question
function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        displayQuestion();
        scrollToQuestion();
    }
}

// Move to previous question
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
        scrollToQuestion();
    }
}

// Scroll to question for better mobile experience
function scrollToQuestion() {
    questionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Calculate and display score
function submitQuiz() {
    clearInterval(timerInterval);
    
    // Calculate score
    score = 0;
    quizData.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            score++;
        }
    });
    
    // Calculate time taken
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    
    // Display results
    resultEl.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your score: <strong>${score}/${quizData.length}</strong></p>
        <p>Percentage: <strong>${((score / quizData.length) * 100).toFixed(2)}%</strong></p>
        <p>Time taken: <strong>${minutes}m ${seconds}s</strong></p>
    `;
    resultEl.style.display = 'block';
    submitBtn.style.display = 'none';
    resultEl.scrollIntoView({ behavior: 'smooth' });
}

// Update progress sidebar
function updateProgressSidebar() {
    const totalQuestions = quizData.length;
    const answeredQuestions = userAnswers.filter(answer => answer !== null).length;
    const remainingQuestions = totalQuestions - answeredQuestions;
  
    // Update stats
    document.getElementById('total-questions').textContent = totalQuestions;
    document.getElementById('answered-questions').textContent = answeredQuestions;
    document.getElementById('remaining-questions').textContent = remainingQuestions;
  
    const progressGrid = document.getElementById('progress-grid');
    progressGrid.innerHTML = '';
    
    quizData.forEach((question, index) => {
        const progressItem = document.createElement('div');
        progressItem.className = 'progress-item';
        
        if (index === currentQuestion) {
            progressItem.classList.add('current');
        } else if (userAnswers[index] !== null) {
            progressItem.classList.add('answered');
        } else {
            progressItem.classList.add('unanswered');
        }
        
        progressItem.textContent = index + 1;
        progressItem.addEventListener('click', () => {
            currentQuestion = index;
            displayQuestion();
        });
        
        progressGrid.appendChild(progressItem);
    });
}

// Exit quiz function
function exitQuiz() {
    if (confirm('Are you sure you want to exit the quiz? Your progress will be lost.')) {
        window.location.href = '#'; // Replace with your exit URL
    }
}

// Event listeners
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', prevQuestion);
submitBtn.addEventListener('click', submitQuiz);
document.getElementById('exit-btn').addEventListener('click', exitQuiz);

// Initialize the quiz
document.addEventListener('DOMContentLoaded', initQuiz);