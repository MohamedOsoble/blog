import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";
import TextEditor from "./mui-editor/App";
import dayjs from "dayjs";
import "dayjs/locale/en-gb";

function PostForm(props) {
  const {
    formState,
    onFieldChange,
    onSubmit,
    onReset,
    submitButtonLabel,
    backButtonPath,
    updatePostState,
  } = props;

  const formValues = formState.values;
  const formErrors = formState.errors;
  const [currentVal, setCurrentVal] = React.useState();

  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = React.useCallback(
    async (event) => {
      event.preventDefault();
      setIsSubmitting(true);
      console.log("Submitting the form on PostForm");
      try {
        await onSubmit(formValues);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formValues, onSubmit]
  );

  const [formData, setFormData] = React.useState({});

  const handleTextFieldChange = React.useCallback(
    (event) => {
      onFieldChange(event.target.name, event.target.value);
    },
    [onFieldChange]
  );

  const handleCheckboxFieldChange = React.useCallback(
    (event, checked) => {
      onFieldChange(event.target.name, checked);
    },
    [onFieldChange]
  );

  const handleDateFieldChange = React.useCallback(
    (fieldName) => (value) => {
      if (value?.isValid()) {
        onFieldChange(fieldName, value.toISOString() ?? null);
      } else if (formValues[fieldName]) {
        onFieldChange(fieldName, null);
      }
    },
    [formValues, onFieldChange]
  );

  const handleSelectFieldChange = React.useCallback(
    (event) => {
      onFieldChange(event.target.name, event.target.value);
    },
    [onFieldChange]
  );

  const handleReset = React.useCallback(() => {
    if (onReset) {
      onReset(formValues);
    }
  }, [formValues, onReset]);

  const handleBack = React.useCallback(() => {
    navigate(backButtonPath ?? "/employees");
  }, [navigate, backButtonPath]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      onReset={handleReset}
      sx={{ width: "100%" }}
    >
      <FormGroup>
        <Grid container spacing={2} sx={{ mb: 2, width: "100%" }}>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex" }}>
            <TextField
              value={formValues.title ?? ""}
              onChange={handleTextFieldChange}
              name="title"
              label="Post Title"
              error={!!formErrors.title}
              helperText={formErrors.title ?? " "}
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex" }}>
            <TextField
              value={formValues.description ?? ""}
              onChange={handleTextFieldChange}
              name="description"
              label="Post Description"
              error={!!formErrors.description}
              helperText={formErrors.description ?? " "}
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex" }}>
            <LocalizationProvider
              adapterLocale="en-gb"
              dateAdapter={AdapterDayjs}
            >
              <DatePicker
                value={
                  formValues.createdAt ? dayjs(formValues.createdAt) : null
                }
                onChange={handleDateFieldChange("createdAt")}
                name="createdAt"
                label="Post created on: "
                slotProps={{
                  textField: {
                    error: !!formErrors.createdAt,
                    helperText: formErrors.createdAt ?? " ",
                    fullWidth: true,
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex" }}>
            <FormControl error={!!formErrors.role} fullWidth>
              <InputLabel id="tag-label">Post tag</InputLabel>
              <Select
                value={formValues.tag ?? ""}
                onChange={handleSelectFieldChange}
                labelId="tag-label"
                name="tag"
                label="Tag"
                defaultValue="Misc"
                fullWidth
              >
                <MenuItem value="Educational">Educational</MenuItem>
                <MenuItem value="Personal">Personal</MenuItem>
                <MenuItem value="Misc">Misc</MenuItem>
              </Select>
              <FormHelperText>{formErrors.tag ?? " "}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex" }}>
            <FormControl>
              <FormControlLabel
                name="isPublished"
                control={
                  <Checkbox
                    size="large"
                    checked={formValues.isPublished ?? false}
                    onChange={handleCheckboxFieldChange}
                  />
                }
                label="Published Post"
              />
              <FormHelperText error={!!formErrors.isPublished}>
                {formErrors.isPublished ?? " "}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </FormGroup>
      <TextEditor
        updateContent={updatePostState}
        content={formState.values.content ? formState.values.content : null}
      />
      <Typography variant="overline" sx={{ mb: 2 }}>
        Remember to save the text editor before submitting!
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          size="large"
          loading={isSubmitting}
        >
          {submitButtonLabel}
        </Button>
      </Stack>
    </Box>
  );
}

PostForm.propTypes = {
  backButtonPath: PropTypes.string,
  formState: PropTypes.shape({
    errors: PropTypes.shape({
      description: PropTypes.string,
      isPublished: PropTypes.string,
      createdAt: PropTypes.string,
      title: PropTypes.string,
      tag: PropTypes.string,
    }).isRequired,
    values: PropTypes.shape({
      description: PropTypes.string,
      isPublished: PropTypes.bool,
      title: PropTypes.string,
      tag: PropTypes.oneOf(["Educational", "Personal", "Misc"]),
    }).isRequired,
  }).isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onReset: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  submitButtonLabel: PropTypes.string.isRequired,
};

export default PostForm;
