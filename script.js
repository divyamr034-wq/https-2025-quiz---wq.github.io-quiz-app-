// LEVEL QUESTIONS
const LEVELS = {
  easy: [
    {
    q: "1)CPU stands for?",
    choices: ["Central Processing Unit", "Central Program Utility", "Computer Processing User", "Control Panel Unit"],
    correct: 0
    },
     {
    q: "2)Which is an input device?",
    choices: ["Monitor", "Speaker","Keyboard", "Projector"],
    correct: 2
  },
  {
    q: "3)Which of these is a web browser?",
    choices: [ "Windows", "Android", "Linux","Chrome"],
    correct: 3
  },
  {
    q: "4)RAM is?",
    choices: ["Permanent", "Temporary", "External", "Optical"],
    correct: 1
  },
  {
    q: "5)LAN stands for?",
    choices: [ "Large Area Network", "Light Access Node","Local Area Network", "Low Access Net"],
    correct: 2
  },
  {
    q: "6)Which language is used to structure webpages?",
    choices: ["CSS", "HTML", "SQL", "Python"],
    correct: 1
  },
  {
    q: "7)Which one is a storage device?",
    choices: ["Mouse",  "Monitor", "CPU Fan","Hard Disk"],
    correct: 3
  },
  {
    q: "8)Binary system consists of?",
    choices: ["0 & 1", "1 & 2", "2 & 3", "3 & 4"],
    correct: 0
  },
  {
    q: "9)Which one is an operating system?",
    choices: [ "VS Code", "Chrome","Windows", "Facebook"],
    correct: 2
  },
  {
    q: "10)What does URL contain?",
    choices: [ "Programming code", "Website address","User password", "Device model"],
    correct: 1
  },
  {
    q: "11)Which one is NOT an output device?",
    choices: ["Printer", "Monitor", "Speaker", "Keyboard"],
    correct: 3
  },
  {
    q: "12)Full form of USB?",
    choices: ["Universal Serial Bus", "United System Box", "Universal Storage Buffer", "User Sensor Block"],
    correct: 0
  },
  {
    q: "13)Which one is used to style webpages?",
    choices: ["Java", "Python", "CSS", "SQL"],
    correct: 2
  },
  {
    q: "14)Which of these is a search engine?",
    choices: ["Google", "Instagram", "Facebook", "WhatsApp"],
    correct: 0
  },
  {
    q: "15)Full form of Wi-Fi?",
    choices: ["Wide Fiber", "Wireless Finder", "Web Frequency","Wireless Fidelity", ],
    correct: 3
  }
  ],


  medium: [
    {
    q: "1)Which protocol is used for email transfer?",
    choices: ["FTP", "SMTP", "SSH", "HTTP"],
    correct: 1
  },
  {
    q: "2)Which data structure uses LIFO?",
    choices: [, "Stack", "Tree", "Graph","Queue"],
    correct: 3
  },
  {
    q: "3)Which is a NoSQL database?",
    choices: ["MySQL", "MongoDB", "Oracle", "PostgreSQL"],
    correct: 1
  },
  {
    q: "4)Time complexity of Linear Search?",
    choices: [ "O(n)", "O(log n)","O(1)", "O(n²)"],
    correct: 2
  },
  {
    q: "5)SQL is used for?",
    choices: ["Database query","Styling", "Web design",  "Graphics"],
    correct: 0
  },
  {
    q: "6)Which is a compiled language?",
    choices: ["Python", "JavaScript", "C", "PHP"],
    correct: 2
  },
  {
    q: "7)Which of these is an example of an OS?",
    choices: ["MySQL", "Linux", "Google", "Chrome"],
    correct: 1
  },
  {
    q: "8)Which data type is used to store text in JS?",
    choices: ["Number", "Boolean", "String", "Char"],
    correct: 2
  },
  {
    q: "9)Which sorting algorithm is fastest on average?",
    choices: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"],
    correct: 1
  },
  {
    q: "10)IPv4 address size?",
    choices: [ "32-bit", "64-bit", "128-bit","16-bit",],
    correct: 3
  },
  {
    q: "11)Which device connects multiple networks?",
    choices: ["Switch", "Hub", "Router", "Repeater"],
    correct: 2
  },
  {
    q: "12)Which JavaScript method is used to print in console?",
    choices: ["console.log()","document.write()", "print()",  "show()"],
    correct: 0
  },
  {
    q: "13)Which HTML tag is used for images?",
    choices: ["<pic>", "<image>", "<img>", "<photo>"],
    correct: 2
  },
  {
    q: "14)Which memory is fastest?",
    choices: ["Cache", "Hard Disk", "RAM", "SSD"],
    correct: 0
  },
  {
    q: "15)OSI model has how many layers?",
    choices: ["5", "6", "7", "8"],
    correct: 2
  }
  ],

  hard: [
    {
    q: "1)Which algorithm is used in AES encryption?",
    choices: ["Substitution–permutation", "RSA", "Elliptic Curve", "Blowfish"],
    correct: 0
  },
  {
    q: "2)Which normal form removes transitive dependency?",
    choices: ["1NF", "2NF", "3NF", "BCNF"],
    correct: 2
  },
  {
    q: "3)AVL tree is balanced using?",
    choices: ["Hashing", "Rotations", "Sorting", "Partitioning"],
    correct: 1
  },
  {
    q: "4)Deadlock requires which condition?",
    choices: ["Pre-emption", "Circular wait", "No mutual exclusion", "Free resources"],
    correct: 1
  },
  {
    q: "5)TCP works on which layer of OSI?",
    choices: ["Network", "Presentation", "Transport", "Session"],
    correct: 2
  },
  {
    q: "6)Best-case time complexity of Merge Sort?",
    choices: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
    correct: 2
  },
  {
    q: "7)What does RAID 0 provide?",
    choices: ["Mirroring", "Striping", "Parity", "Error correction"],
    correct: 1
  },
  {
    q: "8)Which is NOT a type of scheduler in OS?",
    choices: ["Short-term", "Long-term", "Mid-term", "Core-term"],
    correct: 3
  },
  {
    q: "9)In graph theory, BFS uses?",
    choices: ["Stack", "Queue", "Tree", "Array"],
    correct: 1
  },
  {
    q: "10)Which hashing technique avoids collisions using linked lists?",
    choices: ["Open addressing", "Double hashing", "Chaining", "Probing"],
    correct: 2
  },
  {
    q: "11)Virtual memory is implemented using?",
    choices: ["Paging", "Hashing", "Scheduling", "Encryption"],
    correct: 0
  },
  {
    q: "12)What does ACID stand for in databases?",
    choices: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Index, Database", "Active, Clean, Instant, Data", "Automation, Coding, Integration, Debugging"],
    correct: 0
  },
  {
    q: "13)Which is NP-complete problem?",
    choices: ["Binary Search", "Travelling Salesman Problem", "Merge Sort", "Bubble Sort"],
    correct: 1
  },
  {
    q: "14)Which algorithm is used for minimum spanning tree?",
    choices: ["Kruskal's Algorithm", "DFS", "Binary Search", "A* search"],
    correct: 0
  },
  {
    q: "15)What is the worst-case time complexity of Quick Sort?",
    choices: ["O(log n)", "O(n)", "O(n log n)", "O(n²)"],
    correct: 3
  }
  ]
};

