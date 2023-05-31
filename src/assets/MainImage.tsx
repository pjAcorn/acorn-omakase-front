import styled from 'styled-components';

interface SymbolProps {
    width?: string;
    height?: string;
    $filter?: boolean;
}

const MainImage = ({ width, height, $filter }: SymbolProps) => {
    return (
      <StyledLogo className='MainImage' $filter={$filter}>
        <img
          src={`${process.env.PUBLIC_URL}/images/etc/main-image.png`}
          width={width}
          height={height}
          alt='이미지'
        />
      </StyledLogo>
    );
  };
  
  MainImage.defaultProps = {
    width: '100%',
    height: '100%',
  };
  
  const StyledLogo = styled.div<SymbolProps>`
    cursor: pointer;
    ${(props) => (props.$filter ? 'none' : 'background-color: rgb(255, 255, 255)')};
    img {
      ${(props) => (props.$filter ? 'none' : 'background-color: rgb(255, 255, 255)')};
      filter: ${(props) => (props.$filter ? 'grayscale(100%)' : 'none')};
    }
  `;
  export default MainImage;