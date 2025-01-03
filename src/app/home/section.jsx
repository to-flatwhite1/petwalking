import Motion from '@/components/Motion';
import Record from '@/components/Record';
import Step from '@/components/Step';
import Step2 from '@/components/Step2';

import { Temperature } from '@/components/Temperature';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

const Section = () => {
    return (
        <>
            <Motion />
            <Step2 />
            <Step />
            <Temperature />

            <Record />
        </>
    );
};

export default Section;
