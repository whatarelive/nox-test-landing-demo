import Image from "next/image";
import {Heading, HStack, Stack, Text, VStack} from "@chakra-ui/react";

export function TeamDescriptionView() {
    return (
        <Stack
            as={'section'}
            sx={{
                p: '80px',
                gap: '80px',
            }}
            justify={'center'}
            alignItems={'center'}
            direction={{base: 'column', md: 'row'}}
        >
            <VStack as={'article'} gap={'32px'}>
                <VStack gap={'8px'} alignSelf={'start'} alignItems={'start'}>
                    <Heading as={'h3'} sx={{
                        fontWeight: '800',
                        fontSize: '48px',
                        lineHeight: '52.8px',
                        color: '#ffffff'
                    }}>
                        Bigger team.
                    </Heading>
                    <Heading as={'h3'} sx={{
                        fontWeight: '800',
                        fontSize: '48px',
                        lineHeight: '52.8px',
                        color: '#818CF8'
                    }}>
                        More time.
                    </Heading>
                </VStack>
                <Text sx={{
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
            </VStack>

            <VStack gap={'24px'} >
                <HStack pl={'48px'} gap={'24px'}>
                    <Image src={'/svg/TeamSvg1.svg'} alt={'Image Team 1'} width={264} height={192}/>
                    <Image src={'/img/TeamPicture2.png'} alt={'Image Team 2'} width={264} height={192}/>
                </HStack>

                <HStack pr={'24px'} gap={'24px'}>
                    <Image src={'/svg/TeamSvg2.svg'} alt={'Image Team 3'} width={207} height={192}/>
                    <Image src={'/img/TeamPicture4.png'} alt={'Image Team 4'} width={345} height={192}/>
                </HStack>
            </VStack>
        </Stack>
    )
}