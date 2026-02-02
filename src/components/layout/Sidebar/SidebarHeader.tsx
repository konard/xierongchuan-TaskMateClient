import React from'react';
import { Link } from'react-router-dom';
import {
 XMarkIcon,
 ChevronLeftIcon,
 ChevronRightIcon,
} from'@heroicons/react/24/outline';
import { APP_NAME } from'../../../constants/app';
import type { SidebarMode } from'../../../types/navigation';

interface SidebarHeaderProps {
 mode: SidebarMode;
 onToggleMode: () => void;
 onClose: () => void;
 isMobile: boolean;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
 mode,
 onToggleMode,
 onClose,
 isMobile,
}) => {
 if (isMobile) {
 return (
 <div className="h-16 flex items-center justify-between px-4 border-b border-gray-100 shrink-0">
 <Link to="/" className="text-xl font-bold text-blue-600 hover:opacity-80">
 {APP_NAME}
 </Link>
 <button
 onClick={onClose}
 className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
 aria-label="Закрыть меню"
 >
 <XMarkIcon className="w-5 h-5" />
 </button>
 </div>
 );
 }

 if (mode ==='mini') {
 return (
 <div className="h-16 flex items-center justify-center border-b border-gray-100 shrink-0">
 <button
 onClick={onToggleMode}
 className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
 aria-label="Развернуть меню"
 >
 <ChevronRightIcon className="w-5 h-5" />
 </button>
 </div>
 );
 }

 return (
 <div className="h-16 flex items-center justify-between px-4 border-b border-gray-100 shrink-0">
 <Link to="/" className="text-xl font-bold text-blue-600 hover:opacity-80">
 {APP_NAME}
 </Link>
 <button
 onClick={onToggleMode}
 className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
 aria-label="Свернуть меню"
 >
 <ChevronLeftIcon className="w-5 h-5" />
 </button>
 </div>
 );
};
