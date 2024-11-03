import React from "react";
import { Text, VStack } from "@chakra-ui/react";
import { MediaSizes } from "@/lib/interfaces/definitions";

interface Props {
    readonly children?: React.ReactNode;
    pb?: MediaSizes | string | number;
    pt?: MediaSizes | string | number;
}

export function DescriptionView({ children, pb, pt }: Props) {
    return (
        <VStack as={'section'} pb={pb} pt={pt} gap={'32px'}>
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