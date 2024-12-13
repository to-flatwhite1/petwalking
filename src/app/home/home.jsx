import { Card, Flex } from '@chakra-ui/react';
import React from 'react';
import Section from './section';

const HomeContent = () => {
    return (
        <Flex className="container flex-col">
            <Flex gap="4" direction="column">
                <div className="h-20">개 이미지</div>
                <Section />
            </Flex>
        </Flex>
    );
};

export default HomeContent;
