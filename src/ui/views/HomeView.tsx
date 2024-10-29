import Image from "next/image";
import { VStack, Stack, Heading, Text, ButtonGroup } from "@chakra-ui/react";
import { ButtonNav } from "@/ui/components";


export function HomeView() {
    return (
        <VStack
            as={'section'}
            sx={{
                minH: '810px',
                mt: '96px',
                p: '80px',
                align: 'center',
            }}
        >
            <Stack as={'article'} gap={'32px'} justify={'center'} alignItems={'center'}>
                <VStack>
                    <Text
                        as={'span'}
                        sx={{
                            fontSize: '20px',
                            fontWeight: '500',
                            lineHeight: '22px',
                            textAlign:'center',
                            color: '#818CF8'
                        }}
                    >
                        Team Progress Tracking Tool
                    </Text>
                    <Heading
                        as={'h1'}
                        sx={{
                            fontSize: '72px',
                            fontWeight: '900',
                            lineHeight: '79.2px',
                            textAlign:'center',
                            color: '#ffffff'
                        }}
                    >
                        Track your team progress
                    </Heading>
                </VStack>

                <Text sx={{
                    fontSize: '18px',
                    fontWeight: '400',
                    lineHeight: '28.8px',
                    textAlign:'center',
                    maxLines: '5',
                    maxInlineSize: '630',
                    color: '#CBD5E1'
                }}>
                    Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra.
                    Ultrices faucibus neque velit risus ac id lorem.
                </Text>

                <ButtonGroup gap={'16px'}>
                    <ButtonNav
                        label={'Start for free'}
                        href={'/start'}
                        size={'lg'}
                        variant={'filled'}
                        sx={{
                            w: '256px',
                            fontWeight: '500',
                            fontSize: '20px',
                            bg: '#4F46E5',
                            color: 'white',
                            border: '1px solid ##6366F1'
                        }}
                    />

                    <ButtonNav
                        label={'Request more info'}
                        href={'/info'}
                        size={'lg'}
                        variant={'filled'}
                        sx={{
                            w: '256px',
                            fontWeight: '500',
                            fontSize: '20px',
                            bg: '#334155',
                            color: 'white',
                            border: '1px solid #475569'
                        }}
                    />
                </ButtonGroup>
            </Stack>
            <Stack flex={'1'} placeContent={'flex-end'}>
                <Image src='/svg/shapes.svg' alt={'Shape svg'} width={284} height={284} />
            </Stack>
        </VStack>
    )
}