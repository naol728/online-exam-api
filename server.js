const express = require('express');
  const cors = require('cors');
  const app = express();
  const port = 3000;
  
  // JSON data
  app.use(cors());
  const data = {
    "students": [
      {
        "id": 1402037,
        "name": "Naol Meseret",
        "department": "software enginering",
        "username": "naolm",
        "password": "123456",
        "year": 4,
        "courses": [
          {
            "coursecode": 1,
            "coursename": "mats",
            "coursescore": 0
          },
          {
            "coursecode": 2,
            "coursename": "",
            "coursescore": 0
          },
          {
            "coursecode": 3,
            "coursename": "physics",
            "coursescore": 0
          }
        ]
      }
    ],
    "questions": [
      {
        "mats": [
          {
            "question": "who is the legend of 21 centurey",
            "options": ["balatsar", "jony sins", "didiy d", "mia khalifa"],
            "answer": 1,
            "points": 10
          },
          {
            "question": "who is the legend of 21 centurey",
            "options": ["balatsar", "jony sins", "didiy d", "mia khalifa"],
            "answer": 1,
            "points": 10
          },
          {
            "question": "who is the legend of 21 centurey",
            "options": ["balatsar", "jony sins", "didiy d", "mia khalifa"],
            "answer": 1,
            "points": 10
          }
        ]
      }
    ]
  };
  
  // Route to get questions
