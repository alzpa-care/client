export interface ButtonProps {
  content: string;
  isDisabled?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  fontColor?: string;
  icon?: string;
  onClick?: () => void;
}

export interface ButtonStylesProps {
  backgroundColor?: string;
  borderColor?: string;
  fontColor?: string;
}
