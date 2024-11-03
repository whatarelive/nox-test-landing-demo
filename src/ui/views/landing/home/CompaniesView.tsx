import { Box, Grid, Text } from "@chakra-ui/react";
import { ChakraImageSSR } from "@/ui/components";
import { isIndex } from "@/lib/util/util";
import { companiesSvgs } from "@/ui/data/ArraysElementUi";


export function CompaniesView() {
    return (
        <Box as={'section'} flexDirection={'column'}>
            <Text as={'h4'} variant={'h4v1'} textAlign={'center'}>
                Trusted by teams from leading companies
            </Text>

            <Grid gap={{ base: '24px', md:'38px', xl: '80px' }}
                alignItems={'center'}
                justifyContent={'center'}
                templateColumns={{ base:'repeat(2, auto)', md:'repeat(3, auto)', xl:'repeat(6, auto)' }}
            >
                {
                    companiesSvgs.map((item, index) => (
                        <ChakraImageSSR
                            key={item}
                            src={`/svg/${item}Logo.svg`}
                            alt={`Icon for ${item}`}
                            width={{ base: isIndex(index) ? '90px' : '128px', md: '128px' }}
                            height={{ base: '32px', md: '32px' }}
                            sx={{
                                display: 'flex',
                                gridColumn: index === 4 ? 'span 2' : '',
                                justifySelf: {
                                    base: isIndex(index) ? (index === 3) ? 'start' : 'end' : 'center',
                                    md: 'end'
                                }
                            }}
                        />
                    ))
                }
            </Grid>
        </Box>
    )
}