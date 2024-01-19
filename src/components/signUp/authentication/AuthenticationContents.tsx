import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

function AuthenticationContents() {
  const onClickHandler = () => {
    window.location.href = '/signUp/emailAndPw';
  };

  return (
    <div css={AuthenticationContentsStyles}>
      <div css={TitleStyles}>회원가입</div>
      <div css={ContentGroupStyles}>
        <div css={ContentItemStyles}>
          <p>이메일</p>
          <div css={EmailInputStyles}>
            <Input placeholder="이메일" />
            <span>@</span>
            <Input placeholder="선택해주세요." />
          </div>
          <Button content="이메일 전송" />
        </div>
        <div css={ContentItemStyles}>
          <p>인증번호</p>
          <div css={EmailInputStyles}>
            <Input placeholder="인증번호 6자리를 입력해주세요." />
          </div>
          <Button content="확인" onClick={onClickHandler} />
        </div>
      </div>
    </div>
  );
}

const AuthenticationContentsStyles = css`
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
  gap: 50px;
`;

const ContentItemStyles = css`
  p {
    margin-bottom: 10px;
  }
`;

const EmailInputStyles = css`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;

  span {
    font-size: 24px;
    color: ${theme.palette.greyScale.grey3};
  }
`;

export default AuthenticationContents;
