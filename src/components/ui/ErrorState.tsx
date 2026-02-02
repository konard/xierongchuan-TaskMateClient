import React from'react';
import { XCircleIcon, ArrowPathIcon } from'@heroicons/react/24/outline';
import { Button } from'./Button';

export interface ErrorStateProps {
 title?: string;
 description?: string;
 onRetry?: () => void;
 retryText?: string;
 className?: string;
}

/**
 * Компонент для отображения состояния ошибки.
 *
 * @example
 * <ErrorState
 * title="Ошибка загрузки"
 * description="Не удалось загрузить данные"
 * onRetry={() => refetch()}
 * />
 */
export const ErrorState: React.FC<ErrorStateProps> = ({
 title ='Ошибка загрузки',
 description,
 onRetry,
 retryText ='Повторить',
 className ='',
}) => {
 const containerClasses = [
'bg-red-50 border border-red-200 rounded-xl p-6',
 className,
 ].filter(Boolean).join('');

 return (
 <div className={containerClasses}>
 <div className="flex items-start">
 <XCircleIcon className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
 <div className="flex-1">
 <p className="text-red-800 font-medium">{title}</p>
 {description && (
 <p className="text-red-700 text-sm mt-1">{description}</p>
 )}
 {onRetry && (
 <div className="mt-4">
 <Button
 variant="outline"
 size="sm"
 onClick={onRetry}
 icon={<ArrowPathIcon />}
 >
 {retryText}
 </Button>
 </div>
 )}
 </div>
 </div>
 </div>
 );
};
