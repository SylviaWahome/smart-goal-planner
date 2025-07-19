# 💰 Smart Goal Planner

This is a personal finance app that helps you stay on track with your savings goals. You can set custom goals, add deposits, update your progress, and delete goals once completed or no longer needed. It also gives a simple overview of how much you’ve saved in total and how far you are with each goal.

---

## 🔧 Tech Stack

- React (with hooks and components)
- Tailwind CSS (for clean and responsive styling)
- JSON Server (used to store the goal data)

---

## 📁 Project Structure

```bash
src/
├── components/
│   ├── GoalForm.jsx        # Form to add a new goal
│   ├── GoalCard.jsx        # Displays each individual goal
│   ├── GoalList.jsx        # Loops through and renders GoalCards
│   ├── EditGoalForm.jsx    # Used to edit an existing goal
│   └── Overview.jsx        # Shows overall savings summary
├── App.jsx                 # Main app logic and routes
├── index.js                # Entry point
├── index.css               # Tailwind import
db.json                     # Local mock API data
