import theme from '@/styles/theme';
import {
  ButtonProps,
  ButtonStylesProps,
} from '@/types/common/button';
import { css } from '@emotion/react';
import Icons from '@/components/common/Icons';

function Button({
  content,
  isDisabled,
  backgroundColor = theme.palette.primaryScale.primary,
  borderColor = theme.palette.primaryScale.primary,
  fontColor = theme.palette.white,
  icon,
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
      {icon && <Icons icon={icon} />}
      {content}
    </button>
  );
}

const ButtonStyles = ({
  backgroundColor,
  borderColor,
  fontColor,
}: ButtonStylesProps) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 55px;
  font-size: 16px;
  color: ${fontColor};
  font-weight: bold;
  background-color: ${backgroundColor};
  border: ${borderColor} solid 1px;
  border-radius: 8px;
`;

export default Button;
