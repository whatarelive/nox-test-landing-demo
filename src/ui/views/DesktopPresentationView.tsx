import Image from "next/image";
import { Heading, Stack, Text, VStack } from "@chakra-ui/react";

export function DesktopPresentationView() {
    return (
        <VStack as={'section'}>
            <VStack sx={{
                zIndex: '0',
                px: { base:'16px', lg:'80px' },
                pt: { base:'48px', lg:'80px' },
                pb: { base: '120px', md:'240px', lg: '387px' },
                minW: '100vw',
                bg: '#4F46E5',
                pos: 'absolute'
            }}>
                <Heading as={'h3'} sx={{
                    zIndex:'1',
                    fontSize: { base:'24px', lg: '48px' },
                    fontWeight: { base:'700', lg:'900' },
                    lineHeight: { base:'26.6px', lg:'52.8px' },
                    px:{ base:'10px', lg:'0px' },
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
                mt: { base:'150px', lg:'185px' },
                p: { base:'16px', lg:'80px' },
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