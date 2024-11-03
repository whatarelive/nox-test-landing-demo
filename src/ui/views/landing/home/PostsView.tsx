import { Box, Text, VStack } from '@chakra-ui/react'
import { PostsCarousel } from "@/ui/components";
import { getPosts } from "@/lib/actions/actions";
import { ParsePost } from "@/lib/interfaces/definitions";

export async function PostsView() {
    const posts: ParsePost[] = await getPosts();

    return (
        <Box as={'section'} flexDirection={'column'} px={'0px'}>
            <VStack gap={{ base:'32px', lg:'24px' }}>
                <VStack>
                    <Text as={'h2'}>
                        Our partners. Our Friends.
                    </Text>
                    <Text as={'h2'} color={'#818CF8'}>
                        They love us.
                    </Text>
                </VStack>

                <Text textAlign={'center'}>
                    Sem malesuada sed lectus id nunc mattis est eget tincidunt.
                </Text>
            </VStack>

            <PostsCarousel posts={posts}/>
        </Box>
    )
}
