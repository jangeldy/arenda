import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Color } from './ThemeProvider/ThemeStyle';

function gmColor(type) {
  if (Color.isDark) {
    return type === 'warning' ? '#8a6000' : '#a0271b';
  } else {
    return type === 'warning' ? '#ffc031' : '#ff857a';
  }
}

const Message = styled.div`
  background-color: ${props => gmColor(props.type)};
  position: fixed;
  top: 64px;
  width: 100%;
  padding: 10px 15px;
  z-index: 1000;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

/**
 * @return {null}
 */
function GlobalMessage() {
  const { i18n } = useTranslation();

  if (window.globalMessage) {
    return (
      <Message type={window.globalMessage.type}>
        {window.globalMessage[i18n.language]}
      </Message>
    );
  }

  return null;
}

export default GlobalMessage;
