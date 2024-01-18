import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Link from 'next/link';
import { css } from '@emotion/react';

export default function Home() {
  return (
    <div css={homeStyles}>
      <Header />
      <div>메인</div>

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
        <Link aria-label="to dementiaTest  " href="/dementiaTest  ">
          dementiaTest
        </Link>
        <br />
        <Link aria-label="to community  " href="/community  ">
          community
        </Link>
        <br />
      </div>
      <Footer />
    </div>
  );
}

const homeStyles = css`
  background-color: bisque;
`;
