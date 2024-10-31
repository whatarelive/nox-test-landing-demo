'use client';

import { useEffect, useState} from 'react'
import { VStack } from '@chakra-ui/react'
import { PostCard } from "@/ui/components";
import { ParsePost } from "@/lib/interfaces/definitions";
import { getPosts } from "@/lib/actions/actions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import '@/ui/styles/globals.css'

const options = {
    slidesPerView:4,
    navigation: false,
    pagination: {
        clickable: true,
    },
    centeredSlides: true,
    allowTouchMove: true,
    spaceBetween: 100,
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 0,
        pauseOnMouseEnter: true,
    },
    modules:[Pagination, Navigation, Autoplay, EffectCards],
    className:"swipers",
}

interface Props {
    posts?: ParsePost[]
}

export function PostsView({ }: Props) {
    const [data, setData] = useState<ParsePost[]>([]);
    
    useEffect(() => {
        getPosts().then((d) => setData(d))
    }, [])

    return (
        <VStack maxW="100vw" h={'800px'} justifyContent={'space-around'}>
            <Swiper {...options}>
                {
                    data.map((post) => (
                        <SwiperSlide
                            key={ post.id }
                            style={{
                                minWidth: '375px',
                                display: "flex",
                                alignSelf: "center",
                            }}
                        >
                            <PostCard post={post}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </VStack>
    )
}
