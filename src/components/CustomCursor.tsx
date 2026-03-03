'use client';
import { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;
        let rafId: number;

        const onMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        };

        const loop = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
            rafId = requestAnimationFrame(loop);
        };
        rafId = requestAnimationFrame(loop);

        // Scale ring on hoverable elements
        const onEnter = () => ring.classList.add(styles.hover);
        const onLeave = () => ring.classList.remove(styles.hover);

        const addListeners = () => {
            document.querySelectorAll('a, button, [role="button"], input, textarea, select, label').forEach(el => {
                el.addEventListener('mouseenter', onEnter);
                el.addEventListener('mouseleave', onLeave);
            });
        };
        addListeners();

        // Re-attach on dynamic DOM changes
        const observer = new MutationObserver(addListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        window.addEventListener('mousemove', onMove);

        return () => {
            window.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(rafId);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className={styles.dot} />
            <div ref={ringRef} className={styles.ring} />
        </>
    );
}
