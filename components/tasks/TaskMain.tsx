"use client";

import { TaskModal } from "./TaskModal";
import { TaskList } from "./TaskList";
import { useAppSelector } from "@/store/hooks";

export function TaskMain() {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className={`max-w-2xl w-full mt-8`}>
      <div className="flex justify-center mb-8">
        <TaskModal />
      </div>

      <TaskList tasks={tasks} />

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
