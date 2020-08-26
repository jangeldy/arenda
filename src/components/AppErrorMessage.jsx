import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Paper from '@material-ui/core/Paper';

const ErrorMessage = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;

  .message {
    font-size: 18px;
    width: 650px;
  }
`;

function AppErrorMessage({ children }) {
  const { i18n } = useTranslation();
  if (window.appErrorMessage) {
    return (
      <ErrorMessage className="bg-color">
        <Paper className="p3 message color-secondary">
          {window.appErrorMessage[i18n.language]}
        </Paper>
      </ErrorMessage>
    );
  } else return children;
}

export default AppErrorMessage;
