import Notice from './Notice';

export function handleError(error, message = '', errorInMessage = true, type = 'error') {
  let errorMsg = error.message;
  if (error && error.request) {
    errorMsg = `
      STATUS: ${error.request.status},
      STATUS_TEXT: ${error.request.statusText}
      METHOD: ${error.config.method},
      URL: ${error.config.url}
      ${
        error.config.data && !error.config.url.includes('/login')
          ? `REQUEST_BODY:  ${error.config.data} \n`
          : ''
      }
    `;
    if (error.data && error.data.results instanceof Array) {
      errorMsg += `RESPONSE_BODY: ${JSON.stringify(
        error.data.results.filter(item => item.status !== 'OK')
      )}`;
    } else {
      errorMsg += `RESPONSE_BODY: ${JSON.stringify(error.data)}`;
    }
  }

  if (error && error.response) {
    errorMsg = `
      STATUS: ${error.response.status}, 
      STATUS_TEXT: ${error.response.statusText}
      METHOD: ${error.response.config.method}, 
      URL: ${error.response.config.url}
      ${
        error.response.config.data && !error.response.config.url.includes('/login')
          ? `REQUEST_BODY:  ${error.response.config.data} \n`
          : ''
      } 
    `;
    if (error.response.data) {
      errorMsg += `RESPONSE_BODY: ${JSON.stringify(error.response.data)}`;
    } else {
      errorMsg += `RESPONSE_BODY: ${JSON.stringify(error.response)}`;
    }
  }

  console.error(message, errorMsg);

  if (message) {
    message += '\n';
    Notice[type](`${message}${errorInMessage ? errorMsg : ''}`);
  }
  return `${message}${errorMsg}`;
}
