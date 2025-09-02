"use client";

import { useState } from "react";
import { TaskModal } from "./TaskModal";
import { TaskList } from "./TaskList";
import { Task } from "@/models/tasks.model";

export function TaskMain() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (name: string) => {
    const newTask: Task = {
      id: Date.now(),
      name,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id: number, name: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, name } : task)));
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className={`max-w-2xl w-full mt-8`}>
      <div className="flex justify-center mb-8">
        <TaskModal onAddTask={addTask} />
      </div>

      <TaskList
        tasks={tasks}
        onToggleComplete={toggleComplete}
        onEditTask={editTask}
        onDeleteTask={deleteTask}
      />

      {tasks.length > 0 && (
        <div className="mt-8 text-center text-muted-foreground animate-fade-in">
          <p>
            {pendingTasks} of {tasks.length} tasks pending
          </p>
        </div>
      )}
    </div>
  );
}
