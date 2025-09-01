import { User } from "@/models/list.model";
import { use } from 'react'
import UserCard from "./UserCard";

interface UserListProps {
  users: Promise<Array<User>>;
}

function UserList({ users }: UserListProps) {
  const resolvedUsers = use(users);

  return (
    <ul>
      {resolvedUsers.slice(0,3).map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  )
}

export default UserList