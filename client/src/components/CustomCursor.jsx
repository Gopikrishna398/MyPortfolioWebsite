import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;

      // Small dot follows mouse exactly
      gsap.to(cursor, {
        x,
        y,
        duration: 0.1,
        ease: 'power2.out',
      });

      // Larger bubble follows with a delay
      gsap.to(follower, {
        x,
        y,
        duration: 0.6,
        ease: 'power3.out',
      });
    };

    const onMouseDown = () => {
      gsap.to(follower, {
        scale: 0.8,
        backgroundColor: 'rgba(170, 59, 255, 0.4)',
        duration: 0.3,
      });
    };

    const onMouseUp = () => {
      gsap.to(follower, {
        scale: 1,
        backgroundColor: 'rgba(170, 59, 255, 0.2)',
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <>
      <style>
        {`
          * {
            cursor: none !important;
          }
          @media (max-width: 768px) {
            * {
              cursor: auto !important;
            }
            .custom-cursor {
              display: none;
            }
          }
        `}
      </style>
      <div
        ref={cursorRef}
        className="custom-cursor fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(170,59,255,0.8)]"
      />
      <div
        ref={followerRef}
        className="custom-cursor fixed top-0 left-0 w-10 h-10 border border-primary/40 bg-primary/20 backdrop-blur-[2px] rounded-full pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
      />
    </>
  );
};

export default CustomCursor;
