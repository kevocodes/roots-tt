import UserCard from "@/components/custom/UserCard";
import UserList from "@/components/custom/UserList";
import { AuroraText } from "@/components/magicui/aurora-text";
import { getUsersList } from "@/services/lists.service";
import { Suspense } from "react";

export default async function ListPage() {
  const users = getUsersList();

  return (
    <main className="w-full min-h-[100dvh] flex items-center justify-start p-4 flex-col">
      <section className="px-8 pb-8 pt-14 flex w-full flex-col justify-center items-center text-center space-y-4 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
          Roots <AuroraText>List</AuroraText>
        </h1>

        <Suspense
          fallback={[...Array(10)].map((_, index) => (
              <UserCard.Skeleton key={index} />
          ))}
        >
          <UserList users={users} />
        </Suspense>
      </section>
    </main>
  );
}
