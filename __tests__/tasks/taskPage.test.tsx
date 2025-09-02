import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import TasksPage from "@/app/tasks/page";
import tasksReducer from "@/store/tasksSlice";
import { Task } from "@/models/tasks.model";

function renderWithStore(ui: React.ReactElement, preloadedTasks: Task[] = []) {
  const store = configureStore({
    reducer: { tasks: tasksReducer },
    preloadedState: { tasks: { tasks: preloadedTasks } },
  });

  return {
    store,
    ...render(<Provider store={store}>{ui}</Provider>),
  };
}

describe("TasksPage", () => {
  it('opens the modal when clicking "New Task" and Add is disabled for empty input', async () => {
    const user = userEvent.setup();
    renderWithStore(<TasksPage />, []);

    await user.click(screen.getByRole("button", { name: /new task/i }));

    // Modal is open
    expect(
      await screen.findByRole("heading", { name: /create new task/i })
    ).toBeInTheDocument();

    // Add is disabled initially
    const addBtn = screen.getByRole("button", { name: /^add$/i });
    expect(addBtn).toBeDisabled();

    // Spaces-only keeps it disabled (trim)
    const input = screen.getByPlaceholderText(/task name\.\.\./i);
    await user.type(input, "   ");
    expect(addBtn).toBeDisabled();
  });

  it("does not create empty tasks (pressing Enter does nothing)", async () => {
    const user = userEvent.setup();
    const { store } = renderWithStore(<TasksPage />, []);

    await user.click(screen.getByRole("button", { name: /new task/i }));
    const input = await screen.findByPlaceholderText(/task name\.\.\./i);
    await user.type(input, "   ");
    await user.keyboard("{Enter}");

    // Modal still open and no tasks created
    expect(
      screen.getByRole("heading", { name: /create new task/i })
    ).toBeInTheDocument();
    expect(store.getState().tasks.tasks).toHaveLength(0);

    // Empty-state message still visible
    expect(screen.getByText(/you have no pending tasks/i)).toBeInTheDocument();
  });

  it("creates a new task and renders it, then closes the modal", async () => {
    const user = userEvent.setup();
    renderWithStore(<TasksPage />, []);

    await user.click(screen.getByRole("button", { name: /new task/i }));

    const input = await screen.findByPlaceholderText(/task name\.\.\./i);
    const addBtn = screen.getByRole("button", { name: /^add$/i });

    await user.type(input, "Pay water bill");
    expect(addBtn).toBeEnabled();

    await user.click(addBtn);

    // Modal closed
    expect(
      screen.queryByRole("heading", { name: /create new task/i })
    ).toBeNull();

    // New task visible
    expect(screen.getByText(/pay water bill/i)).toBeInTheDocument();

    // Summary reflects 1 pending of 1 total
    expect(screen.getByText(/1 of 1 tasks pending/i)).toBeInTheDocument();
  });
});
