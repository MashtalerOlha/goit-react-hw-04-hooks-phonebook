import styled from '@emotion/styled';

export const FilterLable = styled.label`
font-size: 26px;
color: cadetblue;
margin-right: 8px;
}`;

export const FilterField = styled.input`
  margin: 11px;
  border-color: cadetblue;
  border-style: dashed;
  border-radius: 50px;
  color: cadetblue;
  font: italic 0.8em 'Fira Sans', serif;

  &:focus {
    outline: none !important;
    border-color: cadetblue;
    box-shadow: 0 0 10px cadetblue;
    color: cadetblue;
    font: italic 0.8em 'Fira Sans', serif;
  }
`;
