import HomeBanner from '@/assets/img/HomeBanner.png';
import { css } from '@emotion/react';
import Image from 'next/image';

function Banner() {
  return (
    <div css={BannerStyles}>
      <Image
        src={HomeBanner}
        layout="responsive"
        alt="메인페이지 베너"
      />
    </div>
  );
}

const BannerStyles = css`
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 3px 3px 8px;

  * {
    margin-bottom: -3px;
  }
`;

export default Banner;
