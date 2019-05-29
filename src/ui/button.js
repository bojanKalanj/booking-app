import styled from 'styled-components';
import {pink, gray} from './colors';

export const ButtonDefault = styled.button`
    
`;

export const ButtonGray = styled.button`
    border: none;
    background: ${gray};
    padding: 10px;
    color: ${pink};
    width: ${props => props.width};
    ${props => props.margin()};
`;