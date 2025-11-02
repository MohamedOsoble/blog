import * as React from "react";
import PropTypes from "prop-types";
import { DialogsProvider, useDialogs } from "@toolpad/core/useDialogs";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { FormContext, useFormContext } from "./EditFormContext";
import { updateComment } from "../../utils/Api";

function EditCommentDialog({ open, onClose }) {
  const [loading, setLoading] = React.useState(false);
  const { formData, setFormData, loadData } = useFormContext();

  return (
    <Dialog fullWidth open={open} onClose={() => onClose(null)}>
      <DialogTitle>Update Comment</DialogTitle>
      <DialogContent>
        <Stack spacing={2} padding={1}>
          <TextField
            label="Name"
            value={formData.name}
            onChange={(event) =>
              setFormData({ ...formData, name: event.target.value })
            }
            placeholder="Mohamed"
          />
          <TextField
            label="Comment"
            value={formData.content}
            onChange={(event) =>
              setFormData({ ...formData, content: event.target.value })
            }
            placeholder="Great post!"
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          loading={loading}
          onClick={async () => {
            setLoading(true);
            try {
              const response = await updateComment(formData);
              onClose(response);
            } finally {
              loadData();
              setLoading(false);
            }
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

EditCommentDialog.propTypes = {
  /**
   * A function to call when the dialog should be closed. If the dialog has a return
   * value, it should be passed as an argument to this function. You should use the promise
   * that is returned to show a loading state while the dialog is performing async actions
   * on close.
   * @param result The result to return from the dialog.
   * @returns A promise that resolves when the dialog can be fully closed.
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Whether the dialog is open.
   */
  open: PropTypes.bool.isRequired,
  /**
   * The payload that was passed when the dialog was opened.
   */
  payload: PropTypes.shape({
    component: PropTypes.node,
    data: PropTypes.string.isRequired,
  }).isRequired,
};

function EditCommentButton({ loadData }) {
  const dialogs = useDialogs();

  return (
    <Stack spacing={2}>
      <Button
        onClick={async () => {
          // preview-start
          const response = await dialogs.open(EditCommentDialog);
          // preview-end
          if (response) {
            dialogs.alert(`The comment was successfully updated`, {
              title: "Success",
            });
          }
        }}
      >
        Edit
      </Button>
    </Stack>
  );
}

export default function CustomDialogWithPayloadAdvanced({ comment, loadData }) {
  const [formData, setFormData] = React.useState(comment);
  const contextValue = React.useMemo(
    () => ({ formData, setFormData, loadData }),
    [formData, loadData]
  );

  return (
    <FormContext.Provider value={contextValue}>
      <DialogsProvider>
        <EditCommentButton />
      </DialogsProvider>
    </FormContext.Provider>
  );
}
