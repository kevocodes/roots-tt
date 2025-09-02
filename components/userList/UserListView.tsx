import { User } from "@/models/list.model";
import UserCard from "./UserCard";

export function UserListView({ users }: { users: Array<User> }) {
  return (
    <>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
}