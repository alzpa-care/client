import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

function EmailAndPwContents() {
  const onClickHandler = () => {
    window.location.href = '/signUp/profile';
  };
  return (
    <div css={EmailAndPwContentsStyles}>
      <div css={TitleStyles}>회원가입</div>
      <div css={ContentGroupStyles}>
        <div css={ContentItemStyles}>
          <p>이메일</p>
          <p css={EmailTextStyles}>asdf123@naver.com</p>
        </div>
        <div css={ContentItemStyles}>
          <p>비밀번호</p>
          <span>
            영문, 숫자를 포함한 8자 이상의 비밀번호를
            입력해주세요.
          </span>
          <div css={PwInputStyles}>
            <Input placeholder="비밀번호를 입력해 주세요." />
          </div>
          <p>비밀번호 확인</p>
          <div css={PwInputStyles}>
            <Input placeholder="비밀번호를 입력해 주세요." />
          </div>
        </div>
        <Button content="확인" onClick={onClickHandler} />
      </div>
    </div>
  );
}

const EmailAndPwContentsStyles = css`
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

const EmailTextStyles = css`
  font-size: 24px;
  font-weight: bold;
`;

const ContentItemStyles = css`
  p {
    margin-bottom: 10px;
  }
  span {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    color: ${theme.palette.greyScale.grey2};
  }
`;

const PwInputStyles = css`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
`;

export default EmailAndPwContents;
