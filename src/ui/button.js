import styled from 'styled-components';
import {pink} from './colors';

export const ButtonDefault = styled.button`
    
`;

export const ButtonPink = styled.button`
    border: 1px solid ${pink};
    background: none;
    padding: 10px;
    color: ${pink};
    width: ${props => props.width};
    ${props => props.margin()};
`;