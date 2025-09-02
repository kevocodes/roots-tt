"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TaskItem } from "./TaskItem";
import type { Task } from "@/models/tasks.model";

interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  // If no tasks are present, show empty state
  if (tasks.length === 0) {
    return (
      <Card className="bg-card border-border animate-fade-in">
        <CardContent className="p-8 text-center">
          <div className="text-muted-foreground text-lg">
            You have no pending tasks
          </div>
          <p className="text-muted-foreground/70 mt-2">
            Create your first task to get started!
          </p>
        </CardContent>
      </Card>
    );
  }

  // If tasks are present, show task list
  return (
    <div className="space-y-3">
      {tasks.map((task, index) => (
        <TaskItem key={task.id} task={task} index={index} />
      ))}
    </div>
  );
}
