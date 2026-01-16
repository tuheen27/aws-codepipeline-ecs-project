import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState, ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const { scrollYProgress } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400,
    mass: 0.5,
  });

  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - window.innerHeight);
  });

  useEffect(() => {
    if (containerRef.current) {
      setContentHeight(containerRef.current.scrollHeight);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContentHeight(containerRef.current.scrollHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // For mobile and when smooth scroll would cause issues, use native scroll
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Use native scrolling to avoid complexity issues
  return (
    <div className="smooth-scroll-container">
      {children}
    </div>
  );
}
