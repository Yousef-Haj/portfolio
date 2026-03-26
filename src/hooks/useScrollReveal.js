import { useEffect,useState } from "react";

export const useScrollReveal = (Options = {}) => {  
    const {
        threshold = 0.1,
        rootMargin = '0px',
    } = Options;
    const [isvisible, setvisible] = useState(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const ref = useEffect(null);
    useEffect(() => {
       const element = ref.current;
       if (!element) return;

         const observer = new IntersectionObserver(([entry]) => {
         if (entry.isIntersecting) {
            setvisible(true);
            observer.unobserve(element);
         }
         }, { threshold, rootMargin });
            observer.observe(element);
         return () => {
            if (element) observer.unobserve(element);
         };

    }, [threshold, rootMargin, ref]);
    return [ref, isvisible];
            
    };
    