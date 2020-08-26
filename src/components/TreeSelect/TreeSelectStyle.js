import styled from 'styled-components';
import {Color}  from '../ThemeProvider/ThemeStyle'

export const TreeItem = styled.li`
  height: 36px;
  display: flex;
  align-items: center;
  transform: translateX(-20px);
  user-select: none;

  :focus {
    outline: none;
  }

  .ts-item-expander {
    min-width: 35px;
    min-height: 35px;
    line-height: 35px;
    text-align: center;
    border-radius: 50%;
    margin-right: 5px;
  }

  .ts-item-label {
  
    background-color: ${props => (props.selected ? Color.bgColor : Color.bgColorPaper)};
    font-weight: ${props => (props.selected ? '600' : 'normal')};
    color: ${props => props.unSelectable ? 'gray' : 'inherit'};
    padding: 0 15px;
    width: calc(100% - 40px);
    height: 100%;
    line-height: 35px;
    cursor: pointer;
    :hover {
      background-color: ${props => (props.selected ?  Color.bgColorPaper :  Color.bgColor)};
    }
  }
`;
