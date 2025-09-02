"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { addTask } from "@/store/tasksSlice";

export function TaskModal() {
  const [newTaskName, setNewTaskName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddTask = () => {
    if (newTaskName.trim()) {
      dispatch(addTask(newTaskName.trim()));
      setNewTaskName("");
      setIsModalOpen(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      {/* Dialog trigger button */}
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in sm:w-fit w-full cursor-pointer"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Task
        </Button>
      </DialogTrigger>

      {/* Create task form */}
      <DialogContent className="sm:max-w-md bg-popover border-border animate-fade-in animate-duration-300">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-popover-foreground">
            Create New Task
          </DialogTitle>
          <DialogDescription>
            Please enter the name of the new task you want to create.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <Input
            placeholder="Task name..."
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
            className="bg-input border-border focus:ring-ring"
            autoFocus
          />
          <div className="flex gap-3 justify-end">
            <Button
              variant="outline"
              onClick={() => setIsModalOpen(false)}
              className="border-border hover:bg-secondary cursor-pointer"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleAddTask}
              disabled={!newTaskName.trim()}
              className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
            >
              Add
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
