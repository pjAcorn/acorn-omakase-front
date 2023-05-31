import styled from 'styled-components';

const TextLogo = () => {
  return (
    <StyledLogo className='TextLogo'>
      <img src={`${process.env.PUBLIC_URL}/images/logo/symbol-text-logo.png`} alt='이미지' />
    </StyledLogo>
  );
};

export const StyledLogo = styled.div`
  cursor: pointer;
  img {
    width: 108px;
    height: 80px;
  }
`;
export default TextLogo;