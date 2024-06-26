import NavigationSidebar from "@/components/navigation/navigationSidebar";
import { ReactNode } from "react";

const MainLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-full'>
      <div className='hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0'>
        <NavigationSidebar></NavigationSidebar>
      </div>
      <main className='md:pl-[72px] h-full'>{children}</main>
    </div>
  );
};

export default MainLayout;
