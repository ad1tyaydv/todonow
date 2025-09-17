"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const {setTheme, resolvedTheme} = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted)  return null;

    return (
        <div>
            <button
                onClick={() => {
                    setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }}
                className="p-2 border rounded"
            >
                {resolvedTheme === "dark" ? "🌙" : "🌞"}
            </button>
        </div>
    )
}