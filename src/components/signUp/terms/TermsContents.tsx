import theme from '@/styles/theme';
import { css } from '@emotion/react';
import CheckBox from '@/components/common/CheckBox';
import { useState } from 'react';
import Button from '@/components/common/Button';

function TermsContents() {
  const [allChk, setAllChk] = useState(false);
  const [alzpaCareTermsChk, setAlzpaCareTermsChk] =
    useState(false);
  const [privacyChk, setPrivacyChk] = useState(false);
  const [locationChk, setLocationChk] = useState(false);
  const [emailChk, setEmailChk] = useState(false);

  const onClickHandler = () => {
    window.location.href = '/signUp/authentication';
  };

  return (
    <div css={TermsContentsStyles}>
      <div css={TitleStyles}>이용약관</div>
      <div css={itemsStyles}>
        {/* 나중에 반복되는 컴포넌트 정리 */}
        <div css={itemStyles}>
          <CheckBox
            content="전체 동의"
            checked={allChk}
            onChange={setAllChk}
          />
        </div>
        <div css={itemStyles}>
          <CheckBox
            content="[필수] 알파케어 이용약관에 모두 동의합니다. "
            checked={alzpaCareTermsChk}
            onChange={setAlzpaCareTermsChk}
          />
          <div css={TextStyles}>
            test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1
          </div>
        </div>
        <div css={itemStyles}>
          <CheckBox
            content="[필수] 개인정보 수입 및 이용에 동의합니다. "
            checked={privacyChk}
            onChange={setPrivacyChk}
          />
          <div css={TextStyles}>test1</div>
        </div>
        <div css={itemStyles}>
          <CheckBox
            content="[선택] 위치기반 서비스 이용약관 "
            checked={locationChk}
            onChange={setLocationChk}
          />
          <div css={TextStyles}>test1</div>
        </div>
        <div css={itemStyles}>
          <CheckBox
            content="[선택] 이메일 수신동의 "
            checked={emailChk}
            onChange={setEmailChk}
          />
        </div>
      </div>
      <Button content="다음" onClick={onClickHandler} />
    </div>
  );
}
const TermsContentsStyles = css`
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

const itemsStyles = css`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 50px;
`;

const itemStyles = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TextStyles = css`
  height: 120px;
  border: ${theme.palette.greyScale.grey2} 1px solid;
  border-radius: 8px;
  padding: 12px;
  word-break: break-all;
  overflow: auto;
`;

export default TermsContents;
