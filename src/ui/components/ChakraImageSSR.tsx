import Image from "next/image";
import { BoxProps, Box } from '@chakra-ui/react';

interface Props extends BoxProps {
    src: string;
    alt: string;
    width: { base: string|number, md: string|number };
    height: { base: string|number, md: string|number };
}

export const ChakraImageSSR = ({ src, alt, width, height, ...rest }: Props) => {
    return (
        <Box position={'relative'} width={width} height={height} {...rest}>
            <Image src={src} alt={alt} fill priority />
        </Box>
    )
}