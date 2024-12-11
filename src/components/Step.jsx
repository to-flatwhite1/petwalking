import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Step = () => {
    return (
        <>
            <div className=" font-bold">오늘 닉네임님 산책 걸음 수 입니다!</div>
            <Card align="center" bg="#FFD09B" borderRadius="xl" w="328px" /* #fee3c5  */ className="my-1" shadow="lg">
                <CardHeader></CardHeader>
                <CardBody>
                    <Flex align="center" justifyItems="center">
                        <Heading textAlign="center" size="md">
                            1387 걸음
                        </Heading>
                        <Image
                            alt=""
                            src="/images/common/dog_left.png"
                            width={100}
                            height={100}
                            className="h-16 w-auto"
                        />
                    </Flex>
                </CardBody>
                <CardFooter>
                    <div>68kcal 18분 2.4km</div>
                </CardFooter>
            </Card>
        </>
    );
};

export default Step;
