import React from'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
 label?: string;
 error?: string;
 hint?: string;
 fullWidth?: boolean;
}

/**
 * Универсальный компонент многострочного текстового поля.
 *
 * @example
 * <Textarea label="Описание" placeholder="Введите описание..." rows={4} />
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({
 label,
 error,
 hint,
 fullWidth = true,
 className ='',
 id,
 rows = 3,
 ...props
}, ref) => {
 const textareaId = id ||`textarea-${Math.random().toString(36).substr(2, 9)}`;

 const baseClasses =' block rounded-xl border shadow-sm focus:outline-none focus:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2 text-sm';

 const stateClasses = error
 ?' border-red-300 focus:border-red-500'
 :'border-gray-200';

 const colorClasses ='bg-white text-gray-900 placeholder-gray-400';

 const textareaClasses = [
 baseClasses,
 stateClasses,
 colorClasses,
 fullWidth ?'w-full' :'',
 className,
 ].filter(Boolean).join('');

 return (
 <div className={fullWidth ?'w-full' :''}>
 {label && (
 <label
 htmlFor={textareaId}
 className="block text-sm font-medium text-gray-700 mb-2"
 >
 {label}
 </label>
 )}
 <textarea
 ref={ref}
 id={textareaId}
 rows={rows}
 className={textareaClasses}
 {...props}
 />
 {error && (
 <p className="mt-1 text-sm text-red-600">{error}</p>
 )}
 {hint && !error && (
 <p className="mt-1 text-xs text-gray-500">{hint}</p>
 )}
 </div>
 );
});

Textarea.displayName ='Textarea';
