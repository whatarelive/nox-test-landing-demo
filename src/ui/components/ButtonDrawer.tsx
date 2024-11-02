'use client';

import { useRef } from "react";
import Link from "next/link";
import {
    IconButton,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody, VStack,
    Link as ChakraLink, DrawerHeader
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { routes } from "@/ui/routes/routes";
import React from "react";

export function ButtonDrawer() {
    // This custom hook manages the operation of the Drawer
    const { isOpen, onOpen, onClose } = useDisclosure();

    // Stores the reference to the button that opens the Drawer
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <>
            {/* This Open the Drawer */}
            <IconButton
                size={'md'}
                ref={buttonRef}
                aria-label={'Drawer Button'}
                icon={ <RxHamburgerMenu width={'24px'} color={'white'}/> }
                sx={{
                    display: { base:'flex', lg: 'none' },
                    bg: '#334155',
                    borderRadius: '8px',
                    border: '1px solid #475569',
                    transition: 'all 0.2s',
                }}
                _hover={{
                    transform: 'translateY(-1px)',
                    boxShadow: 'md'
                }}
                onClick={onOpen}
            />

            {/* Drawer Component for mobile view */}
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={buttonRef}
            >
                <DrawerOverlay />
                <DrawerContent bg={'#334155'}>
                    <DrawerCloseButton />
                    <DrawerHeader/>
                    <DrawerBody>
                        <VStack sx={{
                            h: 'full',
                            gap: '24px',
                            justifyContent: 'center'
                        }}>
                            {
                                routes.map((route) => (
                                    <ChakraLink
                                        key={route.name}
                                        as={Link}
                                        href={route.href}
                                        sx={{
                                            fontSize: '20px',
                                            fontWeight: '700',
                                            lineHeight: '26.6px',
                                            color: '#ffffff'
                                        }}
                                    >
                                        {route.name}
                                    </ChakraLink>
                                ))
                            }
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}