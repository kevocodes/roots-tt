// "@/components/userList/UserList.tsx"
import { User } from "@/models/list.model";
import { use } from "react";
import { UserListView } from "./UserListView";

interface UserListProps {
  users: Promise<Array<User>>;
}

export default function UserList({ users }: UserListProps) {
  const resolvedUsers = use(users);

  // show user list view
  return <UserListView users={resolvedUsers} />;
}
