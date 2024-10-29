import React from "react";
import {Heading, Text, VStack} from "@chakra-ui/react";

interface Props {
    readonly children?: React.ReactNode;
}

export function DescriptionView({ children }: Props) {
    return (
        <VStack as={'section'} sx={{
            p: '80px',
            gap: '80px',
        }}>
            <VStack as={'article'} gap={'32px'}>
                <VStack gap={'8px'}>
                    <Heading as={'h2'} sx={{
                        fontWeight: '900',
                        fontSize: '56px',
                        lineHeight: '61.6px',
                        color: '#ffffff',
                        textAlign: 'center'
                    }}>
                        Your team. Your projects.
                    </Heading>
                    <Heading as={'h2'} sx={{
                        fontWeight: '900',
                        fontSize: '56px',
                        lineHeight: '61.6px',
                        color: '#818CF8',
                        textAlign: 'center'
                    }}>
                        Always together.
                    </Heading>
                </VStack>

                <Text sx={{
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '28.8px',
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