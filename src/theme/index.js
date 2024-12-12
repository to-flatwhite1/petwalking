// src/theme/index.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        primary: '#F4BF6F', // 커스터마이즈된 색상
    },
    fonts: {
        body: "'Noto Sans KR', sans-serif", // 본문 폰트 설정
        heading: "'Roboto', sans-serif", // 헤딩 폰트 설정
    },
    components: {
        Button: {
            baseStyle: {
                borderRadius: 'xl', // 기본 borderRadius
                padding: 4, // 기본 패딩
                width: '100%', // 기본 너비
                textStyle: 'md', // 텍스트 스타일
            },
            variants: {
                custom: {
                    bg: '#FFCF9D',
                    _hover: {
                        backgroundColor: '#FFBF80',
                    },
                },
            },
            defaultProps: {
                variant: 'custom', // 기본적으로 커스텀 스타일을 적용
            },
        },
    },
});

export default theme;
