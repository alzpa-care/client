import { IconsProps } from '@/types/common/icon';

import {
  BtnInGoogle,
  BtnInNaver,
  BtnInKakao,
  AlzpaCareNoFont,
} from '@/assets/icon';

function Icons({ icon }: IconsProps) {
  switch (icon) {
    case 'BtnInGoogle':
      return <BtnInGoogle />;
    case 'BtnInKakao':
      return <BtnInKakao />;
    case 'BtnInNaver':
      return <BtnInNaver />;
    case 'AlzpaCareNoFont':
      return <AlzpaCareNoFont />;
    default:
      break;
  }
}

export default Icons;
