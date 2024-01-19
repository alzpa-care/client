import {
  Github,
  KJW,
  KSH,
  LYJ,
  Velog,
  Youtube,
} from '@/assets/icon';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';

function Footer() {
  return (
    <div css={FooterStyles}>
      <div css={GroupStyles}>
        {/* 반복되는 컴포넌트 정리 */}
        <div css={MembersStyles}>
          <span>
            <KSH />
          </span>
          <p>김소희</p>
          <p>lIssomeheena@gmail.com</p>
          <p css={MemberSubInfoStyles}>담당 | backend</p>
          <p css={MemberSubInfoStyles}>
            커뮤니티, 중고거래 작업{' '}
          </p>
          <p css={MemberSubInfoStyles}>알파케어 화이팅~</p>
          <div css={IconStyles}>
            <Github />
            <Velog />
            <Youtube />
          </div>
        </div>
        <div css={MembersStyles}>
          <span>
            <KJW />
          </span>
          <p>김진우</p>
          <p>lIssomeheena@gmail.com</p>
          <p css={MemberSubInfoStyles}>담당 | backend</p>
          <p css={MemberSubInfoStyles}>
            커뮤니티, 중고거래 작업{' '}
          </p>
          <p css={MemberSubInfoStyles}>알파케어 화이팅~</p>
          <div css={IconStyles}>
            <Github />
            <Velog />
            <Youtube />
          </div>
        </div>
        <div css={MembersStyles}>
          <span>
            <LYJ />
          </span>
          <p>이윤종</p>
          <p>lIssomeheena@gmail.com</p>
          <p css={MemberSubInfoStyles}>담당 | backend</p>
          <p css={MemberSubInfoStyles}>
            커뮤니티, 중고거래 작업{' '}
          </p>
          <p css={MemberSubInfoStyles}>알파케어 화이팅~</p>
          <div css={IconStyles}>
            <Github />
            <Velog />
            <Youtube />
          </div>
        </div>
        <div css={MembersStyles}>
          <span>
            <LYJ />
          </span>
          <p>이윤종</p>
          <p>lIssomeheena@gmail.com</p>
          <p css={MemberSubInfoStyles}>담당 | backend</p>
          <p css={MemberSubInfoStyles}>
            커뮤니티, 중고거래 작업{' '}
          </p>
          <p css={MemberSubInfoStyles}>알파케어 화이팅~</p>
          <div css={IconStyles}>
            <Github />
            <Velog />
            <Youtube />
          </div>
        </div>
      </div>
      <div css={InfoGroupStyles}>
        <p>
          고려대학교 창업경진대회 입상 예선수 12팀 8등 주소
        </p>
        <div css={InfoStyles}>
          <p>이용약관</p>
          <p>개인정보처리방침</p>
          <p>위치기반서비스 이용약관</p>
          <p>출처</p>
        </div>
      </div>
    </div>
  );
}

const FooterStyles = css`
  padding: 30px;
  background-color: ${theme.palette.greyScale.grey1};
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const GroupStyles = css`
  ${mq.mobile} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    span {
      display: none;
    }
  }

  ${mq.tablet} {
  }
  ${mq.pcSmall} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    span {
      display: inline;
    }
  }
`;

const MembersStyles = css`
  ${mq.mobile} {
    flex: 1 1 50%;
    margin: 15px 0;
  }
  ${mq.pcSmall} {
    flex: auto;
    margin: 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 18px;
    color: ${theme.palette.greyScale.grey4};
  }
`;

const MemberSubInfoStyles = css`
  ${mq.mobile} {
    display: none;
  }
  ${mq.pcSmall} {
    display: block;
  }
`;

const IconStyles = css`
  ${mq.mobile} {
    margin-top: 15px;
  }
  ${mq.pcSmall} {
    margin-top: 45px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const InfoGroupStyles = css`
  color: ${theme.palette.greyScale.grey4};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
`;

const InfoStyles = css`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

export default Footer;
