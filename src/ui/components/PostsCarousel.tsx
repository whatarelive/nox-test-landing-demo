'use client'

import React, {useEffect, useRef, useState} from "react";
import type { Swiper as SwiperType } from "swiper";
import { VStack } from '@chakra-ui/react';
import { PostCard } from "@/ui/components";
import { ParsePost } from "@/lib/interfaces/definitions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper/modules";

// The Styles for Swiper Component
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import '@/ui/styles/swiperCarousel.css'

// The config of Swiper Component
const options = {
    initialSlide: 0,
    // slidesPerView: 4,
    navigation: false,
    pagination: {
        clickable: true,
    },
    centeredSlides: true,
    allowTouchMove: true,
    spaceBetween: '24px',
    loop: true,
    speed: 3000,
    autoplay: {
        delay: 0,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    modules:[Pagination, Navigation, Autoplay, EffectCards],
    className:'swipers'
}

interface Props {
    posts: ParsePost[];
}

export function PostsCarousel({ posts }: Props) {
    const swiperRef = useRef<SwiperType | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [elementsView, setElementsView] = useState(4);

    useEffect(() => {
        const width = containerRef.current?.clientWidth;

        if (width === 395) {
            setElementsView(1);
        } else if(width && width > 396) {
            setElementsView(4);
        }
    }, [containerRef.current?.clientWidth]);

    useEffect(() => {
        if (swiperRef.current) {
            // Start autoplay
            swiperRef.current.autoplay.start()

            // Set a timeout to allow the Swiper to initialize fully
            const timeout = setTimeout(() => {
                if (swiperRef.current) {
                    // Get the current active index
                    const activeIndex = swiperRef.current.realIndex
                    // Calculate the target index (2 positions after the current)
                    const targetIndex = (activeIndex + 2) % posts.length
                    // Slide to the target index
                    swiperRef.current.slideTo(targetIndex)
                }
            }, 100) // Adjust this delay if needed

            return () => clearTimeout(timeout);
        }
    }, [posts.length])

    return (
        <VStack ref={containerRef} maxW={{base: '395px', md: "100vw"}} h={'586px'} justifyContent={'space-around'}>
            <Swiper slidesPerView={elementsView} onSwiper={(swiper) => swiperRef.current = swiper} {...options}>
                {
                    posts.map((post, index) => (
                        <SwiperSlide key={index} className={'swipers-slider'}>
                            <PostCard post={post}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </VStack>
    )
}