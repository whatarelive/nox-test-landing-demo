import Link from "next/link";
import {
    Box,
    Grid,
    GridItem,
    HStack,
    Text,
    VStack,
    Link as ChakraLink,
    Badge, Stack,
} from "@chakra-ui/react";
import { FaArrowRight, FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ChakraLinkNav, ChakraImageSSR } from "@/ui/components";
import { footerLinks } from "@/ui/data/ArraysElementUi";

export function Footer() {
    return (
        <Box bg={'#334155'} px={{ base:'16px',  md:'80px' }}>
            <Grid
                py={'48px'}
                gap={{ base:'12px', lg:'48px' }}
                alignItems="center"
                justifyContent="center"
                templateColumns={{ base:'1fr', md: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' }}
            >
                {
                    footerLinks.map((link) => (
                      <GridItem key={link.name} gap={'12px'}>
                          <Box pt={'12px'}>
                              <Text as={'h4'} variant={'h4v2'} fontWeight={'700'} letterSpacing={'1.5px'}>
                                  { link.name }
                              </Text>
                          </Box>

                          <VStack placeItems={'start'} mt={'12px'}>
                          {
                            link.links.map((href) => (
                                <HStack key={ href } py={'12px'}>
                                    <ChakraLink as={ Link } href={href.toLowerCase()} sx={{
                                            display:'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            gap: '8px',
                                            color: '#CBD5E0'
                                        }}>
                                        { href }
                                        { link.icon === href && <FaArrowRight width={'24px'}/> }
                                    </ChakraLink>
                                    { link.badge === href && <Badge bg={'white'} color={'#334155'} variant={'subtle'}>Beta</Badge> }
                                </HStack>
                            ))
                          }
                          </VStack>
                      </GridItem>
                    ))
                }
            </Grid>
            <Stack
                py={'24px'} gap={{ base:'16px', lg:'32px' }}
                direction={{ base: 'column', lg: 'row', }}
                alignItems={{ base: 'flex-start', lg:'center'}}
                justify={'space-between'}
            >
                <Text>Trakor @ 2023</Text>

                <Stack direction={'row'} gap={{ base:'24px', lg:'32px' }}>
                    <ChakraLinkNav name={'Terms of Service'} href={'/terms-of-service'} variant={'linkv2'}/>
                    <ChakraLinkNav name={'Privacy Police'} href={'/privacy-police'} variant={'linkv2'}/>
                    <ChakraLinkNav name={'Manage Cookies'} href={'/manage-cookies'} variant={'linkv2'}/>
                </Stack>

                <HStack gap={'16px'}>
                    <FaYoutube width={'24px'} height={'24px'} color={'white'} />
                    <FaFacebookF width={'24px'} height={'24px'} color={'white'} />
                    <FaTwitter width={'24px'} height={'24px'} color={'white'} />
                    <FaInstagram width={'24px'} height={'24px'} color={'white'} />
                    <FaLinkedinIn width={'24px'} height={'24px'} color={'white'} />
                </HStack>

                <HStack gap={'16px'}>
                    <ChakraLinkNav href={'https://www.apple.com/es/app-store/'} target={'_blank'}>
                        <ChakraImageSSR
                            src={'/svg/appStore.svg'}
                            alt={'Icon of App Store'}
                            width={'100px'}
                            height={'50px'}
                        />
                    </ChakraLinkNav>
                    <ChakraLinkNav href={'https://play.google.com/store/'} target={'_blank'}>
                        <ChakraImageSSR
                            src={'/svg/googlePlay.svg'} alt={'Icon of Google Play'}
                            width={'100px'}
                            height={'50px'}
                        />
                    </ChakraLinkNav>
                </HStack>
            </Stack>
        </Box>
    )
}