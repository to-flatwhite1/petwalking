import { Box, Card, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Step = () => {
    return (
        <>
            <div className="font-bold">오늘 닉네임님 산책 걸음 수 입니다!</div>
            <Card
                align="center"
                backgroundImage="linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)"
                /* backgroundImage="linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);" */
                borderRadius="xl"
                w="auto"
                className="my-1 p-4"
                shadow="lg"
            >
                <Flex align="center" direction={'column'} justifyItems="center" className="py-5" gap={5}>
                    <Heading textAlign="center" size="xl" className="py-0">
                        1387 걸음
                    </Heading>
                    {/*   <Image alt="" src="/images/common/dog_left.png" width={100} height={100} className="h-17 w-auto" /> */}
                    <div className="text-center text-lg font-bold mt-2">
                        <div className="flex items-center justify-center space-x-4">
                            <span className="text-xl text-gray-700">68kcal</span>
                            <span className="text-xl text-gray-700">18분</span>
                            <span className="text-xl text-gray-700">2.4km</span>
                        </div>
                    </div>
                </Flex>
            </Card>
        </>
    );
};

export default Step;
