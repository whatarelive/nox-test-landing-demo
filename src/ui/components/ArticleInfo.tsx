import {Heading, HStack, List, ListItem, Text, VStack} from "@chakra-ui/react";
import { ButtonNav } from "@/ui/components/ButtonNav";
import { FaCheck } from "react-icons/fa6";
import { Article } from "@/lib/interfaces/definitions";

interface Props {
    article: Article;
}

function ListElement({ listCheck }: Pick<Article, 'listCheck'>) {
    return listCheck && (
        <List>
            {
                listCheck.map((text) => (
                    <ListItem key={text}>
                        <HStack>
                            <FaCheck width={'24px'} height={'24px'} color={'#818CF8'}/>
                            <Text variant={'TextList'}>
                                { text }
                            </Text>
                        </HStack>
                    </ListItem>
                ))
            }
        </List>
    )
}

export function ArticleInfo({ article }: Props) {
    return (
        <VStack as={'article'} align={'start'} gap={'24px'}>
            <VStack align={'start'} gap={'32px'}>
                <VStack gap={'8px'} align={'start'}>
                    <Heading as={'h3'} variant={'HPrimary'}>
                        { article.title }
                    </Heading>
                    <Heading as={'h3'} variant={'HSecondary'}>
                        { article.subtitle }
                    </Heading>
                </VStack>

                <Text variant={'TextParagrah'} maxInlineSize={'600'}>
                    { article.content }
                </Text>
            </VStack>

            <ListElement listCheck={article.listCheck}/>

            <ButtonNav label={'Start for free'} href={'/start'} variant={'ButtonNavStart'}/>
        </VStack>
    )
}