import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import { ChakraImageSSR } from "@/ui/components";

export function DesktopPresentationView() {
    return (
        <Box as={'section'} flexDirection={'column'}>
            <VStack sx={{
                pt: { base:'48px', lg:'80px' },
                pb: { base: '90px', md:'240px', lg: '387px' },
                left: '0px',
                w: '100vw',
                pos: 'absolute',
                bg: '#4F46E5',
            }}>
                <Text as={'h6'} textAlign={'center'}>
                    Diam quam tortor eget id. <Text as={'br'} display={'block'}/>
                    Aliquet lacus volutpat tristique <br/> sed diam.
                </Text>
            </VStack>

            <Stack alignSelf={'center'} zIndex={'1'} mt={{ base:'160px', md:'265px' }}>
                {/* Desktop View */}
                <ChakraImageSSR
                    display={{ base: 'none', md: 'flex' }}
                    src={'/img/Desktop.png'}
                    alt={'Desktop Image'}
                    width={1280}
                    height={838}
                />

                {/* Mobil View */}
                <ChakraImageSSR
                    display={{ md:'none' }}
                    src={'/img/DesktopMobil.png'}
                    alt={'Desktop Image'}
                    width={345}
                    height={255}
                />
            </Stack>
        </Box>
    )
}