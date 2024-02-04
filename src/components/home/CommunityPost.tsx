import theme from '@/styles/theme';
import { css } from '@emotion/react';
import Image from 'next/image';
import UserTestImg from '@/assets/img/UserTestImg.png';
import { Comment, Like } from '@/assets/icon';
import Tag from '../common/Tag';

function CommunityPost() {
  const testCount = 3;
  return (
    <div css={PostStyles}>
      <div css={TagLineStyles}>
        <div css={TagStyles}>
          <Tag
            content="임시게시판"
            backgroundColor="#F0F6FA"
            fontColor="#0090F9"
          />
        </div>
        <p>00-00-00</p>
      </div>
      <div css={ContentStyles}>
        <p>Test 공지사항 제목 입니다</p>
      </div>
      <div css={DetailStyles}>
        <div css={UserStyles}>
          <Image
            src={UserTestImg}
            alt="유저 프로필 이미지"
          />
          <p>테스트유저</p>
        </div>
        <div css={CountStyles}>
          <div>
            <Comment />
            <p>댓글 {testCount}</p>
          </div>
          <div>
            <Like />
            <p>좋아요 {testCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const PostStyles = css`
  background-color: ${theme.palette.white};
  flex-grow: 1;
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
  margin-bottom: 20px;
  p {
    font-size: 24px;
    margin-top: 15px;
  }
`;

const DetailStyles = css`
  display: flex;
  justify-content: space-between;
`;

const UserStyles = css`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const CountStyles = css`
  display: flex;
  gap: 15px;
  & > div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
export default CommunityPost;
