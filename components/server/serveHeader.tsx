'use client';

import { ServerWithMembersWithProfiles } from '@/types';
import { MemberRole, Server } from '@prisma/client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  ChevronDown,
  LogOut,
  PlusCircle,
  Settings,
  SettingsIcon,
  Trash,
  UserPlus,
  Users,
} from 'lucide-react';
import { useModal } from '@/hooks/useModalStore';

interface ServeHeaderProps {
  server: ServerWithMembersWithProfiles;
  role?: MemberRole;
}

const ServeHeader = ({ server, role }: ServeHeaderProps) => {
  const { onOpen } = useModal();
  const isAdmin = role === MemberRole.ADMIN;
  const isModerator = isAdmin || role === MemberRole.MODERATOR;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none" asChild>
        <button className="text-md flex h-12 w-full items-center border-b-2 border-neutral-200 px-3 font-semibold transition hover:bg-zinc-700/10 dark:border-neutral-800 dark:hover:bg-zinc-700/50">
          {server.name}
          <ChevronDown className="ml-4 h-5 w-5 md:ml-auto"></ChevronDown>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 space-y-[2px] text-xs font-medium text-black dark:text-neutral-400">
        {isModerator && (
          <DropdownMenuItem
            onClick={() => onOpen('invite', { server })}
            className="cursor-pointer px-3 py-2 text-sm  text-indigo-600 
           dark:text-indigo-400"
          >
            Invite People
            <UserPlus className="ml-auto h-4 w-4"></UserPlus>
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem
            onClick={() => onOpen('editServer', { server })}
            className="cursor-pointer px-3 py-2 text-sm "
          >
            Server Settings
            <Settings className="ml-auto h-4 w-4"></Settings>
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem
            onClick={() => onOpen('members', { server })}
            className="cursor-pointer px-3 py-2 text-sm "
          >
            Manage Members
            <Users className="ml-auto h-4 w-4"></Users>
          </DropdownMenuItem>
        )}
        {isModerator && (
          <DropdownMenuItem
            onClick={() => onOpen('createChannel', { server })}
            className="cursor-pointer px-3 py-2 text-sm "
          >
            Create Channel
            <PlusCircle className="ml-auto h-4 w-4"></PlusCircle>
          </DropdownMenuItem>
        )}
        {isModerator && <DropdownMenuSeparator></DropdownMenuSeparator>}
        {isAdmin && (
          <DropdownMenuItem
            onClick={() => onOpen('deleteServer', { server })}
            className="cursor-pointer px-3 py-2 text-sm text-rose-500 "
          >
            Delete Server
            <Trash className="ml-auto h-4 w-4"></Trash>
          </DropdownMenuItem>
        )}
        {!isAdmin && (
          <DropdownMenuItem
            onClick={() => onOpen('leaveServer', { server })}
            className="cursor-pointer px-3 py-2 text-sm text-rose-500 "
          >
            Leave Server
            <LogOut className="ml-auto h-4 w-4"></LogOut>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ServeHeader;
