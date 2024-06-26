import currentProfile from '@/lib/currentProfile';
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';
import NavigationAction from './navigationAction';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import NavigationItem from './navigationItem';
import { ModeToggle } from '../modeToggle';
import { UserButton } from '@clerk/nextjs';

const NavigationSidebar = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect('/');
  }

  const servers = await db.server.findMany({
    where: { members: { some: { profileId: profile.id } } },
  });

  return (
    <div className="flex h-full w-full flex-col items-center space-y-4 bg-[#E3E5E8] py-4 text-primary dark:bg-[#1E1F22] ">
      <NavigationAction></NavigationAction>
      <Separator className="mx-auto h-[2px] w-10 rounded-md bg-zinc-300 dark:bg-zinc-700"></Separator>
      <ScrollArea className="w-full flex-1">
        {servers.map((server) => (
          <div key={server.id} className="mb-4">
            <NavigationItem
              id={server.id}
              name={server.name}
              imageUrl={server.imageUrl}
            ></NavigationItem>
          </div>
        ))}
      </ScrollArea>
      <div className="mt-auto flex flex-col items-center gap-y-4 pb-3">
        <ModeToggle></ModeToggle>
        <UserButton
          afterSignOutUrl="/"
          appearance={{ elements: { avatarBox: 'h-[48px] w-[48px]' } }}
        ></UserButton>
      </div>
    </div>
  );
};

export default NavigationSidebar;
