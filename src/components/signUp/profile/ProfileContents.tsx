import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

function ProfileContents() {
  const onClickHandler = () => {
    window.location.href = '/login';
  };
  return (
    <div css={ProfileContentsStyles}>
      <div css={TitleStyles}>회원가입</div>
      <div css={ContentGroupStyles}>
        <div css={ContentItemStyles}>
          <p>이름</p>
          <Input placeholder="이름을 입력해 주세요." />
        </div>
        <div css={ContentItemStyles}>
          <p>닉네임</p>
          <Input placeholder="닉네임을 입력해 주세요." />
        </div>
        <div css={ContentItemStyles}>
          <p>휴대폰</p>
          <Input placeholder="휴대폰 번호를 입력해 주세요." />
        </div>
        <div css={ContentItemStyles}>
          <p>생년월일</p>
          <Input placeholder="생년월일을 입력해 주세요." />
        </div>
      </div>
      <Button content="확인" onClick={onClickHandler} />
    </div>
  );
}

const ProfileContentsStyles = css`
  width: 400px;
  margin: 150px auto;
`;

const TitleStyles = css`
  margin-bottom: 50px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: ${theme.palette.primaryScale.primary};
`;

const ContentGroupStyles = css`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-bottom: 100px;
`;

const ContentItemStyles = css`
  p {
    margin-bottom: 10px;
  }
`;

export default ProfileContents;
