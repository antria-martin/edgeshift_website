'use client';
import { useEffect } from 'react';

/**
 * Attaches IntersectionObserver to every element that has
 * data-reveal or the class .reveal on the page.
 * Adds .visible when it enters the viewport.
 */
export default function ScrollReveal() {
    useEffect(() => {
        const selectors = [
            '.fade-in',
            '.fade-in-left',
            '.fade-in-right',
            '[data-reveal]',
        ].join(', ');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add('visible');
                        observer.unobserve(e.target); // fire once
                    }
                });
            },
            { threshold: 0.12 }
        );

        const attach = () => {
            document.querySelectorAll(selectors).forEach((el) => {
                if (!el.classList.contains('visible')) observer.observe(el);
            });
        };

        attach();

        // Re-scan on route changes / dynamic content
        const mutObs = new MutationObserver(attach);
        mutObs.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mutObs.disconnect();
        };
    }, []);

    return null;
}
