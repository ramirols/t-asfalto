import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosClient() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true, offset: 120 });
    }, []);
    return null;
}