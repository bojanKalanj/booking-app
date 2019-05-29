import styled from 'styled-components';

export const Card = styled.div`
    width: ${props => props.width};
    background: #fff;
    padding: 10px;
    float: left;
    ${props => props.margin()}
`;