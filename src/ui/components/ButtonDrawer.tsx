'use client';

import { useRef } from "react";
import {
    IconButton, useDisclosure, Drawer,
    DrawerOverlay, DrawerContent,
    DrawerCloseButton, DrawerBody,
    VStack, DrawerHeader
} from "@chakra-ui/react";
import { ChakraLinkNav } from "@/ui/components/ChakraLinkNav";
import { RxHamburgerMenu } from "react-icons/rx";
import { routes } from "@/ui/routes/routes";

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
            <Drawer placement='right' isOpen={isOpen} onClose={onClose} finalFocusRef={buttonRef}>
                <DrawerOverlay />
                <DrawerContent bg={'#334155'}>
                    <DrawerCloseButton color={'#ffffff'}/>
                    <DrawerHeader/>
                    <DrawerBody>
                        <VStack h={'full'} align={'center'} justify={'center'}>
                            {
                                routes.map(({name, href}) => (
                                    <ChakraLinkNav key={name} href={href} name={name} variant={'linkv1'}/>
                                ))
                            }
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}