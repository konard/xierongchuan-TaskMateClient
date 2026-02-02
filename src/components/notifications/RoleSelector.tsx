import React from'react';

interface RoleSelectorProps {
 value: string[];
 onChange: (roles: string[]) => void;
 disabled?: boolean;
}

const AVAILABLE_ROLES = [
 {
 value:'employee',
 label:'Сотрудники',
 lightBg:'bg-blue-100',
 lightText:'text-blue-800',
 darkBg:'',
 darkText:'',
 ring:'ring-blue-500',
 },
 {
 value:'manager',
 label:'Менеджеры',
 lightBg:'bg-purple-100',
 lightText:'text-purple-800',
 darkBg:'',
 darkText:'',
 ring:'ring-purple-500',
 },
 {
 value:'owner',
 label:'Владельцы',
 lightBg:'bg-indigo-100',
 lightText:'text-indigo-800',
 darkBg:'',
 darkText:'',
 ring:'ring-indigo-500',
 },
 {
 value:'observer',
 label:'Наблюдатели',
 lightBg:'bg-gray-100',
 lightText:'text-gray-800',
 darkBg:'',
 darkText:'',
 ring:'ring-gray-500',
 },
];

export const RoleSelector: React.FC<RoleSelectorProps> = ({ value = [], onChange, disabled = false }) => {
 const handleToggle = (roleValue: string) => {
 if (disabled) return;

 if (value.includes(roleValue)) {
 onChange(value.filter(r => r !== roleValue));
 } else {
 onChange([...value, roleValue]);
 }
 };

 const handleSelectAll = () => {
 if (disabled) return;
 onChange(AVAILABLE_ROLES.map(r => r.value));
 };

 const handleClearAll = () => {
 if (disabled) return;
 onChange([]);
 };

 return (
 <div className="space-y-3">
 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
 <p className="text-xs font-medium text-gray-600">Получатели уведомлений:</p>
 <div className="flex gap-3">
 <button
 type="button"
 onClick={handleSelectAll}
 disabled={disabled || value.length === AVAILABLE_ROLES.length}
 className="text-xs font-medium text-blue-600 hover:text-blue-800 disabled:text-gray-400 disabled:cursor-not-allowed"
 >
 Выбрать все
 </button>
 <span className="text-gray-300">|</span>
 <button
 type="button"
 onClick={handleClearAll}
 disabled={disabled || value.length === 0}
 className="text-xs font-medium text-blue-600 hover:text-blue-800 disabled:text-gray-400 disabled:cursor-not-allowed"
 >
 Сбросить
 </button>
 </div>
 </div>

 <div className="flex flex-wrap gap-2">
 {AVAILABLE_ROLES.map((role) => {
 const isSelected = value.includes(role.value);
 return (
 <button
 key={role.value}
 type="button"
 onClick={() => handleToggle(role.value)}
 disabled={disabled}
 className={`
 px-3 py-1.5 rounded-full text-xs font-medium 
 ${isSelected
 ?`${role.lightBg} ${role.lightText} ${role.darkBg} ${role.darkText} ring-2 ring-offset-2 ${role.ring}`
 :'bg-white text-gray-700 border border-gray-300 hover:border-blue-400 hover:bg-gray-50'
 }
 disabled:opacity-50 disabled:cursor-not-allowed
`}
 >
 {role.label}
 </button>
 );
 })}
 </div>

 {value.length === 0 && !disabled && (
 <p className="text-xs text-amber-600">
 ⚠️ Без выбора ролей уведомления получат все пользователи
 </p>
 )}
 </div>
 );
};
