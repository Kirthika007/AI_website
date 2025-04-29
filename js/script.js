
const questions = [
    {
        question: "What does AI stand for?",
        options: ["Artificial Intelligence", "Automated Input", "Analog Interface", "Applied Informatics"],
        answer: "Artificial Intelligence"
    },
    {
        question: "Which of the following is a subset of AI?",
        options: ["Machine Learning", "Cybersecurity", "Web Development", "Networking"],
        answer: "Machine Learning"
    },
    {
        question: "Who is considered the father of AI?",
        options: ["Alan Turing", "Charles Babbage", "John McCarthy", "Elon Musk"],
        answer: "John McCarthy"
    },
    {
        question: "Which language is commonly used for AI?",
        options: ["Python", "HTML", "CSS", "PHP"],
        answer: "Python"
    },
    {
        question: "What is the goal of AI?",
        options: ["To build intelligent systems", "To replace humans", "To develop apps", "To secure networks"],
        answer: "To build intelligent systems"
    },
    {
        question: "Which one is an AI application?",
        options: ["Chatbots", "Excel", "WordPad", "Notepad"],
        answer: "Chatbots"
    },
    {
        question: "What is deep learning?",
        options: ["A subset of Machine Learning", "Web design", "Hardware setup", "None"],
        answer: "A subset of Machine Learning"
    },
    {
        question: "Which one is a type of neural network?",
        options: ["Convolutional Neural Network", "AI Chain", "Data Pipe", "Cloud Node"],
        answer: "Convolutional Neural Network"
    },
    {
        question: "Which algorithm is used in decision trees?",
        options: ["ID3", "UDP", "TCP", "HTML"],
        answer: "ID3"
    },
    {
        question: "What does NLP stand for?",
        options: ["Natural Language Processing", "Network Line Protocol", "New Line Parser", "Node List Processor"],
        answer: "Natural Language Processing"
    }
];

document.getElementById("userForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("userForm").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    loadQuiz();
});

function loadQuiz() {
    const quizDiv = document.getElementById("questions");
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `<p>${index+1}. ${q.question}</p>`;
        q.options.forEach(opt => {
            const id = `q${index}_${opt}`;
            questionDiv.innerHTML += `
                <input type="radio" name="q${index}" value="${opt}" id="${id}">
                <label for="${id}">${opt}</label><br>
            `;
        });
        quizDiv.appendChild(questionDiv);
    });
}

function submitQuiz() {
    let score = 0;
    questions.forEach((q, index) => {
        const answer = document.querySelector(`input[name="q${index}"]:checked`);
        if(answer && answer.value === q.answer) score++;
    });
    const name = document.getElementById("name").value;
    const regno = document.getElementById("regno").value;
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").innerHTML = `<h2>${name} (${regno})</h2><p>Your Score: ${score}/10</p>`;
}
