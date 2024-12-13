import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const PointBox = () => {
    return (
        <>
            <h4 className="text-lg font-semibold mt-5 mb-2">포인트박스</h4>
            <Button
                bg="#ffdc83"
                borderRadius="xl"
                // padding 추가
                width={130}
                height={45}
                className="mt-2"
            >
                <Flex alignItems="center" gap={3} width="100%">
                    {/* label */}
                    <Heading size="sm">총</Heading>
                    <Image alt="" src="/images/common/box.png" width={30} height={30} />
                    <Box>0개</Box>
                </Flex>
            </Button>
        </>
    );
};

export default PointBox;
