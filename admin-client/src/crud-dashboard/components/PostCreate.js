import * as React from "react";
import { useNavigate } from "react-router";
import useNotifications from "../hooks/useNotifications/useNotifications";
import {
  createOne as createPost,
  validate as validatePost,
} from "../data/posts";
import PostForm from "./PostForm";
import PageContainer from "./PageContainer";
import TextEditor from "./TextEditor";
import { setContent } from "@tiptap/core";
import { useUser } from "../../utils/Auth";

const INITIAL_FORM_VALUES = {
  title: "Default Title",
  description: "Default description",
  createdAt: Date.now(),
  tag: "Misc",
  isPublished: false,
  content: "",
};

export default function PostCreate() {
  const navigate = useNavigate();
  const { user } = useUser();

  const notifications = useNotifications();

  const [contentState, setContentState] = React.useState("");

  const [formState, setFormState] = React.useState(() => ({
    values: INITIAL_FORM_VALUES,
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
    setFormValues(INITIAL_FORM_VALUES);
  }, [setFormValues]);

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
      await createPost(formValues, user);
      notifications.show("Post created successfully.", {
        severity: "success",
        autoHideDuration: 3000,
      });

      navigate("/posts");
    } catch (createError) {
      notifications.show(
        `Failed to create post. Reason: ${createError.message}`,
        {
          severity: "error",
          autoHideDuration: 3000,
        }
      );
      throw createError;
    }
  }, [formValues, navigate, notifications, setFormErrors]);

  const updatePostState = (content) => {
    handleFormFieldChange("content", content);
  };

  React.useEffect(() => {
    console.log(contentState);
  }, [contentState, setContentState]);

  return (
    <>
      <PageContainer
        title="New Post"
        breadcrumbs={[{ title: "Posts", path: "/posts" }, { title: "New" }]}
      >
        <PostForm
          formState={formState}
          onFieldChange={handleFormFieldChange}
          onSubmit={handleFormSubmit}
          onReset={handleFormReset}
          submitButtonLabel="Create"
          postState={contentState}
          updatePostState={updatePostState}
        ></PostForm>
      </PageContainer>
    </>
  );
}
