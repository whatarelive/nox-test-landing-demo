import { HStack, Text, VStack, Box } from "@chakra-ui/react";
import { ChakraImageSSR } from "@/ui/components/ChakraImageSSR";

export function TeamDescriptionView() {
    return (
        <Box as={'section'} justifyContent={'center'}>
            <VStack as={'article'} gap={'32px'}>
                <VStack gap={'8px'} alignItems={{ base:'center', md:'start' }}
                        alignSelf={{ base:'center', md:'start' }}>

                    <Text as={'h6'}>
                        Bigger team.
                    </Text>

                    <Text as={'h6'} color={'#818CF8'}>
                        More time.
                    </Text>

                </VStack>

                <Text maxInlineSize={'600'} display={{ base: 'none', lg:'block' }}>
                    Quam quis orci turpis vulputate platea. Urna ipsum suscipit nullam
                    ipsum nam leo fringilla eget lorem. Sit vestibulum phasellus integer
                    et et diam malesuada. Sed tortor orci mauris proin ac. Venenatis
                    euismod mauris quis sit purus nisi. Sed quis eget augue ut aliquam sed.
                </Text>

                <Text textAlign={'center'} display={{ base: 'block', lg:'none' }}>
                    Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
                </Text>
            </VStack>

            <VStack gap={{ base:'16px', lg:'24px' }}>
                {/* All Components Image */}
                <HStack pl={{ md:'48px' }} gap={{ base:'16px', lg:'24px' }}>
                    <ChakraImageSSR
                        src={'/svg/TeamSvg1.svg'} 
                        alt={'Image Team 1'} 
                        width={{ base:152.5, md:264 }}
                        height={{ base:112, md:192 }}
                    />
                    <ChakraImageSSR
                        src={'/img/TeamPicture2.png'} 
                        alt={'Image Team 2'} 
                        width={{ base:172.5, md:240 }}
                        height={{ base:112, md:192 }}
                    />
                </HStack>
                <HStack pr={{ md:'48px' }}  gap={{ base:'16px', md:'24px'}}>
                    <ChakraImageSSR
                        src={'/svg/TeamSvg2.svg'} 
                        alt={'Image Team 3'}
                        width={{ base:123, md:207 }}
                        height={{ base:112, md:192 }}
                    />
                    <ChakraImageSSR
                        src={'/img/TeamPicture4.png'} 
                        alt={'Image Team 4'} 
                        width={{ base:187, md:345 }}
                        height={{ base:112, md:192 }}
                    />
                </HStack>
            </VStack>
        </Box>
    )
}