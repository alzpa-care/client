import { Global, css } from '@emotion/react';
import theme from './theme';

function GlobalStyle() {
  return <Global styles={globals} />;
}

const globals = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    font-family: 'pretendard';
  }

  @font-face {
    font-family: 'pretendard';
    src: url('/fonts/PretendardVariable.ttf');
  }

  svg {
    cursor: pointer;
  }

  body {
    -ms-overflow-style: none; /* IE */
    scrollbar-width: none; /* 파이어폭스 */
  }

  /********* 스크롤 바 **********/
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${theme.palette.primaryScale.primary};
    border-radius: 5px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  /*******************************/

  li {
    list-style: none;
  }
`;

export default GlobalStyle;
