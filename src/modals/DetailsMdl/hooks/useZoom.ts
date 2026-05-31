import { type MouseEvent, type TouchEvent, useState } from 'react';

export default function useZoom() {
  const [zoomPosition, setZoomPosition] = useState({
    x: 50,
    y: 50,
  });

  const [isZoomed, setIsZoomed] = useState(false);

  const updateZoomPosition = (
    clientX: number,
    clientY: number,
    rect: DOMRect
  ) => {
    setZoomPosition({
      x: ((clientX - rect.left) / rect.width) * 100,
      y: ((clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth <= 768) return;

    const rect = event.currentTarget.getBoundingClientRect();

    updateZoomPosition(event.clientX, event.clientY, rect);
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (!isZoomed) return;

    const touch = event.touches[0];

    const rect = event.currentTarget.getBoundingClientRect();

    updateZoomPosition(touch.clientX, touch.clientY, rect);
  };

  const handleToggleZoom = () => {
    if (window.innerWidth > 768) return;

    setIsZoomed((prev) => !prev);
  };

  return {
    handleToggleZoom,
    handleTouchMove,
    handleMouseMove,
    zoomPosition,
    isZoomed,
  };
}
