// "@/components/userList/UserList.tsx"
import { User } from "@/models/list.model";
import { use } from "react";
import UserCard from "./UserCard";

interface UserListProps {
  users: Promise<Array<User>>;
}

export function UserListView({ users }: { users: Array<User> }) {
  return (
    <>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
}

export default function UserList({ users }: UserListProps) {
  const resolvedUsers = use(users);
  return <UserListView users={resolvedUsers} />;
}
