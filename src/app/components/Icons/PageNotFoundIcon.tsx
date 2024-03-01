import React, { memo } from 'react';

interface PageNotFoundIconProps {
  className?: string;
}
const PageNotFoundIcon: React.FC<PageNotFoundIconProps> = ({ className }) => (
  <svg
    className={className}
    width="978"
    height="370"
    viewBox="0 0 978 370"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      d="M0 298.802H171.166V361.487H243.255V298.802H287.483V238.38H243.255V4.87646H148.878L0 239.424V298.802ZM172.56 238.38H75.9191V235.594L169.773 87.0641H172.56V238.38Z"
      fill="#A7A9AC"
    />
    <path
      opacity="0.2"
      d="M487.35 369.322C577.024 369.322 631.178 301.064 631.352 183.529C631.525 66.8646 576.676 0 487.35 0C397.849 0 343.521 66.6904 343.347 183.529C342.999 300.717 397.5 369.148 487.35 369.322ZM487.35 306.811C446.43 306.811 419.962 265.717 420.137 183.529C420.311 102.56 446.604 61.8149 487.35 61.8149C527.92 61.8149 554.388 102.56 554.388 183.529C554.562 265.717 528.095 306.811 487.35 306.811Z"
      fill="#A7A9AC"
    />
    <path
      opacity="0.2"
      d="M689.52 298.802H860.686V361.487H932.775V298.802H977.002V238.38H932.775V4.87646H838.398L689.52 239.424V298.802ZM862.079 238.38H765.439V235.594L859.293 87.0641H862.079V238.38Z"
      fill="#A7A9AC"
    />
  </svg>
);

export default memo(PageNotFoundIcon);
