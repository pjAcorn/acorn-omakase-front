import styled from 'styled-components';

const UpIcon = () => {
  return (
    <StyledUpIcon className='UpIcon'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        viewBox='0 0 16 16'
      >
        <path
          // fill-rule='evenodd'
          d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'
        />
      </svg>
    </StyledUpIcon>
  );
};

const StyledUpIcon = styled.span`
  position: relative;
  svg {
    color: grey;
    width: 17px;
    height: 17px;
    cursor: pointer;
  }
`;
export default UpIcon;