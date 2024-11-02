import {HStack, Stack, VStack, Image} from "@chakra-ui/react";
import {ArticleInfo} from "@/ui/components";
import {Article} from "@/lib/interfaces/definitions";

const article: Article = {
    title: 'Powerful tools.',
    subtitle: 'More control.',
    content: 'Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.',
    listCheck: [
        'Interdum volutpat turpis malesuada ac turpis.',
        'Tortor ipsum pretium quis nunc.',
        'Vitae odio a id purus in.'
    ],
};

export function PowerfulToolsView() {
    return (
        <Stack as={'section'} direction={{ base: 'column-reverse', md: 'row' }} sx={{
            gap: { base: '48px', lg:'80px' },
            px: { base:'16px', lg:'80px' },
            py: { base:'48px', lg:'80px' },
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <VStack gap={{ base:'16px', lg:'24px' }} align={'start'}>
                <Stack pr={{ lg:'48px' }}>
                    <Image 
                        src={'/svg/ToolsSvg1.svg'} 
                        alt={'Team Image 4'} 
                        width={{ base: 275, lg: 485 }} 
                        height={{ base: 183, lg: 288 }}
                    />
                </Stack>
                <HStack gap={{ base:'16px', lg:'24px' }}>
                    <Image 
                        src={'/svg/ToolsSvg2.svg'} 
                        alt={'Team Image 2'} 
                        width={{ base: 172, lg: 288 }}
                        height={{ base: 172, lg: 288 }}
                    />
                    <Image 
                        src={'/img/ToolsSvg3.png'} 
                        alt={'Team Image 3'} 
                        width={{ base: 172, lg: 288 }} 
                        height={{ base: 172, lg: 288 }}
                    />
                </HStack>
            </VStack>

            <ArticleInfo article={article}/>
        </Stack>
    )
}