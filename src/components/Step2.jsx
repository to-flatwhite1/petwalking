import { Box, Grid, GridItem, Card, CardHeader, CardBody, CardFooter, Heading, Flex } from '@chakra-ui/react';

const Step2 = () => {
    return (
        <Box px={0} maxW="390px" mx="auto">
            <div className=" font-bold">이번주 닉네임님 산책 걸음 수 입니다!</div>
            <Grid
                templateColumns="repeat(2, 1fr)" // 2개의 열을 나눔
                gap={4} // 열 사이 간격
                width="100%"
            >
                {/* 첫 번째 박스 */}
                <GridItem>
                    <Card align="center" bg="#FFCF9D" borderRadius="xl" className="my-4" shadow="lg">
                        <CardBody>
                            <Flex align="center" justifyItems="center">
                                <Heading textAlign="center" size="sm">
                                    평균 산책거리/일
                                </Heading>
                            </Flex>
                        </CardBody>
                        <CardFooter>
                            <div>0.0km</div>
                        </CardFooter>
                    </Card>
                </GridItem>

                {/* 두 번째 박스 */}
                <GridItem>
                    <Card align="center" bg="#FFB26F" borderRadius="xl" className="my-4" shadow="lg">
                        <CardBody>
                            <Flex align="center" justifyItems="center">
                                <Heading textAlign="center" size="sm">
                                    평균 산책시간/일
                                </Heading>
                            </Flex>
                        </CardBody>
                        <CardFooter>
                            <div>0분</div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Step2;
