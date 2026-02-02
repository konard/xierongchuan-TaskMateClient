import React from 'react';

interface LoginCardProps {
  children: React.ReactNode;
}

/**
 * Карточка для формы логина.
 */
export const LoginCard: React.FC<LoginCardProps> = ({ children }) => {
  return (
    <div className="w-full max-w-md px-4">
      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
        {children}
      </div>
    </div>
  );
};
