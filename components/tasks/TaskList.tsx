"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TaskItem } from "./TaskItem"
import type { Task } from "@/models/tasks.model"

interface TaskListProps {
  tasks: Task[]
  onToggleComplete: (id: number) => void
  onEditTask: (id: number, name: string) => void
  onDeleteTask: (id: number) => void
}

export function TaskList({ tasks, onToggleComplete, onEditTask, onDeleteTask }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <Card className="bg-card border-border animate-fade-in">
        <CardContent className="p-8 text-center">
          <div className="text-muted-foreground text-lg">You have no pending tasks</div>
          <p className="text-muted-foreground/70 mt-2">Create your first task to get started!</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-3">
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          index={index}
          onToggleComplete={onToggleComplete}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  )
}
