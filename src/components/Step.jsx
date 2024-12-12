import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Step = () => {
    return (
        <>
            <div className=" font-bold">오늘 닉네임님 산책 걸음 수 입니다!</div>
            <Card
                align="center"
                bg="#FFD09B"
                borderRadius="xl"
                w="auto"
                /* #fee3c5  */ className="my-1 p-4"
                shadow="lg"
            >
                <Flex align="center" justifyItems="center">
                    <Heading textAlign="center" size="lg">
                        1387 걸음
                    </Heading>
                    <Image alt="" src="/images/common/dog_left.png" width={100} height={100} className="h-17 w-auto" />
                </Flex>

                <Box className="p-2.5 mr-20">
                    <ul className="flex gap-2 text-md">
                        <li>68kcal</li>
                        <li>18분</li>
                        <li>2.4km</li>
                    </ul>
                </Box>
            </Card>
        </>
    );
};

export default Step;
