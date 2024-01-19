import { CheckBoxProps } from '@/types/common/checkBox';
import { CheckOn, CheckOff } from '@/assets/icon';
import { css } from '@emotion/react';

function CheckBox({
  content,
  disabled = false,
  checked,
  onChange,
}: CheckBoxProps) {
  return (
    <label css={LabelStyles}>
      <input
        type="checkbox"
        checked
        disabled={disabled}
        onChange={() => onChange(!checked)}
      />
      {checked ? <CheckOn /> : <CheckOff />}
      {content}
    </label>
  );
}

const LabelStyles = css`
  display: flex;
  align-items: center;
  gap: 5px;
  input {
    display: none;
  }
`;

export default CheckBox;
