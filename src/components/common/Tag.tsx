import theme from '@/styles/theme';
import {
  TagProps,
  TagStylesProps,
} from '@/types/common/tag';
import { css } from '@emotion/react';

function Tag({
  content,
  backgroundColor = theme.palette.white,
  fontColor = theme.palette.black,
}: TagProps) {
  return (
    <div css={TagStyles({ backgroundColor, fontColor })}>
      {content}
    </div>
  );
}

const TagStyles = ({
  backgroundColor,
  fontColor,
}: TagStylesProps) => css`
  height: 25px;
  border-radius: 5px;
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${backgroundColor};
  color: ${fontColor};
`;
export default Tag;
