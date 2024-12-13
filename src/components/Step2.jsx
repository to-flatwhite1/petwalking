import { Box, Grid, GridItem } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Step2 = () => {
    return (
        <>
            {' '}
            <div className="max-w-[390px] ">
                <div className="font-bold mb-4">이번주 닉네임님 산책 걸음 수 입니다!</div>
                <Grid
                    templateColumns="repeat(2, 1fr)" // 2개의 열을 나누고 각각 50%씩 차지
                    gap={4} // 열 사이 간격
                    width="100%" // Grid 전체 너비를 100%로 설정
                >
                    {/* 첫 번째 박스 */}
                    <GridItem className="bg-[#dff2ff] rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <h3 className="text-sm font-bold text-[#3173F6]">평균 산책거리/일</h3>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                            <div>
                                <span className="text-4xl font-bold">0.0</span>
                                <span className="text-gray-500">km</span>
                            </div>
                            <Image alt="shoes" src="/images/common/shoes.png" width={30} height={30} />
                        </div>
                    </GridItem>

                    {/* 두 번째 박스 */}
                    <GridItem className="bg-[#e6f9e6] rounded-lg shadow p-6">
                        <div className="flex items-center">
                            <h3 className="text-sm font-bold text-[#54A281]">평균 산책시간/일</h3>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                            <div>
                                <span className="text-4xl font-bold">0.0</span>
                                <span className="text-gray-500">분</span>
                            </div>
                            <Image alt="shoes" src="/images/common/time.png" width={30} height={30} />
                        </div>
                    </GridItem>
                </Grid>
            </div>
        </>
    );
};

export default Step2;
