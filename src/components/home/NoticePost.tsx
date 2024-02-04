import { css } from '@emotion/react';
import Tag from '@/components/common/Tag';
import { Notice } from '@/assets/icon';
import theme from '@/styles/theme';
import Image from 'next/image';

import NoticeTestImage from '@/assets/img/NoticeTestImg.png';

function NoticePost() {
  return (
    <div css={PostStyles}>
      <div css={TagLineStyles}>
        <div css={TagStyles}>
          <Notice />
          <Tag
            content="공지사항"
            backgroundColor="#F9C23C"
            fontColor="#333333"
          />
        </div>
        <p>00-00-00</p>
      </div>
      <div css={ContentStyles}>
        <div css={ImgStyles}>
          <Image
            src={NoticeTestImage}
            alt="test image"
            layout="reponsive"
          />
        </div>
        <p>Test 공지사항 제목 입니다</p>
      </div>
    </div>
  );
}

const PostStyles = css`
  height: auto;
  background-color: ${theme.palette.white};
  border-radius: 15px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 3px 3px 8px;
`;

const TagLineStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: ${theme.palette.greyScale.grey2};
  margin-bottom: 15px;
`;

const TagStyles = css`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ContentStyles = css`
  p {
    font-size: 24px;
    margin-top: 15px;
  }
`;

const ImgStyles = css`
  height: 200px;
  display: flex;
  align-items: center;
  background-color: ${theme.palette.greyScale.grey1};
`;
export default NoticePost;
