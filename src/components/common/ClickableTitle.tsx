import React from'react';

interface ClickableTitleProps {
 children: React.ReactNode;
 onClick: () => void;
 className?: string;
}

export const ClickableTitle: React.FC<ClickableTitleProps> = ({ children, onClick, className ='' }) => {
 return (
 <button
 type="button"
 onClick={onClick}
 className={`text-left cursor-pointer hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded ${className}`}
 >
 <span className="font-medium text-gray-900">
 {children}
 </span>
 </button>
 );
};
