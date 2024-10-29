import Image from "next/image";
import { Heading, Stack, Text, VStack } from "@chakra-ui/react";

export function DesktopPresentationView() {
    return (
        <VStack as={'section'}>
            <VStack sx={{
                zIndex: '0',
                px: '80px',
                pt: '80px',
                pb: { md:'240px', lg: '387px' },
                minW: '100vw',
                bg: '#4F46E5',
                pos: 'absolute'
            }}>
                <Heading as={'h3'} sx={{
                    zIndex:'1',
                    fontSize: '48px',
                    fontWeight: '800',
                    lineHeight: '52.8px',
                    textAlign: 'center',
                    color: '#ffffff'
                }}>
                    Diam quam tortor eget id.
                    <Text as={'span'} display={'block'}>
                        Aliquet lacus volutpat tristique sed diam.
                    </Text>
                </Heading>
            </VStack>
            <Stack sx={{
                zIndex: '1',
                mt: '185px',
                p: '80px',
            }}>
                <Image
                    src={'/img/Desktop.png'}
                    alt={'Desktop Image'}
                    width={1280}
                    height={480}
                />
            </Stack>
        </VStack>
    )
}