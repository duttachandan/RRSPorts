import { useEffect, useRef, useState } from "react";

const CountUpOnScroll = ({ base = 0, target = 100, duration = 2 }) => {
    const ref = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const el = ref.current;
        let observer;

        if (el) {
            observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCount(base, target, duration, el);
                        observer.unobserve(el);
                    }
                },
                { threshold: 0.3 }
            );

            observer.observe(el);
        }

        return () => observer && observer.disconnect();
    }, [base, target, duration, hasAnimated]);

    const animateCount = (start, end, duration, element) => {
        let startTime = null;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value;

            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    };

    return <span ref={ref}>{base}</span>;
};

export default CountUpOnScroll;
