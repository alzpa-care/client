import {
  Project1,
  Project2,
  Project3,
  VideoTest,
} from '@/assets/img';
import { VerticalLogoBG } from '@/assets/logo';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';

function ProjectIntroductionContents() {
  return (
    <div css={ProjectIntroductionContentsStyles}>
      <div css={OutlineStyles}>
        <VerticalLogoBG css={OutlineLogoStyles} />

        <div css={OutlineContentStyles}>
          <p css={OutlineTitleStyles}>
            <span>알</span>츠하이머와 <span>파</span>킨슨
            환자를 위한 지원과 공유의 플랫폼
          </p>
          <div css={OutlineTextStyles}>
            <p>
              알파케어는 알츠하이머와 파킨슨의 첫 글자를
              따서 지어진 프로젝트 입니다.
            </p>
            <p>
              정부지원을 받기 위해서는 다양한 행정절차를
              거쳐야 하는데, 필요한 서류와 발급받는 과정에
              대한 정보를 통합하였습니다.
            </p>
            <p>
              알츠하이머와 파킨슨 환자, 그들의 가족 및 돌봄
              제공자를 위한 정보를 제공하는 온라인 공간으로
              환자들이 더 나은 삶을 찾을 수 있도록 도움을
              주는 것을 목표로 합니다.
            </p>
            <p>
              단순히 정보를 제공하는 것을 넘어, 희망과
              도움을 찾을 수 있는 곳이 되기를 희망합니다.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Project1 />
      </div>
      <div>
        <VideoTest />
      </div>
      <div>
        <Project2 />
      </div>
      <div>
        <Project3 />
      </div>
      <div>
        <div css={ProjectStepsTitleStyles}>
          프로젝트 진행 단계
        </div>
        {/* 나중에 반복되는 컴포넌트 정리 */}
        <div css={ProjectStepsStyles}>
          <div css={StepStyles}>
            <div css={StepTitleStyles}>시작</div>
            <div css={StepTextStyles}>
              <p>
                2021
                <br />
                본사 이전
              </p>
              <p>
                2020
                <br />
                창립 16주년KIROS Partners 사명변경 PT1 lab
              </p>
              <p>
                2015
                <br />
                콘텐츠사업부 해외법인 설립
              </p>
            </div>
          </div>
          <div css={StepStyles}>
            <div css={StepTitleStyles}>기획</div>
            <div css={StepTextStyles}>
              <p>
                2014
                <br />
                ㈜피티원프레젠테이션그룹 통합 출범 PT1 /
                KAIROS Partners / GoodPello
              </p>
              <p>
                2013
                <br />
                전문 프레젠테이션 콘텐츠 사이트 오픈
                www.goodpello.com
              </p>
              <p>
                2012
                <br />
                콘텐츠사업부 신설 (現 Good Pello)
              </p>
            </div>
          </div>
          <div css={StepStyles}>
            <div css={StepTitleStyles}>디자인</div>
            <div css={StepTextStyles}>
              <p>
                2011
                <br />
                프레젠테이션 컨설팅 서비스 개시본사 이전 前
                서울 강남 소재 → 現 서울 가산디지털단지 소재
              </p>
              <p>
                2010
                <br />
                기업부설 연구소 설립 한국산업기술진흥협회 제
                2010111151호
              </p>
              <p>
                2009
                <br />
                프레젠테이션 부서 개편 제작 본부 / 기획 본부
                / 교육 본부프레젠테이션 교육 서비스 개시
              </p>
            </div>
          </div>
          <div css={StepStyles}>
            <div css={StepTitleStyles}>개발</div>
            <div css={StepTextStyles}>
              <p>
                2008
                <br />
                디자인 전문회사 등록 한국디자인진흥원 제
                1253호
              </p>
              <p>
                2006
                <br />
                ㈜피티원 법인 전환
              </p>
              <p>
                2005
                <br />
                피티원 설립, 프레젠테이션 제작 서비스 개시
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProjectIntroductionContentsStyles = css`
  word-break: keep-all;
  & > div {
    margin-bottom: 100px;
  }
`;

const OutlineStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  & > * {
    flex: 1 1;
    padding: 50px;
  }
`;

const OutlineLogoStyles = css`
  max-width: 550px;
  min-width: 500px;
`;

const OutlineContentStyles = css`
  min-width: 500px;
  max-width: 550px;

  ${mq.pcSmall} {
    border-left: 1px solid ${theme.palette.greyScale.grey1};
  }
`;

const OutlineTitleStyles = css`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${theme.palette.primaryScale.primary};
  margin-bottom: 30px;

  span {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: ${theme.palette.primaryScale.primaryDark};
  }
`;

const OutlineTextStyles = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    font-size: 18px;
    color: ${theme.palette.primaryScale.primaryDark};
  }
`;

const ProjectStepsTitleStyles = css`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 100px;
`;

const ProjectStepsStyles = css`
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const StepStyles = css`
  display: flex;
  justify-content: space-around;
  align-items: start;
`;

const StepTitleStyles = css`
  width: 100px;
  flex-grow: 1;
  text-align: start;

  font-size: 50px;
`;

const StepTextStyles = css`
  padding-top: 10px;
  width: 1px;
  flex-grow: 4;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export default ProjectIntroductionContents;
