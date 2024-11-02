import {Heading, HStack, Stack, Text, VStack, Image} from "@chakra-ui/react";

export function TeamDescriptionView() {
    return (
        <Stack
            as={'section'}
            sx={{
                px: { base:'16px', lg:'80px' },
                py: { base:'48px', lg:'80px' },
                gap: { base:'32px', lg:'80px' },
            }}
            justify={'center'}
            alignItems={'center'}
            direction={{ base: 'column', md: 'row' }}
        >
            <VStack as={'article'} gap={'32px'}>
                <VStack gap={'8px'} alignSelf={{ base:'center', lg:'start' }}>
                    <Heading as={'h3'} sx={{
                        fontWeight: { base:'700', lg:'900' },
                        fontSize: { base:'24px', lg:'48px' },
                        lineHeight: { base:'26.4px', lg:'52.8px' },
                        color: '#ffffff'
                    }}>
                        Bigger team.
                    </Heading>
                    <Heading as={'h3'} sx={{
                        fontWeight: { base:'700', lg:'900' },
                        fontSize: { base:'24px', lg:'48px' },
                        lineHeight: { base:'26.4px', lg:'52.8px' },
                        color: '#818CF8'
                    }}>
                        More time.
                    </Heading>
                </VStack>
                <Text sx={{
                    display: { base: 'none', lg:'block' },
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '28.8px',
                    color: '#CBD5E1',
                    maxInlineSize: '600'
                }}>
                    Quam quis orci turpis vulputate platea. Urna ipsum suscipit nullam
                    ipsum nam leo fringilla eget lorem. Sit vestibulum phasellus integer
                    et et diam malesuada. Sed tortor orci mauris proin ac. Venenatis
                    euismod mauris quis sit purus nisi. Sed quis eget augue ut aliquam sed.
                </Text>

                <Text sx={{
                    px:'10px',
                    display: { base: 'block', lg:'none' },
                    fontWeight: '400',
                    fontSize: { base:'16px', lg:'18px' },
                    lineHeight: { base:'22.4px', lg: '28.8px' },
                    textAlign: 'center',
                    color: '#CBD5E1',
                }}>
                    Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
                </Text>
            </VStack>

            <VStack gap={{ base:'16px', lg:'24px' }}>
                {/* All Components Image */}
                <HStack pl={{ lg:'48px' }} gap={{ base:'8px', lg:'24px' }}>
                    <Image 
                        src={'/svg/TeamSvg1.svg'} 
                        alt={'Image Team 1'} 
                        width={{ base:172, lg:264 }} 
                        height={{ base:112, lg:192 }}
                    />
                    <Image 
                        src={'/img/TeamPicture2.png'} 
                        alt={'Image Team 2'} 
                        width={{ base:172, lg:240 }} 
                        height={{ base:112, lg:192 }}
                    />
                </HStack>
                <HStack pr={{ lg:'48px' }}  gap={{ base:'16px', lg:'24px'}}>
                    <Image 
                        src={'/svg/TeamSvg2.svg'} 
                        alt={'Image Team 3'}
                        width={{ base:123, lg:207 }} 
                        height={{ base:112, lg:192 }}
                    />
                    <Image 
                        src={'/img/TeamPicture4.png'} 
                        alt={'Image Team 4'} 
                        width={{ base:187, lg:345 }} 
                        height={{ base:112, lg:192 }}
                    />
                </HStack>
            </VStack>
        </Stack>
    )
}