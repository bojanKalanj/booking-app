import styled from 'styled-components';
import {pink} from './colors';

export const ButtonDefault = styled.button`
    
`;

export const ButtonPink = styled.button`
    border: 1px solid ${pink};
    background: none;
    padding: 10px;
    color: ${pink};
    ${props => props.margin()};
`;