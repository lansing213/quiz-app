const express = require('express');
const router = express.Router();

router.get('/tweets', (req, res) => {
    const questions = [
        {
          questionText: "Who is the CEO of Microsoft?",
          options:[
            {answerText: "Bill Gates", isCorrect: true},
            {answerText:"Ludacris", isCorrect:false},
            {answerText:"Henry Morgton", isCorrect:false},
            {answerText:"Amanda Smith", isCorrect:false}
    
          ],
    
    
    
    
      },
      {
        questionText: "What is the official currancy in Japan?",
        options:[
          {answerText:"Euro", isCorrect:false},
          {answerText:"Bitcoin", isCorrect:false},
          {answerText:"Yen", isCorrect:false},
          {answerText: "Dollar", isCorrect: true}
    
    
        ],
    
    
    
    
    },
    {
      questionText: "Facebook is a what kind of app?",
      options:[
        {answerText:"Entertainment", isCorrect:false},
        {answerText:"Productivity", isCorrect:false},
        {answerText:"Education", isCorrect:false},
        {answerText: "Socilizing", isCorrect: true}
    
    
      ],
    
    
    
    
    },
    {
      questionText: "New York in what country?",
      options:[
        {answerText:"Japan", isCorrect:false},
        {answerText:"France", isCorrect:false},
        {answerText:"America", isCorrect:false},
        {answerText: "Brazil", isCorrect: true}
    
    
      ],
    
    
    
    
    },
    ]
    res.end(JSON.stringify(questions));
});

router.post('/addTweet', (req, res) => {
    res.end('NA');
});

module.exports = router;