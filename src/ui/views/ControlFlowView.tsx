import {Img, Stack} from "@chakra-ui/react";
import {ArticleInfo} from "@/ui/components";
import {Article} from "@/lib/interfaces/definitions";

const article: Article = {
    title: '',
    subtitle: '',
    content: '',
};

export function ControlFlowView() {
    return (
        <Stack as={'section'}>
            <ArticleInfo article={ article }/>

            <Stack>
                <Img src={''} alt={''} width={125} height={125} />
            </Stack>
        </Stack>
    )
}