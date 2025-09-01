import { User } from "@/models/list.model"

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  return (
    <div>{user.name}</div>
  )
}

export default UserCard