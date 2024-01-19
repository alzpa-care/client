import theme from '@/styles/theme';
import { FindTepProps } from '@/types/Find/findTep';
import { css } from '@emotion/react';

function FindTep({ tep, onChange }: FindTepProps) {
  return (
    <div css={TepStyles}>
      <div
        css={TepItemStyles}
        role="presentation"
        onClick={() => onChange('id')}
      >
        <div
          css={tep === 'id' ? TepOnStyles : TepOffStyles}
        >
          아이디 찾기
        </div>
      </div>
      <div
        css={TepItemStyles}
        role="presentation"
        onClick={() => onChange('pw')}
      >
        <div
          css={tep === 'pw' ? TepOnStyles : TepOffStyles}
        >
          비밀번호 찾기
        </div>
      </div>
    </div>
  );
}

const TepStyles = css`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  margin-bottom: 15px;
`;
const TepItemStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 50px;

  div {
    border: 1px solid ${theme.palette.primaryScale.primary};
    border-radius: 8px 8px 0 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const TepOnStyles = css`
  color: ${theme.palette.white};
  background-color: ${theme.palette.primaryScale.primary};
`;

const TepOffStyles = css`
  color: ${theme.palette.primaryScale.primary};
`;
export default FindTep;
