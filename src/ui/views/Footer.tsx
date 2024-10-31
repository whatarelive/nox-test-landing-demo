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
import { footerLinks } from "@/ui/data/ArraysElementUi";
import Image from "next/image";

const areasBase = '"Categories Product Solutions Resources Support Company"'
const areasMd = '"Categories Product" "Solutions Resources" "Support Company"'

const linkStyle = {
    fontSize: '16px',
    fontWeight: '500',
    letterSpacing: '1px',
    lineHeight: '22.6px',
    color: '#E2E8F0'
}

export function Footer() {
    return (
        <Box bg={'#334155'} px={'80px'}>
            <Grid
                py={'48px'}
                gap={'48px'}
                alignItems="center"
                justifyContent="center"
                gridTemplateAreas={{ base:areasBase, md:areasMd, lg:areasBase }}
                gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' }}
            >
                {
                    footerLinks.map((link) => (
                      <GridItem key={link.name} area={link.name} gap={'12px'}>
                          <Box pt={'12px'}>
                              <Text sx={{
                                  fontSize: '16px',
                                  fontWeight: '700',
                                  letterSpacing: '1.5px',
                                  lineHeight: '22.6px',
                                  color: '#ffffff'
                              }}>
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
                                            ...linkStyle
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
            <Stack py={'24px'} gap={'32px'} direction={{ base: 'column', lg: 'row', }} align={'center'} justify={'space-between'}>
                <Text sx={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '22.4px',
                    color: '#E2E8F0'
                }}>
                    Trakor @ 2023
                </Text>

                <HStack gap={'32px'}>
                    <ChakraLink
                        as={Link}
                        href={'/terms-of-service'}
                        sx={linkStyle}
                        _hover={{ textDecoration: 'none' }}
                    >
                        Terms of Service
                    </ChakraLink>
                    <ChakraLink
                        as={Link}
                        href={'/privacy-policy'}
                        sx={linkStyle}
                        _hover={{ textDecoration: 'none' }}
                    >
                        Privacy Policy
                    </ChakraLink>
                    <ChakraLink
                        as={Link}
                        href={'/manage-cookies'}
                        sx={linkStyle}
                        _hover={{ textDecoration: 'none' }}
                    >
                        Manage Cookies
                    </ChakraLink>
                </HStack>

                <HStack gap={'16px'}>
                    <FaYoutube width={'24px'} height={'24px'} color={'white'} />
                    <FaFacebookF width={'24px'} height={'24px'} color={'white'} />
                    <FaTwitter width={'24px'} height={'24px'} color={'white'} />
                    <FaInstagram width={'24px'} height={'24px'} color={'white'} />
                    <FaLinkedinIn width={'24px'} height={'24px'} color={'white'} />
                </HStack>

                <HStack gap={'16px'}>
                    <ChakraLink as={Link} href={'https://www.apple.com/es/app-store/'} target={'_blank'}>
                        <Image src={'/svg/appStore.svg'} alt={'Icon of App Store'} width={100} height={50} />
                    </ChakraLink>
                    <ChakraLink as={Link} href={'https://play.google.com/store/'} target={'_blank'}>
                        <Image src={'/svg/googlePlay.svg'} alt={'Icon of Google Play'} width={100} height={50} />
                    </ChakraLink>
                </HStack>
            </Stack>
        </Box>
    )
}