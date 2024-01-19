import { HorizontalLogo } from '@/assets/logo';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import Link from 'next/link';
import { useState } from 'react';

function Header() {
  const [navMenu, setNavMenu] = useState('');

  const onClickHandler = (menu = '') => {
    setNavMenu(menu);
  };

  const MenuList = [
    { menu: '소개', subList: ['프로젝트'] },
    {
      menu: '알츠하이머',
      subList: ['질병소개', '소통지침', '돌봄지침'],
    },
    {
      menu: '파킨슨',
      subList: ['질병소개', '소통지침', '돌봄지침'],
    },
    {
      menu: '중고거래',
      subList: ['공지사항', '자유게시판', '질문게시판'],
    },
    {
      menu: '커뮤니티',
      subList: [
        '대형물품',
        '의료보조',
        '소모품',
        '리빙',
        '기타',
      ],
    },
    { menu: '지원', subList: ['치매검사', '지원신청'] },
  ];

  const subList = MenuList.find(
    (item) => item.menu === navMenu,
  );

  return (
    <div css={HeaderStyles}>
      <div css={InformationStyles}>
        <Link aria-label="to home " href="/">
          <HorizontalLogo css={LogoStyles} />
        </Link>
        <div>로그인</div>
      </div>
      <div css={NavStyles}>
        <ul css={MenuStyles}>
          {MenuList.map((item) => (
            <li
              role="presentation"
              key={item.menu}
              onClick={() => onClickHandler(item.menu)}
            >
              {item.menu}
            </li>
          ))}
        </ul>
      </div>
      {navMenu !== '' && (
        <div css={SubMenuStyles}>
          <ul>
            {subList?.subList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p
            role="presentation"
            onClick={() => onClickHandler()}
          >
            닫기
          </p>
        </div>
      )}
    </div>
  );
}

const HeaderStyles = css`
  background-color: ${theme.palette.white};
  border-radius: 0 0 20px 20px;
`;

const InformationStyles = css`
  padding: 30px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoStyles = css`
  width: 240px;
`;

const NavStyles = css`
  border-top: ${theme.palette.greyScale.grey2} 1px solid;

  padding: 30px 30px;
`;

const MenuStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  li {
    color: ${theme.palette.greyScale.grey4};
    font-size: 32px;
  }
`;

const SubMenuStyles = css`
  padding: 30px 30px;
  display: flex;
  justify-content: space-between;
  border-top: ${theme.palette.greyScale.grey2} 1px solid;

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
`;

export default Header;
