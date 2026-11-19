// const questionBank = [
//     { question: "Who has the most centuries in international cricket?", options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"], answer: "Sachin Tendulkar" },
//     { question: "Which country won the first ICC Cricket World Cup?", options: ["Australia", "England", "West Indies", "India"], answer: "West Indies" },
//     { question: "Who is known as the 'God of Cricket'?", options: ["Virat Kohli", "Don Bradman", "MS Dhoni", "Sachin Tendulkar"], answer: "Sachin Tendulkar" },
//     { question: "What is the highest individual score in ODI cricket?", options: ["264", "200", "237", "275"], answer: "264" },
//     { question: "Which bowler has taken the most wickets in Test cricket?", options: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"], answer: "Muttiah Muralitharan" },
//     { question: "Which Indian player is known as the 'Hitman'?", options: ["Rohit Sharma", "Virat Kohli", "MS Dhoni", "Shikhar Dhawan"], answer: "Rohit Sharma" },
//     { question: "Who won the ICC Cricket World Cup 2011?", options: ["India", "Sri Lanka", "Australia", "England"], answer: "India" },
//     { question: "Who holds the record for the fastest century in ODI cricket?", options: ["AB de Villiers", "Chris Gayle", "Shahid Afridi", "Virat Kohli"], answer: "AB de Villiers" },
//     { question: "Which country is known as the Proteas in cricket?", options: ["South Africa", "Australia", "England", "New Zealand"], answer: "South Africa" },
//     { question: "Who has the most sixes in international cricket?", options: ["Chris Gayle", "MS Dhoni", "Rohit Sharma", "Shahid Afridi"], answer: "Chris Gayle" },
//     { question: "Which team has won the most ICC Cricket World Cups?", options: ["Australia", "India", "West Indies", "England"], answer: "Australia" },
//     { question: "Who is the youngest player to score a century in international cricket?", options: ["Shahid Afridi", "Virat Kohli", "Sachin Tendulkar", "Rashid Khan"], answer: "Shahid Afridi" },
//     { question: "Which cricket stadium is the largest in the world?", options: ["Narendra Modi Stadium", "MCG", "Lord's", "Eden Gardens"], answer: "Narendra Modi Stadium" },
//     { question: "Who is the fastest bowler in cricket history?", options: ["Shoaib Akhtar", "Brett Lee", "Shaun Tait", "Mitchell Starc"], answer: "Shoaib Akhtar" },
//     { question: "Which player has the highest batting average in Test cricket?", options: ["Don Bradman", "Steve Smith", "Kane Williamson", "Jacques Kallis"], answer: "Don Bradman" },
//     { question: "Who is the captain of the Indian cricket team in 2023?", options: ["Rohit Sharma", "Virat Kohli", "KL Rahul", "Hardik Pandya"], answer: "Rohit Sharma" },
//     { question: "Which bowler has the best bowling figures in ODI cricket?", options: ["Chaminda Vaas", "Muttiah Muralitharan", "Glenn McGrath", "Anil Kumble"], answer: "Chaminda Vaas" },
//     { question: "Which country is known as the Black Caps in cricket?", options: ["New Zealand", "South Africa", "England", "West Indies"], answer: "New Zealand" },
//     { question: "Who is the highest run-scorer in T20 internationals?", options: ["Virat Kohli", "Rohit Sharma", "Babar Azam", "Chris Gayle"], answer: "Virat Kohli" },
//     { question: "Which cricket ground is known as the 'Home of Cricket'?", options: ["Lord's", "MCG", "Eden Gardens", "The Oval"], answer: "Lord's" }
//  ];


// function RandomQuestion(){
// //     const data = new Set();
// // // use set for unique object

// //     while(data.size!=5){
// //         const index = Math.floor(Math.random()*20);
// //         data.add(questionBank[index]);
// //     }
    
// //     // convert set into array
// //     return [...data];

// // sort function




   


// }


// //  select the form and insert all the elements into it

// // obj =  { question: "Who has the most centuries in international cricket?", options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"], answer: "Sachin Tendulkar" },

// const form = document.querySelector('form');

// const problem = RandomQuestion();

// const original_answer = {};
// // key value




// problem.forEach((obj,index)=>{
   
