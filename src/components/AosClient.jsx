import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosClient() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true, offset: 50, easing: 'ease-out-cubic' });
    }, []);
    return null;
}