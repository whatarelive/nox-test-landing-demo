import Image from "next/image";
import { BoxProps, Box } from '@chakra-ui/react';
import { MediaSizes } from "@/lib/interfaces/definitions";

interface Props extends BoxProps {
    src: string;
    alt: string;
    width: MediaSizes | string | number;
    height: MediaSizes | string | number;
}

export const ChakraImageSSR = ({ src, alt, width, height, ...rest }: Props) => {
    return (
        <Box position={'relative'} width={width} height={height} {...rest}>
            <Image src={src} alt={alt} fill priority />
        </Box>
    )
}