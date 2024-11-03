import { ButtonGroup, HStack, Text } from "@chakra-ui/react";
import { ButtonNav, ButtonDrawer, ChakraLinkNav } from "@/ui/components";
import { routes } from "@/ui/routes/routes";

export function NavBar() {
    return (
        <>
            {/* Page Title Component -> All */}
            <HStack flex={{base: '0', lg: '1'}}>
                <Text as={'h5'}> trakor </Text>
            </HStack>

            {/* Nav links Component -> Table and Desktop */}
            <HStack as={'nav'} gap={'16px'} display={{ base: 'none', lg: 'flex' }}>
                {
                    routes.map(({ name, href }) => (
                        <ChakraLinkNav key={name} name={name} href={href} variant={'linkv1'}/>
                    ))
                }
            </HStack>

            {/* Buttons Component -> Table and Desktop */}
            <ButtonGroup sx={{
                flex: '1',
                gap: '16px',
                display: { base: 'none', lg: 'flex' },
                justifyContent: 'end'
            }}>
                <ButtonNav
                    label={'Log In'}
                    href={'/?login=true'}
                    variant={'link'}
                    color={'white'}
                    w={'auto'}
                />

                <ButtonNav
                    label={'Request more info'}
                    href={'/info'}
                    bg={'#334155'}
                    border={'1px solid #475569'}
                    w={'auto'}
                />
            </ButtonGroup>

            {/* Button Drawer Component -> Mobil */}
            <ButtonDrawer/>
        </>
    )
}