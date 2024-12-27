'use client';
import { Providers } from '@/components/providers';
import { Noto_Sans } from 'next/font/google';

import './globals.css';
const notoSans = Noto_Sans({
    subsets: ['latin'], // 사용할 글꼴의 하위셋을 설정 (예: 'latin', 'cyrillic', 'greek' 등)
    weight: '400', // 폰트 두께 설정 (예: '400', '700' 등)
    style: 'normal', // 폰트 스타일 설정 (예: 'normal', 'italic' 등)
});
/* export const metadata = {
    title: 'next.js template',
    description: '페이지 설명',
    openGraph: {
        title: '페이지 제목',
        description: '페이지 설명',
        type: 'website',
        url: 'http://www.mysite.com/article/article1.html',
        images: [
            {
                url: 'http://www.mysite.com/article/article1_featured_image.jpg',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: '페이지 제목',
        description: '페이지 설명',
        images: ['http://www.mysite.com/article/article1.html'],
        creator: '사이트 명',
    },
}; */

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head></head>
            <body className={`${notoSans.className} text-[#131010]`}>
                {' '}
                {/* 텍스트 색상 변경 */}
                <Providers>
                    <div
                        id="wrap"
                        className="mx-auto max-w-sm min-h-svh flex flex-col w-full"
                        /* #FFF0DC' */
                    >
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    );
}
