import { useState } from 'react';
import { HorizontalLogo } from '@/assets/logo';
import { css } from '@emotion/react';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import theme from '@/styles/theme';
import { Google, Kakao, Naver } from '@/assets/icon';
import CheckBox from '../common/CheckBox';

function LoginContents() {
  const [saveId, setSaveId] = useState(false);
  return (
    <div css={LoginContentsStyles}>
      <HorizontalLogo />
      <div css={InputGroupStyles}>
        <Input placeholder="이메일을 입력해 주세요." />
        <Input placeholder="비밀번호를 입력해 주세요." />
      </div>
      <div css={ButtonGroupStyles}>
        <Button content="로그인" />
        <Button
          content="회원가입"
          backgroundColor={theme.palette.white}
          fontColor={theme.palette.primaryScale.primary}
        />
      </div>
      <div css={SignStyles}>
        <div>
          <CheckBox
            content="아이디 저장"
            checked={saveId}
            onChange={setSaveId}
          />
        </div>
        <div>아이디/비밀번호 찾기</div>
      </div>
      <div css={SimpleLoginStyles}>
        <p>SNS계정으로 간편로그인</p>
        <div>
          <Naver />
          <Kakao />
          <Google />
        </div>
      </div>
    </div>
  );
}

const LoginContentsStyles = css`
  width: 350px;
  margin: 150px auto;
`;

const InputGroupStyles = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 30px 0;
`;

const ButtonGroupStyles = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SignStyles = css`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${theme.palette.greyScale.grey4};

  label > input {
    margin-right: 5px;
  }
`;

const SimpleLoginStyles = css`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  p {
    font-size: 14px;
    color: ${theme.palette.greyScale.grey4};
  }
  div {
    display: flex;
    gap: 15px;
  }
`;
export default LoginContents;
