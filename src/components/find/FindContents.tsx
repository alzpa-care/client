import { HorizontalLogo } from '@/assets/logo';
import { css } from '@emotion/react';
import { useState } from 'react';
import FindTep from '@/components/find/FindTep';
import FindId from '@/components/find/FindId';
import FindPw from '@/components/find/FindPw';

function FindContents() {
  const [tep, setTep] = useState('id');
  return (
    <div css={FindContentsStyle}>
      <HorizontalLogo />
      <FindTep tep={tep} onChange={setTep} />
      {tep === 'id' && <FindId />}
      {tep === 'pw' && <FindPw />}
    </div>
  );
}

const FindContentsStyle = css`
  width: 400px;
  margin: 150px auto;
`;
export default FindContents;
