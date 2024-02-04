import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import HomeContents from '@/components/home/HomeContents';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <HomeContents />
      <Footer />
      <div>
        <Link aria-label="to usedTrade " href="/usedTrade ">
          usedTrade
        </Link>
        <br />
        <Link aria-label="to signUp  " href="/signUp  ">
          signUp
        </Link>
        <br />
        <Link
          aria-label="to projectIntroduction  "
          href="/projectIntroduction  "
        >
          projectIntroduction
        </Link>
        <br />
        <Link aria-label="tomyPage  " href="/myPage  ">
          myPage
        </Link>
        <br />
        <Link aria-label="to login  " href="/login  ">
          login
        </Link>
        <br />
        <Link aria-label="to find  " href="/find  ">
          find
        </Link>
        <br />
        <Link
          aria-label="to diseaseIntroduction  "
          href="/diseaseIntroduction  "
        >
          diseaseIntroduction
        </Link>
        <br />
        <Link
          aria-label="to dementiaTest  "
          href="/dementiaTest  "
        >
          dementiaTest
        </Link>
        <br />
        <Link
          aria-label="to community  "
          href="/community  "
        >
          community
        </Link>
        <br />
      </div>
    </>
  );
}
