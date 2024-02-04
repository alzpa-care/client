import { css } from '@emotion/react';
import theme from '@/styles/theme';
import { DetailTest, SimpleTest } from '@/assets/icon';
import NoticePost from './NoticePost';
import Banner from './Banner';
import CommunityPost from './CommunityPost';
import UsedTradePost from './UsedTradePost';

function HomeContents() {
  const NoticePostRendering = () => {
    const result = [];
    const count = 3;
    for (let i = 0; i < count; i += 1) {
      result.push(<NoticePost />);
    }
    return result;
  };

  const CommunityPostRendering = () => {
    const result = [];
    const count = 10;
    for (let i = 0; i < count; i += 1) {
      result.push(<CommunityPost />);
    }
    return result;
  };

  const UsedTradePostRendering = () => {
    const result = [];
    const count = 3;
    for (let i = 0; i < count; i += 1) {
      result.push(<UsedTradePost />);
    }
    return result;
  };
  return (
    <div css={HomeStyles}>
      <div css={PostsStyles}>
        <div css={NoticeBoxStyles}>
          <p css={SubTitleStyles}>공지사항</p>
          <div css={NoticeStyles}>
            {NoticePostRendering()}
          </div>
        </div>
        <hr />
        <div css={CommunityBoxStyles}>
          <Banner />
          <p css={SubTitleStyles}>커뮤니티 최신글</p>
          <div css={CommunityStyles}>
            {CommunityPostRendering()}
          </div>
        </div>
      </div>
      <div css={UsedTradeBoxStyles}>
        <p css={SubTitleStyles}>최신 중고거래 물품</p>
        <div css={UsedTradeStyles}>
          {UsedTradePostRendering()}
        </div>
      </div>
      <div css={DiagnosisAndGameBoxStyles}>
        <div css={TestStyles}>
          <p css={SubTitleStyles}>치매 자가진단</p>
          <div css={SimpleTestStyles}>
            <div>
              <SimpleTest />
              <p>치매간이검사</p>
            </div>
            <p>
              간병인과 함께하는 5분정도 소요되는 간단한
              검사입니다.
            </p>
          </div>
          <div css={DetailTestStyles}>
            <div>
              <DetailTest />
              <p>치매정밀검사</p>
            </div>
            <p>
              환자의 상태를 잘 아는 보호자와 함께하는 20분
              정도 소요되는 선별검사입니다.
            </p>
          </div>
        </div>
        <div css={GameStyles}>
          <p css={SubTitleStyles}>미니게임</p>
          <div />
        </div>
      </div>
    </div>
  );
}

const HomeStyles = css``;

const PostsStyles = css`
  display: flex;
  gap: 25px;

  hr {
    height: auto;
    width: 1px;
    border-width: 0;
    background-color: ${theme.palette.greyScale.grey2};
  }
  margin-bottom: 100px;
`;

const SubTitleStyles = css`
  font-size: 32px;
  margin-bottom: 15px;
`;

const NoticeBoxStyles = css`
  flex-grow: 0;
`;

const NoticeStyles = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CommunityBoxStyles = css`
  flex-grow: 1;

  & > p {
    margin-top: 15px;
  }
`;

const CommunityStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const UsedTradeBoxStyles = css`
  margin-bottom: 100px;
`;

const UsedTradeStyles = css`
  display: flex;
  gap: 30px;
`;

const DiagnosisAndGameBoxStyles = css`
  display: flex;
  gap: 30px;

  & > div {
    width: 50%;
  }
`;

const TestStyles = css`
  margin-bottom: 100px;

  & > div {
    height: 300px;
    border-radius: 15px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > p {
      font-size: 24px;
      width: 70%;
      word-break: keep-all;
      text-align: center;
    }

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;

      p {
        font-size: 32px;
        font-weight: bold;
        margin-left: 10px;
      }
    }
  }
`;
const SimpleTestStyles = css`
  background-image: linear-gradient(
    to right,
    #e5fffa,
    #d7e5ff
  );
`;

const DetailTestStyles = css`
  background-image: linear-gradient(
    to right,
    #cff8ff,
    #e4ffe1
  );
`;

const GameStyles = css`
  & > div {
    width: 100%;
    height: 610px;
    background-color: #dddddd;
    border-radius: 15px;
  }
`;
export default HomeContents;
