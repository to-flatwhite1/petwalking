import Logo from '@/components/common/Logo';
import Header from '@/components/layout/header/Header';
import { Main } from '@/components/layout/Main';
import HomeContent from './home/home';

export default function Home() {
    return (
        <>
            <Header />
            <Main>
                <HomeContent />
            </Main>
        </>
    );
}
