import { Grid, Text, VStack } from "@chakra-ui/react";
import { ChakraImageSSR } from "@/ui/components";
import { isIndex } from "@/lib/util/util";
import { companiesSvgs } from "@/ui/data/ArraysElementUi";


export function CompaniesView() {
    return (
        <VStack as={'section'} gap={{ base: '32px', md: '80px' }}>
            <Text as={'h4'} variant={'h4v1'} textAlign={'center'}>
                Trusted by teams from leading companies
            </Text>

            <Grid gap={{ base: '24px', lg: '80px' }}
                alignItems={'center'}
                justifyContent={'center'}
                templateColumns={{ base:'repeat(2, auto)', md: 'repeat(6, auto)'}}
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
                                display: { base:'flex', md:'block' },
                                gridColumn: index === 4 ? 'span 2' : '',
                                justifySelf: isIndex(index) ? (index === 3) ? 'start' : 'end' : 'center'
                            }}
                        />
                    ))
                }
            </Grid>
        </VStack>
    )
}