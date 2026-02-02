import React, { createContext, useContext } from'react';

export type Theme ='light';
export type AccentColor ='blue';

interface ThemeContextType {
 theme: Theme;
 pendingTheme: Theme;
 setTheme: (theme: Theme) => void;
 applyTheme: () => void;
 resetPendingTheme: () => void;
 isDark: boolean;
 hasPendingChanges: boolean;
 accentColor: AccentColor;
 pendingAccentColor: AccentColor;
 setAccentColor: (color: AccentColor) => void;
 applyAccentColor: () => void;
 resetPendingAccentColor: () => void;
 hasAccentPendingChanges: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const noop = () => {};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
 return (
 <ThemeContext.Provider value={{
 theme:'light',
 pendingTheme:'light',
 setTheme: noop,
 applyTheme: noop,
 resetPendingTheme: noop,
 isDark: false,
 hasPendingChanges: false,
 accentColor:'blue',
 pendingAccentColor:'blue',
 setAccentColor: noop,
 applyAccentColor: noop,
 resetPendingAccentColor: noop,
 hasAccentPendingChanges: false
 }}>
 {children}
 </ThemeContext.Provider>
 );
};

export const useTheme = () => {
 const context = useContext(ThemeContext);
 if (context === undefined) {
 throw new Error('useTheme must be used within a ThemeProvider');
 }
 return context;
};

export const ACCENT_COLOR_OPTIONS: { value: AccentColor; label: string; colorClass: string }[] = [
 { value:'blue', label:'Синий', colorClass:'bg-blue-500' },
];