// CONFIG
const TIME_PER_Q = 30;

// STATE
let current = 0;
let score = 0;
let timer;
let timeLeft = TIME_PER_Q;
let answered = false;
let activeLevel = "";
let QUESTIONS = [];

// DOM
const levelScreen = document.getElementById("levelScreen");
const quizArea = document.getElementById("quizArea");
const resultArea = document.getElementById("resultArea");
const levelTitle = document.getElementById("levelTitle");

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const timeBar = document.getElementById("timeBar");
const timeLeftEl = document.getElementById("timeLeft");
const scoreEl = document.getElementById("score");
const currentEl = document.getElementById("current");
const totalEl = document.getElementById("total");
const finalScore = document.getElementById("finalScore");

// LEVEL BUTTONS
document.querySelectorAll(".levelBtn").forEach(btn => {
  btn.onclick = () => startLevel(btn.dataset.level);
});

function startLevel(level){
  activeLevel = level;
  QUESTIONS = LEVELS[level];

  levelScreen.classList.add("hidden");
  quizArea.classList.remove("hidden");

  levelTitle.textContent = "Level: " + level.toUpperCase();

  current = 0;
  score = 0;

  totalEl.textContent = QUESTIONS.length;

  showQuestion();
}

function showQuestion(){
  answered = false;
  timeLeft = TIME_PER_Q;
  updateTimer();

  clearInterval(timer);
  timer = setInterval(tick, 1000);

  const q = QUESTIONS[current];

  questionEl.textContent = q.q;
  answersEl.innerHTML = "";

  q.choices.forEach((choice, i)=>{
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.textContent = choice;

    btn.onclick = ()=> selectAnswer(i, btn);
    answersEl.appendChild(btn);
  });

  currentEl.textContent = current+1;
}

function selectAnswer(i, btn){
  if(answered) return;
  answered = true;
  clearInterval(timer);

  const correct = QUESTIONS[current].correct;
  const allBtns = document.querySelectorAll(".answer");

  allBtns.forEach((b, idx)=>{
    if(idx === correct) b.classList.add("correct");
    if(idx === i && i !== correct) b.classList.add("wrong");
    b.style.pointerEvents = "none";
  });

  if(i === correct){
    score++;
    scoreEl.textContent = score;
  }

  setTimeout(nextQuestion, 800);
}

function nextQuestion(){
  if(current < QUESTIONS.length-1){
    current++;
    showQuestion();
  } else {
    finishLevel();
  }
}

function tick(){
  timeLeft--;
  updateTimer();
  if(timeLeft <= 0){
    clearInterval(timer);
    nextQuestion();
  }
}

function updateTimer(){
  timeLeftEl.textContent = timeLeft+"s";
  timeBar.style.width = (timeLeft / TIME_PER_Q) * 100 + "%";
}

function finishLevel(){
  quizArea.classList.add("hidden");
  resultArea.classList.remove("hidden");

  finalScore.textContent = `${score} / ${QUESTIONS.length}`;
}

document.getElementById("restartBtn").onclick = ()=> startLevel(activeLevel);
document.getElementById("backLevels").onclick = ()=> {
  resultArea.classList.add("hidden");
  levelScreen.classList.remove("hidden");
};
