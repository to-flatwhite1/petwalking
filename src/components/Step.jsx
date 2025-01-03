'use client';
import React, { useEffect, useState } from 'react';
import { Card, Flex, Heading } from '@chakra-ui/react';

const Step = () => {
    const [stepCount, setStepCount] = useState(0); // 걸음수를 저장할 state
    const [error, setError] = useState(''); // 오류 메시지를 저장할 state

    // 걸음수 데이터를 서버로 전송
    const sendStepData = async (steps) => {
        try {
            const response = await fetch('/api/steps', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ stepCount: steps }),
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('걸음수 데이터 전송 실패:', error);
        }
    };

    return (
        <Card
            align="center"
            backgroundImage="linear-gradient(135deg, #ABDCFF 10%, #0396FF 100%)"
            borderRadius="xl"
            w="auto"
            className="my-1 p-4"
            shadow="lg"
        >
            <Flex align="center" direction={'column'} justifyItems="center" className="py-5" gap={5}>
                <Heading textAlign="center" size="xl" className="py-0">
                    {stepCount} 걸음
                </Heading>
                <div className="text-center text-lg font-bold mt-2">
                    <div className="flex items-center justify-center space-x-4">
                        <span className="text-xl text-gray-700">68kcal</span>
                        <span className="text-xl text-gray-700">18분</span>
                        <span className="text-xl text-gray-700">2.4km</span>
                    </div>
                </div>
                {error && <div style={{ color: 'red' }}>{error}</div>} {/* 오류 메시지 표시 */}
            </Flex>
        </Card>
    );
};

export default Step;
