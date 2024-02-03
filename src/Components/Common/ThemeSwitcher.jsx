// ThemeSwitcher.jsx

import React, { useState } from "react";
import { useLayer, Arrow, Layer } from "react-laag";
import "./ThemeSwitcher.css";

const ThemeSwitcher = ({ themes, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [trigger, setTrigger] = useState(null);

  const handleToggle = (event) => {
    setIsOpen(!isOpen);
    setTrigger(event.currentTarget);
  };

  const handleThemeChange = (theme) => {
    onThemeChange(theme);
    setIsOpen(false);
  };

  const { renderLayer, triggerProps, layerProps, arrowProps } = useLayer({
    isOpen,
    overflowContainer: false,
    placement: "right-center",
    triggerOffset: 10,
    containerOffset: 16,
    auto: true,
    arrowSize: 8,
  });

  return (
    <>
      <button className="toggle-btn" {...triggerProps} onClick={handleToggle}>
        Toggle Themes
      </button>
      {renderLayer(
        <Layer {...layerProps}>
          <div className="color-list">
            {themes.map((theme, index) => (
              <div
                key={index}
                className={`color-option ${theme.toLowerCase()}`}
                onClick={() => handleThemeChange(theme)}
              ></div>
            ))}
            <Arrow {...arrowProps} backgroundColor="white" />
          </div>
        </Layer>
      )}
    </>
  );
};

export default ThemeSwitcher;
