const breakpoints = [480, 768, 1024, 1280];

// 기본 사이즈 : small view (280 ~ 360)
const mq = {
  mobile: `@media (min-width: ${breakpoints[0]}px)`, // ~ 767
  tablet: `@media (min-width: ${breakpoints[1]}px)`, // 768 ~ 1023
  pcSmall: `@media (min-width: ${breakpoints[2]}px)`, // 1024 ~ 1279
  pcLarge: `@media (min-width: ${breakpoints[3]}px)`, // 1280 ~
};

export default mq;
