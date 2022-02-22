import React, { useCallback } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useWindowSize } from '../../../hooks/useWindowSize';

interface IThemeToggleProps {
  onThemeChange: (checked: boolean) => void;
  isDarkMode: boolean;
}

const ThemeToggle: React.FC<IThemeToggleProps> = ({ onThemeChange, isDarkMode }) => {
  const { width } = useWindowSize();

  const getIconSize = useCallback(() => {
    return !width || (width < 768 && width > 320) ? 32 : width >= 768 ? 48 : Math.floor(width / 10);
  }, [width]);

  return (
    <div>
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={onThemeChange}
        size={getIconSize()}
        sunColor='#111517'
      />
    </div>
  );
};

export default ThemeToggle;
