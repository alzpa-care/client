import { css } from '@emotion/react';
import Button from '@/components/common/Button';
import theme from '@/styles/theme';

function SignUpContents() {
  return (
    <div css={SignUpContentsStyles}>
      <div css={TitleStyles}>회원가입</div>
      <div css={GroupStyles}>
        <p>알파케어 회원가입</p>
        <Button
          content="알파케어 아이디 만들기"
          icon="AlzpaCareNoFont"
          backgroundColor="#DFEDDE"
          borderColor="#DFEDDE"
          fontColor={theme.palette.black}
        />
      </div>
      <div css={GroupStyles}>
        <p>sns계정으로 간편하게 회원가입</p>
        <Button
          content="구글로 회원가입"
          icon="BtnInGoogle"
          backgroundColor={theme.palette.white}
          borderColor="#3686F7"
          fontColor={theme.palette.black}
        />
        <Button
          content="카카오로 회원가입"
          icon="BtnInKakao"
          backgroundColor="#FFE102"
          borderColor="#FFE102"
          fontColor={theme.palette.black}
        />
        <Button
          content="네이버로 회원가입"
          icon="BtnInNaver"
          backgroundColor="#03CF5D"
          borderColor="#03CF5D"
          fontColor={theme.palette.white}
        />
      </div>
      <p css={CenterTextStyles}>
        이미 아이디가 있으신가요? 로그인
      </p>
    </div>
  );
}
const SignUpContentsStyles = css`
  width: 350px;
  margin: 150px auto;

  p {
    color: ${theme.palette.greyScale.grey4};
  }
`;

const TitleStyles = css`
  margin-bottom: 50px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: ${theme.palette.primaryScale.primary};
`;

const GroupStyles = css`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CenterTextStyles = css`
  text-align: center;
`;
export default SignUpContents;
