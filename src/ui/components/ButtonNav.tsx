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
            size={'lg'}
            variant={'filled'}
            sx={{
                borderRadius: '8px',
                transition: 'all 0.2s',
            }}
            _hover={{
                transform: 'translateY(-1.5px)',
                boxShadow: 'md'
            }}
            w={{ base:'172.5px', md:'256px' }}
            color={'primary.white'}
            onClick={ handleClick }
            {...props}
        >
            { label }
        </Button>
    )
}