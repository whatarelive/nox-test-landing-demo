import { HStack, List, ListItem, Text, VStack } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa6";
import { ButtonNav } from "@/ui/components/ButtonNav";
import { Article } from "@/lib/interfaces/definitions";

interface Props {
    article: Article;
}

function ListElement({ listCheck }: { listCheck: string[] }) {
    return (
        <List>
            {
                listCheck.map((text) => (
                    <ListItem key={text}>
                        <HStack align={'start'}>
                            <FaCheck width={'24px'} height={'24px'} color={'#818CF8'}/>
                            <Text>{ text }</Text>
                        </HStack>
                    </ListItem>
                ))
            }
        </List>
    )
}

export function ArticleInfo({ article }: Props) {
    return (
        <VStack as={'article'} align={'start'} gap={{ sm:'32px', md:'24px' }}>
            <VStack align={'start'} gap={'32px'}>

                <VStack gap={'8px'} align={'start'}>
                    <Text as={'h6'} >{ article.title }</Text>
                    <Text as={'h6'} color={'primary.indigo'}>{ article.subtitle }</Text>
                </VStack>

                <Text maxInlineSize={{ sm:'350', md:'600' }}>
                    { article.content }
                </Text>
            </VStack>

            { article.listCheck &&  <ListElement listCheck={article.listCheck}/>}

            <ButtonNav label={'Start for free'} href={'/start'} bg={'#4F46E5'} border={'1px solid #6366F1'}/>
        </VStack>
    )
}