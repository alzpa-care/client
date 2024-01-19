import theme from '@/styles/theme';
import {
  ButtonProps,
  ButtonStylesProps,
} from '@/types/common/button';
import { css } from '@emotion/react';

function Button({
  content,
  isDisabled,
  backgroundColor = theme.palette.primaryScale.primary,
  borderColor = theme.palette.primaryScale.primary,
  fontColor = theme.palette.white,
  onClick,
}: ButtonProps) {
  return (
    <button
      css={ButtonStyles({
        backgroundColor,
        borderColor,
        fontColor,
      })}
      type="button"
      disabled={isDisabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

const ButtonStyles = ({
  backgroundColor,
  borderColor,
  fontColor,
}: ButtonStylesProps) => css`
  padding: 15px;
  font-size: 16px;
  color: ${fontColor};
  background-color: ${backgroundColor};
  border: ${borderColor} solid 1px;
  border-radius: 8px;
`;

export default Button;
