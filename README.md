# Quiz App

An interactive multiple-choice quiz built with **HTML**, **CSS**, and **JavaScript**.  
The quiz keeps track of your correct, incorrect, and unattempted questions, and displays your score at the end.

---

## ✨ Features

- 🎯 Multiple-choice quiz with real-time feedback on answers.
- 📊 Score tracking for correct, incorrect, and unattempted questions.
- ⏩ Next question navigation without going back.
- 🎨 Clean UI with visual indicators for correct ✅ and wrong ❌ answers.
- ⚡ No external libraries — pure JavaScript, HTML, and CSS.
- 🌍 Easy to customize for any topic.

---

## ⚙ How to Use

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/quiz-app.git
   ```
2. Open `index.html` in your browser — no server required.

---

## 📝 Customizing Questions

All questions are stored in the **`questions`** array inside `quiz.js`.  
To create your own quiz:
- Modify the question text, answer options, and `correctAnswer` field.
- The current questions are **just for demo purposes**.
- Since I am an enthusiast of a particular topic, I have added all demo questions based on that — feel free to replace them with any topic of your choice.

Example question object:
```javascript
{
  question: 'Your question here?',
  optionA: 'Option 1',
  optionB: 'Option 2',
  optionC: 'Option 3',
  optionD: 'Option 4',
  correctAnswer: 'Option 2'
}
```

---

## 📂 Project Structure
```
quiz-app/
│
├── quiz.html   # Main HTML file
├── quiz.css    # Styles for the quiz
├── quiz.js      # Quiz logic and questions array
└── README.md    # Project documentation
```

---

## 🌐 Hosting
You can host this project easily on **GitHub Pages**:
1. Push the code to your GitHub repo.
2. Go to **Settings → Pages**.
3. Select the `main` branch and `/root` folder.
4. Save and get a public link to share your quiz.

---

## 📜 License
This project is open-source and free to use under the **MIT License**.
