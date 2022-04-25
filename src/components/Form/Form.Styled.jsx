import styled from '@emotion/styled';

export const SearchCard = styled.input`
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
export const Lable = styled.label`
font-size: 26px;
color: cadetblue;
}`;

export const Button = styled.button`
color: white;
background-color: olivedrab;
margin: 11px;
padding: 5px 20px;
border-color: white;
border-style: dashed;
font: italic 1.2em "Fira Sans", serif;
border-radius: 25px;
  }
`;
