'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { Flex } from '@chakra-ui/react';

export const Temperature = () => {
    const [weatherData, setWeatherData] = useState(null); // 날씨 정보를 저장하는 상태
    const [loading, setLoading] = useState(true); // 로딩 상태

    const getCurrentWeater = (latitude, longitude) => {
        console.log(`경도: ${longitude}, 위도: ${latitude}`);
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_MAP}&units=metric&lang=kr`; // lang=kr로 한국어 반환
        console.log('API 키:', process.env.NEXT_PUBLIC_WEATHER_MAP);
        if (!process.env.NEXT_PUBLIC_WEATHER_MAP) {
            console.error('API 키가 누락되었거나 잘못되었습니다!');
        }

        fetch(URL)
            .then((response) => {
                console.log('응답 상태:', response.status); // 응답 상태 코드
                return response.json();
            })
            .then((data) => {
                console.log('API 응답 데이터:', data); // 응답 데이터 확인
                if (data.cod !== 200) {
                    console.error('API 에러 메시지:', data.message);
                } else {
                    // 날씨 정보가 정상적으로 전달되었는지 확인
                    console.log('날씨 데이터:', data);
                    const weatherInfo = {
                        cityName: data.name, // 여기서 반환되는 cityName이 한국어로 나와야 함
                        temp: data.main.temp,
                        weatherDescription: data.weather[0].description,
                        icon: data.weather[0].icon,
                    };
                    setWeatherData(weatherInfo);
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.error('API 호출 중 오류 발생:', error);
                setLoading(false);
            });
    };

    const errorHandler = (error) => {
        console.error('Geolocation error:', error.message); // 에러 메시지 출력
        setLoading(false); // 로딩을 완료 상태로 설정

        const notice = document.querySelector('.notice');
        if (error.code === error.PERMISSION_DENIED) {
            // 위치 정보 제공을 거부한 경우
            notice.innerText =
                '위치 정보를 제공해야 날씨 정보를 확인할 수 있습니다. 브라우저에서 위치 접근을 허용해주세요.';
            notice.style.display = 'block';
        } else {
            // 다른 오류가 발생한 경우
            notice.innerText = '위치 정보를 가져오는 데 문제가 발생했습니다. 다시 시도해 주세요.';
            notice.style.display = 'block';
        }
    };

    const getPosition = useCallback((position) => {
        const { latitude, longitude } = position.coords;
        console.log(`위치정보: 위도 ${latitude}, 경도 ${longitude}`); // 위치 정보 확인
        getCurrentWeater(latitude, longitude);
    }, []);

    useEffect(() => {
        if ('geolocation' in navigator) {
            console.log('Geolocation 사용 가능');
            window.navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log('Geolocation 성공', position);
                    getPosition(position);
                },
                (error) => {
                    console.log('Geolocation 실패', error);
                    errorHandler(error);
                }
            );
        } else {
            console.log('Geolocation 사용 불가');
            setLoading(false);
        }
    }, [getPosition]);

    return (
        <div className=" bg-[#D9EAFD] rounded-xl p-4 sm:p-6 md:p-8 my-4 sm:my-6 md:my-8 mx-0">
            <div className="flex flex-col ">
                {loading ? (
                    <div className="notice text-center text-lg font-semibold">날씨 정보를 불러오는 중...</div>
                ) : weatherData ? (
                    <>
                        <div className="flex flex-col space-y-3">
                            <p className="text-md font-semibold leading-relaxed">산책을 통해 활기찬 하루를 맞이해요!</p>
                            <div className="flex gap-2 items-center">
                                <div className="temp text-sm leading-relaxed">온도: {weatherData.temp} ℃</div>

                                <div className="weather text-sm leading-relaxed">
                                    날씨: {weatherData.weatherDescription}
                                </div>
                                <Image
                                    src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                                    alt="Weather icon"
                                    width={50}
                                    height={50}
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="notice text-center text-lg font-semibold">날씨 정보를 찾을 수 없습니다.</div>
                )}
            </div>
        </div>
    );
};
