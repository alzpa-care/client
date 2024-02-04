import theme from '@/styles/theme';
import { css } from '@emotion/react';
import Image from 'next/image';
import UsedTradeTestImg from '@/assets/img/UsedTradeTestImg.png';
import Tag from '../common/Tag';

function UsedTradePost() {
  const price = 36000;
  const address = '금마면';
  const user = '김작성';
  const date = '2023.00.00';
  return (
    <div css={PostStyles}>
      <div css={TagLineStyles}>
        <div css={TagStyles}>
          <Tag
            content="임시게시판"
            backgroundColor="#F0F6FA"
            fontColor="#0090F9"
          />
        </div>
        <p>00-00-00</p>
      </div>
      <Image src={UsedTradeTestImg} alt="중고거래 이미지" />
      <div css={ContentStyles}>
        <p>판매용품의 제목입니다</p>
        <div css={DetailStyles}>
          <p css={PriceStyles}>{price}원</p>
          <p>{address}</p>
          <div>
            <p>{user}</p>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const PostStyles = css`
  background-color: ${theme.palette.white};
  border-radius: 15px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 3px 3px 8px;
  flex-grow: 1;
`;

const TagLineStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: ${theme.palette.greyScale.grey2};
  margin-bottom: 15px;
`;

const TagStyles = css`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ContentStyles = css`
  & > p {
    font-size: 20px;
    margin-top: 15px;
    margin-bottom: 25px;
  }
`;

const DetailStyles = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
  div {
    display: flex;
    justify-content: space-between;
  }
`;

const PriceStyles = css`
  font-size: 24px;
  font-weight: bold;
`;
export default UsedTradePost;
