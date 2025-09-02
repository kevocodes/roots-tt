import { AuroraText } from '@/components/magicui/aurora-text';
import { TaskMain } from '@/components/tasks/TaskMain';
import React from 'react'

function TasksPage() {
  return (
    <main className="w-full min-h-[100dvh] flex items-center justify-start p-4 flex-col">
      <section className="px-8 pb-8 pt-14 flex w-full flex-col justify-center items-center text-center space-y-4 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
          Roots <AuroraText>Tasks</AuroraText>
        </h1>

        {/* Task management section */}
        <TaskMain />
      </section>
    </main>
  );
}

export default TasksPage