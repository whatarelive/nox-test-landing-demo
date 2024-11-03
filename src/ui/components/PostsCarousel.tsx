'use client'

import { useEffect, useRef } from "react";
import { VStack } from '@chakra-ui/react';
import { PostCard } from "@/ui/components";
import { ParsePost } from "@/lib/interfaces/definitions";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper/modules";

// The Styles for Swiper Component
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import '@/ui/styles/swiperCarousel.css';

// The config of Swiper Component
const options = {
    breakpoints: {
        320:{
            slidesPerView: 1,
        },
        425: {
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 3,
            spaceBetween: '18px',
            pagination: {
                clickable: true
            }
        },
        1024:{
            slidesPerView: 4,
            spaceBetween: '24px',
            pagination: {
                clickable: true
            }
        }
    },
    initialSlide: 0,
    navigation: false,
    centeredSlides: true,
    allowTouchMove: true,
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
    const swiperRef = useRef<SwiperType | null>(null);

    useEffect(() => {
        if (swiperRef.current) {
            // Start autoplay
            swiperRef.current.autoplay.start();

            // Set a timeout to allow the Swiper to initialize fully
            const timeout = setTimeout(() => {
                if (swiperRef.current) {
                    // Get the current active index
                    const activeIndex = swiperRef.current.realIndex
                    // Calculate the target index ({value} positions after the current)
                    const targetIndex = (activeIndex + 2) % posts.length
                    // Slide to the target index
                    swiperRef.current.slideTo(targetIndex)
                }
            }, 100) // Adjust this delay if needed

           return () => clearTimeout(timeout);
        }
    }, [posts.length])

    return (
        <VStack w={'full'} h={{ base:'400px', md:'586px' }}>
            <Swiper onSwiper={(swiper) => swiperRef.current = swiper} {...options}>
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