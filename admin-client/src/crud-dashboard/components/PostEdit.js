import * as React from "react";
import { useUser } from "../../utils/Auth";
import PropTypes from "prop-types";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate, useParams } from "react-router";
import useNotifications from "../hooks/useNotifications/useNotifications";
import {
  getOne as getPost,
  updateOne as updatePost,
  validate as validatePost,
} from "../data/posts";
import PostForm from "./PostForm";
import PageContainer from "./PageContainer";

function PostEditForm({ initialValues, onSubmit }) {
  const { postId } = useParams();
  const navigate = useNavigate();

  const notifications = useNotifications();

  const [formState, setFormState] = React.useState(() => ({
    values: initialValues,
    errors: {},
  }));
  const formValues = formState.values;
  const formErrors = formState.errors;

  const setFormValues = React.useCallback((newFormValues) => {
    setFormState((previousState) => ({
      ...previousState,
      values: newFormValues,
    }));
  }, []);

  const setFormErrors = React.useCallback((newFormErrors) => {
    setFormState((previousState) => ({
      ...previousState,
      errors: newFormErrors,
    }));
  }, []);

  const handleFormFieldChange = React.useCallback(
    (name, value) => {
      const validateField = async (values) => {
        const { issues } = validatePost(values);
        setFormErrors({
          ...formErrors,
          [name]: issues?.find((issue) => issue.path?.[0] === name)?.message,
        });
      };

      const newFormValues = { ...formValues, [name]: value };

      setFormValues(newFormValues);
      validateField(newFormValues);
    },
    [formValues, formErrors, setFormErrors, setFormValues]
  );

  const handleFormReset = React.useCallback(() => {
    setFormValues(initialValues);
  }, [initialValues, setFormValues]);

  const handleFormSubmit = React.useCallback(async () => {
    const { issues } = validatePost(formValues);
    if (issues && issues.length > 0) {
      setFormErrors(
        Object.fromEntries(
          issues.map((issue) => [issue.path?.[0], issue.message])
        )
      );
      return;
    }
    setFormErrors({});

    try {
      console.log("Trying to submit form on postedit export...");
      await onSubmit(formValues);
      notifications.show("Post edited successfully.", {
        severity: "success",
        autoHideDuration: 3000,
      });

      navigate("/posts");
    } catch (editError) {
      notifications.show(`Failed to edit post. Reason: ${editError.message}`, {
        severity: "error",
        autoHideDuration: 3000,
      });
      throw editError;
    }
  }, [formValues, navigate, notifications, onSubmit, setFormErrors]);

  const updatePostState = (content) => {
    handleFormFieldChange("content", content);
  };

  return (
    <PostForm
      formState={formState}
      onFieldChange={handleFormFieldChange}
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
      updatePostState={updatePostState}
      postState={formState.values.content}
      submitButtonLabel="Save"
      backButtonPath={`/posts/${postId}`}
    />
  );
}

PostEditForm.propTypes = {
  initialValues: PropTypes.shape({
    description: PropTypes.string,
    isPublished: PropTypes.bool,
    title: PropTypes.string,
    tag: PropTypes.oneOf(["Educational", "Personal", "Misc"]),
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default function PostEdit() {
  const { postId } = useParams();
  const { user } = useUser();

  const [post, setPost] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const loadData = React.useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try {
      const showData = await getPost(postId, user);

      setPost(showData);
    } catch (showDataError) {
      setError(showDataError);
    }
    setIsLoading(false);
  }, [postId, user]);

  React.useEffect(() => {
    loadData();
  }, [loadData]);

  const handleSubmit = React.useCallback(
    async (formValues) => {
      console.log("Handle submit called");
      const updatedData = await updatePost(postId, formValues);
      setPost(updatedData);
    },
    [postId]
  );

  const renderEdit = React.useMemo(() => {
    if (isLoading) {
      return (
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            m: 1,
          }}
        >
          <CircularProgress />
        </Box>
      );
    }
    if (error) {
      return (
        <Box sx={{ flexGrow: 1 }}>
          <Alert severity="error">{error.message}</Alert>
        </Box>
      );
    }

    return post ? (
      <PostEditForm initialValues={post} onSubmit={handleSubmit} />
    ) : null;
  }, [isLoading, error, post, handleSubmit]);

  return (
    <PageContainer
      title={`Edit Post ${postId}`}
      breadcrumbs={[
        { title: "Posts", path: "/posts" },
        { title: `Post ${postId}`, path: `/posts/${postId}` },
        { title: "Edit" },
      ]}
    >
      <Box sx={{ display: "flex", flex: 1 }}>{renderEdit}</Box>
    </PageContainer>
  );
}
