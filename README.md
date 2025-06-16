A minimal and beginner-friendly To-Do List application using HTML, CSS, and JavaScript. It allows users to add, complete, and delete tasks, with data saved in localStorage to persist between page reloads.

🚀 Features
✅ Add new tasks

✅ Mark tasks as completed

✅ Delete tasks

✅ Persistent storage using localStorage

📂 Project Structure
pgsql
Copy
Edit
todo-list/
├── index.html
├── style.css
└── script.js

📦 Setup & Usage
Clone this repository or download the ZIP.

1. Open the project:

Open index.html in any modern web browser (e.g., Chrome, Firefox).

2. Start using the app!

Type a task in the input box and click "Add".

Click on a task to mark it as completed.

Click the "Delete" button to remove it.

   🛠 Technologies Used
HTML5

CSS3

JavaScript (ES6)

Browser localStorage API

🧠 How It Works
Tasks are stored as JavaScript objects (id, text, completed) in an array.

This array is saved to localStorage whenever it changes.

On page load, the app reads from localStorage and renders all saved tasks.

📌 Future Improvements
 Add task editing

 Add due dates or reminders

 Filter by completed/pending

 Drag-and-drop reordering
