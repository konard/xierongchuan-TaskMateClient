import React from'react';
import { ArrowUpIcon, ArrowDownIcon } from'@heroicons/react/24/solid';

type StatCardVariant ='default' |'success' |'warning' |'danger' |'info';
type StatCardSize ='sm' |'md' |'lg';

interface StatCardProps {
 title: string;
 value: string | number;
 subtitle?: string;
 icon?: React.ReactNode;
 trend?:'up' |'down' |'neutral';
 trendValue?: string;
 variant?: StatCardVariant;
 size?: StatCardSize;
 className?: string;
}

const variantStyles: Record<StatCardVariant, { bg: string; accent: string; icon: string }> = {
 default: {
 bg:'bg-gray-50 border-gray-200',
 accent:'text-gray-600',
 icon:'bg-gray-100 text-gray-500',
 },
 success: {
 bg:'bg-green-50 border-green-200',
 accent:'text-green-600',
 icon:'bg-green-100 text-green-600',
 },
 warning: {
 bg:'bg-yellow-50 border-yellow-200',
 accent:'text-yellow-600',
 icon:'bg-yellow-100 text-yellow-600',
 },
 danger: {
 bg:'bg-red-50 border-red-200',
 accent:'text-red-600',
 icon:'bg-red-100 text-red-600',
 },
 info: {
 bg:'bg-blue-50 border-blue-200',
 accent:'text-blue-600',
 icon:'bg-blue-100 text-blue-600',
 },
};

const sizeStyles: Record<StatCardSize, { padding: string; valueSize: string; titleSize: string; iconSize: string }> = {
 sm: {
 padding:'p-3',
 valueSize:'text-xl',
 titleSize:'text-xs',
 iconSize:'w-8 h-8',
 },
 md: {
 padding:'p-4',
 valueSize:'text-2xl',
 titleSize:'text-sm',
 iconSize:'w-10 h-10',
 },
 lg: {
 padding:'p-5',
 valueSize:'text-3xl',
 titleSize:'text-sm',
 iconSize:'w-12 h-12',
 },
};

/**
 * Card component for displaying a single statistic with optional icon and trend indicator.
 *
 * @example
 * <StatCard
 * title="Выполнено"
 * value="85%"
 * trend="up"
 * trendValue="+5%"
 * variant="success"
 * icon={<CheckCircleIcon />}
 * />
 */
export const StatCard: React.FC<StatCardProps> = ({
 title,
 value,
 subtitle,
 icon,
 trend,
 trendValue,
 variant ='default',
 size ='md',
 className ='',
}) => {
 const styles = variantStyles[variant];
 const sizes = sizeStyles[size];

 return (
 <div
 className={`rounded-xl border ${styles.bg} ${sizes.padding} ${className}`}
 >
 <div className="flex items-start justify-between gap-3">
 <div className="flex-1 min-w-0">
 <p className={`${sizes.titleSize} font-medium text-gray-500 uppercase tracking-wider mb-1`}>
 {title}
 </p>
 <p className={`${sizes.valueSize} font-bold text-gray-900 truncate`}>
 {value}
 </p>
 {subtitle && (
 <p className="text-xs text-gray-500 mt-1">
 {subtitle}
 </p>
 )}
 {trend && trendValue && (
 <div className="flex items-center gap-1 mt-2">
 {trend ==='up' && (
 <ArrowUpIcon className="w-4 h-4 text-green-500" />
 )}
 {trend ==='down' && (
 <ArrowDownIcon className="w-4 h-4 text-red-500" />
 )}
 <span className={`text-xs font-medium ${trend ==='up' ?'text-green-600' :
 trend ==='down' ?'text-red-600' :
'text-gray-500'
 }`}>
 {trendValue}
 </span>
 </div>
 )}
 </div>
 {icon && (
 <div className={`${sizes.iconSize} rounded-lg flex items-center justify-center flex-shrink-0 ${styles.icon}`}>
 <div className="w-5 h-5">
 {icon}
 </div>
 </div>
 )}
 </div>
 </div>
 );
};
