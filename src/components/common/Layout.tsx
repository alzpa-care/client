import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';

function Layout({ children }: React.PropsWithChildren) {
  return <div css={layoutStyles}>{children}</div>;
}

const layoutStyles = css`
  margin: 0 auto;

  ${mq.mobile} {
    max-width: 480px;
  }
  ${mq.tablet} {
    max-width: 768px;
  }
  ${mq.pcSmall} {
    max-width: 1024px;
  }
  ${mq.pcLarge} {
    max-width: 1280px;
  }
`;

export default Layout;
