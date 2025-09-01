import UserList from "@/components/custom/UserList";
import { getUsersList } from "@/services/lists.service";
import { Suspense } from "react";

export default async function ListPage() {
  const users = getUsersList();

  return (
    <main className="w-full min-h-[100dvh] flex items-center justify-center p-4 flex-col">
      <section className="p-8 flex w-full flex-col justify-center items-center text-center space-y-4 max-w-2xl">
        
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
          Roots <span className="text-blue-500">Lists</span>
        </h1>
    
      <Suspense fallback={<div>Loading...</div>}>
        <UserList users={users} />
      </Suspense>

      </section>
    </main>
  );
}