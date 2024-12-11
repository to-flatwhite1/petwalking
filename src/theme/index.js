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
                fontWeight: 'bold',
            },
        },
    },
});

export default theme;
