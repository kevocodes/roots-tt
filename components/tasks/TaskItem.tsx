"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Edit3, Check, X } from "lucide-react";
import type { Task } from "@/models/tasks.model";
import { useAppDispatch } from "@/store/hooks";
import { toggleComplete, editTask, deleteTask } from "@/store/tasksSlice";

interface TaskItemProps {
  task: Task;
  index: number;
}

export function TaskItem({ task, index }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(task.name);
  const dispatch = useAppDispatch();

  const handleSaveEdit = () => {
    if (editName.trim()) {
      dispatch(editTask({ id: task.id, name: editName.trim() }));
    }
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditName(task.name);
    setIsEditing(false);
  };

  const handleStartEdit = () => {
    setEditName(task.name);
    setIsEditing(true);
  };

  const handleToggleComplete = () => {
    dispatch(toggleComplete(task.id));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <Card
      className={`bg-card border-border hover:shadow-md transition-all duration-300 animate-fade-in ${
        task.completed ? "opacity-70" : ""
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-1">
            <button
              onClick={handleToggleComplete}
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                task.completed
                  ? "bg-primary border-primary text-primary-foreground"
                  : "border-border hover:border-primary"
              }`}
            >
              {task.completed && <Check className="w-3 h-3" />}
            </button>

            {isEditing ? (
              <div className="flex items-center gap-2 flex-1">
                <Input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSaveEdit()}
                  className="bg-input border-border focus:ring-ring"
                  autoFocus
                />
                <Button
                  size="sm"
                  onClick={handleSaveEdit}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground p-2 cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleCancelEdit}
                  className="border-border hover:bg-secondary p-2 bg-transparent cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <span
                className={`text-card-foreground flex-1 text-start ${
                  task.completed ? "line-through text-muted-foreground" : ""
                }`}
              >
                {task.name}
              </span>
            )}
          </div>

          {!isEditing && (
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={handleStartEdit}
                className="text-muted-foreground hover:bg-accent p-2 cursor-pointer"
              >
                <Edit3 className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleDeleteTask}
                className="text-destructive hover:text-slate-100 p-2 cursor-pointer hover:bg-destructive!"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
