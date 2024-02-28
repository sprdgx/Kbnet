"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { AlignJustifyIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Fredoka, Roboto, Poppins } from "next/font/google"

const fredoka = Fredoka({
    subsets: ["latin"],
    weight: ["400", "700"]
})
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600"]
})

const Navigationbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const currentUrl = router.asPath;

    const routes = [
        { href: "#", label: "Accueil" },
        { href: "#services", label: "Services" },
        { href: "#clients", label: "Clients" },
        { href: "#contact", label: "Contact" },
    ];
    return (
        <nav className="border-b border-b-zinc-200 p-3">
            <div className="max-w-screen">
                <div className="container">
                    <div className="flex justify-between">
                        <Link href="/" className={`${fredoka.className} font-normal text-xl`}>
                            KBNET
                        </Link>
                        <div className="hidden items-center gap-8 lg:flex">
                            {routes.map((route) => (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    className={`${poppins.className} hover:text-primary hover:border-b hover:border-b-black text-md font-medium transition-colors ${currentUrl === "/" + route.href
                                        ? "border-b border-b-black"
                                        : ""
                                        }`}
                                >
                                    {route.label}
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center lg:hidden">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <X /> : <AlignJustifyIcon />}
                            </motion.button>
                        </div>

                        {/* Mobile */}
                        <AnimatePresence>
                            {isOpen && (
                                <>
                                    <motion.div
                                        className="fixed left-0 top-0 z-50 h-full w-3/4 border-r border-r-zinc-100 bg-white transition-all sm:w-80 lg:hidden"
                                        initial={{ x: "-100%" }}
                                        animate={{ x: 0 }}
                                        exit={{ x: "-100%" }}
                                        transition={{ duration: 0.1, ease: "easeInOut" }}
                                    >
                                        <ul className="flex flex-col px-6 py-8">
                                            <li className="mb-3">
                                                <Link
                                                    onClick={() => setIsOpen(false)}
                                                    href="/"
                                                    className={`${fredoka.className} font-normal text-xl text-zinc-950 hover:text-black dark:text-white`}
                                                >
                                                    KBNET
                                                </Link>
                                            </li>
                                            {routes.map((route) => (
                                                <li key={route.href} className="mb-2">
                                                    <Link
                                                        onClick={() => setIsOpen(false)}
                                                        href={route.href}
                                                        className={`text-muted-foreground text-base font-normal ml-3 hover:text-black dark:text-white ${currentUrl === "/" + route.href
                                                            ? "border-b border-b-black"
                                                            : ""
                                                            }`}
                                                    >
                                                        {route.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                    <motion.div
                                        className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.5 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.1 }}
                                        onClick={() => setIsOpen(false)}
                                    />
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Navigationbar
