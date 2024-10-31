import { Heading, Text, VStack } from '@chakra-ui/react'
import { PostsCarousel } from "@/ui/components";
import { getPosts } from "@/lib/actions/actions";
import { ParsePost } from "@/lib/interfaces/definitions";

export async function PostsView() {
    const posts: ParsePost[] = await getPosts();

    return (
        <VStack as={'section'} gap={'80px'} py={'80px'} justifyContent={'center'}>
            <VStack>
                <VStack gap={'24px'}>
                    <Heading as={'h2'} sx={{
                        fontSize: '56px',
                        fontWeight: '900',
                        lineHeight: '61.6px',
                        color: '#ffffff'
                    }}>
                        Our partners. Our Friends.
                    </Heading>
                    <Heading as={'h2'} sx={{
                        fontSize: '56px',
                        fontWeight: '900',
                        lineHeight: '61.6px',
                        color: '#818CF8'
                    }}>
                        They love us.
                    </Heading>
                </VStack>

                <Text sx={{
                    fontSize: '18px',
                    fontWeight: '400',
                    lineHeight: '28.8px',
                    color: '#CBD5E1'
                }}>
                    Sem malesuada sed lectus id nunc mattis est eget tincidunt.
                </Text>
            </VStack>

            <PostsCarousel posts={posts}/>
        </VStack>
    )
}
