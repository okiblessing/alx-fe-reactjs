// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';  // Import necessary functions from React Testing Library
import TodoList from '../components/TodoList';  // Adjust the path to your component if necessary

// Test case: Verify that the TodoList component renders the initial list of todos
test('renders TodoList with initial todos', () => {
  render(<TodoList />);  // Render the TodoList component

  // Check for initial todos in the document
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Learn Jest')).toBeInTheDocument();
  expect(screen.getByText('Write tests')).toBeInTheDocument();
});

// Test case: Verify that a new todo can be added
test('can add a new todo', () => {
  render(<TodoList />);

  // Simulate adding a new todo
  fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
    target: { value: 'New Todo' },
  });
  fireEvent.click(screen.getByText('Add Todo'));

  // Check that the new todo appears in the list
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

// Test case: Verify that a todo can be toggled (marked as completed)
test('can toggle a todo completion', () => {
  render(<TodoList />);

  const todoItem = screen.getByText('Learn React');
  fireEvent.click(todoItem);  // Simulate toggle action
  
  // Verify that the todo is crossed out (completed)
  expect(todoItem).toHaveStyle('text-decoration: line-through');

  fireEvent.click(todoItem);  // Toggle back to not completed

  // Verify that the todo is not crossed out anymore
  expect(todoItem).toHaveStyle('text-decoration: none');
});

// Test case: Verify that a todo can be deleted
test('can delete a todo', () => {
  render(<TodoList />);

  // Get the current number of todos
  const initialTodos = screen.getAllByRole('listitem');
  const initialCount = initialTodos.length;

  // Simulate deleting the first todo
  fireEvent.click(screen.getAllByText('Delete')[0]);

  // Verify that the todo is deleted
  const updatedTodos = screen.getAllByRole('listitem');
  expect(updatedTodos.length).toBe(initialCount - 1);
});