//     const div_element = document.createElement('div');
//     div_element.className = 'question';
//     original_answer[`q${index+1}`]= obj['answer'];
    

//     const para = document.createElement('p');
//     para.textContent = `${index+1}. ${obj['question']}`;
//     div_element.appendChild(para);

//     // create 4 options

//     // ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"],
    

//     obj['options'].forEach((data)=>{
//        const label =  document.createElement('label');
//        const input = document.createElement('input');
//        input.type = "radio";
//        input.name = `q${index+1}`;
//        input.value = data;
       
//        label.appendChild(input);
//        label.appendChild(document.createTextNode(data));
//        div_element.appendChild(label);
//        div_element.appendChild(document.createElement('br'));
//     })


//     form.appendChild(div_element);

// })


// const button =  document.createElement('button');
// button.type = 'submit'
// button.className = "submit-btn"
// button.textContent = "Submit";

// form.appendChild(button);


// //  Check the submitted form




 
//  form.addEventListener('submit',(event)=>{
     
//     event.preventDefault();
//     const data = new FormData(form);

 
//     let result = 0
 
//     for(let [key,value] of data.entries())
//     {
//      if(value===original_answer[key])
//          result++;
//     }
 
//     const out = document.getElementById('out');
//     out.innerText = `${result} out of 5 is correct`;
 
 
//     form.reset();
 
//  })



