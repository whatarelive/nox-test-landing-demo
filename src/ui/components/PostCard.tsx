import { Avatar, Box, HStack, Stack, Text, VStack, Image as ChakraImage } from "@chakra-ui/react";
import { ParsePost } from "@/lib/interfaces/definitions";
interface Props {
    post: ParsePost;
}

export function PostCard({ post }: Props) {
    return (
        <VStack sx={{
            w:{ base: '340px', md:'384px' },
            p:{ base: '16px', md:'32px' },
            bg:'#334155',
            alignSelf: 'center',
            borderRadius:'20px',
            gap:'16px',
            alignItems:'start',
        }}>
            <Stack py={{ base: '8px', md:'16px' }}>
                <ChakraImage
                    src={ post.user.company.logoUrl }
                    alt={'Icon'}
                    opacity={'50%'}
                    width={'auto'} height={'auto'}
                />
            </Stack>

            <Text sx={{
                fontSize: { base:'16px', lg:'24px' },
                fontWeight: '400',
                lineHeight: { base:'22.4px', md:'38.4px' },
                color: '#ffffff'
            }}>
                { post.body.length > 150 ? post.body.substring(0, 150) : post.body }
            </Text>

            <HStack pt={'16px'} gap={'16px'}>
                <Avatar src={ post.user.imgUrl } w={'64px'} h={'64px'} />
                <Box>
                    <Text sx={{
                        fontSize: '18px',
                        fontWeight: '400',
                        lineHeight: '28.8px',
                        color: '#ffffff'
                    }}>
                        { post.user.name }
                    </Text>
                    <Text sx={{
                        fontSize: '16px',
                        fontWeight: '400',
                        lineHeight: '22.4px',
                        color: '#697077'
                    }}>
                        { post.user.company.name }
                    </Text>
                </Box>
            </HStack>
        </VStack>
    )
}