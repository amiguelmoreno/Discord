"use client";

import { Plus } from "lucide-react";
import ActionTooltip from "../actionTooltip";
import { useEffect, useState } from "react";
import { useModal } from "@/hooks/useModalStore";

const NavigationAction = () => {
  const { onOpen } = useModal();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div>
      <ActionTooltip side='right' align='center' label='Add a server'>
        <div
          onClick={() => onOpen("createServer")}
          className='group flex items-center'
        >
          <div className='flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500'>
            <Plus
              className='group-hover:text-white transition text-emerald-500 '
              size={25}
            ></Plus>
          </div>
        </div>
      </ActionTooltip>
    </div>
  );
};

export default NavigationAction;