const questions = [
  {
    question: "Who has the most centuries in international cricket?",
    options: ["Virat Kohli", "Sachin Tendulkar", "Ricky Ponting", "Jacques Kallis"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Which country won the first ICC Cricket World Cup?",
    options: ["Australia", "England", "West Indies", "India"],
    answer: "West Indies"
  },
  {
    question: "Who is known as the 'God of Cricket'?",
    options: ["Virat Kohli", "Don Bradman", "MS Dhoni", "Sachin Tendulkar"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "What is the highest individual score in ODI cricket?",
    options: ["264", "200", "237", "275"],
    answer: "264"
  },
  {
    question: "Which bowler has taken the most wickets in Test cricket?",
    options: ["Shane Warne", "James Anderson", "Muttiah Muralitharan", "Anil Kumble"],
    answer: "Muttiah Muralitharan"
  },
  {
    question: "Who captained India to the 2011 ODI World Cup win?",
    options: ["Rahul Dravid", "MS Dhoni", "Virat Kohli", "Sourav Ganguly"],
    answer: "MS Dhoni"
  },
  {
    question: "How many balls are there in one over?",
    options: ["4", "5", "6", "8"],
    answer: "6"
  },
  {
    question: "Who scored the first double century in men's ODI cricket?",
    options: ["Virender Sehwag", "Rohit Sharma", "Chris Gayle", "Sachin Tendulkar"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Who has scored the most runs in Test cricket?",
    options: ["Ricky Ponting", "Sachin Tendulkar", "Joe Root", "Jacques Kallis"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Which team won the first T20 World Cup in 2007?",
    options: ["Pakistan", "Australia", "Sri Lanka", "India"],
    answer: "India"
  },
  {
    question: "Which team won the first IPL season in 2008?",
    options: ["Chennai Super Kings", "Mumbai Indians", "Rajasthan Royals", "Deccan Chargers"],
    answer: "Rajasthan Royals"
  },
  {
    question: "Who bowled the fastest recorded delivery (161.3 km/h)?",
    options: ["Brett Lee", "Shoaib Akhtar", "Shaun Tait", "Mitchell Starc"],
    answer: "Shoaib Akhtar"
  },
  {
    question: "Which Indian batter is nicknamed 'The Wall'?",
    options: ["Rahul Dravid", "VVS Laxman", "Cheteshwar Pujara", "Gautam Gambhir"],
    answer: "Rahul Dravid"
  },
  {
    question: "Who captained India to the 1983 World Cup win?",
    options: ["Sunil Gavaskar", "Kapil Dev", "Mohinder Amarnath", "Bishan Singh Bedi"],
    answer: "Kapil Dev"
  },
  {
    question: "Which country has won the most ODI World Cups?",
    options: ["India", "West Indies", "Australia", "England"],
    answer: "Australia"
  },
  {
    question: "Who hit six sixes in an over in the 2007 T20 World Cup?",
    options: ["Yuvraj Singh", "Herschelle Gibbs", "Chris Gayle", "MS Dhoni"],
    answer: "Yuvraj Singh"
  },
  {
    question: "Which ground is known as the 'Home of Cricket'?",
    options: ["MCG", "Eden Gardens", "Lord's", "The Oval"],
    answer: "Lord's"
  },
  {
    question: "Who holds the highest individual Test score (400*)?",
    options: ["Matthew Hayden", "Brian Lara", "Virender Sehwag", "Mahela Jayawardene"],
    answer: "Brian Lara"
  },
  {
    question: "The Ashes series is played between which two countries?",
    options: ["India & Pakistan", "England & Australia", "Australia & New Zealand", "England & South Africa"],
    answer: "England & Australia"
  },
  {
    question: "How many players are in a cricket team on the field?",
    options: ["9", "10", "11", "12"],
    answer: "11"
  }
];
// const arr=new set(5);
// function randomQuestion() {
//    let ind=math.floor(Math.random()*questions.length);
//    arr[ind]=questions[ind];
// }

// for(let i=0;i<5;i++){
//     randomQuestion();
// }

// const form = document.getElementById('quiz-form');
// for(let i=0;i<5;i++){
//    const question = arr[i];
//    const questionDiv = document.createElement('div');
//    questionDiv.classList.add('question');
//    const questionText = document.createElement('p');
//    questionText.textContent = `${i+1}. ${question.question}`;
//    questionDiv.appendChild(questionText);

//    question.options.forEach(option => {
//        const label = document.createElement('label');
//        const input = document.createElement('input');
//        input.type = 'radio';
//        input.name = `q${i+1}`;
//        input.value = option;
//        label.appendChild(input);
//        label.appendChild(document.createTextNode(option));
//        questionDiv.appendChild(label);
//        questionDiv.appendChild(document.createElement('br'));
//    });

//    form.appendChild(questionDiv);
// }

// const createquizButton = document.createElement('button');
// createquizButton.type = 'submit';
// createquizButton.textContent = 'Submit';
// form.appendChild(createquizButton);

// form.addEventListener('submit', (event) => {
//    event.preventDefault();
//    const formData = new FormData(form);
//    let score = 0;

//    for (let i = 0; i < 5; i++) {
//        const userAnswer = formData.get(`q${i+1}`);
//        if (userAnswer === arr[i].answer) {
//            score++;
//        }
//    }

//    const resultDiv = document.getElementById('result');
//    resultDiv.textContent = `You scored ${score} out of 5.`;
// });

function RandomQuestion() {
  //  const data=new Set()
  //  while(data.size!=5){
  //     const index=Math.floor(Math.random()*questions.length);
  //     data.add(questions[index]);
  //  }
  //  return [...data];
  const arr= [];
  let length = questions.length;
  for(let i=0;i<5;i++){
    const index=Math.floor(Math.random()*length);
    arr.push(questions[index]);
    // swap
    [questions[index],questions[length-1]]=[questions[length-1],questions[index]];
    length--;
  }
  return arr;
}
//select the form and insert all the elements into it
const form = document.getElementById('quizForm');
const selected_question=RandomQuestion();

selected_question.forEach((obj,questionIndex)=>{
const div=document.createElement('div');
div.className="question";
const para=document.createElement('p');
para.textContent = `${questionIndex+1}. ${obj.question}`;
div.appendChild(para);
obj.options.forEach((data,index)=>{
const label=document.createElement('label');
const input=document.createElement('input');
input.type="radio";
input.name = `q${questionIndex+1}`;
input.value=data;
label.appendChild(input);
label.appendChild(document.createTextNode(data));
div.appendChild(label);
div.appendChild(document.createElement('br'));
})
form.appendChild(div);
})

const button=document.createElement('button');
button.type="submit";
button.className="submit-btn";
button.textContent="Submit";
form.appendChild(button);

//check the submitted form
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    let score = 0;

    selected_question.forEach((obj, index) => {
        const userAnswer = formData.get(`q${index + 1}`);

        if (userAnswer === obj.answer) {
            score++;
        }
    });

    const out = document.getElementById('out');
    out.innerText = `${score} out of 5 is correct`;

    form.reset();
});

//sort function