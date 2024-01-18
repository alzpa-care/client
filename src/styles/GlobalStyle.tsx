import { Global, css } from '@emotion/react';

function GlobalStyle() {
  return <Global styles={globals} />;
}

const globals = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 1rem;
  }
  svg {
    cursor: pointer;
  }

  body {
    -ms-overflow-style: none; /* IE */
    scrollbar-width: none; /* 파이어폭스 */
  }

  ::-webkit-scrollbar {
    display: none; /* 웹킷 기반 브라우저 (Chrome, Safari...) */
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyle;
