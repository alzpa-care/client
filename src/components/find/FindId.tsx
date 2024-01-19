import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

function FindId() {
  return (
    <div css={FindIdStyles}>
      <p>아이디 찾기</p>
      <div css={ContentStyles}>
        <div>
          <p>이름</p>
          <Input placeholder="이름을 입력해 주세요." />
        </div>
        <div>
          <p>생년월일</p>
          <Input placeholder="생년월일 8자리를 입력해 주세요." />
        </div>
        <div>
          <p>휴대폰 번호</p>
          <Input placeholder="숫자만 입력해 주세요." />
        </div>
      </div>
      <Button content="확인" />
    </div>
  );
}

const FindIdStyles = css`
  border: ${theme.palette.greyScale.grey2} 1px solid;
  border-radius: 8px;
  padding: 15px 25px;
  & > p {
    margin-bottom: 25px;
  }
`;

const ContentStyles = css`
  margin-bottom: 60px;
  p {
    margin-bottom: 10px;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
  }
`;

export default FindId;
