import { useEffect, useRef } from "react";

export default function OutsideClick(callback: () => void) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if(wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [callback]);

  return wrapperRef;
}
