import theme from '@/styles/theme';
import { InputProps } from '@/types/common/input';
import { css } from '@emotion/react';

function Input({ placeholder }: InputProps) {
  return (
    <input
      css={inputStyles}
      type="text"
      placeholder={placeholder}
    />
  );
}

const inputStyles = css`
  font-size: 16px;
  padding: 15px;
  border: ${theme.palette.greyScale.grey2} solid 1px;
  border-radius: 8px;
`;

export default Input;
