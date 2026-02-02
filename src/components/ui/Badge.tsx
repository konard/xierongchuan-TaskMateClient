import React from'react';

export type BadgeVariant ='success' |'warning' |'danger' |'info' |'purple' |'gray' |'blue' |'orange';
export type BadgeSize ='sm' |'md';

export interface BadgeProps {
 variant?: BadgeVariant;
 size?: BadgeSize;
 icon?: React.ReactNode;
 children: React.ReactNode;
 className?: string;
 withBorder?: boolean;
}

const variantClasses: Record<BadgeVariant, string> = {
 success:'bg-green-100 text-green-800',
 warning:'bg-yellow-100 text-yellow-800',
 danger:'bg-red-100 text-red-800',
 info:'bg-blue-100 text-blue-800',
 purple:'bg-purple-100 text-purple-800',
 gray:'bg-gray-100 text-gray-800',
 blue:'bg-blue-100 text-blue-800',
 orange:'bg-orange-100 text-orange-800',
};

const borderClasses: Record<BadgeVariant, string> = {
 success:'border-green-200',
 warning:'border-yellow-200',
 danger:'border-red-200',
 info:'border-blue-200',
 purple:'border-purple-200',
 gray:'border-gray-200',
 blue:'border-blue-200',
 orange:'border-orange-200',
};

const sizeClasses: Record<BadgeSize, string> = {
 sm:'px-2 py-0.5 text-xs',
 md:'px-2.5 py-0.5 text-xs',
};

const iconSizeClasses: Record<BadgeSize, string> = {
 sm:'w-3 h-3',
 md:'w-3 h-3',
};

/**
 * Универсальный компонент Badge для отображения статусов, меток и т.д.
 *
 * @example
 * <Badge variant="success" icon={<CheckCircleIcon />}>Выполнено</Badge>
 * <Badge variant="danger">Просрочено</Badge>
 * <Badge variant="warning" withBorder>Ожидает</Badge>
 */
export const Badge: React.FC<BadgeProps> = ({
 variant ='gray',
 size ='md',
 icon,
 children,
 className ='',
 withBorder = true,
}) => {
 const baseClasses ='inline-flex items-center rounded-full font-medium';

 const classes = [
 baseClasses,
 variantClasses[variant],
 sizeClasses[size],
 withBorder ?`border ${borderClasses[variant]}`:'',
 className,
 ].filter(Boolean).join('');

 const iconClasses = iconSizeClasses[size];

 const renderIcon = (iconElement: React.ReactNode) => {
 if (React.isValidElement<{ className?: string }>(iconElement)) {
 return React.cloneElement(iconElement, {
 className:`${iconClasses} ${iconElement.props.className ||''}`.trim(),
 });
 }
 return iconElement;
 };

 return (
 <span className={classes}>
 {icon && (
 <span className="mr-1">
 {renderIcon(icon)}
 </span>
 )}
 {children}
 </span>
 );
};
