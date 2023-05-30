import styled from 'styled-components';

interface SymbolProps {
    width?: string;
    height?: string;
    $filter?: boolean;
}

const SymbolTextLogo = ({ width, height, $filter }: SymbolProps) => {
    return (
      <StyledLogo className='SymbolTextLogo' $filter={$filter}>
        <img
          src={`${process.env.PUBLIC_URL}/images/logo/symbol-text-logo.png`}
          width={width}
          height={height}
          alt='이미지'
        />
      </StyledLogo>
    );
  };
  
  SymbolTextLogo.defaultProps = {
    width: '350px',
    height: '80px',
  };
  
  const StyledLogo = styled.div<SymbolProps>`
    cursor: pointer;
    ${(props) => (props.$filter ? 'none' : 'background-color: #fafafa')};
    img {
      ${(props) => (props.$filter ? 'none' : 'background-color: #fafafa')};
      filter: ${(props) => (props.$filter ? 'grayscale(100%)' : 'none')};
    }
  `;
  export default SymbolTextLogo;