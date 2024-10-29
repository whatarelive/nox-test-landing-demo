import {Heading, List, ListItem, Text, VStack} from "@chakra-ui/react";
import { ButtonNav } from "@/ui/components/ButtonNav";
import { FaCheck } from "react-icons/fa6";
import { Article } from "@/lib/interfaces/definitions";

interface Props {
    article: Article;
}

export function ArticleInfo({ article }: Props) {
    return (
        <VStack as={'article'} align={'start'} gap={'24px'}>
            <VStack align={'start'} gap={'32px'}>
                <VStack gap={'8px'} align={'start'}>
                    <Heading as={'h3'} sx={{
                        fontSize: '48px',
                        fontWeight: '800',
                        lineHeight: '52.8px',
                        color: '#ffffff'
                    }}>
                        { article.title }
                    </Heading>
                    <Heading as={'h3'} sx={{
                        fontSize: '48px',
                        fontWeight: '800',
                        lineHeight: '52.8px',
                        color: '#818CF8'
                    }}>
                        { article.subtitle }
                    </Heading>
                </VStack>

                <Text sx={{
                    fontSize: '18px',
                    fontWeight: '400',
                    lineHeight: '28.8px',
                    maxInlineSize: '600',
                    color: '#CBD5E1'
                }}>
                    { article.content }
                </Text>
            </VStack>

            {
                article.listCheck && (
                    <List>
                        {
                            article.listCheck.map((text) => (
                                <ListItem key={text} sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}>
                                    <FaCheck width={'24px'} height={'24px'} color={'#818CF8'}/>
                                    <Text sx={{
                                        fontSize: '18px',
                                        fontWeight: '400',
                                        lineHeight: '28.8px',
                                        color: '#ffffff'
                                    }}>
                                        { text }
                                    </Text>
                                </ListItem>
                            ))
                        }
                    </List>
                )
            }

            <ButtonNav
                label={'Start for free'}
                href={'/start'}
                size={'lg'}
                variant={'filled'}
                sx={{
                    w: '256px',
                    fontWeight: '500',
                    fontSize: '20px',
                    bg: '#4F46E5',
                    color: 'white',
                    border: '1px solid ##6366F1'
                }}
            />
        </VStack>
    )
}