import { Card, Flex } from '@chakra-ui/react';
import React from 'react';
import Section from './section';

const HomeContent = () => {
    return (
        <>
            <>
                <Flex direction="column" p="100px 20px 20px">
                    <Flex gap="4" direction="column">
                        <Section p="0px 30px"></Section>
                    </Flex>
                </Flex>
            </>
        </>
    );
};

export default HomeContent;
