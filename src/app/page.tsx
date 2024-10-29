import {
    HomeView,
    CompaniesView,
    DescriptionView,
    TeamDescriptionView,
    DesktopPresentationView,
    PowerfulToolsView, GraphTable,
} from "@/ui/views";
import {ButtonNav} from "@/ui/components";
import {ButtonGroup, Heading, Stack, Text, VStack} from "@chakra-ui/react";
import {TeamManagementView} from "@/ui/views/TeamManagementView";

export default function Home() {
  return (
    <>
        <HomeView/>
        <CompaniesView/>
        <DescriptionView/>
        <TeamDescriptionView/>
        <DesktopPresentationView/>
        <PowerfulToolsView/>
        <TeamManagementView/>

        {/* GraphView */}
        <Stack as={'section'} gap={'80px'} p={'80px'} direction={{ base: 'column', md: 'row' }}>
            <VStack sx={{
                py: '80px',
                pl: '80px',
                gap: '32px',
                alignItems: 'start',
                borderRadius: '20px',
                border: '1px solid #475569'
            }}>
                <Heading as={'h5'} sx={{
                        fontSize: '32px',
                        fontWeight: '700',
                        lineHeight: '35.2px',
                        color: '#ffffff',
                    }}>
                    Ultrices risus, sagittis, ullamcorper gravida aliquam auctor.
                </Heading>

                <Text sx={{
                    fontSize: '32px',
                    fontWeight: '700',
                    lineHeight: '35.2px',
                    color: '#ffffff',
                }}>
                    Risus sit suscipit et nibh. Morbi pretium volutpat eget
                    habitasse habitant elementum dignissim arcu mauris.
                    Ullamcorper euismod id commodo mi nec. Sit egestas mauris
                    imperdiet feugiat eros, sapien at pellentesque.
                </Text>

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
            </VStack>

            <GraphTable/>
        </Stack>

        {/* Descriptions View */}
        <DescriptionView>
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
        </DescriptionView>
    </>
  );
}
