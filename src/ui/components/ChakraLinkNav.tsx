import Link from "next/link";
import { Box, Link as ChakraLink } from '@chakra-ui/react';

interface Props {
    href: string;
    name: string;
}

export function ChakraLinkNav({ href, name }: Props) {
  return (
    <Box py={'12px'} px={'8px'} gap={'8px'}>
        <ChakraLink as={ Link } href={ href } variant={'linkv1'}>
            { name }
        </ChakraLink>
    </Box>
  )
}
