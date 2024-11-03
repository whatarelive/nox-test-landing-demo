import { Box, Text, Stack, VStack, ButtonGroup, HStack } from "@chakra-ui/react";
import { ArticleInfo, ButtonNav, ChakraImageSSR, GraphTable } from "@/ui/components";
import { CompaniesView, DescriptionView, PostsView } from "@/ui/views/landing/home";

import { articleControl, articleManagement, articleTools } from "@/ui/data/ArraysElementUi";

export default function Home() {
  return (
    <>
        {/* Home View */}
        <Box as={'section'} mt={'75px'} flexDirection={'column'}>
            <Stack as={'article'} gap={'32px'}>
                <VStack>
                    <Text as={'span'}>
                        Team Progress Tracking Tool
                    </Text>
                    <Text as={'h1'}>
                        Track your team progress
                    </Text>
                </VStack>

                <Text maxInlineSize={'630'} textAlign={'center'}>
                    Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. <br/>
                    Ultrices faucibus neque velit risus ac id lorem.
                </Text>

                <ButtonGroup gap={'16px'}>
                    <ButtonNav label={'Start for free'} href={'/start'} bg={'#4F46E5'} border={'1px solid #6366F1'}/>
                    <ButtonNav label={'Request more info'} href={'/info'} bg={'#334155'} border={'1px solid #475569'}/>
                </ButtonGroup>
            </Stack>

            <ChakraImageSSR
                alt={"Shape svg"}
                src={'/svg/Shapes.svg'}
                width={{ base: '240px', md: '284px' }}
                height={{ base: '240px', md: '284px' }}
            />
        </Box>

        <CompaniesView/>
        <DescriptionView/>

        {/*<TeamDescriptionView/>*/}
        <Box as={'section'} justifyContent={'center'}>
            <VStack as={'article'} gap={'32px'}>
                <VStack gap={'8px'} alignItems={{ base:'center', xl:'start' }}
                        alignSelf={{ base:'center', xl:'start' }}>

                    <Text as={'h6'}>
                        Bigger team.
                    </Text>

                    <Text as={'h6'} color={'#818CF8'}>
                        More time.
                    </Text>

                </VStack>

                <Text maxInlineSize={'600'} display={{ base: 'none', md:'block' }}>
                    Quam quis orci turpis vulputate platea. Urna ipsum suscipit nullam
                    ipsum nam leo fringilla eget lorem. Sit vestibulum phasellus integer
                    et et diam malesuada. Sed tortor orci mauris proin ac. Venenatis
                    euismod mauris quis sit purus nisi. Sed quis eget augue ut aliquam sed.
                </Text>

                <Text textAlign={'center'} display={{ base: 'block', md:'none' }}>
                    Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
                </Text>
            </VStack>

            <VStack gap={{ base:'16px', lg:'24px' }}>
                {/* All Components Image */}
                <HStack pl={{ xl:'48px' }} gap={{ base:'16px', lg:'24px' }}>
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
                <HStack pr={{ xl:'48px' }}  gap={{ base:'16px', md:'24px'}}>
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

        {/*<DesktopPresentationView/>*/}
        <Box as={'section'} flexDirection={'column'}>
            <VStack sx={{
                pt: { base:'48px', lg:'80px' },
                pb: { base: '90px', md:'240px', lg:'270px', xl: '387px' },
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

            <Stack alignSelf={'center'} zIndex={'1'} mt={{ base:'160px', md:'220px', xl:'265px' }}>
                {/* Desktop View */}
                <ChakraImageSSR
                    display={{ base: 'none', md:'flex' }}
                    src={'/img/Desktop.png'}
                    alt={'Desktop Image'}
                    width={{ md:700, lg:980, xl: 1280 }}
                    height={{ md:450, lg:550, xl:838 }}
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

        {/* PowerfulTools View */}
        <Box as={'section'} flexDirection={{ base: 'column-reverse', md: 'row' }} justifyContent={'center'}>
            <VStack gap={{ base:'16px', md:'24px' }} align={'start'}>
                <Stack>
                    <ChakraImageSSR
                        src={'/svg/ToolsSvg1.svg'}
                        alt={'Team Image 4'}
                        width={{ base: 275, md: 330, xl: 425 }}
                        height={{ base: 183, md: 220, xl: 288 }}
                    />
                </Stack>

                <HStack gap={{ base:'16px', md:'24px' }}>
                    <ChakraImageSSR
                        src={'/svg/ToolsSvg2.svg'}
                        alt={'Team Image 2'}
                        width={{ base: 172, md: 200, xl: 288 }}
                        height={{ base: 172, md: 200, xl: 288 }}
                    />
                    <ChakraImageSSR
                        src={'/img/ToolsSvg3.png'}
                        alt={'Team Image 3'}
                        width={{ base: 172, md: 200, xl: 288 }}
                        height={{ base: 172, md: 200, xl: 288 }}
                    />
                </HStack>
            </VStack>

            <ArticleInfo article={ articleTools }/>
        </Box>

        {/*<TeamManagementView/>*/}
        <Box as={'section'} flexDirection={{ base: 'column', md: 'row' }} justifyContent={'center'}>
            <ArticleInfo article={ articleManagement }/>

            <Stack p={'0px'}>
                <ChakraImageSSR
                    src={'/svg/TeamManagement.svg'}
                    alt={'Image'}
                    width={{ base:'360px', md:'440px', xl:'590px' }}
                    height={{ base:'342px', md:'420px', xl:'555px' }}
                />
            </Stack>
        </Box>

        {/* Graph View */}
        <Box as={'section'} justifyContent={'center'}>
            <Stack as={'article'} sx={{
                    py: { md:'64px' },
                    px: { md:'64px' },
                    pt: '24px',
                    align:'center',
                    borderRadius: '20px',
                    border: '1px solid #475569',
                    flexDirection: { base: 'column', md: 'row' },
                }}>
                <VStack h={'max'} alignItems={'start'} sx={{
                    px:{ base:'16px', md:'0px' },
                    gap:{ base:'48px', lg:'32px' },
                }}>
                    <Text as={'h5'} variant={'h5v1'}>
                        Ultrices risus, sagittis, ullamcorper gravida aliquam auctor.
                    </Text>

                    <Text maxInlineSize={'600'}>
                        Risus sit suscipit et nibh. Morbi pretium volutpat eget habitasse
                        habitant elementum dignissim arcu mauris. Ullamcorper euismod id
                        commodo mi nec. Sit egestas mauris imperdiet feugiat eros, sapien
                        at pellentesque.
                    </Text>

                    <ButtonNav
                        label={'Request more info'} href={'/info'}
                        bg={'#334155'} border={'1px solid #475569'}
                    />
                </VStack>

                {/* Component responsible for creating the table */}
                <GraphTable/>
            </Stack>
        </Box>

         {/*Control Flow View*/}
        <Box as={'section'} bg={'#1E293B'} sx={{
             flexDirection: { base: 'column', md: 'row' },
             justifyContent:{ md:'end', '2xl':'center' },
             pl:{ md:'16px' },
             px:{ base:'0px', '2xl': '80px' },
             pb:'0px',
        }}>
            <ArticleInfo article={articleControl}/>

            <ChakraImageSSR
                src={'/svg/ControlFlow.svg'}
                alt={'Control Image'}
                width={{ base: '388px', md:'680px', xl: '680px' }}
                height={{ base: '266px', md:'380px', xl: '480px' }}
            />
        </Box>

        {/* List Card View: Response fetch the api JsonPlaceHolder */}
        <PostsView />

        {/* Descriptions View, this contains two buttons */}
        <DescriptionView pb={{ lg:'160px' }} pt={{ base:'0px', lg:'80px'}}>
            <ButtonGroup gap={'16px'}>
                <ButtonNav
                    label={'Start for free'} href={'/start'}
                    bg={'#4F46E5'} border={'1px solid #6366F1'}
                />
                <ButtonNav
                    label={'Request more info'} href={'/info'}
                    bg={'#334155'} border={'1px solid #475569'}
                />
            </ButtonGroup>
        </DescriptionView>
    </>
  );
}