import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    background-color: ${props => (props.disabled ? '#fff' : '#81259D')};
    color: ${props => (props.disabled ? '#81259D' : '#fff')};

    &:hover {
        opacity: ${props => (props.disabled ? 1 : 0.6)};
        cursor: ${props => (props.disabled ? 'not-allowed' : 'hand')};
    }
`