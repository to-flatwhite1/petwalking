'use client';
import { Container, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react'; // useEffect 추가
import { FaBars } from 'react-icons/fa6';
import { Dialog, DialogPanel } from '@headlessui/react';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
const navigation = [
    { name: '산책기록', href: '/walk_record' },
    { name: '건강기록', href: '/health_history' },
    { name: '미용기록', href: '/beauty_record' },
    { name: '식단기록', href: '/diet_log' },
];

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isClient, setIsClient] = useState(false); // 클라이언트 여부 체크 상태
    const [user, setUser] = useState(null); // 로그인된 사용자 상태

    // 클라이언트에서만 실행하도록 useEffect로 처리
    useEffect(() => {
        setIsClient(true); // 클라이언트에서만 렌더링

        // Firebase 인증 상태 변경을 감지
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user); // 사용자 정보 업데이트
        });

        // 컴포넌트 언마운트 시 구독 해제
        return () => unsubscribe();
    }, []);

    if (!isClient) return null; // 클라이언트에서만 렌더링하도록 처리

    // 로그아웃 처리 함수
    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // 로그아웃 후 처리 (예: 리디렉션)
        }).catch((error) => {
            console.error("로그아웃 오류: ", error);
        });
    };

    return (
        <header className="mx-auto bg-white-700 flex items-center h-16 w-full">
            <Container size="full" className="flex justify-between items-center">
                <div aria-label="Global" className="flex items-center justify-between w-full">
                    <h1 className="flex">
                        <Link href="/">
                            <span className="sr-only">Your Company</span>
                            <Flex justify="space-between" align="center" gap="8px">
                                <Flex>
                                    <div className={`leading-3 text-xl`}>
                                        <Image src="/images/common/logo.png" width={130} height={50} alt=" 로고" />
                                    </div>
                                </Flex>
                            </Flex>
                        </Link>
                    </h1>
                    <div className="flex">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <FaBars aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <nav className="hidden">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                                {item.name}
                            </a>
                        ))}
                    </nav>
                    <div className="hidden">
                        <a href="/login" className="text-sm/6 font-semibold text-gray-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <Flex justify="center" align="center" gap="8px">
                                    <Image
                                        alt=""
                                        src="/images/common/bichon02.png"
                                        width={100}
                                        height={100}
                                        className="h-16 w-auto"
                                    />
                                    <Flex>
                                        <div className={`leading-3 text-2xl`}>pet Walking</div>
                                    </Flex>
                                </Flex>
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                {user ? (
                                        <button
                                            onClick={handleLogout}
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Logout
                                        </button>
                                    ) : (
                                        <Link
                                            href="/login"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            Log in
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </Container>
        </header>
    );
};

export default Header;
