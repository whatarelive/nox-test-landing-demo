import { Stack } from "@chakra-ui/react";
import {ArticleInfo} from "@/ui/components";
import Image from "next/image";
import { Article } from "@/lib/interfaces/definitions";

const article: Article = {
    title: 'Team management.',
    subtitle: 'Effortless syncronization.',
    content: 'Massa nunc nisi fames adipiscing scelerisque placerat et sagittis cursus. Mi commodo id maecenas amet, elementum a, in.',
    listCheck: [
        'Est et in pharetra magna adipiscing ornare aliquam.',
        'Tellus arcu sed consequat ac velit ut eu blandit.',
        'Ullamcorper ornare in et egestas dolor orci.'
    ],
};

export function TeamManagementView() {
    return (
        <Stack as={'section'} direction={{ base: 'column', md: 'row' }} sx={{
            p:'80px',
            gap:'80px',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <ArticleInfo article={article}/>

            <Stack>
                <Image src={'/svg/TeamManagement.svg'} alt={'Image'} width={660} height={555} />
            </Stack>
        </Stack>
    )
}