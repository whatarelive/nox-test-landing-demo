import React from "react";
import Link from "next/link";
import { Box, Link as ChakraLink } from '@chakra-ui/react';

interface Props {
    href: string;
    name?: string;
    target?: string;
    children?: React.ReactNode;
    variant?: string
}

export function ChakraLinkNav({ href, name, children, target, variant }: Props) {
  return (
    <Box py={'12px'}>
        <ChakraLink as={ Link } href={ href } variant={variant} target={target}>
            { name }
            { children }
        </ChakraLink>
    </Box>
  )
}
