import Link from "next/link";
import { ButtonGroup, HStack, Link as ChakraLink, Heading, Box } from "@chakra-ui/react";
import { ButtonNav } from "@/ui/components";
import { routes } from "@/ui/routes/routes";

export function NavBar() {
    return (
        <HStack sx={{
            px: '80px',
            py: '24px',
            max: '100vw',
        }}>

            <HStack flex={'1'}>
                <Heading as={'h5'} sx={{
                    fontSize: '32px',
                    fontWeight: '700',
                    lineHeight: '35.2px',
                    color: 'white',
                }}>
                    trakor
                </Heading>
            </HStack>

            <HStack flex={'2'} direction={'row'} gap={'8px'} justifyContent={'center'}>
                {
                    routes.map(({ name, href }) => (
                        <Box key={ name } sx={{
                            py: '12px',
                            px: '8px',
                            gap: '8px',
                        }}>
                            <ChakraLink
                                as={ Link }
                                href={ href }
                                sx={{
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    lineHeight: '24px',
                                    letterSpacing: '0.5px',
                                    color: 'white'
                                }}
                            >
                                { name }
                            </ChakraLink>
                        </Box>
                    ))
                }
            </HStack>

            <ButtonGroup flex={'1'} gap={'16px'} justifyContent={'flex-end'}>
                <ButtonNav
                    label={'Log In'}
                    href={'/?login=true'}
                    variant={'link'}
                    color={'white'}
                />

                <ButtonNav
                    label={'Request more info'}
                    href={'/info'}
                    variant={'filled'}
                    sx={{
                        bg: '#334155',
                        color: 'white',
                        border: '1px solid #475569'
                    }}
                />
            </ButtonGroup>
        </HStack>
    )
}