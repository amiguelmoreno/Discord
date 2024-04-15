import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import NavigationSidebar from './navigation/navigationSidebar';
import ServerSidebar from './server/serverSidebar';

const MobileToggle = ({ serverId }: { serverId: string }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'ghost'} size={'icon'} className="md:hidden">
          <Menu></Menu>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex gap-0 p-0" side={'left'}>
        <div className="w-[70px]">
          <NavigationSidebar></NavigationSidebar>
        </div>
        <ServerSidebar serverId={serverId}></ServerSidebar>
      </SheetContent>
    </Sheet>
  );
};

export default MobileToggle;
