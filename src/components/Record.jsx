import { Box, Button, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import Image from 'next/image';

import React from 'react';
import PointBox from './PointBox';
import Link from 'next/link';

const recordList = [
    {
        label: '산책 기록 입력!',
        img: <Image alt="" src="/images/common/step_dog.png" width={30} height={80} />,
        onclick: '/walk_record',
    },
    /*   {
        label: '건강 기록',
        img: <Image alt="" src="/images/common/step_dog.png" width={30} height={30} />,
        onclick: '/health_history',
    },
    {
        label: '미용 기록',
        img: <Image alt="" src="/images/common/step_dog.png" width={30} height={30} />,
        onclick: '/beauty_record',
    },
    {
        label: '식단 기록',
        img: <Image alt="" src="/images/common/step_dog.png" width={30} height={30} />,
        onclick: '/diet_log',
    }, */
];

const Record = () => {
    return (
        <div className="mb-3">
            <Grid
                templateColumns="repeat(2, 1fr)" // 2개의 열을 나눔
                gap={3} // 열 사이 간격
                width="100%"
            >
                {/* 첫 번째 박스 */}
                <GridItem>
                    <h4 className="text-lg font-semibold mb-2">오늘의 산책 기록</h4>
                    <ul>
                        <li className="text-sm mb-1">기록하고 포인트 받기</li>
                    </ul>
                    <PointBox />
                </GridItem>
                <GridItem>
                    <Box>
                        <Flex direction="column" gap={4}>
                            {recordList.map(({ label, img: Img, onclick }, index) => (
                                <Link key={index} href={onclick} passHref>
                                    <button
                                        className="w-full text-lg font-bold py-4 px-6 rounded-xl shadow-lg flex items-center justify-center "
                                        style={{
                                            background: '#0396FF',
                                            color: 'white',
                                            height: '162px',
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
                </GridItem>
            </Grid>

            {/* 카드의 본문 부분 */}
        </div>
    );
};

export default Record;
