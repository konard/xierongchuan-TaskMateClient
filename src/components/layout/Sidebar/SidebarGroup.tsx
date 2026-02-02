import React from'react';
import { ChevronDownIcon } from'@heroicons/react/24/outline';
import { SidebarItem } from'./SidebarItem';
import type { NavGroup, NavItem } from'../../../types/navigation';

interface SidebarGroupProps {
 group: NavGroup;
 isExpanded: boolean;
 onToggle: () => void;
 isItemActive: (item: NavItem) => boolean;
 onItemClick: () => void;
}

export const SidebarGroup: React.FC<SidebarGroupProps> = ({
 group,
 isExpanded,
 onToggle,
 isItemActive,
 onItemClick,
}) => {
 const { title, icon: GroupIcon, items, collapsible } = group;

 // Проверяем есть ли активный элемент в группе
 const hasActiveItem = items.some(isItemActive);

 return (
 <div className="px-3">
 {/* Заголовок группы */}
 {collapsible ? (
 <button
 onClick={onToggle}
 className={`
 w-full flex items-center justify-between px-3 py-2 mb-1
 text-xs font-semibold uppercase tracking-wider
 rounded-lg 
 ${hasActiveItem && !isExpanded
 ?'text-blue-600 bg-blue-50'
 :'text-gray-500 hover:bg-gray-100'
 }
`}
 >
 <div className="flex items-center gap-2">
 <GroupIcon className="w-4 h-4" />
 <span>{title}</span>
 </div>
 <ChevronDownIcon
 className={`w-4 h-4 ${
 isExpanded ?'rotate-180' :''
 }`}
 />
 </button>
 ) : (
 <div className="px-3 py-2 mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
 <div className="flex items-center gap-2">
 <GroupIcon className="w-4 h-4" />
 <span>{title}</span>
 </div>
 </div>
 )}

 {/* Элементы группы с анимацией */}
 <div
 className={`
 overflow-hidden -out
 ${isExpanded ?'max-h-96 opacity-100' :'max-h-0 opacity-0'}
`}
 >
 <ul className="space-y-1 p-0.5">
 {items.map((item) => (
 <SidebarItem
 key={item.id}
 item={item}
 isActive={isItemActive(item)}
 onClick={onItemClick}
 />
 ))}
 </ul>
 </div>
 </div>
 );
};
