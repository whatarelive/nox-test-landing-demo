import { Heading, Text, VStack } from '@chakra-ui/react'
import { PostsCarousel } from "@/ui/components";
import { getPosts } from "@/lib/actions/actions";
import { ParsePost } from "@/lib/interfaces/definitions";

export async function PostsView() {
    const posts: ParsePost[] = await getPosts();

    return (
        <VStack as={'section'} gap={{ base:'32px', lg:'80px' }} py={{ base:'48px', lg:'80px' }} justifyContent={'center'}>
            <VStack gap={{ base:'32px', lg:'24px' }}>
                <VStack>
                    <Heading as={'h2'} variant={'HThree'}>
                        Our partners. Our Friends.
                    </Heading>
                    <Heading as={'h2'} variant={'HThree'} color={'#818CF8'}>
                        They love us.
                    </Heading>
                </VStack>

                <Text variant={'TextParagrah'} textAlign={{ base:'center' }}>
                    Sem malesuada sed lectus id nunc mattis est eget tincidunt.
                </Text>
            </VStack>

            <PostsCarousel posts={posts}/>
        </VStack>
    )
}
