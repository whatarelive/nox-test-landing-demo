import {
    HomeView, CompaniesView, DescriptionView,
    TeamDescriptionView, DesktopPresentationView,
    // PowerfulToolsView,
} from "@/ui/views/landing/home";

export default function Home() {
  return (
    <>
        <HomeView/>
        <CompaniesView/>
        <DescriptionView/>
        <TeamDescriptionView/>
        <DesktopPresentationView/>
        {/*<PowerfulToolsView/>*/}

        {/* */}
        {/* <TeamManagementView/> */}

        {/* Graph View */}
         {/* <HStack as={'section'} sx={{
             gap: { base: '32px', lg:'80px' },
             px: { base:'16px', lg:'80px' },
             py: { base:'24px', lg:'80px' },
             justifyContent:'center'
         }}>
            <Stack
                sx={{
                    py: { lg:'64px' },
                    pt: { base: '24px' },
                    px: { lg:'64px' },
                    borderRadius: '20px',
                    border: '1px solid #475569'
                }}
                align={'center'}
                direction={{ base: 'column', md: 'row' }}
            >
                <VStack h={'max'} gap={{ base:'48px', lg:'32px' }} px={{ base:'16px', lg:'0px' }} alignItems={'start'}>
                    <Heading as={'h5'} sx={{
                        fontSize: { base:'18px', lg: '32px' },
                        fontWeight: { base:'500', lg:'700' },
                        lineHeight: { base:'19.8px', lg:'35.2px' },
                        maxInlineSize: '600',
                        color: '#ffffff'
                    }}>
                        Ultrices risus, sagittis, ullamcorper gravida aliquam auctor.
                    </Heading>

                    <Text sx={{
                        fontSize: { base:'16px', lg: '18px' },
                        fontWeight: '400',
                        lineHeight: { base:'22.4px', lg:'28.8px' },
                        maxInlineSize: '600',
                        color: '#CBD5E1'
                    }}>
                        Risus sit suscipit et nibh. Morbi pretium volutpat eget habitasse habitant elementum dignissim arcu mauris. Ullamcorper euismod id commodo mi nec. Sit egestas mauris imperdiet feugiat eros, sapien at pellentesque.
                    </Text>

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
                </VStack>

                <GraphTable/>
            </Stack>
        </HStack> */}

        {/* Control Flow View */}
        {/*<Stack as={'section'} bg={'#1E293B'} gap={'80px'} pt={'80px'} pl={'80px'} pr={{ xl: '80px' }} justify={'center'} direction={{ base: 'column', md: 'row' }}>*/}
        {/*    <VStack gap={'32px'} alignItems={'start'} alignSelf={'center'}>*/}
        {/*        <Stack gap={'8px'}>*/}
        {/*            <Heading as={'h3'} sx={{*/}
        {/*                    fontSize: '48px',*/}
        {/*                    fontWeight: '800',*/}
        {/*                    lineHeight: '52.8px',*/}
        {/*                    color: '#ffffff',*/}
        {/*                }}>*/}
        {/*                Control the flow.*/}
        {/*            </Heading>*/}
        {/*            <Heading as={'h3'} sx={{*/}
        {/*                    fontSize: '48px',*/}
        {/*                    fontWeight: '800',*/}
        {/*                    lineHeight: '52.8px',*/}
        {/*                    color: '#818CF8',*/}
        {/*                }}>*/}
        {/*                Work faster.*/}
        {/*            </Heading>*/}
        {/*        </Stack>*/}

        {/*        <Text sx={{*/}
        {/*            fontSize: '18px',*/}
        {/*            fontWeight: '400',*/}
        {/*            lineHeight: '28.8px',*/}
        {/*            maxInlineSize: '500',*/}
        {/*            color: '#ffffff',*/}
        {/*        }}>*/}
        {/*            Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.*/}
        {/*        </Text>*/}

        {/*        <ButtonNav*/}
        {/*            label={'Start for free'}*/}
        {/*            href={'/start'}*/}
        {/*            size={'lg'}*/}
        {/*            variant={'filled'}*/}
        {/*            sx={{*/}
        {/*                w: '256px',*/}
        {/*                fontWeight: '500',*/}
        {/*                fontSize: '20px',*/}
        {/*                bg: '#4F46E5',*/}
        {/*                color: 'white',*/}
        {/*                border: '1px solid ##6366F1'*/}
        {/*            }}*/}
        {/*        />*/}
        {/*    </VStack>*/}

        {/*    <Stack justifySelf={'end'} alignSelf={'end'} borderTopRightRadius={{ xl: '24px' }}>*/}
        {/*        <Image className={'repare'} src={'/svg/ControlFlow.svg'} alt={'Control Image'} width={680} height={480} />*/}
        {/*    </Stack>*/}
        {/*</Stack>*/}

        {/* List Card View: Response fetch the api JsonPlaceHolder */}
        {/* <PostsView /> */}

        {/* Descriptions View, this contains two buttons */}
        {/*<DescriptionView pb={'160px'}>*/}
        {/*    <ButtonGroup gap={'16px'}>*/}
        {/*        <ButtonNav*/}
        {/*            label={'Start for free'}*/}
        {/*            href={'/start'}*/}
        {/*            size={'lg'}*/}
        {/*            variant={'filled'}*/}
        {/*            sx={{*/}
        {/*                w: '256px',*/}
        {/*                fontWeight: '500',*/}
        {/*                fontSize: '20px',*/}
        {/*                bg: '#4F46E5',*/}
        {/*                color: 'white',*/}
        {/*                border: '1px solid ##6366F1'*/}
        {/*            }}*/}
        {/*        />*/}

        {/*        <ButtonNav*/}
        {/*            label={'Request more info'}*/}
        {/*            href={'/info'}*/}
        {/*            size={'lg'}*/}
        {/*            variant={'filled'}*/}
        {/*            sx={{*/}
        {/*                w: '256px',*/}
        {/*                fontWeight: '500',*/}
        {/*                fontSize: '20px',*/}
        {/*                bg: '#334155',*/}
        {/*                color: 'white',*/}
        {/*                border: '1px solid #475569'*/}
        {/*            }}*/}
        {/*        />*/}
        {/*    </ButtonGroup>*/}
        {/*</DescriptionView>*/}
    </>
  );
}
