import styled from 'styled-components';
import { yellow, white } from '../ui/colors';

import React from 'react'

const inputSelect = ({ list, selected, width, onValueSelected }) => {
    return (
      <Select
        onChange={e => onValueSelected(e.target.value)}
        width={width}
        defaultValue={selected}
      >
        {list.map(li => (
          <option key={li} value={li}>
            {li}
          </option>
        ))}
      </Select>
    );
}

const Select = styled.select`
    background: ${yellow};
    color: ${white};
    border: none;
    padding: 20px;
    text-transform: uppercase;
    width: ${props => props.width};
`

export default inputSelect;