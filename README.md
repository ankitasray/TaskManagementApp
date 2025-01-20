# React + Vite

Here is a code for the `README.md` file that you can use for your Task Management Application:

```markdown
# Task Management Application

This is a Task Management Application built with React. It allows users to create, edit, delete, mark tasks as complete, and filter tasks based on status. The application features responsive design, making it mobile and desktop-friendly. It also includes task sorting by creation date or priority.

---

## Features:
- Create, Update, and Delete Tasks.
- Mark Tasks as Complete or Incomplete.
- Filter Tasks by Status (All, Completed, Incomplete).
- Sort Tasks by Creation Date or Priority.
- Responsive Design for both mobile and desktop views.
- Routing using React Router for two pages: Home Page (Task List) and Task Detail Page.
- State Management with React's `useState` and `useEffect`.
- Modular Components with reusable logic.
- Optional Features: Task transitions with animations (using Tailwind classes).

---

## Tools and Libraries Used:
- React: The core library for building the user interface.
- React Router: For routing between the Home page and Task Detail page.
- Tailwind CSS: For styling and responsive design.
- PropTypes: For prop validation.
- React's useState and useEffect Hooks: For state management.
- Jest and React Testing Library: For unit testing the components.
- LocalStorage: To persist tasks between page reloads.

---

## Setup and Run Instructions:

### Prerequisites:
Ensure that you have the following installed on your machine:
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Steps to Run:
```
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app
   ```

2. **Install dependencies**:
   Run the following command to install the required dependencies:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   To run the application locally, use the following command:
   ```bash
   npm run dev
   ```

4. **Open the application**:
   Open your browser and navigate to `http://localhost:3000` to see the application in action.

---

## Approach and Thought Process:

- **State Management**: I used React's `useState` hook to manage the tasks' state and the `useEffect` hook to persist tasks to local storage, ensuring that tasks remain between page reloads.
  
- **Modular Design**: The application is structured with reusable components. The main components are:
  - `HomePage`: Displays the task list and includes task creation, editing, deletion, and completion.
  - `TaskForm`: A component for adding new tasks.
  - `TaskList`: Displays the tasks and provides options for editing, deleting, or marking them as completed.
  - `TaskDetailPage`: Shows detailed information for each task.
  - `EditTaskForm`: Allows the user to update a task’s description and priority.
  - `FilterSortBar`: Provides options for filtering tasks based on status (completed/incomplete) and sorting them by creation date or priority.

- **Routing**: I used React Router to create two pages:
  - **Home Page**: Displays the task list and task management options.
  - **Task Detail Page**: Shows detailed information about a selected task.

- **UI Design**: The design is responsive, ensuring a smooth experience across different devices. I used **Tailwind CSS** to style the components, making it easy to adjust for mobile and desktop views.

---

## Features & Enhancements:

- **Task Transitions**: Animations for task transitions (e.g., adding, deleting tasks).
- **Editing Task**: Task details can be edited from the home page, where users can modify the task's description and priority.
- **Marking Task as Complete**: Users can mark a task as complete, and it will update its status.
- **Filter and Sort**: The ability to filter tasks based on their completion status and sort them by creation date or priority.
- **Persistence**: The tasks are stored in `localStorage` so that they persist even after a page reload.

---

## Testing:

I have written unit tests for the following components using **Jest** and **React Testing Library**:
- `TaskForm`: Ensure that the form renders correctly and creates a task.
- `TaskList`: Ensure that tasks are displayed correctly.
- `EditTaskForm`: Ensure that task updates work as expected.

You can run the tests using the following command:
```bash
npm test
```

---

## Future Improvements:
- **Backend Integration**: The application can be extended to store tasks in a database via a backend API.
- **User Authentication**: Implement user authentication to allow different users to manage their own tasks.
- **Drag-and-Drop Reordering**: Implement drag-and-drop functionality for reordering tasks.
- **Priority Alerts**: Add visual indicators or alerts for high-priority tasks.

---

### Example Folder Structure:

```
/src
  /components
    HeroSection.jsx
    TaskItem.jsx
    TaskForm.jsx
    TaskList.jsx
    EditTaskForm.jsx
    FilterSortBar.jsx
  /pages
    HomePage.jsx
    TaskDetailPage.jsx
  /utils
    localStorage.js
  App.jsx
  index.js
  styles.css
```

