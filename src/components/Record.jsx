'use client';
import React, { createContext } from 'react';
import { Box, Button, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import { GoChevronRight } from 'react-icons/go';
import PointBox from './PointBox';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper 스타일 불러오기

import Link from 'next/link';

const recordList = [
    {
        label: '산책 기록 입력!',
        img: <Image alt="" src="/images/common/step_dog.png" width={30} height={80} />,
        onclick: '/walk_record',
    },
];

const Record = () => {
    return (
        <div className="mb-5 w-full">
            <Grid
                templateColumns="7fr 3fr"
                gap={3} // 열 사이 간격
                width="100%"
            >
                {/* 첫 번째 박스 */}
                <GridItem>
                    <h4 className="text-lg font-semibold mb-3">오늘의 기록</h4>
                    <ul>
                        <li className="text-sm mb-1">참여 하고 포인트 받으세요!</li>
                    </ul>
                </GridItem>
                <GridItem>
                    <div className="text-gray-500 text-sm flex items-center justify-end">
                        <Link href="#" className="text-gray-400 text-sm flex items-center justify-end">
                            전체 목록
                            <GoChevronRight />
                        </Link>
                    </div>
                </GridItem>
            </Grid>
            <HealthRecord />

            {/* 카드의 본문 부분 */}
            <Box className="mt-6">
                <Flex direction="column" gap={4}>
                    {recordList.map(({ label, img: Img, onclick }, index) => (
                        <Link key={index} href={onclick} passHref>
                            <button
                                className="w-full text-lg font-bold py-4 px-6 rounded-xl shadow-lg flex items-center justify-center "
                                style={{
                                    background: '#0396FF',
                                    color: 'white',
                                    height: '65px',
                                    /* linear-gradient(135deg, #ABDCFF 10%, #0396FF 100%)', */
                                }}
                            >
                                {Img && <span className="flex-shrink-0">{Img}</span>}
                                <span>{label}</span>
                            </button>
                        </Link>
                    ))}
                </Flex>
            </Box>
        </div>
    );
};

export default Record;

export const HealthRecord = () => {
    const records = [
        {
            id: 1,
            title: '산책',
            icon: '📉',
            description: '산책 기록',
            points: 100,
        },
        {
            id: 2,
            title: '식단',
            icon: '🍽️',
            description: '식단 기록',
            points: 100,
        },
        {
            id: 3,
            title: '미용',
            icon: '🎀',
            description: '미용 기록',
            points: 100,
        },
        {
            id: 4,
            title: '건강',
            icon: '💖',
            description: '건강 기록',
            points: 100,
        },
    ];

    return (
        <Swiper slidesPerView={'2'} spaceBetween={20} loop={true} className="w-full">
            {records.map((record) => (
                <SwiperSlide
                    key={record.id}
                    className="flex flex-col items-center bg-white rounded-lg p-4 shadow-md mt-6 mb-6 border border-gray-100"
                    style={{ maxWidth: '250px' }} // 슬라이드의 최대 너비를 설정
                >
                    <div className="text-3xl mb-2">{record.icon}</div>
                    <h3 className="text-base font-medium mb-1">{record.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{record.description}</p>
                    <div className="text-sm text-orange-500 font-bold">+{record.points}P</div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
