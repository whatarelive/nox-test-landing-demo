import React from "react";
import { Text, VStack } from "@chakra-ui/react";

interface Props {
    readonly children?: React.ReactNode;
    pb?: string | number;
}

export function DescriptionView({ children, pb }: Props) {
    return (
        <VStack as={'section'} pb={pb}>
            <VStack as={'article'} gap={'32px'}>
                <VStack gap={'8px'}>
                    <Text as={'h2'}>
                         Your team. Your projects.
                    </Text>
                    <Text as={'h2'} color={'#818CF8'}>
                        Always together.
                    </Text>
                </VStack>

                <Text textAlign={'center'}>
                    Malesuada ut aliquam at ac est nisi, interdum <br/> etiam dignissim.
                </Text>
            </VStack>

            { children }
        </VStack>
    )
}