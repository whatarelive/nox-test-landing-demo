import Image from "next/image";
import {HStack, Stack, VStack} from "@chakra-ui/react";
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
        <Stack as={'section'} direction={{ base: 'column', md: 'row' }} sx={{
            p:'80px',
            gap:'80px',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <VStack gap={'24px'} align={'start'}>
                <Stack pr={'48px'}>
                    <Image src={'/svg/ToolsSvg1.svg'} alt={'Team Image 4'} width={485} height={288}/>
                </Stack>
                <HStack gap={'24px'}>
                    <Image src={'/svg/ToolsSvg2.svg'} alt={'Team Image 2'} width={288} height={288}/>
                    <Image src={'/img/ToolsSvg3.png'} alt={'Team Image 3'} width={288} height={288}/>
                </HStack>
            </VStack>

            <ArticleInfo article={article}/>
        </Stack>
    )
}