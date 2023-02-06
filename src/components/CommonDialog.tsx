import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { type FC } from 'react';

type CommonDialogProps = Readonly<{
  message: string,
  onCancel: () => void,
  onConfirm: () => void,
  open: boolean,
  cancelButtonText?: string,
  confirmButtonText?: string
}>;

const CommonDialog: FC<CommonDialogProps> = ({
  message,
  onCancel,
  onConfirm,
  open,
  cancelButtonText = 'やめておきます',
  confirmButtonText = 'はい'
}) => (
  <Box>
    <Dialog
      open={open}
      keepMounted
      onClose={() => onCancel()}
    >
      <DialogContent>{message}</DialogContent>
      <DialogActions>
        <Button onClick={() => onCancel()}>{cancelButtonText}</Button>
        <Button variant='contained' onClick={() => onConfirm()}>{confirmButtonText}</Button>
      </DialogActions>
    </Dialog>
  </Box>
);

export default CommonDialog;
export { type CommonDialogProps };
