import { Dispatch, SetStateAction } from 'react';

export interface CheckBoxProps {
  content: string;
  disabled?: boolean;
  checked: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
}
