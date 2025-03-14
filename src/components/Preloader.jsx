import { useState, useEffect } from "react";
import React from "react";
import { motion } from "framer-motion"; 
import logo from "../assets/logos.png";

const Preloader = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => setLoading(false), 3000);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    if (loading) {
        return (
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 2, duration: 0.5, ease: "easeOut" }} 
                className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center bg-black text-white z-[9999]"
            >
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex items-center "
                >
                    <img src={logo} alt="logo" className="w-12 h-12" />
                    <h4 className="text-red-600 uppercase font-bold text-3xl tracking-wider">
                    exaStream
                    </h4>
                </motion.div>

               
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="mt-4 w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full"
                />
            </motion.div>
        );
    }

    return children; o
};

export default Preloader;
