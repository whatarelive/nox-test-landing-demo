'use client';

import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/ui/theme/theme";

interface Props {
   readonly children?: React.ReactNode;
}

export function ChakraUiProvider({ children }: Props) {
  return (
    <ChakraProvider theme={ theme }>
        { children }
    </ChakraProvider>
  )
}
