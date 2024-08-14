import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { UserIcon } from "lucide-react";

export function AvatarMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="w-9 h-9 cursor-pointer">
          <AvatarImage alt="Profile" src="/placeholder-avatar.jpg" />
          <AvatarFallback>
            <UserIcon className="w-5 h-5" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="space-y-2 p-2"></DropdownMenuContent>
    </DropdownMenu>
  );
}
