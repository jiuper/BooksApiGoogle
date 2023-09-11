import type React from "react";
import { useEffect } from "react";

import { useBooleanState } from "./useBooleanState";

export const useModalWindow = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    const { value, setFalse, toggleValue } = useBooleanState(false);

    const handleClickOutside = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as HTMLDivElement)) {
            setFalse();
        }
    };
    const handleToggleModalWindow = () => toggleValue();
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    return { value, handleToggleModalWindow };
};