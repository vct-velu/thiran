import React, { memo } from 'react';

interface LogoDarkIconProps {
  className?: string;
}
const LogoDarkIcon: React.FC<LogoDarkIconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="120"
    height="16"
    viewBox="0 0 120 16"
    fill="none"
  >
    <path
      d="M107 11.8327C106.47 12.5574 105.871 13.0825 104.468 13.0825C102.994 13.0825 101.677 12.1504 101.587 10.4635H110.73V9.80681C110.73 5.75713 108.209 3.03796 104.462 3.03796C100.771 3.03796 97.9883 5.81739 97.9883 9.50389C97.9883 13.3271 100.792 15.9851 104.467 15.9999C108.114 16.0154 109.842 13.9366 110.621 11.8307L107 11.8327ZM104.458 5.83291C106.2 5.83291 107.276 6.88028 107.42 8.06845H101.551C101.708 6.92948 102.872 5.83291 104.458 5.83291Z"
      fill="#011B31"
    />
    <path
      d="M93.2269 11.8327C92.6982 12.5574 92.1001 13.0825 90.6959 13.0825C89.2207 13.0825 87.9039 12.1504 87.8148 10.4635H96.9569V9.80681C96.9569 5.75713 94.4383 3.03796 90.6881 3.03796C86.9992 3.03796 84.2168 5.81739 84.2168 9.50389C84.2168 13.3271 87.0208 15.9851 90.6952 15.9999C94.343 16.0154 96.0703 13.9366 96.8495 11.8307L93.2269 11.8327ZM90.6851 5.83291C92.4266 5.83291 93.5043 6.88028 93.6467 8.06845H87.7791C87.9356 6.92948 89.1005 5.83291 90.6851 5.83291Z"
      fill="#011B31"
    />
    <path
      d="M22.7394 11.8327C22.2079 12.5574 21.6111 13.0825 20.2073 13.0825C18.7345 13.0825 17.414 12.1504 17.3258 10.4635H26.4687V9.80681C26.4687 5.75713 23.95 3.03796 20.1999 3.03796C16.5096 3.03796 13.7285 5.81739 13.7285 9.50389C13.7285 13.3271 16.5305 15.9851 20.2053 15.9999C23.8535 16.0154 25.5817 13.9366 26.3586 11.8307L22.7394 11.8327ZM20.1972 5.83291C21.9383 5.83291 23.0157 6.88028 23.1574 8.06845H17.2905C17.4477 6.92948 18.6099 5.83291 20.1972 5.83291Z"
      fill="#011B31"
    />
    <path
      d="M3.85588 4.76157V3.32839H0.435547V15.6822H3.85588V7.4057C4.19886 6.98201 5.11708 6.04999 6.57513 6.04999C8.06445 6.04999 8.75915 6.74339 8.75915 8.23166V15.6822H12.2061V6.99615C12.2061 4.43611 10.7413 3.02515 8.08125 3.02515C6.18667 3.02515 4.69129 3.89489 3.85588 4.76157Z"
      fill="#011B31"
    />
    <path
      d="M45.8036 0H42.3832V3.32841H40.3398V6.30146H42.3832V12.5436C42.3832 14.794 43.6158 15.9841 45.9446 15.9841C47.4791 15.9841 48.2959 15.5476 48.7113 15.1817L48.7526 15.1447L48.0034 12.4898L47.8957 12.6116C47.7463 12.7802 47.3249 12.9593 46.8395 12.9593C46.2095 12.9593 45.8036 12.4598 45.8036 11.686V6.30146H48.3066V3.32841H45.8036V0Z"
      fill="#011B31"
    />
    <path
      d="M55.3975 6.94598C55.3975 9.93043 58.2227 10.4905 60.2867 10.9014C61.634 11.1697 62.7023 11.3807 62.7023 12.0888C62.7023 12.8512 61.9793 13.2878 60.7218 13.2878C59.1521 13.2878 57.385 12.4292 56.5183 11.6217L56.4375 11.5473L54.9395 14.0225L54.9932 14.0699C56.3099 15.2689 58.3944 15.9841 60.5693 15.9841C63.8803 15.9841 66.0199 14.4254 66.0199 12.0142C66.0199 8.87627 63.0913 8.29499 60.9534 7.87025C59.6905 7.61943 58.6919 7.42153 58.6919 6.81973C58.6919 6.1739 59.453 5.72219 60.5441 5.72219C62.0843 5.72219 63.4552 6.41785 64.1313 7.10754L64.2138 7.19131L65.6119 4.75518L65.5518 4.70841C64.1428 3.6078 62.4121 3.02515 60.5441 3.02515C57.0084 3.02515 55.3975 5.05705 55.3975 6.94598Z"
      fill="#011B31"
    />
    <path
      d="M71.9516 0H68.5303V3.32841H66.4883V6.30146H68.5303V12.5436C68.5303 14.794 69.7625 15.9841 72.093 15.9841C73.6265 15.9841 74.444 15.5476 74.859 15.1817L74.8994 15.1447L74.1515 12.4898L74.0437 12.6116C73.8933 12.7802 73.4726 12.9593 72.9872 12.9593C72.3579 12.9593 71.9516 12.4598 71.9516 11.686V6.30146H74.4544V3.32841H71.9516V0Z"
      fill="#011B31"
    />
    <path
      d="M83.7627 3.02515C82.408 3.02515 80.9308 3.74343 79.9177 4.84945V3.32839H76.498V15.6822H79.9177V7.58478C80.4205 6.87328 81.7884 6.25266 82.8681 6.25266C83.235 6.25266 83.5144 6.27584 83.7436 6.32568L83.8492 6.34887V3.02515H83.7627Z"
      fill="#011B31"
    />
    <path
      d="M116.616 0H113.198V3.32841H111.154V6.30146H113.198V12.5436C113.198 14.794 114.429 15.9841 116.759 15.9841C118.291 15.9841 119.11 15.5476 119.524 15.1817L119.565 15.1447L118.815 12.4898L118.709 12.6116C118.559 12.7802 118.14 12.9593 117.652 12.9593C117.024 12.9593 116.616 12.4598 116.616 11.686V6.30146H119.121V3.32841H116.616V0Z"
      fill="#011B31"
    />
    <path d="M30.3811 3.2948H26.3105L30.1933 8.44541L32.2286 5.74781L30.3811 3.2948Z" fill="#FAB019" />
    <path d="M33.7715 13.1787L35.6422 15.663H39.7131L35.8068 10.4807L33.7715 13.1787Z" fill="#FAB019" />
    <path
      d="M39.7124 3.2948H35.6415L33.0115 6.78104L30.9762 9.47873L26.3105 15.663H30.3811L33.0115 12.1767L35.0468 9.47873L39.7124 3.2948Z"
      fill="#FAB019"
    />
  </svg>
);

export default memo(LogoDarkIcon);
