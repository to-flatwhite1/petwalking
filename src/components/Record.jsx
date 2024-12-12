import { Box, Button, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import Image from 'next/image';

import React from 'react';
import PointBox from './PointBox';
import Link from 'next/link';

const recordList = [
    {
        label: '산책 기록',
        img: <Image alt="" src="/images/common/step_dog.png" width={30} height={30} />,
        onclick: '/walk_record',
    },
    {
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
    },
];

const Record = () => {
    return (
        <div>
            <Grid
                templateColumns="repeat(2, 1fr)" // 2개의 열을 나눔
                gap={3} // 열 사이 간격
                width="100%"
            >
                {/* 첫 번째 박스 */}
                <GridItem>
                    <h4 className="text-lg font-semibold mb-2">오늘의 기록</h4>
                    <ul>
                        <li className="text-sm mb-1">기록하고 포인트 받기</li>
                    </ul>
                    <PointBox />
                </GridItem>

                {/* 두 번째 박스 */}
                <GridItem>
                    <Image alt="" src="/images/common/record.png" width={200} height={300} />
                </GridItem>
            </Grid>

            {/* 카드의 본문 부분 */}
            <Box className="mt-5">
                <Flex direction="column" gap={4}>
                    {recordList.map(({ label, img: Img, onclick }, index) => (
                        <Link key={index} href={onclick} passHref>
                            <Button
                                borderRadius="xl"
                                className="my-1"
                                p={4} // padding 추가
                                width={'100%'}
                                text={'md'}
                            >
                                <Flex alignItems="center" justifyContent="space-between" width="100%">
                                    <Heading size="sm">{label}</Heading>
                                    <Box flexShrink={0}>{Img}</Box>
                                </Flex>
                            </Button>
                        </Link>
                    ))}
                </Flex>
            </Box>
        </div>
    );
};

export default Record;
