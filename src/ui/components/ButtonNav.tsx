'use client';

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button, type ButtonProps } from "@chakra-ui/react";

interface Props extends ButtonProps {
    label: string;
    href: string;
}

export function ButtonNav({ label, href, ...props }: Props) {
    const { push } = useRouter();

    const handleClick = useCallback(() => push(href), [push]);

    return (
        <Button
            size={'md'}
            {...props}
            borderRadius={'8px'}
            _hover={{
                transform: 'translateY(-1px)',
                boxShadow: 'md'
            }}
            transition={'all 0.2s'}
            onClick={ handleClick }
        >
            { label }
        </Button>
    )
}