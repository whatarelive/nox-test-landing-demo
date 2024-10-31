'use client';

import { useState } from "react";

interface Props {
    totalElements: number;
}

export function usePagination({ totalElements }: Props) {
    const [current, setCurrent] = useState(totalElements/2);

    const handleClickBack = () => {
        if (current > 1) {
            setCurrent(current - 1)
        }
    }

    const handleClickNext = () => {
        if (current <= totalElements) return;
        setCurrent(current + 1)
    }

    return {
        current,
        handleClickBack,
        handleClickNext,
    }
}