import React from "react";
import {Heading, Text, VStack} from "@chakra-ui/react";

interface Props {
    readonly children?: React.ReactNode;
    pb?: string | number;
}

export function DescriptionView({ children, pb }: Props) {
    return (
        <VStack 
            as={'section'} 
            sx={{
                px: { base:'16px', lg:'80px' },
                py: { base:'48px', lg:'80px' },
                gap: { base:'32px', lg:'80px' },
                pb: pb
            }}
        >
            <VStack as={'article'} gap={'32px'}>
                <VStack gap={'8px'}>
                    <Heading as={'h2'} sx={{
                        fontWeight: { base:'700', lg:'900' },
                        fontSize: { base:'24px', lg:'56px' },
                        lineHeight: { base:'26.4px', lg:'61.6px' },
                        color: '#ffffff',
                        textAlign: 'center'
                    }}>
                        Your team. Your projects.
                    </Heading>
                    <Heading as={'h2'} sx={{
                        fontWeight: { base:'700', lg:'900' },
                        fontSize: { base:'24px', lg:'56px' },
                        lineHeight: { base:'26.4px', lg:'61.6px' },
                        color: '#818CF8',
                        textAlign: 'center'
                    }}>
                        Always together.
                    </Heading>
                </VStack>

                <Text sx={{
                    fontWeight: '400',
                    fontSize: { base:'16px', lg:'18px' },
                    lineHeight: { base:'22px', lg:'28.8px' },
                    px:{ base:'10px', md: '0px' },
                    color: '#CBD5E1',
                    textAlign: 'center'
                }}>
                    Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
                </Text>
            </VStack>

            { children }
        </VStack>
    )
}