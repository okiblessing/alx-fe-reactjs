// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

// Test to check if TodoList renders correctly
test('renders TodoList with initial todos', () => {
  render(<TodoList />);
  
  // Verify that the initial todos are rendered
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Learn Jest')).toBeInTheDocument();
  expect(screen.getByText('Write tests')).toBeInTheDocument();
});

// Test to check if new todo can be added
test('can add a new todo', () => {
  render(<TodoList />);

  // Add a new todo
  fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
    target: { value: 'New Todo' },
  });
  fireEvent.click(screen.getByText('Add Todo'));

  // Verify that the new todo appears in the list
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

// Test to check if a todo can be toggled (completed state)
test('can toggle a todo completion', () => {
  render(<TodoList />);

  const todoItem = screen.getByText('Learn React');
  fireEvent.click(todoItem);  // Toggle completion
  
  // Verify that the todo is crossed out
  expect(todoItem).toHaveStyle('text-decoration: line-through');

  fireEvent.click(todoItem);  // Toggle completion back

  // Verify that the todo is not crossed out anymore
  expect(todoItem).toHaveStyle('text-decoration: none');
});

// Test to check if a todo can be deleted
test('can delete a todo', () => {
  render(<TodoList />);

  // Get the initial count of todos
  const initialTodos = screen.getAllByRole('listitem');
  const initialCount = initialTodos.length;

  // Delete the first todo
  fireEvent.click(screen.getAllByText('Delete')[0]);

  // Verify that the todo was deleted
  const updatedTodos = screen.getAllByRole('listitem');
  expect(updatedTodos.length).toBe(initialCount - 1);
});
