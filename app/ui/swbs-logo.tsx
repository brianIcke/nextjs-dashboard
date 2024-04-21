import { Cog8ToothIcon } from '@heroicons/react/24/outline';
import { fugaz_one } from '@/app/ui/fonts';

export default function SWBSLogo() {
  return (
    <div
      className={`${fugaz_one.className} flex flex-row items-center leading-none text-white`}
    >
      <Cog8ToothIcon className="flex-none h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">SWBS</p>
    </div>
  );
}
