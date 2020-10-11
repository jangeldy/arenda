import React, { useState } from 'react';
import Dialog from '../../../components/Dialog';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';

function OtherFilters(props) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="outlined"
        style={{ marginLeft: 10 }}
        children={t('filter_other')}
        onClick={() => setOpen(true)}
      />
      <Dialog
        open={open}
        handleClose={() => setOpen(false)}
        title={'Filters'}
        content={
          <>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus
              ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
              ac, vestibulum at eros.
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
              sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla.
            </Typography>
          </>
        }
      />
    </>
  );
}

export default OtherFilters;
