import styled from 'styled-components';

const ListIcon = () => {
    return (
        <StyledListIcon className='ListIcon'>
            <svg         
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                fill='currentColor'
                viewBox='0 0 16 16'
            >
                <path
                    fillRule='evenodd'
                    d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                />
            </svg>
        </StyledListIcon>
    );
};

const StyledListIcon = styled.span`
  position: relative;
  svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
export default ListIcon;