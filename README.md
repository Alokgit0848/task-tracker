# Task Tracker Application

## Overview
The **Task Tracker Application** is a simple and efficient tool for managing tasks. It allows users to create tasks with deadlines, track their progress through categorized lists, and mark them as completed or delete them when no longer needed. The application is designed to deliver a user-friendly experience on both desktop and mobile devices.

---

## Features
- **Create and Manage Tasks**: Add tasks with specific deadlines and statuses.  
- **Categorized Task View**: View tasks grouped into categories such as Pending, In Progress, and Completed.  
- **Mark as Completed**: Update task status to "Completed" with a single action.  
- **Delete Tasks**: Remove tasks that are no longer needed.  
- **Mobile Responsive Design**: Seamless experience across desktop and mobile devices.

---

##Screenshots

![tt](https://github.com/user-attachments/assets/0c1edef0-1a70-4983-8ff8-6cbdb64023c9)



![tt1](https://github.com/user-attachments/assets/8d332445-7318-4932-a3bb-ac58d192c794)


## Project Requirements

### 1. **User Stories**  
#### Create a New Task

Scenario: User creates a new task
  Given the user is on the task tracker homepage
  When the user enters a task description and deadline
  And clicks the "Add Task" button
  Then the task appears in the "Pending" category
  And the task shows its deadline and status

### Mark task as Complete
Scenario: User marks a task as completed
  Given the task is in the "Pending" or "In Progress" category
  When the user clicks the "Mark as Completed" button
  Then the task moves to the "Completed" category

### Delete Task
Scenario: User deletes a task
  Given the task is in any category
  When the user clicks the "Delete" button for the task
  Then the task is removed from the list


