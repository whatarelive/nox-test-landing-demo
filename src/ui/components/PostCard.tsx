import { Avatar, Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/react/image";
import { ParsePost } from "@/lib/interfaces/definitions";

interface Props {
    post: ParsePost;
}

export function PostCard({ post }: Props) {
    return (
        <VStack w={'384px'} bg={'#334155'} alignSelf={'center'} borderRadius={'20px'} p={'32px'} gap={'16px'} align={'start'}>
            <Stack py={'16px'}>
                <ChakraImage src={ post.user.company.logoUrl } alt={'Icon'} opacity={'50%'} w={'auto'} h={'auto'} />
            </Stack>

            <Text sx={{
                fontSize: '24px',
                fontWeight: '400',
                lineHeight: '38.4px',
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
                        color: '#94A3B8'
                    }}>
                        { post.user.company.name }
                    </Text>
                </Box>
            </HStack>
        </VStack>
    )
}