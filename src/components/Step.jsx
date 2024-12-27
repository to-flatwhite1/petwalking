'use client';
import React, { useEffect, useState } from 'react';
import { Card, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';

const Step = () => {
    const [stepCount, setStepCount] = useState(0); // 걸음수를 저장할 state

    useEffect(() => {
        const requestBluetoothDevice = async () => {
            try {
                const device = await navigator.bluetooth.requestDevice({
                    filters: [{ services: ['step_counter'] }], // 걸음수 서비스 필터
                });

                const server = await device.gatt.connect();
                const service = await server.getPrimaryService('step_counter');
                const characteristic = await service.getCharacteristic('step_count');

                characteristic.startNotifications();

                characteristic.addEventListener('characteristicvaluechanged', (event) => {
                    const steps = event.target.value.getUint16(0, true); // 걸음수 가져오기
                    setStepCount(steps); // state 업데이트
                    sendStepData(steps); // 서버로 걸음수 전송
                });
            } catch (error) {
                console.error('Bluetooth 연결 실패:', error);
            }
        };

        requestBluetoothDevice();
    }, []); // 컴포넌트가 마운트될 때 한 번만 실행

    // 걸음수 데이터를 서버로 전송
    const sendStepData = async (steps) => {
        const response = await fetch('/api/steps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ stepCount: steps }),
        });

        const data = await response.json();
        console.log(data);
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
                <Image
                    alt="Dog illustration"
                    src="/images/common/dog_left.png"
                    width={100}
                    height={100}
                    className="h-17 w-auto"
                />
                <div className="text-center text-lg font-bold mt-2">
                    <div className="flex items-center justify-center space-x-4">
                        <span className="text-xl text-gray-700">68kcal</span>
                        <span className="text-xl text-gray-700">18분</span>
                        <span className="text-xl text-gray-700">2.4km</span>
                    </div>
                </div>
            </Flex>
        </Card>
    );
};

export default Step; // Default export
export async function handler(req, res) {
    if (req.method === 'POST') {
        const { stepCount } = req.body;

        // 서버에서 걸음수 데이터 처리
        console.log('Received step count:', stepCount);

        // 예: 데이터베이스에 저장하거나 다른 작업을 수행
        res.status(200).json({ message: 'Step count received', stepCount });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
