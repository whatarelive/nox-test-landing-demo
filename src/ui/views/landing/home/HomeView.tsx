import {VStack, Stack, Text, ButtonGroup, Box} from "@chakra-ui/react";
import { ButtonNav, ChakraImageSSR } from "@/ui/components";

export function HomeView() {
    return (
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
                src={'/svg/shapes.svg'}
                width={{ base: '240px', md: '284px' }} 
                height={{ base: '240px', md: '284px' }}
            />
        </Box>
    )
}