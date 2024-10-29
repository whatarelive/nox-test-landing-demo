import { Heading, Stack, VStack } from "@chakra-ui/react";
import Image from "next/image";

const svg = ['Smart', 'Zoomer', 'Shells', 'Waves', 'ArtVenue'];

export async function CompaniesView() {
    return (
        <VStack gap={'80px'} p={'80px'}>
            <Heading as={'h6'} sx={{
                fontWeight: '700',
                fontSize: '24px',
                lineHeight: '26.4px',
                textAlign: 'center',
                color: '#CBD5E1'
            }}>
                Trusted by teams from leading companies
            </Heading>

            <Stack direction={'row'} gap={'80px'}>
                {
                    svg.map((item) => (
                        <Image
                            key={item}
                            src={`/svg/${item}Logo.svg`}
                            alt={`Icono de ${item}`}
                            width={128}
                            height={32}
                        />
                    ))
                }
            </Stack>
        </VStack>
    )
}