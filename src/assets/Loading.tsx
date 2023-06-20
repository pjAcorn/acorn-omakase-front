import styled from 'styled-components';

const Loading = () => {
  return (
    <StyleLoading className='Loading'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        width='200px'
        height='200px'
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid'
      >
        <circle
          cx='50'
          cy='50'
          r='32'
          strokeWidth='8'
          stroke='#00c7af'
          strokeDasharray='50.26548245743669 50.26548245743669'
          fill='none'
          strokeLinecap='round'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            repeatCount='indefinite'
            dur='1s'
            keyTimes='0;1'
            values='0 50 50;360 50 50'
          />
        </circle>
      </svg>
    </StyleLoading>
  );
};

const StyleLoading = styled.span`
  position: relative;
  svg {
    width: 60px;
    height: 60px;
    cursor: pointer;
  }
`;
export default Loading;