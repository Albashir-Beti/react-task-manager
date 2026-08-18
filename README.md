# React Task Manager

A simple and responsive Task Manager application built with React and Vite as part of my Frontend Intermediate Internship.

## Project Overview

The React Task Manager allows users to create, complete, delete, and clear tasks. Tasks are stored in the browser's localStorage, so they remain available after refreshing the page.

## Technologies Used

- React
- JavaScript
- JSX
- CSS
- Vite
- ESLint
- Browser localStorage

## React Concepts Demonstrated

This project demonstrates the following React concepts:

- JSX
- Functional Components
- Class Components
- Props
- State with `useState`
- Event Handlers
- `useEffect`
- React Fragments
- Component Lifecycle
- Reusable Components
- Virtual DOM concepts

## Main Components

### Header

Displays the application title and introductory information.

### TaskForm

Allows users to enter and add new tasks.

### TaskList

Displays all available tasks.

### TaskItem

Represents an individual task and provides options to complete or delete it.

### TaskStats

Displays the total, completed, and remaining tasks.

### LifecycleDemo

Demonstrates a React class component and lifecycle methods.

## Features

- Add new tasks
- Mark tasks as completed
- Delete individual tasks
- Clear all tasks
- View task statistics
- Save tasks using localStorage
- Tasks remain after refreshing the browser
- Reusable React components

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── LifecycleDemo.jsx
│   ├── TaskForm.jsx
│   ├── TaskItem.jsx
│   ├── TaskList.jsx
│   └── TaskStats.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx