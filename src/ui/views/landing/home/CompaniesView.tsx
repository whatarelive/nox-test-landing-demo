import { Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import { ChakraImageSSR } from "../../../components";

const svg = ['Smart', 'Zoomer', 'Shells', 'Waves', 'ArtVenue'];

function isIndex(index: number){
    return (index === 2 || index === 3);
}

export function CompaniesView() {
    return (
        <VStack as={'section'}>
            <Heading as={'h6'} variant={'h4v1'} textAlign={'center'}>
                Trusted by teams from leading companies
            </Heading>

            <Grid
                gap={{ base: '24px', lg: '80px' }}
                justifyContent={'center'}
                alignItems={'center'}
                justifySelf={'center'}
                templateColumns={{ base:'repeat(2, auto)', md: 'repeat(6, auto)'}}
            >
                {
                    svg.map((item, index) => (
                        <GridItem key={item} sx={{
                                display: { base:'flex', md:'block' },
                                w: { base: isIndex(index) ? '90px' : '128px' },
                                gridColumn: index === 4 ? 'span 2' : '',
                                justifySelf: isIndex(index) ? (index === 3) ? 'start' : 'end' : 'center'
                            }}
                        >
                            <ChakraImageSSR
                                src={`/svg/${item}Logo.svg`}
                                alt={`Icono de ${item}`}
                                width={{ base: '100px', md: '128px' }}
                                height={{ base: '32px', md: '32px' }}
                            />
                        </GridItem>
                    ))
                }
            </Grid>
        </VStack>
    )
}