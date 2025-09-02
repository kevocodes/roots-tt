import { User } from "@/models/list.model"
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { format } from "@formkit/tempo"
import { Skeleton } from "../ui/skeleton";

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  if (!user.name || !user.avatar || !user.createdAt) {
    return null;
  }

  return (
    <Card className="w-full">
      <CardContent className="flex items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback className="text-muted-foreground font-medium">{user.name.charAt(0)}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col justify-start text-start">
          <h2 className="text-lg font-medium">{user.name}</h2>
          <p className="text-sm text-muted-foreground">Created at {format(user.createdAt, "MMMM D, YYYY")}</p>
        </div>
      </CardContent>
    </Card>
  )
}

UserCard.Skeleton = function UserCardSkeleton() {
  return (
    <Card className="w-full animate-pulse opacity-85">
      <CardContent className="flex items-center gap-4">
        <Skeleton className="h-12 w-12 rounded-full bg-muted" />

        <div className="flex flex-col justify-start text-start space-y-2">
          <Skeleton className="h-4 w-32 rounded bg-muted" />
          <Skeleton className="h-3 w-48 rounded bg-muted" />
        </div>
      </CardContent>
    </Card>
  )
}

export default UserCard